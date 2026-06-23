"use client";

interface MembershipCirclesProps {
  onOpenApply: () => void;
}

// Exact three tiers from document — Page 1 Home + Page 7 Membership & Registry
const tiers = [
  {
    num: "01",
    name: "Founding Fifty",
    eligibility: "First Fifty Registry Members",
    body: "The first fifty individuals to join the Registry — and the ten Founder's Circle bottle owners within that group — hold the most foundational position in the house. Permanently closed once fifty Registry positions are filled.",
    benefits: [
      "Permanent documentation as founding members",
      "First access to every future edition before any announcement",
      "Invitations to private founder events and house gatherings",
      "Recognition in the house's founding archive",
      "Direct communication with the founder",
    ],
    status: "Open",
  },
  {
    num: "02",
    name: "Collector Circle",
    eligibility: "Edition I Bottle Owners",
    body: "Members who join the Registry in the first phase of the house's launch and hold at least one numbered bottle from any edition. This tier closes at the end of Edition I's allocation period.",
    benefits: [
      "Priority access to future editions before general announcement",
      "Invitations to Collector events and private experiences",
      "The Collector's annual communication from the founder",
      "Recognition in the house's collector documentation",
    ],
    status: "Open",
  },
  {
    num: "03",
    name: "House Circle",
    eligibility: "Registry Members",
    body: "Registry members who join after Edition I's founding period. Open continuously as the house grows.",
    benefits: [
      "Advance notice of all future releases",
      "Access to exclusive house content and the Journal",
      "Invitations to public house events",
      "Priority allocation requests for future limited editions",
    ],
    status: "Open",
  },
];

export default function MembershipCircles({ onOpenApply }: MembershipCirclesProps) {
  return (
    <section id="registry" className="bg-charcoal border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-24 md:py-32 space-y-16">
        {/* Header — exact doc copy Page 1 + Page 7 */}
        <div className="space-y-6 max-w-[680px]">
          <span className="section-tag">Membership &amp; Registry</span>
          <h2
            className="font-serif font-light text-[#E8E2D9] leading-[1.08]"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
          >
            Not a loyalty program.{" "}
            <em className="not-italic" style={{ color: "#C9A84C" }}>
              A founding circle.
            </em>
          </h2>
          {/* Exact copy from document Page 1 */}
          <p
            className="text-[#7A7068] font-light leading-[1.85]"
            style={{ fontSize: "17px" }}
          >
            The Maison Vereen Registry is not a newsletter. It is the
            documentation of individuals who chose to be part of the founding of
            this house. Three tiers. Permanent records. Privileges that compound
            as the house grows.
          </p>
        </div>

        {/* Three tiers — dark grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/4">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className="group bg-[#0D0D0D] px-8 py-10 space-y-7 hover:bg-white/2 transition-colors duration-500 relative flex flex-col"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Tier header */}
              <div className="space-y-3">
                <div className="flex items-baseline justify-between">
                  <span
                    className="font-mono text-gold/50"
                    style={{ fontSize: "9px" }}
                  >
                    {tier.num}
                  </span>
                  <span
                    className="uppercase tracking-[0.2em] text-[#4A4438]"
                    style={{ fontSize: "8px" }}
                  >
                    {tier.status}
                  </span>
                </div>
                <h3
                  className="font-serif font-light text-[#E8E2D9] group-hover:text-gold transition-colors duration-300"
                  style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.4rem)" }}
                >
                  {tier.name}
                </h3>
                <span
                  className="block uppercase tracking-[0.2em] text-[#5A5449]"
                  style={{ fontSize: "9px" }}
                >
                  {tier.eligibility}
                </span>
              </div>

              {/* Body */}
              <p
                className="text-[#5A5449] font-light leading-[1.75]"
                style={{ fontSize: "16px" }}
              >
                {tier.body}
              </p>

              {/* Benefits list */}
              <ul className="space-y-2.5 flex-1">
                {tier.benefits.map((b, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <div className="shrink-0 w-3 h-px bg-gold/30 mt-[9px]" />
                    <span
                      className="text-[#5A5449] font-light leading-[1.6]"
                      style={{ fontSize: "16px" }}
                    >
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA — single composed CTA per document rules */}
        <div className="text-center">
          <button
            onClick={onOpenApply}
            className="border border-gold/50 hover:border-gold hover:bg-gold/10 px-10 py-4 text-[#E8E2D9] transition-all duration-500"
            style={{ fontSize: "9px", letterSpacing: "0.3em" }}
          >
            <span className="uppercase font-medium">Join the Registry</span>
          </button>
        </div>
      </div>
    </section>
  );
}
