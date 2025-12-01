"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/faq";
import { Badge, SectionHeading, FadeInView } from "@/components/ui";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="px-6 py-15 bg-[#f3f3f9]">
      <div className="mx-auto max-w-7xl">
        <FadeInView>
          <Badge containerClassName="mb-[54px]" badgeClassName="w-[67px]">
            FAQ
          </Badge>
        </FadeInView>

        {/* Content Grid */}
        <FadeInView delay={0.1}>
          <div className="flex flex-col lg:flex-row gap-[54px] items-start justify-center">
            {/* Left Side - Heading */}
            <div className="lg:max-w-[487px]">
              <SectionHeading
                title="Frequently asked questions"
                centered={false}
                className="mb-[54px]"
                titleClassNameWithSubtitle="mb-6"
              />
              <p className="mt-6 font-['Darker_Grotesque'] text-2xl font-bold tracking-[-0.72px] leading-6 text-[#8d8d8d]">
                If you don&apos;t find your answer here, simply{" "}
                <span className="text-[#152CD3] hover:underline cursor-pointer">
                  reach out.
                </span>
              </p>
            </div>

            {/* Right Side - FAQ List */}
            <div className="flex flex-col gap-[18px] w-full lg:w-[626px]">
              {FAQ_ITEMS.map((item, index) => (
                <div key={index}>
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="bg-[#f9f9ff] border-2 border-white rounded-2xl px-6 pt-5 pb-[22px] w-full text-left shadow-[inset_0px_-4px_4px_0px_rgba(0,0,0,0.05),inset_0px_4px_4px_0px_rgba(255,255,255,0.3)] hover:shadow-[inset_0px_-2px_2px_0px_rgba(0,0,0,0.05),inset_0px_2px_2px_0px_rgba(255,255,255,0.4)] transition-shadow"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 shrink-0">
                        <svg
                          className="w-full h-full text-[#152CD3]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={
                              openIndex === index
                                ? "M20 12H4"
                                : "M12 4v16m8-8H4"
                            }
                          />
                        </svg>
                      </div>
                      <h3 className="font-['Darker_Grotesque'] text-2xl font-bold tracking-[-0.72px] leading-7 text-[#616161]">
                        {item.question}
                      </h3>
                    </div>
                  </button>
                  {openIndex === index && (
                    <div className="animate-in fade-in slide-in-from-top-2 duration-200 bg-white border-2 border-white rounded-2xl p-6 mt-2 shadow-[inset_0px_-4px_4px_0px_rgba(0,0,0,0.05)]">
                      <p className="font-['Darker_Grotesque'] text-xl font-semibold leading-6 tracking-[-0.6px] text-[#8d8d8d]">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
