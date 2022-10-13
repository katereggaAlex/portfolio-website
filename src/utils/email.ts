export function openEmailClient(
  email: string,
  e: any
) {
  window.location.href = `mailto:${email}`;
  e.preventDefault();
}
