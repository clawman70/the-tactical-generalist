/**
 * Financial Literacy section data.
 *
 * Distinct from src/data/content.js (the personal-essay article feed) on
 * purpose: these are reference guides, not narrative articles, so they don't
 * share a schema. No `date`, `pillar`, or `keywords`-for-a-feed here — instead
 * each guide has a `group` (which section of the landing page it lives under)
 * and a `blocks` array describing its body as structured content instead of
 * a single excerpt/content string, because guides use headings, callouts,
 * and checklists that a plain paragraph string can't represent.
 *
 * Each item has:
 *   slug            — URL segment at /financial-literacy/[slug]. Matches the
 *                     original filename (already a clean, topic-derived slug).
 *   title           — Full title, used for <h1>, card title, and <title> tag.
 *   group           — One of the ids in `guideGroups` below.
 *   description     — Short 1-sentence card summary for the landing page.
 *   metaDescription — Under 160 chars, from the guide's own meta description.
 *   disclaimer      — Guide-specific closing disclaimer text (some guides
 *                     call out a specific detail, e.g. "figures current as
 *                     of August 2026" — preserved per-guide rather than
 *                     flattened to one generic sitewide disclaimer).
 *   blocks          — Structured body content, or `null` if not yet written.
 *                     See GuideBlocks.jsx for the block types this supports
 *                     and src/utils/richText.jsx for the **bold** / internal
 *                     link syntax usable inside any block's text.
 */

export const guideGroups = [
  {
    id: 'getting-money-out',
    label: 'Getting money out: the mechanics',
    guides: [
      'bucket-strategy-101',
      'lot-selection-trick',
      'aca-health-insurance-before-65',
      'roth-conversion-timing',
      'social-security-claiming-couples',
    ],
  },
  {
    id: 'big-decisions',
    label: 'Big decisions you only make once',
    guides: ['dividend-tilt-vs-growth', 'margin-lending-vs-selling', 'house-sale-capital-gains'],
  },
  {
    id: 'process-not-math',
    label: 'Process, not math',
    guides: ['one-more-year-trap', 'retirement-readiness-checklist'],
  },
];

