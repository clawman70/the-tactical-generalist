import { renderRich } from '../utils/richText';

/**
 * GuideBlocks — Renders a Financial Literacy guide's structured `blocks`
 * array (see src/data/financialLiteracy.js) as page content.
 *
 * Mirrors the reference guides' original semantic structure (heading /
 * paragraph / callout / list / checklist) but as Tailwind + site design
 * tokens instead of the guides' original hand-rolled CSS. Callouts and
 * checklist markers use the `info` accent instead of the site's usual
 * bronze/copper, which is the section's one deliberate colorway swap — see
 * FinancialLiteracyPage.jsx and GuidePage.jsx for the rest of that pattern.
 */
function GuideBlocks({ blocks }) {
  return (
    <div className="guide-body">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'heading':
            return (
              <h2 key={i} className="font-heading font-bold text-2xl text-charcoal mt-12 mb-4 first:mt-0">
                {renderRich(block.text)}
              </h2>
            );

          case 'paragraph':
            return (
              <p key={i} className="font-sans text-charcoal/90 text-[1.0625rem] leading-relaxed mb-5 max-w-[62ch]">
                {renderRich(block.text)}
              </p>
            );

          case 'list':
            return (
              <ul key={i} className="mb-6 ml-5 space-y-3 list-disc marker:text-info">
                {block.items.map((item, j) => (
                  <li key={j} className="font-sans text-charcoal/90 text-[1.0625rem] leading-relaxed">
                    {renderRich(item)}
                  </li>
                ))}
              </ul>
            );

          case 'checklist':
            return (
              <ul key={i} className="mb-6 divide-y divide-stone/20">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 py-2.5 font-sans text-charcoal/90 text-base">
                    <span className="mt-1 w-[18px] h-[18px] flex-shrink-0 rounded-[3px] border-[1.5px] border-info" />
                    <span>{renderRich(item)}</span>
                  </li>
                ))}
              </ul>
            );

          case 'callout': {
            const variantStyles = {
              default: 'border-info',
              warn: 'border-error',
              link: 'border-bronze',
            };
            const labelStyles = {
              default: 'text-info',
              warn: 'text-error',
              link: 'text-bronze',
            };
            const variant = block.variant || 'default';
            return (
              <div key={i} className={`my-6 px-6 py-5 bg-cream rounded-sm border-l-[3px] ${variantStyles[variant]}`}>
                <div className={`font-data text-[0.6875rem] uppercase tracking-[0.12em] mb-2 ${labelStyles[variant]}`}>
                  {block.label}
                </div>
                {block.paragraphs.map((p, j) => (
                  <p key={j} className="font-sans text-ash text-[0.9375rem] leading-relaxed mt-2 first:mt-0">
                    {renderRich(p)}
                  </p>
                ))}
              </div>
            );
          }

          case 'table':
            return (
              <div key={i} className="mb-6 overflow-x-auto rounded-sm border border-stone/20">
                <table className="w-full border-collapse text-[0.9375rem]">
                  <thead>
                    <tr>
                      {block.headers.map((header, hi) => (
                        <th
                          key={hi}
                          className="text-left font-data text-[0.6875rem] uppercase tracking-[0.08em] text-warm-white bg-charcoal px-4 py-3 whitespace-nowrap"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, ri) => (
                      <tr key={ri} className={ri % 2 === 1 ? 'bg-cream' : 'bg-white'}>
                        {row.map((cell, ci) => {
                          const isGood = typeof cell === 'object' && cell !== null && cell.good;
                          const text = typeof cell === 'object' && cell !== null ? cell.text : cell;
                          return (
                            <td
                              key={ci}
                              className={`px-4 py-3 border-b border-stone/20 ${isGood ? 'text-success font-semibold' : 'text-charcoal/90'}`}
                            >
                              {renderRich(text)}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          case 'hr':
            return <hr key={i} className="border-stone/20 my-10" />;

          default:
            return null;
        }
      })}
    </div>
  );
}

export default GuideBlocks;
