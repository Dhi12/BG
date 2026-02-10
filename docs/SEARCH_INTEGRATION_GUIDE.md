# SEARCH BAR INTEGRATION GUIDE

## Files Created:
1. `search-styles.css` - Search bar styling
2. `search-script.js` - Search functionality

## How to Add Search Bar to Any Page:

### Step 1: Add CSS Link in `<head>` section
```html
<link rel="stylesheet" href="search-styles.css">
```

### Step 2: Add Search HTML in Navigation (inside `<nav>` after logo and before menu)
```html
<div class="search-container">
    <div class="search-box">
        <input type="text" 
               id="searchInput" 
               class="search-input" 
               placeholder="Search products or pages..."
               autocomplete="off">
        <i class="fas fa-search search-icon"></i>
        <div id="searchResults" class="search-results"></div>
    </div>
</div>
```

### Step 3: Add JavaScript Before Closing `</body>` Tag
```html
<script src="search-script.js"></script>
```

### Complete Navigation Example:
```html
<header>
<nav>
    <a href="index.html" class="logo">Bharathi Granites</a>
    
    <!-- ADD SEARCH BAR HERE -->
    <div class="search-container">
        <div class="search-box">
            <input type="text" 
                   id="searchInput" 
                   class="search-input" 
                   placeholder="Search products or pages..."
                   autocomplete="off">
            <i class="fas fa-search search-icon"></i>
            <div id="searchResults" class="search-results"></div>
        </div>
    </div>
    
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="products.html">Products</a></li>
        <li><a href="exports.html">Exports</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
</nav>
</header>
```

## Features:

### Real-Time Search
- Type 2+ characters to see results
- Searches across ALL products and pages
- Highlights matching text in gold

### Categories
- **Products**: All 7 granite products with descriptions
- **Pages**: Home, About, Products, Exports, Contact

### User Experience
- Click any result to navigate
- Press ESC to clear search
- Click outside to close results
- Smooth animations and transitions

### Mobile Responsive
- Full-width on mobile
- Fixed position results
- Touch-friendly interface

### Search Coverage
Products searchable by:
- Product name
- Finish type (polished, honed, leather, flamed)
- Keywords (threshold, galaxy, beveled, etc.)
- Descriptions

Pages searchable by:
- Page title
- Description
- Related keywords

## Customization:

### To add more products to search:
Edit `search-script.js` → `searchData.products` array

### To modify styling:
Edit `search-styles.css`

### Colors match your theme:
- Gold accent: #d4af37
- Black text: #333
- Hover effects with gold highlights

## Installation Priority:
Add to pages in this order:
1. ✅ index.html (example provided below)
2. products.html
3. about.html
4. contact.html
5. exports.html
6. All PDP pages (product-*.html)
