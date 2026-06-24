// Maison Vereen — Journal articles
// Single source of truth used by journal/page.tsx, journal/[slug]/page.tsx, and components/Journal.tsx

export interface Article {
  slug: string;
  issue: string;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  imagePos: string;
  body: string[]; // paragraphs
}

export const articles: Article[] = [
  {
    slug: "on-distinction",
    issue: "Issue 01",
    tag: "Identity",
    title: "On Distinction — What It Is, Who Carries It, and Why It Cannot Be Purchased.",
    excerpt: "Not 'what fragrance do people want to wear?' The question that started Maison Vereen was different. Harder. More personal. What does the fragrance of someone who changes rooms smell like?",
    date: "June 2024",
    readTime: "6 min read",
    image: "/images/dark-stone.jpg",
    imagePos: "30% center",
    body: [
      "There is a quality in certain people that is impossible to manufacture. It is not confidence. Confidence can be performed. It is not success — success can be recent, borrowed, or accidental. It is something older than all of those things. Something that exists before the room fills.",
      "We call it distinction. And it has nothing to do with what you own.",
      "Distinction is the quality that makes a room rearrange itself when you enter. It is the silence that follows your opinion. It is the way people lean slightly forward when you begin to speak. It is presence — not performed, not cultivated, not purchased. Carried.",
      "The fragrance industry has spent its entire existence pretending that distinction can be bought. That the right bottle, the right house, the right name on the label can transfer something of its owner's reputation to yours. That wearing what powerful people wear makes you proximate to their power.",
      "It cannot. It never has. And the people who actually carry distinction have always known this.",
      "What they have not had — until now — is a house that was built to recognize them rather than manufacture them. A fragrance designed not to give you an identity, but to amplify the one you already carry.",
      "That is what Maison Vereen was built for. Not the aspiration. The reality. Not who you want to become. Who you already are.",
      "Distinction is not an achievement. It is a characteristic. You either carry it or you do not. And if you carry it — you have always known that the things built to sell aspiration were never built for you.",
      "This was.",
    ],
  },
  {
    slug: "the-craft-problem",
    issue: "Issue 02",
    tag: "Craft",
    title: "The Craft Problem — Why Most Luxury Is Not Actually Crafted.",
    excerpt: "The word luxury has been borrowed, diluted, and redistributed until it covers almost everything. What remains when you remove the borrowed meaning? What does genuine craft actually look like?",
    date: "May 2024",
    readTime: "5 min read",
    image: "/images/luxury-dark.jpg",
    imagePos: "50% center",
    body: [
      "The word luxury has been borrowed so many times it has almost lost its shape. It now covers hotel chains and skincare serums and rental cars and airline seats. It is used to describe things that are merely expensive, things that are merely pleasant, things that are merely new.",
      "Strip all of that away. What is left?",
      "Craft. Genuine, irreducible, uncompromising craft. The kind that takes longer than it needs to. That costs more than anyone planned. That refuses to substitute convenience for quality at any stage of the process.",
      "Most of what is sold as luxury in the fragrance world is not actually crafted. It is formulated — efficiently, at scale, with raw materials sourced from the cheapest available chain. The bottle is designed by a marketing team to look impressive at a counter. The name is selected because it sounds established.",
      "The fragrance itself is often an afterthought.",
      "Maison Vereen was built on a different premise: that the object you wear closest to your skin deserves the same seriousness you bring to everything else in your life. That 'master perfumer' should mean something beyond a credit on a box. That African raw materials should be used not as a story, but because they produce a quality of scent unavailable anywhere else in the global supply chain.",
      "Craft is not a process. It is a position. A refusal to compromise at the moments when compromise would be easiest.",
      "Edition I is the first expression of that position. Everything about it — the fragrance, the bottle, the authentication, the ownership experience — was built to the same standard. Not the standard of what is expected. The standard of what is possible.",
    ],
  },
  {
    slug: "the-african-luxury-moment",
    issue: "Issue 03",
    tag: "Africa",
    title: "The African Luxury Moment — Why It Is Happening Now and What It Will Produce.",
    excerpt: "Africa is the youngest continent by median age. The fastest-growing consumer class. The source of more undocumented creative and intellectual authority than perhaps any civilization in recent history.",
    date: "April 2024",
    readTime: "7 min read",
    image: "/images/dark-architecture.jpg",
    imagePos: "40% center",
    body: [
      "Africa is the youngest continent by median age. It is the fastest-growing consumer class in the world. It is the source of more undocumented creative and intellectual authority than perhaps any civilization in recent history. The world is beginning to understand what those of us who have built things on this continent have always known: the quality of mind that comes from building in difficult environments is exceptional.",
      "That quality of mind is now turning toward luxury.",
      "Not in the way luxury has always looked at Africa — as a market to be penetrated, a consumer class to be converted, a geography to be accessed. In a fundamentally different direction: Africa building luxury for itself. For the individuals who have always deserved it and were never served by what existed.",
      "Maison Vereen is part of that moment. But it is worth being precise about what that moment is and is not.",
      "It is not a trend. Trends are temporary by definition. What is happening is architectural — the construction of institutions that will carry the continent's creative and commercial authority into the global conversation permanently.",
      "It is not nostalgia. The African luxury moment is not about heritage for its own sake, or about reclaiming something that was taken. It is about building something new, from the materials — cultural, intellectual, physical — that this continent produces better than anywhere else.",
      "And it is not a claim. It is a project. One that requires building seriously, without apology, without the shortcut of appealing to African identity as a substitute for genuine quality.",
      "Maison Vereen was not born in Lagos because Lagos is a convenient story. It was born here because this is where the people it was built for are building things. The house reflects the continent's ambition back at itself — with the seriousness it has always deserved.",
      "The question is not whether African luxury will matter globally. It will. The question is who will have been there at the beginning.",
    ],
  },
  {
    slug: "on-presence",
    issue: "Issue 04",
    tag: "Identity",
    title: "On Presence — The Difference Between Being Noticed and Being Felt.",
    excerpt: "Some people arrive in rooms with noise. Others arrive with weight. The difference is not volume. It is not charisma. It is something more fundamental — a quality that precedes the entry.",
    date: "March 2024",
    readTime: "5 min read",
    image: "/images/journal-dark.jpg",
    imagePos: "20% center",
    body: [
      "Some people arrive in rooms with noise. They announce themselves — loudly or strategically, with a handshake or a performance or a credential. They require the room to pay attention.",
      "Others arrive with weight. The room pays attention before they have done anything.",
      "The difference is not volume. It is not charisma — charisma can be manufactured, trained, deployed tactically. It is not even confidence, though it often travels with it.",
      "It is presence. And presence is not cultivated. It is revealed.",
      "Presence is the weight of having built something real. The stillness that comes from knowing exactly who you are and having stopped needing anyone else to confirm it. The authority that exists not because it was granted by a title or a credential or a room's opinion, but because it was earned in private, over years, through decisions no one else witnessed.",
      "You know the people who have it. You feel them before you see them. Their silence has weight. Their attention is a form of honor. When they leave a room, something leaves with them.",
      "Maison Vereen was built for these people. Not for those who aspire to presence — aspiration is honest, but it points in the wrong direction. For those who already carry it, and have spent years looking for things in the world that were made to the same standard.",
      "The fragrance is not designed to give you presence. It is designed to serve the presence you already have. To be worthy of it.",
    ],
  },
  {
    slug: "the-architecture-of-scarcity",
    issue: "Issue 05",
    tag: "Luxury",
    title: "The Architecture of Scarcity — Why Limiting Production Is an Act of Respect.",
    excerpt: "250 was not chosen for scarcity's sake. It was chosen because the founding chapter of a house should be owned by people who understand its significance.",
    date: "February 2024",
    readTime: "6 min read",
    image: "/images/dark-stone.jpg",
    imagePos: "70% center",
    body: [
      "Scarcity in luxury is almost always manufactured. A brand produces ten times what it needs, stores nine of them, and releases one — creating the impression of rarity while keeping the economics of volume. The customer feels privileged. The brand books the margin. The scarcity is theater.",
      "Maison Vereen Edition I is not that.",
      "250 bottles is not a marketing number. It is not a strategy designed to create artificial demand. It is an architectural decision about what kind of object Edition I should be — and about who should own it.",
      "There are more than 250 people in the world who can afford ₦400,000 on a fragrance. Not all of them are the founding-chapter type. The number 250 is a filter, not a ceiling. It limits ownership to people who understand what they are holding — who chose this not because it was available to them, but because they recognized it.",
      "When Edition I is sold — all 250 bottles — it is retired. The formula is not reproduced in this specific form. The bottle design is not repeated. The numbered sequence 1–250 is permanently closed. This is a commitment made before the first bottle shipped.",
      "What makes rarity meaningful is the commitment behind it. Any brand can declare something limited. The question is whether the founders will hold that line when holding it is inconvenient.",
      "The founders of Maison Vereen have made the commitment: what is made rare stays rare. That is what makes the price not a luxury price, but an ownership price. You are not buying a fragrance. You are buying a permanent position in a finite record.",
      "That is what genuine scarcity looks like. Not theater. Architecture.",
    ],
  },
  {
    slug: "legacy-vs-success",
    issue: "Issue 06",
    tag: "Legacy",
    title: "Legacy vs. Success — Why Builders Who Think in Decades Build Differently.",
    excerpt: "The houses she admires most were built by people who were not thinking about next quarter. They were thinking about next century. She is building with the same intention.",
    date: "January 2024",
    readTime: "5 min read",
    image: "/images/luxury-dark.jpg",
    imagePos: "60% center",
    body: [
      "Success and legacy are not the same thing. They can coexist, but they require different orientations. Success is measured from the outside — revenue, recognition, scale, market position. Legacy is measured from the inside — by the decisions made when no one was watching, by what was refused as much as what was built.",
      "The greatest houses were not built for success. They were built for permanence.",
      "Hermès was not built to be the world's most valuable luxury brand. It was built because someone believed that the best leather goods in the world deserved to exist. Rolex was not built to be synonymous with achievement. It was built because someone believed that a mechanical watch should be built to outlast its owner.",
      "The success followed the seriousness. It always does.",
      "Maison Vereen is being built in that spirit. Not because we have earned the comparison — we have not, yet. Because we have made the commitment. We are building for the long measurement, not the short one.",
      "That means decisions that are harder in the immediate term. Limiting Edition I to 250 bottles when demand could support more. Refusing to compromise the fragrance formulation for a lower cost structure. Building the authentication system before the product launched. Choosing the owners carefully rather than quickly.",
      "None of these are optimizations for success. They are optimizations for legacy. For the version of Maison Vereen that exists in twenty years, and fifty.",
      "The people who own Edition I will be in the founding record of a house built for that timeline. That is not a marketing claim. It is the architecture of the decision.",
    ],
  },
  {
    slug: "what-maison-vereen-was-built-to-prove",
    issue: "Issue 07",
    tag: "Legacy",
    title: "What Maison Vereen Was Built to Prove — And What Proving It Requires.",
    excerpt: "Edition I is the beginning of a house that is designed to endure. The only question is whether you were there when it started.",
    date: "December 2023",
    readTime: "4 min read",
    image: "/images/dark-architecture.jpg",
    imagePos: "35% center",
    body: [
      "Maison Vereen was built to prove one thing: that a luxury house born on the African continent, built by an African founder, drawing from African materials and African creative authority, can stand alongside the world's most respected houses without qualification, without apology, and without compromise.",
      "Not 'impressive for an African brand.' Not 'exceptional given where it comes from.' Exceptional. Full stop.",
      "Proving that requires building something that cannot be explained away. A fragrance developed by a master perfumer to a standard that has nothing to prove to anyone. A bottle designed as a sculpture before it is a vessel. An authentication system and ownership experience built with the seriousness of an institution, not a product launch. A founding generation of owners selected for alignment, not just affordability.",
      "It requires refusing every shortcut that would make the short-term easier and the long-term impossible.",
      "Edition I is the first word of that proof. It is not a test. It is not a pilot. It is the opening of a house. When you own it, you own the first chapter of something that was built to last long after both of us are gone.",
      "The question was never whether this could be done. People who build things always know what can be done. The question is whether you will have been there when it started.",
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
