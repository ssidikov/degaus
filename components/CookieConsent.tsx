"use client";

import { useState, useEffect } from "react";
import { FadeInView } from "@/components/ui";
import Button from "@/components/Button";
import Link from "next/link";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showManage, setShowManage] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const hasConsent = localStorage.getItem("cookieConsent");
    if (!hasConsent) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    localStorage.setItem(
      "cookiePreferences",
      JSON.stringify({ essential: true, analytics: true, marketing: true }),
    );
    setShowBanner(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected");
    localStorage.setItem(
      "cookiePreferences",
      JSON.stringify({ essential: true, analytics: false, marketing: false }),
    );
    setShowBanner(false);
  };

  const manageCookies = () => {
    setShowManage(true);
  };

  const savePreferences = () => {
    localStorage.setItem("cookieConsent", "managed");
    localStorage.setItem("cookiePreferences", JSON.stringify(preferences));
    setShowBanner(false);
    setShowManage(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <FadeInView delay={0.5}>
        <div className="relative overflow-hidden shadow-[0_-10px_40px_rgba(255,255,255,0.05)] border border-white/10 bg-[#333]/90 backdrop-blur-xl">
          {/* Gradient overlay for depth */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(44, 83, 100, 0.3) 0%, rgba(15, 32, 39, 0.3) 100%)",
            }}
          />
          <div className="px-4 sm:px-6 py-4 sm:py-5 flex flex-col gap-4 relative z-10">
            {!showManage ? (
              <>
                {/* Text content */}
                <div className="flex-1">
                  <h3 className="font-['Darker_Grotesque'] text-lg sm:text-2xl font-semibold text-white">
                    We use cookies
                  </h3>
                  <p className="font-['Darker_Grotesque'] text-sm sm:text-lg font-semibold text-gray-400 leading-relaxed">
                    We use cookies to help this site function, understand
                    service usage, and support marketing efforts. Visit{" "}
                    <button
                      onClick={manageCookies}
                      className="text-gray-300 underline hover:text-white transition-colors"
                    >
                      Manage Cookies
                    </button>{" "}
                    to change preferences anytime. View our{" "}
                    <Link
                      href="/privacy#29db4199ba908193b805d4467d2468bc"
                      className="text-gray-300 underline hover:text-white transition-colors"
                    >
                      Cookie Policy
                    </Link>{" "}
                    for more info.
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
                  <Button variant="outline" onClick={manageCookies}>
                    Manage Cookies
                  </Button>
                  <Button variant="outline" onClick={rejectCookies}>
                    Reject non-essential
                  </Button>
                  <Button variant="outline" onClick={acceptCookies}>
                    Accept all
                  </Button>
                </div>
              </>
            ) : (
              <>
                {/* Cookie Management Panel */}
                <div className="flex-1">
                  <h3 className="font-['Darker_Grotesque'] text-lg sm:text-2xl font-semibold text-white mb-3">
                    Manage Cookie Preferences
                  </h3>

                  <CookiePreferenceItem
                    title="Essential Cookies"
                    description="Required for the website to function properly."
                    enabled={preferences.essential}
                    isLast={false}
                  />

                  <CookiePreferenceItem
                    title="Analytics Cookies"
                    description="Help us understand how visitors use our website."
                    enabled={preferences.analytics}
                    onToggle={() =>
                      setPreferences((prev) => ({
                        ...prev,
                        analytics: !prev.analytics,
                      }))
                    }
                    isLast={false}
                  />

                  <CookiePreferenceItem
                    title="Marketing Cookies"
                    description="Used to deliver personalized ads and content."
                    enabled={preferences.marketing}
                    onToggle={() =>
                      setPreferences((prev) => ({
                        ...prev,
                        marketing: !prev.marketing,
                      }))
                    }
                    isLast={true}
                  />
                </div>

                {/* Management Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
                  <Button
                    onClick={() => setShowManage(false)}
                    variant="outline"
                  >
                    Back
                  </Button>
                  <Button onClick={savePreferences}>Save Preferences</Button>
                </div>
              </>
            )}
          </div>
        </div>
      </FadeInView>
    </div>
  );
}

type CookiePreferenceItemProps = {
  title: string;
  description: string;
  enabled: boolean;
  onToggle?: () => void;
  isLast?: boolean;
};

function CookiePreferenceItem({
  title,
  description,
  enabled,
  onToggle,
  isLast = false,
}: CookiePreferenceItemProps) {
  return (
    <div className={`mb-3 ${isLast ? "" : "pb-3 border-b border-gray-600"}`}>
      <div className="flex items-center justify-between">
        <h4 className="font-['Darker_Grotesque'] text-base sm:text-lg font-semibold text-white">
          {title}
        </h4>
        {onToggle ? (
          <button
            onClick={onToggle}
            className={`relative w-10 h-5 rounded-full transition-colors ${
              enabled ? "bg-blue-500" : "bg-gray-600"
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform ${
                enabled ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
        ) : (
          <span className="font-['Darker_Grotesque'] text-base font-semibold leading-3 text-gray-400">
            Always On
          </span>
        )}
      </div>
      <p className="font-['Darker_Grotesque'] text-base font-semibold leading-3 text-gray-400">
        {description}
      </p>
    </div>
  );
}
