/**
 * Video Configuration
 *
 * Central configuration file for all video settings across the website.
 * Toggle autoplay behavior for all videos from this single location.
 */

export const VIDEO_CONFIG = {
  /**
   * Enable/disable autoplay for all videos on the website
   * Set to `true` to enable autoplay (default)
   * Set to `false` to disable autoplay
   */
  autoplay: true,

  /**
   * Other video settings
   */
  loop: true,
  muted: true,
  playsInline: true,
  preload: 'auto' as const,
} as const
