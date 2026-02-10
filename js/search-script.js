// SEARCH FUNCTIONALITY - Add this JavaScript to all pages

// Determine the base path based on current location
function getBasePath() {
  const path = window.location.pathname;
  if (path.includes('/pages/')) {
    return '../';
  } else if (path.includes('/products/')) {
    return '../';
  }
  return ''; // root level
}

// Search data structure
const searchData = {
  products: [
    {
      title: 'Black Granite Single Hollywood Threshold',
      description: 'Premium single beveled threshold',
      url: 'products/product-black-granite-threshold.html',
      keywords: ['threshold', 'hollywood', 'single', 'beveled', 'black', 'granite']
    },
    {
      title: 'Premium Black Double Beveled Threshold',
      description: 'Elegant double beveled polished threshold',
      url: 'products/product-double-beveled-threshold.html',
      keywords: ['threshold', 'double', 'beveled', 'premium', 'black', 'polished']
    },
    {
      title: 'Black Galaxy Polished Granite Tile',
      description: 'Stunning gold speckled pattern on black',
      url: 'products/product-black-galaxy.html',
      keywords: ['black', 'galaxy', 'polished', 'tile', 'speckled', 'gold']
    },
    {
      title: 'Premium Black Polished Finish',
      description: 'Mirror-like high-gloss polished finish',
      url: 'products/product-premium-black-polished.html',
      keywords: ['premium', 'black', 'polished', 'glossy', 'mirror', 'finish']
    },
    {
      title: 'Premium Black Honed Finish',
      description: 'Smooth matte finish with slip resistance',
      url: 'products/product-premium-black-honed.html',
      keywords: ['premium', 'black', 'honed', 'matte', 'finish', 'slip']
    },
    {
      title: 'Premium Black Leather Finish',
      description: 'Unique textured leather-like surface',
      url: 'products/product-premium-black-leather.html',
      keywords: ['premium', 'black', 'leather', 'textured', 'finish']
    },
    {
      title: 'Premium Black Flamed Finish',
      description: 'Rough textured surface for outdoor use',
      url: 'products/product-premium-black-flamed.html',
      keywords: ['premium', 'black', 'flamed', 'outdoor', 'rough', 'finish']
    }
  ],
  pages: [
    {
      title: 'Home',
      description: 'Welcome to Bharathi Granites',
      url: 'index.html',
      keywords: ['home', 'welcome', 'bharathi', 'granites', 'main']
    },
    {
      title: 'About Us',
      description: 'Learn about our company and global presence',
      url: 'pages/about.html',
      keywords: ['about', 'company', 'history', 'exports', 'countries']
    },
    {
      title: 'Products',
      description: 'Browse our premium black granite collection',
      url: 'pages/products.html',
      keywords: ['products', 'collection', 'catalog', 'all products']
    },
    {
      title: 'Exports',
      description: 'Our international export services',
      url: 'pages/exports.html',
      keywords: ['exports', 'international', 'shipping', 'global']
    },
    {
      title: 'Contact',
      description: 'Get in touch with us',
      url: 'pages/contact.html',
      keywords: ['contact', 'email', 'phone', 'reach']
    }
  ]
};

// Search function
function performSearch(query) {
  if (!query || query.trim().length < 2) {
    return { products: [], pages: [] };
  }

  query = query.toLowerCase().trim();
  
  const searchProducts = searchData.products.filter(item => {
    const titleMatch = item.title.toLowerCase().includes(query);
    const descMatch = item.description.toLowerCase().includes(query);
    const keywordMatch = item.keywords.some(keyword => keyword.includes(query));
    return titleMatch || descMatch || keywordMatch;
  });

  const searchPages = searchData.pages.filter(item => {
    const titleMatch = item.title.toLowerCase().includes(query);
    const descMatch = item.description.toLowerCase().includes(query);
    const keywordMatch = item.keywords.some(keyword => keyword.includes(query));
    return titleMatch || descMatch || keywordMatch;
  });

  return { products: searchProducts, pages: searchPages };
}

// Highlight matching text
function highlightText(text, query) {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, '<span class="highlight">$1</span>');
}

// Render search results
function renderSearchResults(results, query) {
  const resultsContainer = document.getElementById('searchResults');
  
  if (!resultsContainer) return;

  const basePath = getBasePath();

  if (results.products.length === 0 && results.pages.length === 0) {
    resultsContainer.innerHTML = `
      <div class="no-results">
        <i class="fas fa-search"></i>
        <p>No results found for "${query}"</p>
      </div>
    `;
    resultsContainer.classList.add('active');
    return;
  }

  let html = '';

  if (results.products.length > 0) {
    html += '<div class="search-category"><i class="fas fa-gem"></i> Products</div>';
    results.products.forEach(item => {
      html += `
        <a href="${basePath}${item.url}" class="search-item" style="text-decoration:none; color:inherit;">
          <i class="fas fa-cube"></i>
          <div class="search-item-content">
            <div class="search-item-title">${highlightText(item.title, query)}</div>
            <div class="search-item-desc">${highlightText(item.description, query)}</div>
          </div>
          <i class="fas fa-arrow-right" style="color:#999; font-size:12px;"></i>
        </a>
      `;
    });
  }

  if (results.pages.length > 0) {
    html += '<div class="search-category"><i class="fas fa-file-alt"></i> Pages</div>';
    results.pages.forEach(item => {
      html += `
        <a href="${basePath}${item.url}" class="search-item" style="text-decoration:none; color:inherit;">
          <i class="fas fa-link"></i>
          <div class="search-item-content">
            <div class="search-item-title">${highlightText(item.title, query)}</div>
            <div class="search-item-desc">${highlightText(item.description, query)}</div>
          </div>
          <i class="fas fa-arrow-right" style="color:#999; font-size:12px;"></i>
        </a>
      `;
    });
  }

  resultsContainer.innerHTML = html;
  resultsContainer.classList.add('active');
}

// Initialize search functionality
function initSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  
  if (!searchInput || !searchResults) return;

  // Search on input
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value;
    if (query.trim().length < 2) {
      searchResults.classList.remove('active');
      return;
    }
    const results = performSearch(query);
    renderSearchResults(results, query);
  });

  // Clear search on escape
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      searchInput.value = '';
      searchResults.classList.remove('active');
    }
  });

  // Close results when clicking outside
  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
      searchResults.classList.remove('active');
    }
  });

  // Prevent search results from closing when clicking inside
  searchResults.addEventListener('click', (e) => {
    e.stopPropagation();
  });
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSearch);
} else {
  initSearch();
}
