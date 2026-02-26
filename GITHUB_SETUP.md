# DevOps Portfolio - GitHub Configuration

## Repository Setup

### Initial Setup

```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit: DevOps portfolio template"

# Add remote and push
git remote add origin https://github.com/yourusername/devops-portfolio.git
git branch -M main
git push -u origin main
```

### GitHub Settings

1. **Repository Settings** → **Pages**
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)

2. **Actions** → Enable GitHub Actions (required for deploy workflow)

## Customization Checklist

- [ ] Update `index.html` with your name and contact info
- [ ] Add profile picture to `images/avatar.jpg`
- [ ] Update `data/projects.json` with your projects
- [ ] Update `data/experience.json` with your experience
- [ ] Customize colors in `css/style.css`
- [ ] Update social media links
- [ ] Enable GitHub Pages
- [ ] Test the site at `https://yourusername.github.io/devops-portfolio/`

## Branch Protection Rules (Optional)

For production-ready setup, add branch protection:

1. Settings → Branches → Add rule
2. Branch name pattern: `main`
3. Require pull request reviews
4. Require status checks to pass
5. Require branches to be up to date

## CI/CD Best Practices

The included workflow:
- Validates HTML on every push
- Automatically deploys to GitHub Pages
- Supports both push and pull request triggers

To enhance:
- Add CSS/JS linting
- Add Lighthouse performance audits
- Add accessibility checks

## DNS Configuration (Optional)

To use a custom domain:

1. Get a domain from a registrar (Namecheap, GoDaddy, etc.)
2. In GitHub Settings → Pages → Custom domain
3. Add your domain (e.g., `devops.example.com`)
4. Update DNS records at your registrar:
   - Add A records pointing to GitHub's IP addresses
   - Or add CNAME record pointing to `yourusername.github.io`

## Useful Resources

- [GitHub Pages Documentation](https://pages.github.com/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [HTML5 Validator](https://html5.validator.nu/)
