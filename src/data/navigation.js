/**
 * Shared navigation links used by both Navbar and MobileMenu.
 * Links with `href` are anchor links (scroll to section on homepage).
 * Links with `to` are React Router routes (navigate to a new page).
 */
export const navLinks = [
  { label: 'Latest', href: '/#content' },
  { label: 'Articles', to: '/articles' },
  { label: 'Pillars', href: '/#pillars' },
  { label: 'Philosophy', href: '/#philosophy' },
  { label: 'The Process', href: '/#protocol' },
];
