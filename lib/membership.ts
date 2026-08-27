export type MembershipCircle = "FOUNDING" | "COLLECTORS" | "HOUSE";

export const CIRCLE_LABELS: Record<MembershipCircle, string> = {
  FOUNDING: "Founders Circle",
  COLLECTORS: "Collectors Circle",
  HOUSE: "House Circle",
};

export function formatNaira(amount: number): string {
  return `₦${amount.toLocaleString("en-NG")}`;
}

/** Extract 2-digit year from a release label like "Edition One — 2027" */
export function releaseYearSuffix(releaseLabel: string): string {
  const match = releaseLabel.match(/(20\d{2})/);
  if (match) return match[1].slice(2);
  return String(new Date().getFullYear()).slice(2);
}

export function buildHouseId(seq: number, yearSuffix: string): string {
  return `MVFC·1·${String(seq).padStart(3, "0")}·${yearSuffix}`;
}

export function buildReceiptNo(seq: number, yearSuffix: string): string {
  return `MV-RCPT-${yearSuffix}-${String(seq).padStart(4, "0")}`;
}

export function deadlineForCircle(
  circle: MembershipCircle,
  settings: {
    foundingDeadline: string;
    collectorsDeadline: string;
    houseDeadline: string;
  }
): string {
  if (circle === "COLLECTORS") return settings.collectorsDeadline;
  if (circle === "HOUSE") return settings.houseDeadline;
  return settings.foundingDeadline;
}
