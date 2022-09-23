type Link = {
  name: string;
  destination: string;
}

export const navLinks: { [index: string]: Link} = {
  home: { name: "Home", destination: "/" },
  about: { name: "About", destination: "about" },
  tech: { name: "Tech Stacks", destination: "stack" },
  history: { name: "Work history", destination: "history" },
  project:{ name: "Projects", destination: "projects" },
  contact: { name: "Contact", destination: "contact" },
};

export function getNavLinks(): Link[] {

  const entries = Object.entries(navLinks).map(value => value[1]);
  return entries
} 