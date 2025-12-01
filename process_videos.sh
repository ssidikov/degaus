#!/usr/bin/env bash
set -euo pipefail

# Usage:
#   ./process_videos.sh [INPUT_DIR] [POSTERS_DIR] [PREVIEWS_DIR]
#
# Defaults:
#   INPUT_DIR   = ./videos
#   POSTERS_DIR = ./posters
#   PREVIEWS_DIR= ./previews

INPUT_DIR="${1:-./videos}"
POSTERS_DIR="${2:-./posters}"
PREVIEWS_DIR="${3:-./previews}"

# Basic parameters you can tweak
POSTER_TIME_SECONDS="1"      # where to grab the poster frame
POSTER_WIDTH="960"           # width for poster (height auto)
PREVIEW_DURATION_SECONDS="3" # length of preview clips
PREVIEW_WIDTH="960"          # width for previews
PREVIEW_BITRATE="1M"         # ~target bitrate for VP9 previews

# Make sure output directories exist
mkdir -p "$POSTERS_DIR" "$PREVIEWS_DIR"

# Let globs that match nothing expand to nothing (no literal *.mp4)
shopt -s nullglob

# Loop over supported extensions
for f in "$INPUT_DIR"/*.{mp4,mov,webm}; do
  # If no files matched, skip gracefully
  [ -e "$f" ] || continue

  filename="$(basename "$f")"
  base="${filename%.*}"

  poster_path="$POSTERS_DIR/$base.webp"
  preview_webm_path="$PREVIEWS_DIR/$base.webm"
  preview_mp4_path="$PREVIEWS_DIR/$base.mp4"

  echo "Processing: $f"
  echo "  Poster  -> $poster_path"
  echo "  WebM    -> $preview_webm_path"
  echo "  MP4     -> $preview_mp4_path"

  # 1) Poster (WebP), frame at POSTER_TIME_SECONDS, scaled to POSTER_WIDTH
  ffmpeg -y \
    -ss "$POSTER_TIME_SECONDS" \
    -i "$f" \
    -frames:v 1 \
    -q:v 2 \
    -vf "scale=${POSTER_WIDTH}:-1" \
    "$poster_path"

  # 2) Optimized preview (WebM VP9)
  ffmpeg -y \
    -i "$f" \
    -t "$PREVIEW_DURATION_SECONDS" \
    -vf "scale=${PREVIEW_WIDTH}:-2" \
    -c:v libvpx-vp9 \
    -b:v "$PREVIEW_BITRATE" \
    -crf 32 \
    -an \
    "$preview_webm_path"

  # 3) Optimized preview (MP4 H.264 fallback)
  ffmpeg -y \
    -i "$f" \
    -t "$PREVIEW_DURATION_SECONDS" \
    -vf "scale=${PREVIEW_WIDTH}:-2" \
    -c:v libx264 \
    -preset veryfast \
    -crf 23 \
    -movflags +faststart \
    -an \
    "$preview_mp4_path"

  echo "Done: $f"
  echo
done

echo "All done ✅"
