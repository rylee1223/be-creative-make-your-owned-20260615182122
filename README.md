# My Creative Portfolio

A modern, responsive, single‑page portfolio website built with **HTML5**, **CSS3**, and **vanilla JavaScript**.  
The design defaults to dark mode using CSS custom properties and includes smooth animations, mobile‑first navigation, and a functional contact form.

## ✨ Features

- **Dark mode default** with CSS variables for easy theming.
- Fully **responsive layout** (mobile‑first) using Flexbox and CSS Grid.
- Accessible semantic markup and ARIA attributes.
- Animated hamburger menu for small screens.
- Smooth scroll navigation and scroll‑aware active states.
- Project showcase cards with hover effects.
- Client‑side form validation with user feedback.
- Social media icons (SVG) for GitHub, LinkedIn, and Twitter.
- Automatic current year in the footer.

## 📁 Project Structure

```
/ (root)
│
├─ index.html      # Main HTML page
├─ styles.css      # All styling, dark theme, responsive rules
├─ script.js       # Navigation toggle, form validation, dynamic year
└─ README.md       # Project overview (this file)
```

## 🚀 Getting Started

1. **Clone or download** the repository.

   ```bash
   git clone https://github.com/yourusername/portfolio.git
   ```

2. Open `index.html` in any modern browser (Chrome, Firefox, Edge, Safari).

   No build tools or server are required – everything runs client‑side.

3. (Optional) Replace placeholder content:
   - Update the name, bio, skills, and project details in `index.html`.
   - Swap the placeholder images (`https://picsum.photos/...`) with your own screenshots.
   - Add your actual social media URLs in the footer.

## 🎨 Customization

- **Colors & Theme** – Edit the CSS variables at the top of `styles.css` to change primary, accent, and background colors.
- **Typography** – Change `--font-base` variable or import Google Fonts.
- **Projects** – Duplicate or remove `<article class="project-card">` blocks to match the number of projects you want to display.

## 📱 Accessibility & SEO

- Semantic HTML5 elements (`header`, `nav`, `section`, `article`, `footer`).
- ARIA attributes for navigation toggle and live region for form feedback.
- `alt` attributes on images and `aria-label` on social links.
- `meta viewport` tag for responsive scaling.

## 🛠️ Browser Compatibility

Tested on the latest versions of Chrome, Firefox, Edge, and Safari. Uses only standard web APIs (no polyfills required).

## 📄 License

This project is open source and free to use under the MIT License. Feel free to adapt it for personal or commercial projects.