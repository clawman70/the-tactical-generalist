import { Link } from 'react-router-dom';

/**
 * renderRich — Tiny inline-markup renderer for Financial Literacy guide text.
 *
 * Guide content is authored as data (see src/data/financialLiteracy.js), not
 * JSX, so cross-references between guides ("see the ACA guide") need a way to
 * become real <Link> elements without writing raw JSX inside the data file.
 * Supports three inline tokens inside any block's text:
 *
 *   **bold text**              → <strong>
 *   *italic text*               → <em>
 *   [label](slug:guide-slug)   → <Link to="/financial-literacy/guide-slug">
 *   [label](https://...)       → <a target="_blank"> (external)
 *
 * Deliberately minimal — just enough for these guides' cross-links and
 * emphasis, not a general markdown parser.
 */
const RICH_PATTERN = /\*\*(.+?)\*\*|\*(.+?)\*|\[([^\]]+)\]\(([^)]+)\)/g;

export function renderRich(text, linkClassName = 'text-info font-semibold underline decoration-info/40 underline-offset-2 hover:text-charcoal hover:decoration-charcoal/40 transition-colors') {
  const nodes = [];
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = RICH_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    const [, bold, italic, label, target] = match;
    if (bold !== undefined) {
      nodes.push(<strong key={key++}>{bold}</strong>);
    } else if (italic !== undefined) {
      nodes.push(<em key={key++}>{italic}</em>);
    } else if (target.startsWith('slug:')) {
      const slug = target.slice('slug:'.length);
      nodes.push(
        <Link key={key++} to={`/financial-literacy/${slug}`} className={linkClassName}>
          {label}
        </Link>
      );
    } else {
      nodes.push(
        <a key={key++} href={target} target="_blank" rel="noopener noreferrer" className={linkClassName}>
          {label}
        </a>
      );
    }

    lastIndex = RICH_PATTERN.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}
