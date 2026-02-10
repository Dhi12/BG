# Bharathi Granites - Project Structure

## 📁 Directory Organization

```
BR/
├── index.html                    # Home page (stays in root)
├── css/
│   └── search-styles.css        # Search bar styling
├── js/
│   └── search-script.js         # Search functionality
├── pages/
│   ├── about.html               # About Us page
│   ├── contact.html             # Contact/Quote page
│   ├── exports.html             # Exports & Global Presence
│   └── products.html            # Products catalog
├── products/
│   ├── product-black-galaxy.html
│   ├── product-black-granite-threshold.html
│   ├── product-double-beveled-threshold.html
│   ├── product-premium-black-flamed.html
│   ├── product-premium-black-honed.html
│   ├── product-premium-black-leather.html
│   └── product-premium-black-polished.html
├── images/
│   ├── BlackGalaxy.png
│   ├── Premium-black.png
│   ├── Threshold4x36x.75.png
│   ├── HonedPolish.png
│   ├── Honed.png
│   ├── Leather.png
│   ├── Flamed.png
│   ├── Premium Black Double Beveled.png
│   ├── black-granite.png
│   └── Kitchen.png
└── docs/
    └── SEARCH_INTEGRATION_GUIDE.md

```

## 🔗 Path References

### From Root (`index.html`)
- CSS/JS: `css/search-styles.css`, `js/search-script.js`
- Images: `images/filename.png`
- Pages: `pages/about.html`, `pages/contact.html`, etc.
- Products: `products/product-name.html`

### From Pages Folder (`pages/*.html`)
- CSS/JS: `../css/search-styles.css`, `../js/search-script.js`
- Images: `../images/filename.png`
- Home: `../index.html`
- Other Pages: `about.html`, `contact.html` (same folder)
- Products: `../products/product-name.html`

### From Products Folder (`products/*.html`)
- CSS/JS: `../css/search-styles.css`, `../js/search-script.js`
- Images: `../images/filename.png`
- Home: `../index.html`
- Pages: `../pages/about.html`, `../pages/contact.html`, etc.
- Other Products: `product-name.html` (same folder)

## ✅ Updates Completed

### File Paths Updated
- ✅ CSS references (`search-styles.css` → proper relative paths)
- ✅ JS references (`search-script.js` → proper relative paths)
- ✅ Image paths (`images/` → proper relative paths)
- ✅ Navigation links (all pages updated with correct relative paths)
- ✅ Logo links to home page
- ✅ Background images in CSS

### Search Functionality
- ✅ `search-script.js` updated with new folder structure
- ✅ Dynamic path resolution based on page location
- ✅ Product URLs: `products/product-*.html`
- ✅ Page URLs: `pages/*.html` or `index.html`

## 📱 Mobile Navigation
- All main pages (index, about, products, exports, contact) have hamburger menu
- Product detail pages (PDPs) - Mobile menu needs to be added

## 🚀 Next Steps
1. Add mobile hamburger menu to 7 product PDP pages
2. Test all navigation links
3. Verify search functionality works from all page locations
4. Test on mobile devices

## 🎨 Tech Stack
- Pure HTML/CSS/JavaScript (no frameworks)
- Fonts: Alex Brush, Playfair Display, Inter
- Icons: FontAwesome 6.4.0
- Color Scheme: Gold (#d4af37) + Black (#0b0b0b)
