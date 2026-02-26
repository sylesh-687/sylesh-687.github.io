# DevOps Portfolio Template

A modern, responsive portfolio website tailored for DevOps Architects and professionals. Showcase your expertise in cloud infrastructure, CI/CD, Kubernetes, and infrastructure automation.

## Features

✨ **Modern Design**
- Responsive layout that works on all devices
- Smooth animations and transitions
- Professional color scheme and typography

📱 **Mobile-Friendly**
- Mobile menu toggle
- Optimized for tablets, phones, and desktops
- Touch-friendly buttons and navigation

🎯 **Professional Sections**
- **About**: Introduce yourself and highlight your expertise
- **Skills**: Showcase your technical skills with visual cards
- **Projects**: Display featured projects with technologies and links
- **Experience**: Timeline view of your career progression
- **Contact**: Contact form and social media links

⚙️ **Data-Driven**
- Projects and experience loaded from JSON files
- Easy to maintain and update content
- Modular and extensible structure

🚀 **GitHub Pages Ready**
- Automatic deployment with GitHub Actions
- No build process required
- Works with free GitHub hosting

🔒 **Professional Features**
- SEO-optimized meta tags
- Social media integration
- Accessible HTML structure
- Form handling ready

## Quick Start

### 1. Clone or Fork

```bash
git clone https://github.com/yourusername/devops-portfolio.git
cd devops-portfolio
```

### 2. Customize Content

Edit these files to personalize your portfolio:

- **`index.html`** - Main HTML structure, contact info, social links
- **`data/projects.json`** - Add/edit your featured projects
- **`data/experience.json`** - Add/edit your work experience
- **`css/style.css`** - Customize colors and styling

### 3. Update Personal Information

In `index.html`, replace:
- `your.email@example.com` with your email
- `yourusername` with your actual GitHub/LinkedIn handles
- `+1234567890` with your phone number (or remove it)

### 4. Add a Profile Picture

Add your avatar image:
```bash
# Save your profile picture as
images/avatar.jpg
```

Or customize the avatar placeholder in `css/style.css`.

### 5. Test Locally

```bash
# Python 3
python3 -m http.server 8000

# Then visit: http://localhost:8000
```

## Deployment to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

1. Push your code to GitHub:
```bash
git remote add origin https://github.com/yourusername/devops-portfolio.git
git branch -M main
git push -u origin main
```

2. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)

3. The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
   - Validate your HTML
   - Deploy to GitHub Pages on every push to main

4. Access your site at: `https://yourusername.github.io/devops-portfolio/`

### Option 2: Manual Deployment

1. Build your site (if you add a build process)
2. Push to a `gh-pages` branch
3. Enable GitHub Pages to use the `gh-pages` branch

## File Structure

```
devops-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── css/
│   └── style.css               # Styling
├── js/
│   └── main.js                 # Interactivity
├── data/
│   ├── projects.json           # Your projects
│   └── experience.json         # Your experience
├── images/
│   └── avatar.jpg              # Your profile picture
├── index.html                  # Main page
└── README.md                   # This file
```

## Customization Guide

### Colors

Edit color variables in `css/style.css`:

```css
:root {
    --primary: #2c3e50;       /* Main color */
    --secondary: #3498db;     /* Accent color */
    --accent: #e74c3c;        /* Highlight color */
    /* ... more colors */
}
```

### Adding More Projects

Edit `data/projects.json`:

```json
{
  "title": "Project Name",
  "description": "Project description",
  "technologies": ["Tech1", "Tech2"],
  "github": "https://github.com/...",
  "link": "https://project-url.com"
}
```

### Adding More Experience

Edit `data/experience.json`:

```json
{
  "title": "Job Title",
  "company": "Company Name",
  "period": "2020 - 2022",
  "description": "Job description and achievements"
}
```

### Contact Form Integration

The contact form is ready to integrate with services like:

- **Formspree**: Free form backend (recommended for static sites)
- **EmailJS**: Client-side email sending
- **Netlify Forms**: If hosted on Netlify

To enable with Formspree:

1. Go to [formspree.io](https://formspree.io)
2. Create a form and get your form ID
3. Update the form action in `index.html`:

```html
<form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## SEO Optimization

To improve SEO, update the meta tags in `index.html`:

```html
<meta name="description" content="Your description">
<meta property="og:title" content="Your Name - DevOps Architect">
```

Add analytics if desired:

```html
<!-- Google Analytics or similar -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
```

## License

This template is provided as-is. Feel free to use it for personal and commercial purposes.

## Support

For issues or suggestions, please open an issue on the GitHub repository.

---

Built with ❤️ for DevOps professionals. Happy deploying! 🚀
