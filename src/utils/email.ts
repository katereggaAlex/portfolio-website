export function openEmailClient(
  email: string,
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
) {
  window.location.href = `mailto:${email}`;
  e.preventDefault();
}
