// Tailwind safelist — keep these classes from being purged:
// bg-error/20 border-error/40 text-error

/**
 * Static content feed data.
 * To update the site, edit this array — no other files needed.
 *
 * Each item has:
 *   title           — Display title for the card
 *   pillar          — One of: "finance", "career", "lifeskills", "mindset", "fieldnotes"
 *   format          — Either "video" or "written"
 *   url             — Link to the full piece on Substack
 *   description     — Short summary (1-2 sentences) for card display
 *   date            — Publication date (YYYY-MM-DD)
 *   slug            — URL-friendly identifier for on-site article page
 *   excerpt         — Opening 2-3 paragraphs of the article (real text, not summary)
 *   keywords        — Array of SEO keywords
 *   metaDescription — Under 160 chars, keyword-aware summary for Google
 */
export const latestContent = [
  // ─── PERSONAL FINANCE ─────────────────────────────────────────────
  {
    title: "The 6 Accounts That Anchor Your Financial Life",
    pillar: "finance",
    format: "written",
    url: "https://thetacticalgeneralist.substack.com/p/6-accounts-financial-foundation",
    description: "Most people have one account where everything mingles. Here's the hierarchy that actually works — and why the structure matters more than the balance.",
    date: "2026-02-22",
    slug: "6-accounts-financial-foundation",
    excerpt: `As more money comes in and your future plans become clearer, you'll need a system for where that money lives. Not just one checking account where everything mingles, but a hierarchy of accounts, each with a purpose.\n\nThese are the 6 accounts (plus one bonus) that I think everyone should have — an anchor for their finances.`,
    keywords: ["bank account system for beginners", "how to organize your money", "personal finance accounts everyone needs", "checking savings account hierarchy", "financial account structure", "money management system"],
    metaDescription: "A practical framework for organizing your money across six accounts, each with a specific purpose. The system that keeps your finances from becoming a mess as income grows.",
  },
  {
    title: "Rich on Any Income",
    pillar: "finance",
    format: "written",
    url: "https://thetacticalgeneralist.substack.com/p/rich-on-any-income",
    description: "One equation drives everything in personal finance. Master it and income level stops being an excuse.",
    date: "2026-02-22",
    slug: "rich-on-any-income",
    excerpt: `If there's only one financial equation you memorize, make it this one:\n\nIncome > Expenses = Wealth\n\nThat's it. Everything else is tactics.\n\nWe can control both sides of this equation. You can increase your income by getting a raise, getting a new job, increasing your skills through education, or picking up a second job or side hustle. You can reduce expenses by cutting back on eating out, opting for good brands versus designer brands, or choosing to live in a slightly smaller place in a nice area versus an upscale one.`,
    keywords: ["how to build wealth on a low income", "personal finance equation", "income vs expenses wealth building", "financial independence any income", "wealth building basics", "money mindset"],
    metaDescription: "Wealth isn't about how much you earn — it's about one simple equation. Here's the financial principle that works on any income, at any age.",
  },
  {
    title: "Master Debt or Become Its Slave",
    pillar: "finance",
    format: "written",
    url: "https://thetacticalgeneralist.substack.com/p/master-debt",
    description: "There are only a few things worth going into debt for. Here's the philosophy I've followed for 30 years — and why it still holds up.",
    date: "2026-02-22",
    slug: "master-debt-or-become-its-slave",
    excerpt: `Growing up, I always heard there were only two things worth going into debt for: an education and a house.\n\nI took that advice to heart. Maybe even to an extreme. My parents never had credit cards while I was growing up and always talked about how bad they were. In time, I came to learn that credit cards are simply another tool in the financial toolkit, and I started using them judiciously. The other exception I'd add to the rule is a car. Living in the US, where a car is essentially required in all but a few select cities, sometimes you need to finance a reliable vehicle.\n\nThroughout my life I've stuck pretty close to this philosophy. While others were using credit cards to purchase things they wanted but couldn't afford and piling up debt, I was forgoing things and only purchasing when I had the ability to do so.`,
    keywords: ["good debt vs bad debt", "how to manage debt", "debt philosophy personal finance", "when to use credit cards", "debt free living strategy", "debt management for beginners"],
    metaDescription: "A 30-year framework for thinking about debt — what's worth financing, what isn't, and how to stay in control when everyone else is piling up credit card balances.",
  },

  // ─── BUSINESS & CAREER ────────────────────────────────────────────
  {
    title: "True Leadership Lifts Others",
    pillar: "career",
    format: "written",
    url: "https://thetacticalgeneralist.substack.com/p/true-leaders-lifts-others",
    description: "Real leadership isn't org charts or titles. It's someone seeing potential in you that you don't yet see in yourself — and doing something about it.",
    date: "2026-02-22",
    slug: "true-leadership-lifts-others",
    excerpt: `In 1998 I found myself with a new house, our first baby, and laid off. Worried, I dusted off my resume and started looking for a job. During that search I applied for a sales role at a software company. As I went through a series of interviews, I was certain they wouldn't hire me because I lacked the requisite skills and background. Fortunately, the head of sales saw something in me and offered me the job, which set me on a very successful career in sales, partnerships, and managing strategic alliances.\n\nThat's what real leadership looks like. Not org charts. Not titles. Not managing through fear. It's someone seeing potential in you that you might not see in yourself, and then doing something about it.`,
    keywords: ["what is good leadership", "leadership lessons from experience", "how to be a better leader", "servant leadership examples", "leadership vs management", "career leadership advice"],
    metaDescription: "What real leadership looks like — learned from a sales director who took a chance on an unqualified candidate in 1998 and changed the trajectory of his career.",
  },
  {
    title: "The Role I Didn't Want Changed Everything",
    pillar: "career",
    format: "written",
    url: "https://thetacticalgeneralist.substack.com/p/the-role-i-didnt-want",
    description: "Getting reassigned to a market nobody took seriously turned out to be the best career move I never chose. Sometimes the path chooses you.",
    date: "2026-02-22",
    slug: "the-role-i-didnt-want",
    excerpt: `A few years into a role I was comfortable in, my VP decided I wasn't the right fit for the Telco industry segment I'd been assigned to. Within two months, I found myself on a new team, in a new role, focused on a market that most people considered a joke: Public Cloud.\n\nI had a decision to make. I could look for a new job inside, or even outside, my current company. Or I could strap in and find out where this roller coaster would take me.\n\nI chose the latter. It ended up being one of the best career decisions I've ever made.`,
    keywords: ["career pivot lessons", "unexpected career opportunities", "how to handle being reassigned at work", "career change advice", "career growth mindset", "embracing change at work"],
    metaDescription: "When a VP decided I wasn't the right fit for my role, I got reassigned to a market most people considered a joke — Public Cloud. It turned out to be the best career decision I never made.",
  },
  {
    title: "Double Down on What You're Already Good At",
    pillar: "career",
    format: "written",
    url: "https://thetacticalgeneralist.substack.com/p/double-down-on-strengths",
    description: "For years I focused almost entirely on fixing my weaknesses. One book changed that completely — and the results followed.",
    date: "2026-02-22",
    slug: "double-down-on-strengths",
    excerpt: `I've always been a sucker for self-improvement books. As a younger man I read As a Man Thinketh, The Greatest Salesman in the World, How to Win Friends and Influence People. The list could get very long if I let it.\n\nAs I worked through those books, I focused almost entirely on improving my weaknesses while ignoring my perceived strengths. That was my default philosophy for years.\n\nThen a good leader introduced me to StrengthsFinder, and everything changed.`,
    keywords: ["StrengthsFinder review", "how to leverage your strengths at work", "stop fixing weaknesses focus on strengths", "career development advice", "strengths based leadership", "personal development career"],
    metaDescription: "StrengthsFinder changed how I approached my career. Instead of fixing weaknesses, I doubled down on what I was already good at. Here's why that shift made all the difference.",
  },
  {
    title: "The Power of Your Network",
    pillar: "career",
    format: "written",
    url: "https://thetacticalgeneralist.substack.com/p/the-power-of-your-network",
    description: "Three of the biggest career moves I ever made came from people I knew. Not one came from a job board. Here's what 30 years taught me about networking.",
    date: "2026-02-22",
    slug: "power-of-your-network",
    excerpt: `Three of the biggest career moves I've ever made came from people I knew.\n\nThe first was shortly after I had been laid off from my first job out of college. I happened to have a friend who worked at another company and was willing to open the door to get me into a sales role that put me on a great future trajectory. After that job, I moved to one of the partner companies I had been working with previously. They knew my work well and were more than happy to bring me on board. A couple of years after this, while in business school, I found myself between jobs — and a conversation at a preschool event turned into my next position.\n\nNot a single one of those opportunities came from a job board. They came from relationships.`,
    keywords: ["how to network effectively", "professional networking advice", "networking for career growth", "why networking matters more than job boards", "building professional relationships", "career networking tips"],
    metaDescription: "Every major career opportunity I've had came from a relationship, not a job posting. Here's how networking actually works after 30 years in tech — and what most people get wrong.",
  },
  {
    title: "Don't Try to Be the Smartest Person in the Room",
    pillar: "career",
    format: "written",
    url: "https://thetacticalgeneralist.substack.com/p/dont-try-to-be-the-smartest-person",
    description: "I walked into a job with an MBA, a chip on my shoulder, and a certainty that I was right. I was. It still cost me the job.",
    date: "2026-02-28",
    slug: "dont-be-the-smartest-person-in-the-room",
    excerpt: `As I packed up my desk and headed home, I already knew the answer to the question forming in my head. How was I going to tell my wife? The harder question was the one I didn't want to sit with: how had I let this happen?\n\nIn 2002, I went back to school for an MBA. I had a zoology degree and a growing sense that I had some gaps to fill if I was going to stay in the business world. We moved to the DFW area, I enrolled in the evening program at SMU Cox, and I found myself needing a job that wouldn't eat me alive while I was trying to finish a degree.\n\nI landed at McAfee in an inside sales role. It wasn't what I wanted, but it was manageable. No travel, predictable hours, decent money. I told myself it was temporary. I was right about that part.`,
    keywords: ["how to be effective at work not just smart", "career lessons learned the hard way", "workplace humility lessons", "MBA overconfidence career mistakes", "being right vs being effective", "professional self-awareness"],
    metaDescription: "Being right isn't enough. A hard lesson from early in my career about the difference between being smart and being effective — and what MBA swagger actually costs you.",
  },
  {
    title: "Competent People Make the Best Mistakes",
    pillar: "career",
    format: "written",
    url: "https://thetacticalgeneralist.substack.com/p/competent-people-make-the-best-mistakes",
    description: "Nearly every major travel disaster in our marriage traces back to the same root cause: I'm a competent, experienced traveler who occasionally does something spectacularly stupid.",
    date: "2026-03-08",
    slug: "competent-people-make-the-best-mistakes",
    excerpt: `"We have a problem."\n\nI've said those words to my wife more times than I care to admit. Usually, she already knows I'm the problem. Sometimes she asks anyway. "How did you let this happen? Were you not paying attention?" She knows me well enough to know the answer to that question.\n\nNearly every major travel disaster in our marriage traces back to the same root cause: I'm a competent, experienced traveler who occasionally does something spectacularly stupid. I've learned from most of my mistakes. Some I've learned more than once.`,
    keywords: ["travel mistakes funny stories", "competence vs perfection", "learning from mistakes at work", "experienced traveler mistakes", "professional humility lessons", "owning your mistakes"],
    metaDescription: "Nearly every major travel disaster in our marriage traces back to the same root cause: I'm a competent traveler who occasionally does something spectacularly stupid.",
  },

  // ─── LIFE SKILLS ──────────────────────────────────────────────────
  {
    title: "How to Cook the Perfect Steak",
    pillar: "lifeskills",
    format: "written",
    url: "https://thetacticalgeneralist.substack.com/p/how-to-cook-the-perfect-steak",
    description: "After years of testing every method — gas grill, charcoal, sous vide, cast iron, reverse sear — here's the one that wins every time.",
    date: "2026-02-22",
    slug: "how-to-cook-the-perfect-steak",
    excerpt: `Steak cooking techniques are very subjective, and I've tried many: standard gas grill, charcoal, sous vide, cast iron skillet, reverse sear, and reverse sear in a smoker. Of all these methods, my favorite is reverse sear in the smoker, followed by a standard reverse sear and finally sous vide.\n\nAll of these methods use low heat to bring the steak up to about 108–110 degrees (F) before hitting it with high heat for the sear. This gives you more control and reduces your likelihood of overcooking, because we all know that a warm red center is what we're going for.\n\nSo why reverse sear over sous vide? One word: crust. When you reverse sear, the outside of the steak dries out naturally during the low-heat phase. You don't have to pat it dry the way you do with sous vide. That dry surface creates a much better Maillard reaction, resulting in a crispier, more caramelized exterior.`,
    keywords: ["how to reverse sear a steak", "best way to cook steak at home", "reverse sear vs sous vide steak", "how to get a good crust on steak", "steak cooking methods compared", "perfect steak guide"],
    metaDescription: "The reverse sear method produces a better steak than sous vide, cast iron, or any grill. Here's exactly how to do it — and why the crust makes all the difference.",
  },
  {
    title: "The Blueprint: What I've Learned After Eleven Years in the Gym",
    pillar: "lifeskills",
    format: "written",
    url: "https://thetacticalgeneralist.substack.com/p/the-blueprint",
    description: "For four years I watched American Ninja Warrior from my couch and said the same thing: \"If I were younger.\" Then I stopped saying it. Here's the system that stuck after eleven years.",
    date: "2026-03-07",
    slug: "fitness-blueprint-eleven-years-gym",
    excerpt: `For about four years, I sat on my couch and watched American Ninja Warrior with my kids and said the same thing every single time: "If I were younger, I'd be able to do that."\n\nYear one. "If I were younger."\n\nYear two. "If I were younger."\n\nYear three. Same couch. Same line. My kids had probably stopped listening somewhere around year two.`,
    keywords: ["fitness after 40 beginner guide", "simple gym routine that works", "consistency over complexity fitness", "American Ninja Warrior inspiration", "long term fitness habits", "workout routine for busy adults"],
    metaDescription: "For four years I said \"if I were younger\" from the couch. Then I stopped. Here's the no-nonsense fitness system that stuck after eleven years in the gym.",
  },

  // ─── PHILOSOPHY & MINDSET ─────────────────────────────────────────
  {
    title: "Push Your Happiness Button Often",
    pillar: "mindset",
    format: "written",
    url: "https://thetacticalgeneralist.substack.com/p/push-your-happiness-button-often",
    description: "Happiness doesn't have to be expensive. A 2002 Miata and a lesson about what actually makes life feel good.",
    date: "2026-02-22",
    slug: "push-your-happiness-button",
    excerpt: `One of my favorite cars I ever owned was a 2002 Mazda Miata NB. I picked it up in 2015 for $8,500 with only 12,000 miles on the odometer. It felt like driving a go-kart whenever I took it out, and on nice spring, fall, and winter days there was nothing to compare to the joy I felt putting the top down and feeling the sun on my face.\n\nUnfortunately, with three children still in the house I needed something bigger with a backseat, so in 2018 I traded it in for something more "practical": a 2009 E92 BMW M3 Convertible with only 22,000 miles on the odometer.\n\nDriving the M3 was a significantly different experience than driving the Miata. What I lost in agility and being able to nimbly whip around corners I made up for in speed, acceleration, handling, and stability.`,
    keywords: ["how to be happier in everyday life", "finding joy in simple things", "happiness doesn't have to be expensive", "mindset for happiness", "gratitude and joy", "living a fulfilling life"],
    metaDescription: "A 2002 Miata bought for $8,500 taught me more about happiness than any expensive purchase I've ever made. Here's the lesson I keep coming back to.",
  },
  {
    title: "I'm Already Rich",
    pillar: "mindset",
    format: "written",
    url: "https://thetacticalgeneralist.substack.com/p/im-already-rich",
    description: "When I was in my twenties I told my dad there was still time for him to become wealthy. He looked at me and said: \"I'm already rich.\" It took me decades to understand what he meant.",
    date: "2026-02-24",
    slug: "im-already-rich",
    excerpt: `When my dad turned 50, I said something to him that I thought was encouraging. I was in my early twenties and had just read that the decade between 50 and 60 was when men's earning potential peaked and they really started to accumulate wealth. I remember looking at him and saying, "Dad, there's still a chance for you to become wealthy."\n\nMy dad was comfortable, owned a home, and had the necessities of life, but he didn't have a lot of earthly possessions. I remember him turning to me and saying, "Jeff, I'm already rich."\n\nAt the time, I didn't fully understand what he meant. He didn't have the house, the portfolio, the savings that I associated with being rich — but he had his family, his health, and a life he was grateful for.`,
    keywords: ["gratitude mindset lessons", "what does it mean to be rich", "wealth vs happiness", "finding meaning beyond money", "father son lessons", "perspective on success and wealth"],
    metaDescription: "My dad didn't have much in the way of earthly possessions. But when I told him there was still time to build wealth, he said \"I'm already rich.\" It took me 30 years to understand that.",
  },

  // ─── FIELD NOTES ──────────────────────────────────────────────────
  {
    title: "My Wife Says I Keep a Mark Wahlberg Schedule",
    pillar: "fieldnotes",
    format: "written",
    url: "https://thetacticalgeneralist.substack.com/p/my-wife-says-i-keep-a-mark-wahlberg",
    description: "She said it half laughing, half not. \"You keep a Mark Wahlberg schedule.\" She's not wrong — and after 30 years, here's what that's actually taught us.",
    date: "2026-02-25",
    slug: "mark-wahlberg-schedule",
    excerpt: `She said it the other day, half laughing, half not. "You know, it's really hard being married to someone who keeps a Mark Wahlberg schedule."\n\nShe's not wrong. Mark Wahlberg is famously up at 2:30 or 3am, and he's in bed by 7:30pm. I give myself a bit more runway — I try to stay up until at least 9:30 and I'm usually awake by 4am — but the spirit of the comparison lands. I am, by any reasonable definition, an extreme lark. Morning person doesn't begin to cover it.\n\nMy wife is not.\n\nWe've been navigating this for over 30 years, and here's what I've learned: you can't fix biology, but you can work with it.`,
    keywords: ["morning person vs night owl marriage", "mismatched sleep schedules couples", "circadian rhythm relationships", "how to manage different sleep schedules", "early riser marriage advice", "Mark Wahlberg sleep schedule"],
    metaDescription: "My wife says I keep a Mark Wahlberg schedule. She's not wrong. After 30 years of mismatched sleep cycles, here's what we've actually learned about biology, marriage, and finding the overlap.",
  },
  {
    title: "I Used to Be Three Different People",
    pillar: "fieldnotes",
    format: "written",
    url: "https://thetacticalgeneralist.substack.com/p/three-different-people",
    description: "For most of my adult life I showed up as three different versions of myself depending on the room. The pandemic collapsed all three into one. Turns out that's the better way.",
    date: "2026-02-26",
    slug: "three-different-people",
    excerpt: `I've spent most of my adult life showing up as three different people.\n\nThere was church-Jeff. White shirt and tie, often a suit, neatly groomed. That version never said anything too casual or too direct. He was measured, presentable, and almost entirely unlike the person who drove to church that morning.\n\nThere was work-Jeff. Button-down shirt, slacks, clean-shaven, well coiffed. He was strategic about what he said and who he said it to. He wore a sport coat when the role seemed to call for it and told people what he thought they wanted to hear more often than what he actually thought.`,
    keywords: ["authenticity at work and home", "how to be more authentic", "different personas at work vs home", "pandemic self discovery", "being yourself in all situations", "authenticity and identity"],
    metaDescription: "I spent most of my adult life showing up as three different people — church-Jeff, work-Jeff, and home-Jeff. The pandemic collapsed all three into one. It turned out to be the most authentic I've ever been.",
  },
  {
    title: "Parent Homework Never Ends",
    pillar: "fieldnotes",
    format: "written",
    url: "https://thetacticalgeneralist.substack.com/p/parent-homework",
    description: "My daughter needed someone to record French audio for a linguistics assignment. She called her dad. I thought I was done with parent homework. I was wrong.",
    date: "2026-03-01",
    slug: "parent-homework-never-ends",
    excerpt: `I'm fluent in French, or at least I used to be. My accent is still very good, but a lot of the vocabulary has leaked out of my brain after 35 years of not having lived in France. When I do get back to France, it tends to return quickly — people keep commenting on how good my accent is, at least until they realize my vocabulary is limited to what you'd find in a children's book.\n\nSo when my daughter, who is in college, needed someone to record 10 to 12 distinct topical blurbs in a foreign language for her linguistics class, she called me. She could have found somebody on campus who spoke another language, but instead she figured it might be easier if her dad did it. She knew my accent was good, and she knew I'd say yes.\n\nShe was right on both counts.`,
    keywords: ["parenting adult children", "parent homework funny stories", "being a parent never ends", "college kid still needs parents", "parenting humor", "funny parenting observations"],
    metaDescription: "I'm fluent in French — or was. When my college daughter needed French audio recordings for a linguistics class, she called me. I thought I'd graduated from parent homework. I hadn't.",
  },
  {
    title: "\"Those Damn Ants\"",
    pillar: "fieldnotes",
    format: "written",
    url: "https://thetacticalgeneralist.substack.com/p/those-damn-ants",
    description: "Six sugar ants on a bathroom sink sent me back forty-two years to my grandma's kitchen and the only time I ever heard her swear. The war continues.",
    date: "2026-03-04",
    slug: "those-damn-ants",
    excerpt: `I was getting ready to brush my teeth when I saw them. Six, maybe eight little sugar ants making their way across my bathroom sink. They acted like they owned the place. I stood there for a second, toothbrush in hand, watching them. I don't know what they were after. Toothpaste, maybe. I have no idea what ants want.\n\nWhat I do know is that the sight of those ants sent me back forty-two years in an instant, to my grandma's kitchen, and the only time in my life I ever heard her swear.\n\nShe was a diminutive woman. Kindness always in her heart. Always encouraging. But sugar ants had gotten into her cupboard, and standing there in her kitchen, she had had enough.`,
    keywords: ["sugar ants in house funny", "dealing with ants at home", "funny home observation stories", "childhood memory story", "ant problem humor", "slice of life writing"],
    metaDescription: "Six sugar ants on my bathroom sink sent me back 42 years to my grandma's kitchen — and the only time in my life I ever heard her swear. A story about ants, memory, and a war that never ends.",
  },
  {
    title: "I've Put In Enough Miles",
    pillar: "fieldnotes",
    format: "written",
    url: "https://thetacticalgeneralist.substack.com/p/ive-put-in-enough-miles",
    description: "A kid on an electric bike whose legs weren't moving sent me back through every bicycle I've ever owned — and every crash, hill, and hard-won mile that came with them.",
    date: "2026-03-06",
    slug: "ive-put-in-enough-miles",
    excerpt: `Glancing over at a crosswalk, I noticed a kid on what I thought was a moped. Full motorcycle helmet, chin guard, face shield, the whole setup. Took me another second to realize he was on a bike. An electric bike. And his legs weren't moving. Not even a little.\n\nI grew up when you had to pedal.\n\nMy first bike was geared so low it required the quads of an Olympian just to get moving. Once you got up to speed, you were fine, but those first few strokes felt like pushing through wet concrete. We lived on a hill, which is great going down. Going up sucked. I'd weave back and forth in a serpentine pattern, fighting the grade, and half the time I'd give up and just push the thing. Nobody offered to motor me up.`,
    keywords: ["cycling memories growing up", "electric bikes vs pedal bikes", "childhood bicycle stories", "life lessons from cycling", "nostalgia and growing older", "letting go of old hobbies"],
    metaDescription: "A kid on an electric bike whose legs weren't moving sent me through every bicycle I've ever owned — and why I've finally decided I've put in enough miles.",
  },
];

/**
 * Pillar display config — maps pillar keys to their tag styles and labels.
 * Colors match the style guide's pillar tag specifications.
 */
export const pillarStyles = {
  finance: {
    bg: 'bg-bronze-light/20',
    border: 'border-bronze-light/40',
    text: 'text-bronze-dark',
    label: 'Personal Finance',
  },
  career: {
    bg: 'bg-info/20',
    border: 'border-info/40',
    text: 'text-info',
    label: 'Business & Career',
  },
  lifeskills: {
    bg: 'bg-copper/20',
    border: 'border-copper/40',
    text: 'text-copper',
    label: 'Life Skills',
  },
  mindset: {
    bg: 'bg-success/20',
    border: 'border-success/40',
    text: 'text-success',
    label: 'Philosophy & Mindset',
  },
  fieldnotes: {
    bg: 'bg-error/20',
    border: 'border-error/40',
    text: 'text-error',
    label: 'Field Notes',
  },
};
