// update current theme
export default function handleThemeSwitch() {
  const html: HTMLHtmlElement | null = document.querySelector('html')
  if (!html) return;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === "darkTheme" ? "lightTheme" : "darkTheme"
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem("portfolio-theme", newTheme)
}
