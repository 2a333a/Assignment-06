# Portfolio Website

A clean and minimal portfolio website built to showcase **front-end web development** and **multimedia design** skills.  
The site includes three main pages: **Welcome**, **Projects**, and **Contact**.  

All personal details below are placeholders and should be replaced with your own.

---

# Portfolio Website

A clean and minimal portfolio website built to showcase **front-end web development** and **multimedia design** skills.  
The site includes three main pages: **Welcome**, **Projects**, and **Contact**.  

All personal details below are placeholders and should be replaced with your own.

---

## Project Overview

This project serves as a digital CV and portfolio, highlighting both **technical development** and **creative design** work.  
The site is responsive, typography-driven, and built with semantic HTML5, CSS3, and a modular grid system.

- **Welcome Page**: Introduction and overview of skills, education, and toolkits.  
- **Projects Page**: Selected works, including embedded motion reels and structured meta details.  
- **Contact Page**: Professional presence with portfolio links, contact details, and case studies.  

---

## Tech Stack

- **Languages**: HTML5, CSS3, JavaScript  
- **Frameworks**: Vue.js (for scalable interactivity, if extended later)  
- **Tools & Platforms**:  
  - Git & GitHub  
  - Visual Studio Code  
  - Local by Flywheel  
  - WordPress & Elementor Pro  
  - Figma  

- **Creative Tools**:  
  - Adobe Illustrator, Photoshop, InDesign  
  - After Effects, Premiere Pro, Audition  
  - Acrobat Pro  

---

## Design Choices

- **Typography**: Open Sans (light, regular, medium, semi-bold, bold, with italic variants).  
- **Layout**: Mobile-first responsive design using grid utilities (`.two-col`, `.three-col`).  
- **Brand Style**: Minimalist, with a focus on **Oxford Blue** (`#2a333a`) and **Milk White** (`#fefefe`).  
- **Consistency**: The brand colours are applied across online platforms for cohesive identity.  

---

## Colour Style Guide

The extended palette ensures flexibility for both **UI elements** and **multimedia design assets**.

### Colour Palette

| Role                        | Hex / CSS Value                                                          |
|-----------------------------|--------------------------------------------------------------------------|
| Main                        | `#2a333a` (Oxford Blue)                                                  |
| White Base                  | `#fefefe` (Milk White)                                                   |
| Main Accent                 | `#1075ff` (Bright Blue)                                                  |
| Secondary Accent            | `#ff9a10` (Vivid Orange)                                                 |
| Main Accent Analogous       | `#1076ff`, `#10c5ff`, `#10a5ff`, `#1075ff`, `#1045ff`, `#1015ff`         |
| Secondary Accent Analogous  | `#ff9a10`, `#ffb310`, `#ffd210`, `#ffa510`, `#ff8510`, `#ff6510`         |
| Black Gradient              | `linear-gradient(#30343a, #333132)`                                      |
| Blue Gradient               | `linear-gradient(#97e0ff, #1075ff)`                                      |
| Dark Icons                  | `#30343a`, `#333132`, `#bbbdbf`                                          |
| Light Icons                 | `#fefefe`, `#afafaf`, `#dbdbdb`                                          |
| Grey Variations             | `#f5f5f5`, `#e0e0e0`, `#cccccc`                                          |

---

## Accessibility & UX

- **Focus states** are highlighted with `outline: 2px solid #1075ff` for keyboard navigation.  
- **Hover states** use accent colours for clear feedback.  
- **Semantic structure** ensures compatibility with screen readers.  
- **Responsive typography** scales across breakpoints (`min-width: 481px`, `min-width: 769px`).  

---

## Contact Form

The **Contact Page** includes a functional form built with **HTML, CSS, and JavaScript**.  
EmailJS is used to handle form submissions and forward messages directly to your inbox.

## Folder Structure

```plaintext
.
├── index.html        # Welcome page
├── projects.html     # Projects page
├── contact.html      # Contact page
├── styles.css        # Global styles
├── scripts.js        # Optional interactivity
├── SVG/              # All icons, logos, and illustrations
└── Fonts/            # Open Sans font files

***Notes

Form Functionality: The contact form relies on EmailJS, which removes the need for server-side scripting. This is ideal for static hosting but requires setting up an account.

Security: Never expose private keys in public repositories. Use only the EmailJS public key in the client-side script.