export const guides = [
  {
    slug: 'bucket-strategy-101',
    title: 'Bucket Strategy 101',
    group: 'getting-money-out',
    description: 'Why retirees split savings into cash, bonds, and equities, and what problem that actually solves.',
    metaDescription: 'Why retirees split savings into cash, bonds, and equities buckets, and what problem that structure actually solves.',
    disclaimer: 'This is general education, not personalized advice. How you size and manage buckets depends on your specific situation; talk to a CPA or financial planner before making decisions based on anything here.',
    blocks: [
      { type: 'paragraph', text: "If you've read anything about retirement investing, you've run into the idea of buckets: splitting your savings into separate pools instead of one big portfolio. It sounds like a filing system. It's solving a specific, dangerous problem that only shows up once you start withdrawing money instead of adding to it." },
      { type: 'hr' },
      { type: 'heading', text: 'The Problem: Sequence-of-Returns Risk' },
      { type: 'paragraph', text: "While you're working and saving, a market crash is annoying but not dangerous. You keep contributing, prices eventually recover, and the timing of the crash barely matters to your long-term outcome. Money going in regularly smooths out the bumps." },
      { type: 'paragraph', text: "Retirement flips this. Once you're withdrawing money instead of adding it, when a downturn happens matters enormously, even if the average return over 20 or 30 years ends up being exactly the same." },
      { type: 'paragraph', text: "Here's why. If the market drops 30% in your first year of retirement and you're selling investments to cover living expenses, you're selling more shares to generate the same amount of cash. Those shares are gone; they can't recover with the market later, because you already sold them. Two retirees with identical average returns over their retirement can end up with wildly different outcomes depending purely on whether the crash happened in year one or year fifteen." },
      { type: 'paragraph', text: 'This is called sequence-of-returns risk, and it\'s the single biggest reason "just keep it all in stocks and take the long-run average return" doesn\'t work the same way in retirement as it does while you\'re saving.' },
      { type: 'heading', text: 'The Mechanism: Three Buckets, Three Jobs' },
      { type: 'paragraph', text: "The bucket strategy addresses this by making sure you're never forced to sell stocks during a downturn just to pay for groceries. Each bucket has a different job." },
      { type: 'paragraph', text: "**Bucket 1: Cash.** Enough to cover a year or more of expenses, sitting in something stable: a savings account, money market, or short-term CDs. This is your shock absorber. If the market drops the week you retire, you're spending from here, not selling stocks at a loss." },
      { type: 'paragraph', text: '**Bucket 2: Bonds and stable income.** A few years of expenses in something that moves less dramatically than stocks, like bonds or bond funds. This bucket refills Bucket 1 over time and rides out shorter downturns without much drama.' },
      { type: 'paragraph', text: "**Bucket 3: Equities.** The growth engine. This is the majority of your money, invested for growth because you won't need it for years. It's allowed to be volatile because it has time to recover before you need to touch it." },
      { type: 'paragraph', text: "Here's the mechanism behind \"refilling\": in good years, you sell some equities from Bucket 3 at a gain and move the proceeds into Buckets 1 and 2 to keep them topped off. In bad years, you don't do that; you let Bucket 3 sit and recover while you live off Buckets 1 and 2. The buckets exist specifically so a market crash never forces your hand." },
      {
        type: 'callout',
        variant: 'default',
        label: 'Worth knowing',
        paragraphs: [
          'The behavioral case for bucketing is solid: it keeps you from panic-selling during a downturn. The mathematical case, that bucketing actually beats a disciplined static allocation with regular rebalancing, is genuinely debated among retirement researchers. Treat this as a well-supported framework for behavior, not a proven mathematical edge.',
        ],
      },
      {
        type: 'callout',
        variant: 'warn',
        label: 'Watch for this',
        paragraphs: [
          '"Refilling" means selling equities at a gain, and a sale at a gain is a taxable event. Selling enough from Bucket 3 to top off Buckets 1 and 2 can realize more income than you intended in a given year, which matters if you\'re also managing an ACA subsidy threshold or choosing which lots to sell. Check [Bridging the Gap: Health Insurance Before Medicare](slug:aca-health-insurance-before-65) and [The Lot Selection Trick](slug:lot-selection-trick) before refilling on autopilot.',
        ],
      },
      { type: 'heading', text: 'Common Mistakes' },
      {
        type: 'list',
        items: [
          "**Sizing the cash bucket by feel instead of by need.** Too little cash and you're forced to sell stocks in a downturn anyway, defeating the purpose. Too much cash and you're leaving meaningful growth on the table over a 20-30 year retirement, since cash barely keeps up with inflation.",
          '**Treating the buckets as static.** The whole point is that money moves between buckets over time. Set it up once and never refill it, and Bucket 1 eventually runs dry at the worst possible moment.',
          "**Ignoring where the buckets live, tax-wise.** Which account holds which bucket (regular brokerage vs. IRA vs. Roth) matters for reasons beyond investment strategy, including taxes and healthcare subsidy eligibility. The buckets aren't just about risk; account location affects your tax picture too.",
          '**Assuming "three years of expenses" is a universal number.** How much you need in the safer buckets depends on how volatile your specific spending is, whether you have other guaranteed income (Social Security, a pension) covering baseline needs, and your own tolerance for riding out a downturn without panicking.',
        ],
      },
      {
        type: 'callout',
        variant: 'link',
        label: 'Related guide',
        paragraphs: [
          "Account location doesn't just affect your tax bill, it can also change your ACA premium before Medicare kicks in. See [Bridging the Gap: Health Insurance Before Medicare](slug:aca-health-insurance-before-65) for how that connects.",
        ],
      },
      { type: 'heading', text: 'Quick-Reference Checklist' },
      {
        type: 'checklist',
        items: [
          'Know your actual annual spending need, not a guess',
          'Size Bucket 1 (cash) to cover at least a year of expenses beyond any guaranteed income',
          'Size Bucket 2 (bonds) to cover several more years, enough to ride out a typical downturn',
          'Put the remainder, usually the majority, into Bucket 3 (equities) for long-term growth',
          'Refill Buckets 1 and 2 from Bucket 3 gains in good years, checking the tax and ACA impact of the sale before doing it on autopilot',
          'In a down year, resist refilling from Bucket 3; let it recover instead',
          'Revisit bucket sizes periodically, since spending needs and market conditions both change',
        ],
      },
    ],
  },
  {
    slug: 'lot-selection-trick',
    title: 'The Lot Selection Trick',
    group: 'getting-money-out',
    description: 'A small brokerage-account detail most people get backwards, and what it costs them.',
    metaDescription: 'A small brokerage-account detail most people get backwards, and why it can cost you more than it needs to.',
    disclaimer: 'This is general education, not personalized advice. Brokerage rules and tax treatment vary; talk to a CPA or your brokerage before making decisions based on anything here.',
    blocks: [
      { type: 'paragraph', text: 'If you have a regular, taxable brokerage account and you\'ve owned an investment for a while, you\'ve probably bought shares of it more than once, whether through automatic contributions or just buying more over the years. Each of those individual purchases is called a "lot." Most people never think about this until it\'s time to sell, and by then they\'ve already made the more expensive choice without realizing it.' },
      { type: 'hr' },
      { type: 'heading', text: 'The Problem: Not All Shares Are Taxed the Same' },
      { type: 'paragraph', text: "When you sell an investment, you only owe tax on the gain: the difference between what you paid and what it's worth now. But if you bought shares at different times and different prices, each lot has a different gain." },
      { type: 'paragraph', text: "Say you own 100 shares of the same fund, bought in three separate purchases over several years at three different prices. When you go to sell 30 shares, your brokerage has to decide which 30 shares you're technically selling. That decision changes how much taxable gain you report, even though you're withdrawing the exact same dollar amount either way." },
      { type: 'paragraph', text: "Individual stocks and ETFs generally default to a method called FIFO, first in, first out, meaning your brokerage will sell your oldest shares first unless you tell it otherwise. Mutual funds are a different story: they generally default to average cost instead, which blends every purchase into a single average price rather than tracking each lot separately. Vanguard and Fidelity both default mutual funds to average cost; Schwab's default depends on when the account was opened. The two defaults are usually configured separately in the same brokerage account, so check both, not just one." },
      { type: 'paragraph', text: "Whichever default applies, the oldest shares usually carry the biggest gain, since they've had the most time to grow. That default can quietly maximize your taxable income every time you sell, without you ever choosing it on purpose." },
      {
        type: 'callout',
        variant: 'warn',
        label: 'A one-way door',
        paragraphs: [
          "If a holding has already been sold under average cost, you generally can't go back and retroactively apply specific-lot identification to those shares. The choice has to be made before the sale, not after.",
        ],
      },
      { type: 'heading', text: 'The Mechanism: Specific Lot Selection' },
      { type: 'paragraph', text: 'Most brokerages let you override the default and choose exactly which lot to sell. This is usually called "specific lot" or "specific identification" selling. It costs nothing extra and takes one extra click at the time of sale, but almost nobody uses it because they don\'t know it\'s there.' },
      { type: 'paragraph', text: "Here's where it gets useful. Instead of automatically selling your oldest, usually highest-gain shares, you can choose to sell the lot with the smallest gain relative to its current value. Selling a low-gain lot generates the same cash for you but reports much less taxable income than selling a high-gain lot, even though you're withdrawing an identical amount of money." },
      { type: 'paragraph', text: 'This matters for two reasons. First, it directly affects how much tax you owe. Second, for people managing income carefully, for example staying under an income threshold for a health insurance subsidy, the reported gain is what counts, not how much money physically changed hands. Choosing the right lot can be the difference between staying under a threshold and going over it.' },
      {
        type: 'callout',
        variant: 'warn',
        label: 'The one thing to get right',
        paragraphs: [
          "Measure the gain as a percentage of the investment's current value, not its original purchase price. A lot with a $1,000 gain sounds identical whether the investment is now worth $5,000 or $50,000, but those two lots have very different tax consequences once you look at percentage terms. Comparing gain-to-purchase-price instead of gain-to-current-value is an easy mix-up, and it leads people to pick the wrong lot even when they're trying to do this correctly.",
          "Gain percentage isn't the only variable, though. A lot held under a year is taxed at ordinary income rates no matter how small the gain is, while a lot held over a year gets the lower long-term capital gains rate. A low-gain short-term lot can cost more in tax than a higher-gain long-term lot sitting right next to it. Check the holding period before you check the percentage.",
        ],
      },
      {
        type: 'callout',
        variant: 'link',
        label: 'Related guide',
        paragraphs: [
          'Staying under a subsidy threshold is exactly the situation covered in [Bridging the Gap: Health Insurance Before Medicare](slug:aca-health-insurance-before-65). Lot selection is one of the levers that guide points back to.',
        ],
      },
      { type: 'heading', text: 'Common Mistakes' },
      {
        type: 'list',
        items: [
          '**Not knowing specific lot selection is available at all.** If your brokerage defaults to FIFO or average cost and you never change it, you may be maximizing your taxable gain on every sale without realizing you had a choice.',
          "**Comparing gain-to-cost-basis instead of gain-to-current-value.** Many account statements display gain as a percentage of what you originally paid. That's not the number that tells you which lot to sell. What matters is how much of today's withdrawal is taxable gain, not how much the investment has grown since purchase.",
          '**Picking the lowest-gain lot without checking the holding period.** A small gain taxed at ordinary income rates because the lot is under a year old can cost more than a larger gain taxed at long-term rates. Check both numbers, not just one.',
          '**Treating this as a one-time setup instead of an ongoing decision.** Lot selection matters every single time you sell, not just once. Each sale is a fresh opportunity to choose the lot that best fits your tax situation that year.',
          "**Forgetting this only applies to taxable brokerage accounts.** Retirement accounts (traditional IRA, 401(k), Roth) don't have this issue; money coming out of those is taxed, or not taxed, the same way regardless of which lot it came from. This trick is specific to regular investment accounts outside of retirement accounts.",
          "**Selling a losing lot without checking the wash-sale rule.** If a candidate lot is actually at a loss and you're planning to buy back into the same or a substantially identical investment within 30 days, the wash-sale rule can disallow the loss. Worth a quick check before selling a lot for tax-loss purposes.",
        ],
      },
      { type: 'heading', text: 'Quick-Reference Checklist' },
      {
        type: 'checklist',
        items: [
          "Confirm whether your brokerage's default is FIFO or average cost, and check separately for stocks/ETFs versus mutual funds",
          'Ask your brokerage whether specific lot / specific identification selling is available (most major brokerages offer this at no cost)',
          'Before each sale, compare the available lots by gain as a percentage of current value, not gain as a percentage of original cost',
          "Check each candidate lot's holding period; a smaller gain taxed short-term can cost more than a larger gain taxed long-term",
          'Choose the lot with the best combination of gain-to-current-value ratio and holding period if minimizing taxable income is the goal that year',
          'If selling a lot at a loss, check the wash-sale rule before repurchasing the same or a similar investment',
          "Reassess at each sale; don't assume last year's best lot is still the best choice this year",
          'Keep records of what you sold and why, in case you need to explain your reasoning at tax time',
        ],
      },
    ],
  },
  {
    slug: 'aca-health-insurance-before-65',
    title: 'Bridging the Gap: Health Insurance Before Medicare',
    group: 'getting-money-out',
    description: 'How ACA subsidies work, why the "cliff" matters, and how account choice affects it.',
    metaDescription: "If you're retiring before 65, here's how ACA subsidies actually work, why the income cliff matters, and how account choice affects your premium.",
    disclaimer: 'This is general education, not personalized advice. Your actual numbers, state, and situation will change the details; talk to a professional before making decisions. Figures and legislative status current as of August 2026; the subsidy cliff in particular is the piece most likely to change.',
    blocks: [
      { type: 'paragraph', text: "If you're retiring before 65, you've got a gap to cover: Medicare doesn't kick in until then, so you'll likely be buying insurance through the ACA Marketplace (aka \"Obamacare\"). Good news: it works fine for a lot of early retirees. But there's one thing that trips people up more than anything else: **it's not about how much money you have. It's about how much taxable income shows up on paper each year.**" },
      { type: 'paragraph', text: 'This guide walks through why that matters and how to avoid the common mistakes.' },
      { type: 'hr' },
      { type: 'heading', text: '1. The Big Idea: Income on Paper, Not Wealth in the Bank' },
      { type: 'paragraph', text: "The ACA doesn't care if you have $50,000 or $5 million sitting in accounts. It only looks at your **MAGI** (Modified Adjusted Gross Income), which is basically the taxable income you report on your tax return, plus a couple of add-backs." },
      { type: 'paragraph', text: "This means two retirees with identical net worth can pay wildly different premiums, depending on *how* they pull money out of their accounts. That's the whole game: manage what shows up as taxable income, not how much you actually spend." },
      {
        type: 'callout',
        variant: 'warn',
        label: 'One term, three meanings',
        paragraphs: [
          '"MAGI" isn\'t one number. The MAGI used for ACA subsidies, the MAGI used for Medicare\'s IRMAA surcharge, and plain federal taxable income are three separate calculations that add back different things. Guides in this series that mention MAGI are always talking about the ACA version unless stated otherwise; don\'t assume a number that works for one calculation works for another.',
        ],
      },
      { type: 'heading', text: '2. The "Cliff" You Need to Know About' },
      { type: 'paragraph', text: 'For a few years (2021–2025), there was a safety net: even if your income went above a certain level, your premium was capped at a percentage of your income. That safety net expired at the end of 2025.' },
      { type: 'paragraph', text: "Starting in 2026, we're back to the original rule: **if your household income goes even $1 over 400% of the federal poverty level, you get zero subsidy.** Not a smaller subsidy: zero. It's a hard cutoff, not a gradual phase-out. One detail worth knowing: 2026 coverage is measured against the **2025** federal poverty guidelines, not the 2026 numbers, so check the correct year's table when you're estimating where the line sits." },
      { type: 'paragraph', text: 'A bill to restore the old safety net, H.R. 1834, passed the House in January 2026 but has stalled in the Senate as of August 2026. Plan around the rule that\'s actually in effect, not the one that could come back.' },
      {
        type: 'callout',
        variant: 'default',
        label: 'Practical takeaway',
        paragraphs: ['Know where that income line is for your household size, and treat it like a ceiling, not a suggestion.'],
      },
      {
        type: 'callout',
        variant: 'link',
        label: 'Worth checking',
        paragraphs: [
          'If your household falls under 250% of the federal poverty level, Cost Sharing Reductions on a Silver plan can be worth more than the premium credit itself: they lower your deductible and copays directly. They\'re easy to miss because they only show up on Silver-tier plans.',
        ],
      },
      { type: 'heading', text: '3. Not All Money Is Created Equal (For This Purpose)' },
      { type: 'paragraph', text: "This is the part most people don't realize until it costs them. Where your retirement spending money comes from changes how much it affects your MAGI, sometimes a lot." },
      {
        type: 'table',
        headers: ['Source', 'Effect on MAGI'],
        rows: [
          ['Traditional 401(k) / 403(b) / IRA withdrawals', 'Fully taxable: 100% counts'],
          ['Roth IRA withdrawals (qualified)', { text: "Tax-free: doesn't count at all", good: true }],
          ['Regular brokerage account', 'Only the *gain* counts, not the money you originally put in'],
          ['HSA (used for medical expenses)', { text: "Tax-free: doesn't count", good: true }],
          ['Pension, annuity, part-time work income', 'Fully taxable: counts'],
          ["Social Security (if you've claimed it)", 'Fully taxable for this purpose: 100% counts'],
          ['Municipal bond interest', "Counts in full, even though it's exempt from federal income tax"],
        ],
      },
      {
        type: 'callout',
        variant: 'warn',
        label: 'The most common mistake in this whole guide',
        paragraphs: [
          "Social Security counts in full toward ACA MAGI. Not partially, not a reduced share: the entire benefit amount, the same way it does for the federal tax formula's worst case. If you're modeling an ACA year with Social Security already claimed, use the full number.",
        ],
      },
      { type: 'paragraph', text: "Municipal bond interest is the other one that surprises people. It's exempt from federal income tax, which leads people to assume it's invisible everywhere. For ACA purposes it isn't: it gets added back in full. That matters directly for anyone holding bonds in [Bucket 2 of a bucket strategy](slug:bucket-strategy-101), since that interest counts against your subsidy threshold even though it never shows up as taxable on your federal return." },
      { type: 'paragraph', text: "The standout here is the **Roth IRA**. Because you already paid taxes on that money years ago, pulling it out in retirement is invisible to the ACA. If you have Roth money available, it's usually your most flexible spending source in the years before Medicare." },
      { type: 'paragraph', text: 'The brokerage account row also deserves a second look; see below.' },
      { type: 'heading', text: '4. The Brokerage Account Trick: Gains vs. Principal' },
      { type: 'paragraph', text: 'If you have a regular (non-retirement) investment account, here\'s the good news: when you sell an investment, only the **profit** counts as income, not the whole amount you receive.' },
      { type: 'paragraph', text: "Example in plain terms: if you invested $10,000 years ago and it's now worth $15,000, and you sell it, only that $5,000 gain counts toward your MAGI, not the full $15,000." },
      { type: 'paragraph', text: 'This means you have some control. If your account holds multiple purchases of the same investment made at different times ("lots"), you can choose *which* one to sell. Selling a lot with a smaller built-in gain creates less taxable income than selling one with a bigger gain, even if you\'re withdrawing the exact same dollar amount either way.' },
      {
        type: 'callout',
        variant: 'default',
        label: 'Practical takeaway',
        paragraphs: [
          'Ask your brokerage whether they support "specific lot" selling (most do). It costs nothing to set up and can meaningfully reduce your reported income in a given year.',
        ],
      },
      { type: 'heading', text: '5. The Blending Strategy' },
      { type: 'paragraph', text: 'Almost nobody lives entirely off one account type. The real strategy is sequencing: each year, figure out how much room you have under your income ceiling, then draw from your lowest-impact sources first (Roth, HSA, low-gain brokerage lots) and save the fully-taxable sources (traditional 401(k)/IRA withdrawals) for years when you have more room, or need to go over anyway.' },
      { type: 'paragraph', text: 'This isn\'t a "set it and forget it" thing. It\'s closer to an annual check-in: how much taxable income have I already generated this year, and how much more can I safely add?' },
      { type: 'heading', text: '6. Landmines to Watch For' },
      { type: 'paragraph', text: 'A few things sneak up on people:' },
      {
        type: 'list',
        items: [
          "**December surprise:** mutual funds inside a regular brokerage account regularly distribute capital gains near year-end, income you didn't actively choose to create, but it still counts. Check your holdings each fall.",
          '**Two ways to measure "gain":** make sure whatever tool or statement you\'re using is showing gain compared to today\'s value, not compared to the original purchase price. They tell you different things and it\'s an easy mix-up.',
          '**No repayment safety net anymore:** in the past, there were caps on how much you\'d have to pay back if you underestimated your income. Those caps are gone for 2026. If you guess low and your actual income comes in high, you may owe back the full subsidy amount at tax time. Estimate conservatively.',
          "**Don't forget Social Security and dividends;** both count toward MAGI even though they don't feel like withdrawals.",
        ],
      },
      {
        type: 'callout',
        variant: 'warn',
        label: 'Watch for this',
        paragraphs: ["Guess low on your income estimate and there's no safety net left if you're wrong. Build in a buffer."],
      },
      { type: 'heading', text: '7. Get Professional Help for the Actual Numbers' },
      { type: 'paragraph', text: 'This guide explains the mechanics. It is not a substitute for someone running your specific numbers. Two professionals are worth the money:' },
      {
        type: 'list',
        items: [
          '**A health insurance / ACA broker** (usually free to you, paid by the insurance companies) helps you actually enroll and pick a plan.',
          '**A CPA or fee-only financial planner** helps you model your actual MAGI year to year and makes sure you\'re not accidentally blowing past the cliff.',
        ],
      },
      { type: 'paragraph', text: 'This isn\'t a "wing it" area once real dollars are on the line. A couple hours with a professional before you retire can save you thousands.' },
      { type: 'heading', text: '8. Quick-Reference Checklist' },
      {
        type: 'checklist',
        items: [
          "Know your household's 400% FPL income ceiling for your family size",
          'Know which accounts you\'ll draw from and how each affects MAGI',
          'If you have Roth money, plan to lean on it in gap years',
          'Set up specific-lot selection with your brokerage',
          'Check for year-end capital gain distributions each fall',
          'Build in a buffer: estimate income conservatively, not optimistically',
          'Talk to an ACA broker before open enrollment',
          "Get a CPA or planner to sanity-check your actual numbers before you pull the trigger",
        ],
      },
    ],
  },
  {
    slug: 'roth-conversion-timing',
    title: 'Roth Conversion Timing: The Sweet-Spot Window',
    group: 'getting-money-out',
    description: "Why there's a window where converting money makes the most sense, and why doing it too early or late both cost you.",
    metaDescription: "Why there's a window in retirement where converting traditional retirement money to Roth makes the most sense, and why doing it too early or too late both cost you.",
    disclaimer: 'This is general education, not personalized advice. Roth conversion strategy depends heavily on your specific tax situation; talk to a CPA before making decisions based on anything here. RMD ages and other figures current as of August 2026.',
    blocks: [
      { type: 'paragraph', text: 'A Roth conversion means moving money from a traditional retirement account, like a traditional IRA or 401(k), into a Roth account, paying the tax on it now instead of later. People hear "pay tax now" and assume it\'s something to avoid. But timing is everything here. The same conversion can be a smart move in one year and an expensive mistake in another, using the exact same dollar amount.' },
      { type: 'hr' },
      { type: 'heading', text: "The Problem: Traditional Accounts Come With a Tax Bill You Don't Control" },
      { type: 'paragraph', text: "Money in a traditional IRA or 401(k) hasn't been taxed yet. Every dollar that comes out, whether you're spending it or being forced to withdraw it, gets taxed as ordinary income in the year you take it out." },
      { type: 'paragraph', text: "Here's the part that catches people off guard: the government eventually forces you to start withdrawing from these accounts once you reach a certain age, whether you need the money or not. Those are called Required Minimum Distributions (RMDs). Under current law, the RMD start age is 73 for anyone born between 1951 and 1959, and 75 for anyone born in 1960 or later; this age has moved before and could move again, so confirm the current rule when you're close to it. RMDs can push you into a higher tax bracket later in life, at the exact same time you're also dealing with Social Security income and possibly Medicare surcharges based on income." },
      { type: 'paragraph', text: 'A Roth conversion lets you get ahead of this. You voluntarily pay tax on some of that traditional money now, move it into a Roth account, and after that it grows and can be withdrawn completely tax-free, with no RMDs during your lifetime.' },
      {
        type: 'callout',
        variant: 'warn',
        label: 'Not "no RMDs, ever"',
        paragraphs: [
          'The Roth\'s lifetime RMD exemption is for you, the original owner. It doesn\'t extend to whoever inherits the account. Most non-spouse beneficiaries who inherit a Roth IRA today are subject to a 10-year rule requiring the account to be emptied within a decade, even though the withdrawals themselves stay tax-free. "No RMDs, ever" is a mistake worth catching before it ends up in an estate conversation.',
        ],
      },
      { type: 'paragraph', text: 'The catch is that converting adds to your taxable income in the year you do it. Convert too much, or at the wrong time, and you can trigger the same problems you were trying to avoid: higher tax brackets, Medicare surcharges, or loss of health insurance subsidies.' },
      { type: 'heading', text: 'The Mechanism: Finding the Window' },
      { type: 'paragraph', text: 'The best time to convert is when your taxable income is unusually low compared to what it will be later: a gap year. For most early retirees, that gap sits somewhere between when steady paychecks stop and when Social Security and RMDs start.' },
      { type: 'paragraph', text: "During that window, you may have very little taxable income showing up on paper (see the [ACA](slug:aca-health-insurance-before-65) and [lot selection](slug:lot-selection-trick) guides for why account type and withdrawal choices affect this). That low-income period is exactly when converting traditional money to Roth costs the least in tax, because you're filling up the lower tax brackets with the conversion instead of your regular income." },
      {
        type: 'callout',
        variant: 'link',
        label: 'Related guide',
        paragraphs: [
          'A big conversion in an ACA-dependent year can push your income over the subsidy cliff and cost more in lost subsidies than the conversion saves in future tax. See [Bridging the Gap: Health Insurance Before Medicare](slug:aca-health-insurance-before-65) before sizing a conversion during those years. Many people intentionally hold off on large conversions until after Medicare starts, when the ACA cliff is no longer a factor, even though tax brackets alone could otherwise suggest converting earlier.',
        ],
      },
      { type: 'paragraph', text: "The \"sweet spot\" is different for everyone, but the pattern is consistent: it's a window bounded on one side by income being low enough that converting is cheap, and on the other side by RMDs about to start, at which point converting is no longer optional. Once RMDs begin, the government sets the withdrawal amount and the tax rate applies to whatever that amount is." },
      {
        type: 'callout',
        variant: 'warn',
        label: 'What actually happens once RMDs start',
        paragraphs: [
          "Two things people get backwards here. First, you can't convert the amount that satisfies your RMD; the IRS requires the RMD to actually be withdrawn (and taxed as ordinary income) before any additional traditional-account money that year can be converted instead. Second, any amount you convert above the RMD does still reduce future RMDs, since it's no longer sitting in the traditional account being counted. It's simply a more expensive way to reduce future RMDs than converting earlier would have been, because you're paying tax on the RMD portion regardless and then paying tax again on whatever you convert on top of it.",
        ],
      },
      { type: 'heading', text: 'The Two Five-Year Rules' },
      { type: 'paragraph', text: 'This is the part most conversion guides skip, and it matters most for exactly the early-retiree audience doing gap-year conversions in the first place. There are two separate five-year clocks, and confusing them can trigger a penalty on money you already paid conversion tax on.' },
      { type: 'paragraph', text: '**The qualified distribution clock.** To withdraw Roth earnings completely tax-free and penalty-free, your Roth needs to have been open at least five years, and you need to be 59½ or older (or meet another exception). This clock starts on January 1 of the year of your first Roth contribution or conversion, whichever came first, and it applies once across all your Roth accounts combined, not separately for each one.' },
      { type: 'paragraph', text: "**The conversion-specific clock.** This one is different and easy to miss. Each conversion starts its own five-year clock for penalty purposes. If you withdraw converted principal before that specific conversion's five years are up, and you're under 59½, the withdrawal can trigger the 10% early withdrawal penalty on that converted amount, even though you already paid income tax on it when you converted it. Paying the conversion tax doesn't buy immediate penalty-free access to the money if you're under 59½." },
      {
        type: 'callout',
        variant: 'warn',
        label: 'Why this matters for early retirees specifically',
        paragraphs: [
          'A "Roth conversion ladder," converting a chunk each year and living off older converted amounts once their five years are up, only works if each year\'s conversion is tracked separately and none of it gets touched early. Treating all your converted money as one pool instead of a set of individually aging conversions is how people accidentally trigger a penalty they thought they\'d already paid their way out of.',
        ],
      },
      { type: 'heading', text: 'Common Mistakes' },
      {
        type: 'list',
        items: [
          '**Converting too early, while still working.** Converting on top of a full salary just adds the conversion to your highest tax bracket, which is the opposite of the goal.',
          '**Converting during ACA-subsidy years without checking the cliff.** A conversion that looks like a great tax move on paper can cost more in lost health insurance subsidies than it saves, if it pushes income over the line. See the [ACA guide](slug:aca-health-insurance-before-65) for how that cliff works.',
          "**Waiting too long and getting caught by RMDs anyway.** If you wait until RMDs force withdrawals, you've lost the ability to control the timing and amount; the government sets both for you at that point.",
          '**Converting a huge amount in one year to "get it over with."** Large conversions can push you into a much higher tax bracket for that single year than spreading the same total conversion across several years would. Filling up a bracket gradually, year by year, is usually cheaper than one giant conversion.',
          '**Having tax withheld from the conversion itself while under 59½.** If you let the brokerage withhold conversion tax from the traditional account rather than paying it from outside funds, the withheld portion is treated as a distribution to you, not a conversion, and can trigger the 10% early withdrawal penalty if you\'re under 59½. Pay the tax from a separate account whenever possible.',
          '**Ignoring the pro-rata rule if you hold any pre-tax IRA money.** If you have both after-tax and pre-tax dollars across your traditional IRAs, you can\'t choose to convert just the after-tax portion. The IRS aggregates every traditional IRA you own to determine what percentage of any conversion is taxable, regardless of which specific account the conversion comes from. This is the detail that derails a "backdoor Roth" most commonly for someone who also has an old rollover IRA sitting around.',
          "**Forgetting Medicare surcharges (IRMAA) don't wait until you're on Medicare.** IRMAA is based on a two-year lookback: income at 63 and 64 sets your premiums at 65 and 66. A large conversion in those lookback years can raise Medicare premiums you haven't even become eligible for yet, not just conversions done after you're already enrolled.",
        ],
      },
      { type: 'heading', text: 'Quick-Reference Checklist' },
      {
        type: 'checklist',
        items: [
          'Identify your realistic income gap years: after steady income stops, before Social Security/RMDs start',
          "If you're relying on ACA subsidies, understand the income cliff before converting anything",
          'Convert gradually, filling up a target tax bracket each year rather than converting a lump sum',
          'Know your RMD start age (73 or 75, depending on birth year under current law) and work backward from it',
          'Once RMDs start, take the RMD first; only amounts converted above it are possible, and those still reduce future RMDs',
          "Track each year's conversion separately and know its individual five-year clock before touching that money early",
          'Pay conversion tax from outside funds, not by withholding from the converted amount, if under 59½',
          'Check for pre-tax balances across all your traditional IRAs before assuming a conversion is tax-free under the pro-rata rule',
          'If on or approaching Medicare, check how a conversion in a lookback year could affect premium surcharges two years out',
          "Revisit the plan annually; tax law, your income, and account balances all shift the ideal conversion amount from year to year",
        ],
      },
    ],
  },
  {
    slug: 'social-security-claiming-couples',
    title: 'Social Security Claiming Strategy for Couples',
    group: 'getting-money-out',
    description: "Why claiming age isn't just an individual decision when you're married.",
    metaDescription: "Why claiming age isn't just an individual decision when you're married, and how spousal and survivor benefits change the math.",
    disclaimer: 'This is general education, not personalized advice. Social Security rules are complex and situation-specific; talk to a financial planner or use the Social Security Administration\'s own tools before making decisions based on anything here. Rules current as of August 2026.',
    blocks: [
      { type: 'paragraph', text: "Most people know the basic idea: you can claim Social Security starting at 62, but waiting until 70 gets you a bigger monthly check. What a lot of couples miss is that this isn't really two separate decisions. One spouse's claiming choice can directly affect how much the other spouse receives, both while you're both alive and after one spouse passes away." },
      { type: 'hr' },
      { type: 'heading', text: 'The Problem: Individual Advice Doesn\'t Account for the Other Person' },
      { type: 'paragraph', text: 'Most Social Security calculators and articles are written as if you\'re claiming for yourself alone. Delay from full retirement age to 70 and your own benefit grows by roughly 8% a year; that part is accurate and simple. Claim between 62 and full retirement age instead and you\'re on a different curve entirely: a reduction of roughly 6.67% a year for the first three years early, then roughly 5% a year for any year before that. It\'s easy to flatten both of these into one story, "8% a year from 62 to 70," which isn\'t right in either direction. And even stated correctly, it\'s incomplete for a married couple, because two other mechanisms only exist because you\'re married: spousal benefits and survivor benefits.' },
      { type: 'paragraph', text: '**Spousal benefit.** A spouse can claim a benefit based on the other spouse\'s work record instead of, or compared against, their own, if that produces a larger check. This matters most when one spouse earned significantly less over their career, or didn\'t work as long. Three constraints worth knowing up front. The spousal benefit tops out at 50% of the higher earner\'s full retirement age benefit; delaying past full retirement age never grows that 50%, unlike delaying your own benefit. The higher earner also has to file for their own benefit before a spousal benefit becomes available at all; the old strategy of filing and immediately suspending to unlock a spouse\'s benefit ended in 2016. And for anyone born in 1954 or later, deemed filing means you can\'t choose to claim only the spousal piece while letting your own benefit keep growing; filing for one automatically files for both, whichever is larger.' },
      { type: 'paragraph', text: "**Survivor benefit.** When one spouse dies, the surviving spouse doesn't keep both checks; they keep whichever is larger, and the smaller one disappears. This means the higher earner's claiming age strongly shapes what the surviving spouse will eventually receive, though it isn't an absolute guarantee. The survivor benefit is itself reduced if the surviving spouse claims it before their own full retirement age, as early as 60, and it's capped under a rule called RIB-LIM if the higher earner claimed early rather than waiting. Delaying the higher earner's claim raises the ceiling on what the survivor can eventually get; it doesn't lock in a fixed number regardless of the survivor's own choices." },
      {
        type: 'callout',
        variant: 'warn',
        label: 'The fact most guides leave out',
        paragraphs: [
          "Survivor benefits aren't subject to deemed filing. A surviving spouse can file for the survivor benefit alone and let their own retirement benefit keep growing until 70, or do it the other way around: claim their own benefit first and switch to the survivor benefit later if it becomes larger. That flexibility doesn't exist for spousal benefits while both spouses are alive, and it's easy to miss if you're only thinking about the living-spouse rules.",
        ],
      },
      {
        type: 'callout',
        variant: 'default',
        label: 'Why this matters',
        paragraphs: [
          "Because of survivor benefits, the higher earner delaying their claim isn't just about maximizing their own check. It's effectively also buying longevity insurance for whichever spouse lives longer.",
        ],
      },
      { type: 'heading', text: 'The Mechanism: Sequencing Two Claims Instead of One' },
      { type: 'paragraph', text: 'Because of how spousal and survivor benefits work, couples get better lifetime outcomes by treating the two claiming decisions as one coordinated plan rather than two independent ones. A common pattern:' },
      { type: 'paragraph', text: '**The higher earner delays as long as reasonably possible** (up to age 70), because their claiming age determines both their own maximum benefit and the survivor benefit ceiling for their spouse later. This is the single highest-leverage decision in the whole plan, precisely because it affects two people\'s income, potentially for decades.' },
      { type: 'paragraph', text: "**The lower earner has more flexibility, but more flexibility isn't the same as no cost.** They can claim earlier, sometimes significantly earlier, especially if their own benefit would be smaller than a future spousal or survivor benefit anyway. What claiming early does cost them: any future spousal top-off gets permanently reduced too. A spousal benefit claimed at 62 instead of full retirement age lands around 32.5% of the higher earner's benefit instead of the full 50%, and the lower earner can't collect a spousal benefit at all until the higher earner actually files. Claiming early can still make sense, especially to bring in income during a gap year, but it's a real tradeoff, not a free option." },
      { type: 'paragraph', text: "If the lower earner is still working or consulting after claiming early, one more wrinkle applies: the earnings test withholds benefits above an annual limit until full retirement age. That money isn't lost forever, it gets credited back later as a higher benefit once full retirement age arrives, but it changes the near-term cash flow math if income keeps coming in." },
      { type: 'paragraph', text: 'The right combination depends on the gap between the two spouses\' benefit amounts, the age gap between spouses, health and family longevity, and how much guaranteed income you need to cover expenses before other assets kick in.' },
      { type: 'heading', text: "Delaying Isn't Only About Maximizing the Benefit" },
      { type: 'paragraph', text: 'Most explanations of "wait until 70" stop at the roughly 8%-per-year increase that applies from full retirement age to 70. That\'s real, but for anyone running a broader income-timing strategy in retirement, delaying the claim does more than grow the check. It also keeps a lever available for managing taxable income in the years before you claim.' },
      {
        type: 'list',
        items: [
          "**It extends your low-income planning window.** Once claimed, Social Security starts counting toward your income picture every year going forward, though how much varies by which calculation is running. Under the federal tax formula, up to 85% of the benefit can become taxable depending on your other income that year. For ACA subsidy purposes, the full benefit counts. For IRMAA, it's the taxable portion under the federal formula that counts (see the note on MAGI definitions in [the ACA guide](slug:aca-health-insurance-before-65)). Not claiming yet keeps all three calculations simpler during years where you're deliberately managing your tax bracket, for example doing Roth conversions or staying under an ACA subsidy threshold.",
          "**It avoids stacking benefit income on top of a high-conversion year.** Up to 85% of a Social Security benefit can become taxable under the federal formula, depending on your other income that year. Claiming into the same year as a large Roth conversion stacks two income sources you'd otherwise want to keep separate.",
          "**It avoids adding to a Medicare surcharge lookback year.** Medicare premium surcharges (IRMAA) are based on income from two years prior, which means decisions made at 63 and 64 set your premiums at 65 and 66, not decisions made once you're already on Medicare. If you're already doing a large conversion in a lookback year, adding Social Security income on top can push you into a higher surcharge tier than either one alone would have.",
          "**It locks in a larger, guaranteed, inflation-protected income floor for later.** Once the active income-sequencing years are behind you, that fixed check is one less variable left to manage.",
        ],
      },
      { type: 'paragraph', text: "None of this replaces the core math of delaying for a bigger check. It's a second, independent reason that can matter just as much, especially for anyone coordinating claiming with conversions or subsidy management in the years leading up to 70." },
      {
        type: 'callout',
        variant: 'link',
        label: 'Related guides',
        paragraphs: [
          'The tax-bracket and subsidy management this section describes is covered in more depth in [Bridging the Gap: Health Insurance Before Medicare](slug:aca-health-insurance-before-65), and in [Roth Conversion Timing: The Sweet-Spot Window](slug:roth-conversion-timing).',
        ],
      },
      { type: 'heading', text: 'Common Mistakes' },
      {
        type: 'list',
        items: [
          'Treating the delay-to-70 decision as purely about the bigger check. The benefit-growth math is only half the picture; the income-sequencing side above gets left out entirely.',
          "Both spouses claiming at the same age just because it feels simpler. The two decisions don't need to happen at the same time, and treating them identically usually leaves money on the table for one spouse or the other.",
          "Ignoring the survivor benefit entirely. Some couples focus only on maximizing combined income while both are alive and don't think through what happens to the survivor's income after one spouse passes. The survivor benefit can matter for 10, 20, or more years of a longer-living spouse's life.",
          "Assuming the lower earner should always claim as early as possible. This is usually right, but not automatic. If the lower earner's own benefit is closer to the higher earner's, or there's a large age gap, the math can shift.",
          'Not accounting for health and family longevity. Claiming strategy is partly a bet on how long each spouse will live. A couple with a strong family history of longevity benefits more from delaying than a couple where health concerns make an earlier claim more sensible.',
          'Forgetting Social Security counts differently depending on the calculation. Up to 85% is taxable under the federal income tax formula, but ACA subsidy math counts the full benefit, and IRMAA uses the taxable portion under the federal formula. Conflating these three when coordinating claiming with other income-timing decisions, like Roth conversions, is an easy way to misjudge how much room you actually have.',
        ],
      },
      {
        type: 'callout',
        variant: 'warn',
        label: 'Watch for this',
        paragraphs: [
          "The survivor benefit is the one couples skip the most. It doesn't show up until one spouse is gone, which is exactly why it's easy to leave out of the plan today.",
        ],
      },
      { type: 'heading', text: 'Quick-Reference Checklist' },
      {
        type: 'checklist',
        items: [
          "Get each spouse's individual benefit estimate at 62, full retirement age, and 70",
          'Identify who the higher earner is and prioritize delaying their claim, if feasible',
          "Model what the survivor benefit would look like under different claiming scenarios, not just the combined income while both are alive",
          "Consider the lower earner claiming earlier if it doesn't meaningfully reduce their long-term outcome",
          'Factor in health history and expected longevity for both spouses, not just the general "wait until 70" rule of thumb',
          'Check how claiming timing interacts with other income decisions in the same years (Roth conversions, ACA subsidies)',
          "If delaying, confirm it's serving both goals, benefit growth and keeping income low for other planning moves, not just one",
          "Revisit the plan if either spouse's health or work situation changes materially before claiming",
        ],
      },
    ],
  },
  {
    slug: 'dividend-tilt-vs-growth',
    title: 'Dividend Tilt vs. Growth and Harvesting',
    group: 'big-decisions',
    description: '"Income investing" for retirement isn\'t what it sounds like.',
    metaDescription: "Why income investing for retirement isn't what it sounds like, and how it compares to a growth-plus-selling approach.",
    disclaimer: 'This is general education, not personalized advice. Investment strategy depends on your specific goals and risk tolerance; talk to a financial advisor before making decisions based on anything here.',
    blocks: [
      { type: 'paragraph', text: "A lot of retirement advice leans hard on dividend-paying stocks: build a portfolio of dividends and live off the income, never touch the principal. It sounds appealingly simple: money shows up, you spend it, your shares stay put. It's also, for a lot of retirees, a worse plan than it sounds like." },
      { type: 'hr' },
      { type: 'heading', text: 'The Problem: "Income" Is a Feeling, Not a Financial Advantage' },
      { type: 'paragraph', text: "The appeal of dividend investing is psychological as much as financial. Watching cash arrive without having to sell anything feels safer than selling shares for spending money. But a dividend isn't free money showing up on top of your investment's value. When a company pays a dividend, the value of the stock drops by roughly that same amount. You're not getting extra money; you're getting the same money, delivered differently, and you don't get to choose when." },
      { type: 'paragraph', text: 'This matters more than it sounds like, for two reasons.' },
      { type: 'paragraph', text: "**You don't control the timing or amount.** Dividend payments happen on the company's schedule, not yours. If you need more income in a given month, or less, a fixed dividend stream doesn't flex the way selling exactly the shares you need would." },
      { type: 'paragraph', text: "**Dividends are also a tax event, whether you wanted the income that year or not.** If a dividend arrives inside a taxable account, it counts as income the year it's paid, even if you didn't need the cash and would rather have left the money invested. This can quietly push you over an income threshold you were otherwise managing carefully." },
      {
        type: 'callout',
        variant: 'link',
        label: 'Related guide',
        paragraphs: [
          'An unwanted dividend can push you past exactly the kind of threshold covered in [Bridging the Gap: Health Insurance Before Medicare](slug:aca-health-insurance-before-65). Income is income to the ACA, whether you asked for it or not.',
        ],
      },
      { type: 'heading', text: 'The Mechanism: Selling What You Need, When You Need It' },
      { type: 'paragraph', text: 'The alternative approach is to hold a portfolio built primarily for growth (fewer high-dividend holdings, more emphasis on total return) and generate spending money by selling shares deliberately, sometimes called "harvesting." Instead of waiting for the company to decide how much cash to send you and when, you decide exactly how much to sell and which shares to sell to control the tax impact.' },
      { type: 'paragraph', text: "This approach gives you three things dividend income doesn't:" },
      { type: 'paragraph', text: "**Control over timing.** Sell more in a year when you need more, less in a year when you don't. Dividends don't offer that flexibility; the payment happens regardless of your actual spending need that year." },
      { type: 'paragraph', text: "**Control over tax impact.** Selling lets you choose which lots to sell and how much gain to realize. A dividend's tax treatment is fixed the moment it's paid; you have no say in how much of it becomes taxable income." },
      { type: 'paragraph', text: "Worth being precise here: qualified dividends and long-term capital gains are taxed at the same rates, 0%, 15%, or 20% depending on income. This isn't a strategy for getting a better tax rate. It's a strategy for controlling *when* the taxable event happens, which matters just as much when you're managing a threshold rather than a rate." },
      { type: 'paragraph', text: "**No forced income in years you don't need it.** If markets are down and you don't need to sell anything that year, you don't have to. A dividend-focused portfolio still pays out on schedule during a downturn, which can mean realizing income (and tax) you didn't need in a year you'd rather have left everything untouched." },
      { type: 'paragraph', text: "None of this means dividend-paying stocks are bad investments. Many excellent, stable companies pay dividends, and a portfolio built for growth may still include them. The distinction is between *choosing a portfolio because it pays dividends* versus *choosing a portfolio for total return and treating any dividends it happens to produce as incidental*." },
      {
        type: 'callout',
        variant: 'link',
        label: 'Related guide',
        paragraphs: [
          'When you do sell for spending money, which shares you sell matters. See [The Lot Selection Trick](slug:lot-selection-trick) for how to control the tax impact of a sale the same way you\'d want to control a dividend.',
        ],
      },
      { type: 'heading', text: 'Common Mistakes' },
      {
        type: 'list',
        items: [
          'Assuming dividend income doesn\'t count against income thresholds. It does. Dividends inside a taxable account count as reportable income exactly like a stock sale would, and they show up whether or not you wanted them that year.',
          "Applying any of this inside a retirement account. Everything above is about taxable brokerage accounts. Inside a traditional IRA or 401(k), dividends and gains aren't taxed as they occur either way, so the timing-and-control argument for growth over dividends doesn't apply the same way. Inside a Roth, neither one is ever taxed. This guide is specifically about money outside of retirement accounts.",
          'Building a portfolio around yield instead of quality and growth. Chasing higher dividend yields can mean loading up on companies with weaker growth prospects, since a high yield is sometimes a sign the market expects trouble, not stability.',
          "Believing dividends are \"safer\" because you're not selling anything. The portfolio's value still moves with the market whether you're collecting dividends or selling shares. Not selling doesn't protect you from a decline; it just changes how the same underlying risk shows up.",
          'Ignoring December distributions. Mutual funds, not just individual dividend stocks, can distribute capital gains near year-end, creating a dividend-like income event inside otherwise growth-focused holdings. This is a landmine worth checking every fall regardless of which strategy you\'re using. ETFs are structured to distribute far fewer capital gains than mutual funds because of how shares get created and redeemed behind the scenes, which is worth knowing if you\'re choosing between a mutual fund and an ETF version of the same strategy.',
        ],
      },
      {
        type: 'callout',
        variant: 'warn',
        label: 'Watch for this',
        paragraphs: ["A dividend-heavy portfolio still pays out during a market downturn. It doesn't pause just because you'd rather leave everything untouched that year."],
      },
      { type: 'heading', text: 'Quick-Reference Checklist' },
      {
        type: 'checklist',
        items: [
          "Understand that dividends reduce the underlying investment's value by roughly the amount paid; it isn't income on top of growth",
          'Check whether current holdings are generating more dividend income than you actually need to spend in a given year',
          "If managing an income threshold, like an ACA subsidy cliff, account for dividend income the same way you'd account for a stock sale",
          'Compare a "sell what I need" approach against a dividend-heavy approach for actual control over timing and tax impact',
          'Check for year-end capital gain distributions on any mutual funds, regardless of which strategy you\'re using',
          "Don't chase yield alone; evaluate dividend-paying holdings on the same quality and growth basis as anything else in the portfolio",
        ],
      },
    ],
  },
  {
    slug: 'margin-lending-vs-selling',
    title: 'Margin Lending vs. Selling',
    group: 'big-decisions',
    description: "When borrowing against a portfolio actually makes sense, and when it's just deferred pain.",
    metaDescription: "When borrowing against a portfolio actually makes sense in retirement, and when it's just deferred pain with extra steps.",
    disclaimer: 'This is general education, not personalized advice. Margin lending carries real risk of forced liquidation and varies by lender and market conditions; talk to a CPA or financial advisor before making decisions based on anything here.',
    blocks: [
      { type: 'paragraph', text: 'There\'s a pitch that shows up periodically in financial media and from some advisors: instead of selling investments to fund retirement spending, and paying capital gains tax on the sale, borrow against your portfolio instead. "Buy, borrow, die" is the shorthand version. It\'s a real strategy, and it can genuinely work in specific situations. It\'s also frequently oversold as a universal trick, without walking through the math that determines whether it actually helps.' },
      { type: 'hr' },
      { type: 'heading', text: "The Problem: Borrowing Isn't Free, It's a Different Kind of Cost" },
      { type: 'paragraph', text: "Selling an investment to generate spending money triggers capital gains tax on the portion that's a gain. Borrowing against the portfolio instead, through a margin loan or securities-backed line of credit, doesn't trigger that tax, because you haven't sold anything. This is the entire appeal, and it's real." },
      { type: 'paragraph', text: "But borrowed money isn't free. You're paying interest on the loan, and that interest is a real, ongoing cost that keeps accruing for as long as the loan is outstanding. The question isn't whether this avoids tax; it does. The real question is whether the interest costs more or less than the tax would have." },
      { type: 'paragraph', text: "That comparison depends heavily on one number most people don't think to check: how much of your portfolio's current value is actually gain versus original cost, your cost basis ratio. If most of an account's value is gain, selling triggers a bigger tax hit, and borrowing looks more attractive by comparison. If the gain is a smaller share of the account's value, selling triggers a smaller tax hit, and the math shifts hard toward just selling, because there's less tax to avoid in the first place while the interest cost keeps accruing regardless." },
      { type: 'heading', text: 'The Mechanism: Running the Actual Numbers' },
      { type: 'paragraph', text: "To evaluate this honestly, compare two real costs over the time you'd actually be carrying the strategy:" },
      { type: 'paragraph', text: "**Cost of selling:** the capital gains tax rate applied to the gain portion of whatever you'd need to sell to generate the spending money." },
      { type: 'paragraph', text: '**Cost of borrowing:** the margin interest rate, applied to the loan balance, for as long as the loan is outstanding. In a "buy, borrow, die" strategy, that can be years or decades.' },
      { type: 'paragraph', text: "A one-time tax bill and an ongoing interest cost aren't directly comparable at a glance; you have to run them out over your actual expected time horizon. A common finding: if the appreciation in the account is roughly proportional to the cost basis, meaning a meaningful chunk of the account's value is original principal and not gain, the tax savings from avoiding a sale are modest, while margin interest keeps compounding for the full life of the loan. Over enough years, the accumulated interest cost can end up several times larger than the one-time tax bill it was meant to avoid." },
      {
        type: 'callout',
        variant: 'link',
        label: 'Related guide',
        paragraphs: [
          'Calculating your actual cost basis ratio uses the same gain-versus-current-value math covered in [The Lot Selection Trick](slug:lot-selection-trick). Get that number right before running any of this comparison.',
        ],
      },
      { type: 'paragraph', text: "There's also a structural risk that doesn't show up in a simple interest-rate comparison: **margin loans can be called.** If the portfolio's value drops enough, the lender can require you to deposit more collateral or sell holdings immediately to cover the loan, potentially forcing a sale at the worst possible time. That's the exact outcome a bucket strategy is designed to prevent. A margin strategy without a clear plan for how the loan eventually gets repaid or unwound is a real vulnerability, not a detail to gloss over." },
      {
        type: 'callout',
        variant: 'warn',
        label: 'Watch for this',
        paragraphs: [
          'A margin call doesn\'t wait for a convenient time. It can force a sale in the middle of the exact downturn a bucket strategy exists to protect you from. See [Bucket Strategy 101](slug:bucket-strategy-101) for the mechanics of avoiding a forced sale in the first place.',
        ],
      },
      { type: 'paragraph', text: "One more factor that usually strengthens the case for just selling: margin interest is generally not deductible in this situation. The deduction is limited to net investment income, requires itemizing instead of taking the standard deduction, and doesn't apply when the loan is funding personal spending or retirement withdrawals rather than more investing. Assume you're paying the full interest cost with no tax offset unless a CPA confirms otherwise for your specific situation." },
      { type: 'heading', text: 'Common Mistakes' },
      {
        type: 'list',
        items: [
          "Comparing the tax rate to the interest rate directly, without running the actual math. A lower interest rate than the tax rate sounds like an easy win, but a one-time cost and an ongoing cost aren't the same kind of number. You have to compare them over your real time horizon, not just look at the two percentages side by side.",
          "Not checking the account's actual cost basis ratio first. The whole strategy depends on how much of the account is gain versus original principal. Skipping this step means comparing against a hypothetical instead of your actual numbers.",
          "Ignoring the loan-call risk. A margin loan isn't a fixed, guaranteed arrangement. A market downturn can force a sale, or a collateral call, at the worst possible time, undermining the entire reason to borrow instead of sell in the first place.",
          'Having no unwind plan. "Buy, borrow, die" as a phrase implies the loan is meant to be resolved by inheritance and a cost-basis step-up, which is a specific and fairly narrow situation. If that\'s not actually your plan, you need a real answer for how and when the loan gets repaid.',
        ],
      },
      { type: 'heading', text: 'Quick-Reference Checklist' },
      {
        type: 'checklist',
        items: [
          "Calculate your account's actual cost basis ratio (gain vs. original principal) before assuming this strategy helps",
          'Compare the one-time tax cost of selling against the ongoing interest cost of borrowing, over your realistic time horizon, not just the two rates side by side',
          "Understand your lender's margin call terms and what triggers one",
          'Have an explicit plan for how the loan eventually gets repaid or unwound',
          'Reassess if the interest rate environment or your portfolio\'s basis ratio changes materially; margin rates are usually floating, so a rate hike raises your cost automatically without you doing anything',
          "Don't adopt this strategy solely because tax-free borrowing sounds better than a taxable sale; the comparison only holds up if the numbers actually favor it",
        ],
      },
    ],
  },
  {
    slug: 'house-sale-capital-gains',
    title: 'The House Sale and Capital Gains Exclusion Trap',
    group: 'big-decisions',
    description: 'How the home sale tax exclusion works and what documentation you need before you list.',
    metaDescription: 'How the home sale tax exclusion actually works, and why the documentation you need has to be gathered before you list, not after.',
    disclaimer: 'This is general education, not personalized advice. Exclusion amounts, eligibility rules, and cost basis treatment can vary by situation; talk to a CPA before making decisions based on anything here. Figures current as of August 2026.',
    blocks: [
      { type: 'paragraph', text: "Selling a long-owned home is one of the biggest single financial events in a lot of people's retirement transitions, and one of the most commonly misunderstood, because the tax rule that protects most sellers has a limit that catches people who've owned their home a long time or made significant improvements over the years." },
      { type: 'hr' },
      { type: 'heading', text: "The Problem: The Exclusion Isn't Unlimited" },
      { type: 'paragraph', text: "When you sell your primary home, U.S. tax law lets you exclude a chunk of the gain from capital gains tax: currently up to $250,000 for a single filer, or $500,000 for a married couple filing jointly. That's available as long as you've owned and lived in the home as your primary residence for at least two of the last five years before the sale, and you haven't used the exclusion on a different home sale within the prior two years." },
      { type: 'paragraph', text: "The $500,000 married-filing-jointly number has a condition that surprises remarried couples specifically: both spouses need to individually meet the two-of-five-years ownership and use test, and neither spouse can have claimed the exclusion on a different home within the prior two years. A couple where one spouse recently used the exclusion on a previous home, from an earlier marriage or otherwise, may only get the $250,000 single amount, not the full $500,000." },
      { type: 'paragraph', text: "For a lot of sellers, that exclusion covers the entire gain and the sale is a non-event, tax-wise. The trap is for people who've owned their home a long time, especially in a market where values have risen substantially. The gain can exceed the exclusion amount, and the excess is taxed as a capital gain like any other investment sale." },
      { type: 'paragraph', text: "This surprises people because the exclusion feels large enough to assume it covers everything. Whether it actually does depends entirely on your gain, sale price minus your cost basis, not on how long you've lived there or how much you paid originally in isolation." },
      { type: 'heading', text: 'The Mechanism: Cost Basis Is the Whole Game' },
      { type: 'paragraph', text: "Your gain isn't simply sale price minus original purchase price. Your actual cost basis includes the original purchase price plus the cost of significant improvements made over the years you owned the home: a new roof, a major renovation, an addition, and similar capital improvements, not routine repairs or maintenance." },
      { type: 'paragraph', text: 'This matters enormously because a higher cost basis means a smaller gain, which means less of the sale is taxable, or none of it if the adjusted gain falls under the exclusion. Someone who bought a home decades ago and made significant improvements over time may have a real cost basis far higher than the original purchase price, but only if they can document those improvements.' },
      { type: 'paragraph', text: "Here's the trap: cost basis documentation needs to exist before you sell, and ideally it should have been kept all along. Trying to reconstruct decades of receipts for a roof replacement, a kitchen remodel, or an addition after you've already listed the house, or worse, after it's sold, is far harder than pulling together records you kept as you went. Some of this may be reconstructable through contractor records, permits, or financing documents, but it's meaningfully more work and less reliable than having kept records from the start." },
      {
        type: 'callout',
        variant: 'warn',
        label: 'Watch for this',
        paragraphs: [
          "Cost basis documentation is easiest to gather the year you did the work. Waiting until you're listing the house to hunt down a roof invoice from fifteen years ago is the hard way to do this.",
        ],
      },
      { type: 'paragraph', text: 'Two additional wrinkles worth knowing before you assume the exclusion handles everything. If you ever took a home office deduction or rented out part of the house, any depreciation you claimed, or should have claimed, gets recaptured at ordinary income rates up to 25%, and the exclusion doesn\'t shield that portion. Separately, the Net Investment Income Tax adds another 3.8% on top of capital gains once your household MAGI exceeds $200,000 for a single filer or $250,000 for a married couple filing jointly. Those thresholds have been frozen since 2013 and haven\'t been adjusted for inflation, so more sellers cross them every year without their income actually feeling higher.' },
      { type: 'heading', text: 'Common Mistakes' },
      {
        type: 'list',
        items: [
          "Assuming the exclusion automatically covers the full gain. It only does if the gain is under the threshold. Long ownership periods and strong home price appreciation can push the actual gain above $250,000/$500,000 without the seller realizing it until they run the numbers.",
          "Not tracking capital improvements as they happen. Routine maintenance, repainting, fixing a leak, doesn't count toward cost basis. Capital improvements, a new roof, a major renovation, an addition, do. Confusing the two, or simply not keeping records at all, can mean overpaying tax on a gain that should have been smaller.",
          "Waiting until the CPA conversation to figure out the numbers. This is exactly backwards. Cost basis documentation should be confirmed before listing the home, not discovered as a surprise during tax filing the following year. If documentation is missing, there may still be time to find it before selling; there's much less flexibility after the fact.",
          'Ignoring how the sale interacts with other income in the same year. A large capital gain from a home sale is still income, and depending on timing, it can affect other things happening the same tax year: Roth conversion plans, ACA subsidy eligibility, or which tax bracket you land in overall. A home sale rarely happens in a vacuum from the rest of a retirement income plan.',
          'Not confirming eligibility for the exclusion at all. The two-out-of-five-years ownership-and-use requirement has specific rules and some exceptions (military service, health-related moves, and others), plus the once-every-two-years limit on using the exclusion at all. Don\'t assume eligibility without checking the actual requirement against your situation.',
        ],
      },
      {
        type: 'callout',
        variant: 'link',
        label: 'Related guide',
        paragraphs: [
          'Only the gain that exceeds your exclusion counts toward income thresholds; a gain fully covered by the exclusion doesn\'t touch your ACA MAGI at all. See [Bridging the Gap: Health Insurance Before Medicare](slug:aca-health-insurance-before-65) for how that threshold works, and time the sale accordingly if the excess is large enough to matter.',
        ],
      },
      { type: 'heading', text: 'Quick-Reference Checklist' },
      {
        type: 'checklist',
        items: [
          'Confirm you meet the two-of-last-five-years ownership and use requirement for the exclusion',
          "Confirm you haven't used the exclusion on a different home sale within the prior two years",
          'If married and either spouse used the exclusion on a prior home recently, confirm the household actually qualifies for the full $500,000',
          'Gather documentation for the original purchase price',
          'Gather documentation for every capital improvement made over the ownership period: receipts, contracts, permits, financing records',
          'Calculate your actual adjusted cost basis (purchase price plus qualifying improvements) before listing',
          'Check whether any home office deduction or rental period applies; that portion faces depreciation recapture regardless of the exclusion',
          'Estimate your actual gain against the $250,000/$500,000 exclusion threshold before you have a firm sale price',
          'If the gain may exceed the exclusion, check whether the Net Investment Income Tax applies and talk to a CPA about the timing of the sale relative to other income events in the same year',
          'Do this well before listing, not after an offer is already in hand',
        ],
      },
    ],
  },
  {
    slug: 'one-more-year-trap',
    title: 'The One More Year Trap',
    group: 'process-not-math',
    description: 'A framework for telling whether hesitation to retire is financial or emotional.',
    metaDescription: 'A framework for telling whether hesitation to retire is actually financial, or something else wearing a financial costume.',
    disclaimer: 'This is general education, not personalized advice or a mental health resource. If retirement-related anxiety feels significant or persistent, talking with a financial planner and, separately, a therapist or counselor can both be genuinely useful.',
    blocks: [
      { type: 'paragraph', text: 'Financially ready people delay retirement all the time, sometimes for years, for reasons that sound financial but aren\'t. This has a name in retirement planning circles: "one more year syndrome." It\'s common enough to be its own well-documented pattern, and it\'s worth understanding before it costs you time you can\'t get back.' },
      { type: 'hr' },
      { type: 'heading', text: 'The Problem: Fear Is Good at Disguising Itself as Math' },
      { type: 'paragraph', text: "Here's the shape of it: someone builds a solid financial plan, hits their number, and then finds a new reason to wait. One more year of income for a bigger cushion. One more year to see how the market does. One more year until some external event resolves. Each individual reason sounds reasonable in isolation. The pattern is the problem: a plan that's genuinely ready doesn't need indefinite extensions, and if the goalposts keep moving every time you get close, the obstacle probably isn't the plan anymore." },
      { type: 'paragraph', text: 'The reason this trap is so effective is that leaving a career, an identity, a routine, and a social structure built over decades is genuinely disorienting, and money is a much more comfortable thing to worry about than identity. It\'s easier to say "I need a bigger number" than "I don\'t know who I am without this job." The financial language gives the hesitation a respectable cover story.' },
      { type: 'paragraph', text: "This doesn't mean every instance of delaying retirement is irrational. Sometimes the plan genuinely isn't ready, and more working years are the correct answer. The trap isn't \"delaying is always wrong.\" It's failing to tell the difference between a real gap in the plan and an emotional stall dressed up as one." },
      { type: 'heading', text: 'The Mechanism: Separating the Two Kinds of Hesitation' },
      { type: 'paragraph', text: 'The way to tell the difference is to ask a specific version of the question, not a vague one.' },
      { type: 'paragraph', text: '**Test 1: Ask what number would actually satisfy you.** If someone can\'t name a concrete number or condition that would make them comfortable retiring, if the answer is always "more" no matter what the current number is, that\'s a sign the hesitation isn\'t really about the number. A genuinely unmet financial need can be quantified. A vague, unresolvable sense of "not enough yet" usually can\'t.' },
      { type: 'paragraph', text: "**Test 2: Run the plan against a real stress test, not a gut feeling.** If a plan has actually been modeled against market downturns, unexpected expenses, and a realistic time horizon, and it holds up, that's evidence the plan is sound, and it should carry more weight than a feeling of unease. If the plan hasn't actually been stress-tested and the hesitation is just a feeling, that's worth noticing as a feeling, not treating as new financial information." },
      { type: 'paragraph', text: '**Test 3: Ask what specifically feels unresolved once the money is off the table.** If the honest answer involves identity, purpose, relationships, or what daily life will actually look like, not a dollar figure, the real work isn\'t more saving. It\'s addressing those questions directly, which more working years won\'t actually solve. Working an extra year doesn\'t answer "who am I without this job"; it just postpones the question.' },
      { type: 'paragraph', text: '**Test 4: Check whether "one more year" has already happened more than once.** A single instance of extending isn\'t necessarily the trap; it can be a legitimate response to new information. A repeating pattern, where each resolved concern is immediately replaced by a new one, is the actual signature of this trap.' },
      {
        type: 'callout',
        variant: 'default',
        label: 'Practical takeaway',
        paragraphs: [
          "A plan that's actually ready doesn't need indefinite extensions. If the goalposts keep moving every time you get close, the obstacle probably isn't the plan anymore.",
        ],
      },
      { type: 'heading', text: 'Common Mistakes' },
      {
        type: 'list',
        items: [
          'Treating every instance of hesitation as irrational. Sometimes the plan really does need another year. The trap is specifically the *pattern* of perpetual goalpost-moving, not caution itself.',
          '**Trying to solve an identity problem with a financial solution.** If the real issue is "what will I do with myself" or "who am I without this career," no amount of additional savings actually resolves that. It just delays confronting it.',
          '**Not having a concrete, written definition of "ready."** Without a specific target, modeled, stress-tested, and agreed upon in advance, it\'s much easier for "ready" to quietly drift further away every time you approach it.',
          "**Making the decision alone when it affects a spouse or partner.** For couples, one person's readiness, financial or emotional, doesn't automatically mean the household's plan and both people's emotional readiness are aligned. Talking through both dimensions together, not just the numbers, matters.",
          "**Ignoring that identity work can start before retirement.** Interests, routines, social connections, and a sense of purpose outside of work don't have to wait until the last day of employment to begin developing. Starting that work earlier makes the actual transition less abrupt.",
        ],
      },
      { type: 'heading', text: 'Quick-Reference Checklist' },
      {
        type: 'checklist',
        items: [
          'Write down a specific, concrete number or condition that defines "ready," not a feeling',
          'Have the plan actually stress-tested against downturns and unexpected costs, not just assumed to be fine',
          'If a new reason to delay comes up, ask honestly whether it\'s a genuine gap in the plan or a new goalpost',
          "Ask directly: what feels unresolved that isn't actually about money?",
          'Check whether this is the first time delaying has come up, or part of a repeating pattern',
          'If married or partnered, have this conversation together, not as separate financial and emotional tracks',
          'Start building non-work identity, routines, and social connections before the last day, not after',
        ],
      },
    ],
  },
  {
    slug: 'retirement-readiness-checklist',
    title: 'The Retirement Readiness Checklist',
    group: 'process-not-math',
    description: 'The paperwork nobody does until it\'s urgent: estate documents, beneficiaries, healthcare directives.',
    metaDescription: "The paperwork nobody does until it's urgent: estate documents, beneficiaries, and healthcare directives, explained plainly.",
    disclaimer: 'This is general education, not personalized legal advice. Estate planning rules vary by state; talk to an estate attorney before finalizing any of these documents.',
    blocks: [
      { type: 'paragraph', text: "Most retirement planning conversations focus on investments, withdrawal rates, and taxes, understandably, since that's where the big numbers live. But there's a second category of preparation that has nothing to do with portfolio math and everything to do with what happens if something goes wrong: the legal and administrative documents that protect you and your family if you become incapacitated or pass away. This is the stuff that's boring right up until it isn't, and by then it's too late to fix." },
      { type: 'hr' },
      { type: 'heading', text: 'The Problem: These Documents Only Matter in a Crisis, Which Is Why They Get Skipped' },
      { type: 'paragraph', text: "Nobody wants to spend an afternoon thinking through what happens if they're in a serious accident or diagnosed with a cognitive decline. It's uncomfortable, it doesn't feel urgent, and there's always something more pressing to do instead. The result is that a huge number of people, including people who are otherwise financially disciplined, retire with this list either incomplete or badly out of date." },
      { type: 'paragraph', text: "The cost of skipping it isn't visible until the exact moment it's needed most, and at that point there's no fixing it. Without the right documents in place, decisions about your medical care, your finances, and your assets can end up being made by a court instead of by you or the people you'd have chosen. That's a process that's slower, more expensive, and more stressful for your family than having the paperwork done in advance." },
      { type: 'heading', text: 'The Mechanism: What Each Document Actually Does' },
      { type: 'paragraph', text: "These aren't interchangeable. Each one covers a different kind of decision and a different situation." },
      { type: 'paragraph', text: '**Will.** Directs how your assets are distributed after death and names guardians for any minor children. Without one, state law decides who gets what, which may not match what you\'d have chosen.' },
      { type: 'paragraph', text: '**Durable Financial Power of Attorney (POA).** Names someone to manage your financial affairs if you become unable to do so yourself: paying bills, managing accounts, handling property. The word "durable" matters: a non-durable POA automatically terminates the moment you become incapacitated, which is exactly the situation this document exists to cover. This only matters while you\'re alive but incapacitated; a will doesn\'t cover this situation at all.' },
      { type: 'paragraph', text: "**Healthcare Power of Attorney.** Names someone to make medical decisions on your behalf if you can't communicate your own wishes. Different from the financial POA; they can be the same person or different people, but they're legally separate documents covering separate authority." },
      { type: 'paragraph', text: "**Healthcare Directive (living will).** States your own wishes about medical treatment in specific situations, for example life support or resuscitation preferences, so the person holding your healthcare POA isn't guessing what you'd have wanted." },
      { type: 'paragraph', text: "**HIPAA authorization.** A separate, narrower document from the healthcare POA: it lets named people simply receive medical information from doctors and hospitals, even if they're not the one making decisions. Cheap to set up and commonly skipped, which leaves family members unable to even get a status update in a crisis." },
      { type: 'paragraph', text: "**Beneficiary designations.** The named beneficiaries on retirement accounts, life insurance policies, and similar accounts override what your will says for those specific assets. A will that hasn't been updated to match current wishes doesn't fix an outdated beneficiary designation; the account-level designation wins." },
      { type: 'paragraph', text: '**Revocable living trust.** Not covered above, but worth a mention: a trust holds assets during your lifetime and passes them on according to its terms, generally avoiding probate and working alongside cognitive-decline planning by naming a successor trustee who can step in without a court process. A will alone accomplishes something different and doesn\'t replace what a trust does for these purposes.' },
      { type: 'paragraph', text: "**Digital asset access.** Password managers, email, photos, and online accounts don't automatically transfer the way physical property does. Many states have adopted a law called RUFADAA that governs who can access digital accounts after death or incapacity, but it generally only works if your documents specifically grant that authority. Worth a line in the will or POA rather than assuming it's covered by default." },
      { type: 'paragraph', text: "**Cognitive decline contingency.** A specific plan for who steps in and what triggers that transition if you experience a gradual decline rather than a sudden incapacitating event, dementia being the most common example. This is the most overlooked piece because it doesn't fit neatly into \"in case I die\" or \"in case of an accident.\" It's a slower, harder scenario to plan for." },
      {
        type: 'callout',
        variant: 'warn',
        label: 'Watch for this',
        paragraphs: [
          "A beneficiary designation on an account overrides your will for that asset, full stop. An updated will doesn't fix a beneficiary form you forgot to change after a divorce or remarriage. There's an important exception that catches people specifically: 401(k) plans are governed by federal law (ERISA), which overrides state law entirely. Even if your state automatically revokes an ex-spouse's beneficiary status after divorce, that state law doesn't apply to a 401(k); the plan document controls, and an ex-spouse still listed as beneficiary can still collect regardless of what your divorce decree says. This is one of the single most common, and most costly, mistakes in this entire area.",
        ],
      },
      { type: 'heading', text: 'Common Mistakes' },
      {
        type: 'list',
        items: [
          "**Assuming a will covers incapacity.** A will only takes effect after death. If you're alive but unable to manage your own affairs, a will does nothing; you need a durable power of attorney for that situation.",
          "**Letting beneficiary designations drift out of date.** Major life changes, divorce, remarriage, a death in the family, can leave an old designation in place on an account, and that designation legally overrides your will for that specific asset regardless of what the will says. This is especially dangerous with 401(k)s, where federal law means even a state divorce decree may not remove an ex-spouse as beneficiary.",
          '**Doing the paperwork once and never revisiting it.** Circumstances change: new grandchildren, a move to a different state (state laws on these documents vary), a change in who you\'d trust with these responsibilities. These documents should be reviewed periodically, not treated as permanently finished.',
          "**Not telling anyone where the documents are.** A perfectly executed set of documents that nobody can locate in a crisis is nearly as bad as not having them. The people named in these documents need to know they've been named and where to find the paperwork.",
          '**Treating this as a "someday" task instead of a pre-retirement one.** These documents matter at any age, but retirement is a natural checkpoint to make sure everything is actually in place and current before stepping away from a career and the routines built around it.',
        ],
      },
      { type: 'heading', text: 'Quick-Reference Checklist' },
      {
        type: 'checklist',
        items: [
          'Will: drafted, signed, and legally valid in your current state',
          'Durable Financial Power of Attorney: named and documented',
          'Healthcare Power of Attorney: named and documented',
          'Healthcare Directive / living will: wishes documented in writing',
          'HIPAA authorization on file so named people can get medical information, not just make decisions',
          'Beneficiary designations on all retirement accounts, life insurance, and similar assets: confirmed current, not just "set once years ago"',
          "If divorced and a 401(k) is involved, confirm the plan's own beneficiary form was updated; a divorce decree alone may not remove an ex-spouse under federal law",
          'Consider whether a revocable living trust fits your situation, particularly alongside cognitive-decline planning',
          'Digital asset access addressed in the will or POA, not assumed to happen automatically',
          'A specific plan discussed for cognitive decline: who steps in, and what triggers that transition',
          "All named parties know they've been named and know where to find the documents",
          'Documents reviewed within the last few years, or after any major life change',
        ],
      },
    ],
  },
];

export function getGuide(slug) {
  return guides.find((guide) => guide.slug === slug);
}

export function getGuideGroup(groupId) {
  return guideGroups.find((group) => group.id === groupId);
}
