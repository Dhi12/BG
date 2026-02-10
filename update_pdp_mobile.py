#!/usr/bin/env python3
import re

files = [
    'products/product-black-granite-threshold.html',
    'products/product-double-beveled-threshold.html',
    'products/product-premium-black-flamed.html',
    'products/product-premium-black-honed.html',
    'products/product-premium-black-leather.html',
    'products/product-premium-black-polished.html'
]

# Mobile menu HTML to insert
mobile_menu_html = '''<div class="mobile-menu-toggle" onclick="toggleMobileMenu()">
    <i class="fas fa-bars"></i>
</div>
<ul id="mobileMenu">'''

# Mobile menu JavaScript to add
mobile_menu_js = '''
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('active');
}

function closeMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.remove('active');
}

document.addEventListener('click', function(event) {
  const menu = document.getElementById('mobileMenu');
  const toggle = document.querySelector('.mobile-menu-toggle');
  if (menu && !menu.contains(event.target) && !toggle.contains(event.target)) {
    menu.classList.remove('active');
  }
});
'''

# Mobile CSS to replace
mobile_css_old = '''@media(max-width:768px){
  header{padding:16px 25px;}
  .logo{font-size:36px;}
  nav ul{gap:20px;}
  nav ul li a{font-size:15px;}
  
  .breadcrumb{padding:20px 25px;}'''

mobile_css_new = '''@media(max-width:768px){
  header{padding:16px 25px;}
  .logo{font-size:36px;}
  
  nav ul{
    position:fixed;
    top:0;
    right:-100%;
    height:100vh;
    width:70%;
    background:rgba(234,234,234,0.98);
    backdrop-filter:blur(10px);
    flex-direction:column;
    justify-content:column;
    align-items:center;
    gap:40px;
    transition:right 0.3s ease;
    box-shadow:-5px 0 20px rgba(0,0,0,0.1);
    z-index:999;
  }
  
  nav ul.active{
    right:0;
  }
  
  nav ul li a{font-size:20px;}
  
  .mobile-menu-toggle{
    display:block;
    z-index:1000;
  }
  
  .search-container{
    display:none;
  }
  
  .breadcrumb{padding:20px 25px;}'''

for filepath in files:
    print(f"Processing {filepath}...")
    
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 1. Update HTML - replace <ul> with mobile menu toggle + <ul id="mobileMenu">
        content = re.sub(
            r'</div>\s*<ul>',
            f'</div>\n{mobile_menu_html}',
            content,
            count=1
        )
        
        # 2. Update nav links to include onclick handlers
        content = re.sub(
            r'<li><a href="(\.\.\/index\.html)">Home</a></li>',
            r'<li><a href="\1" onclick="closeMobileMenu()">Home</a></li>',
            content
        )
        content = re.sub(
            r'<li><a href="(\.\.\/pages\/about\.html)">About</a></li>',
            r'<li><a href="\1" onclick="closeMobileMenu()">About</a></li>',
            content
        )
        content = re.sub(
            r'<li><a href="(\.\.\/pages\/products\.html)">Products</a></li>',
            r'<li><a href="\1" onclick="closeMobileMenu()">Products</a></li>',
            content
        )
        content = re.sub(
            r'<li><a href="(\.\.\/pages\/exports\.html)">Exports</a></li>',
            r'<li><a href="\1" onclick="closeMobileMenu()">Exports</a></li>',
            content
        )
        content = re.sub(
            r'<li><a href="(\.\.\/pages\/contact\.html)">Contact</a></li>',
            r'<li><a href="\1" onclick="closeMobileMenu()">Contact</a></li>',
            content
        )
        
        # 3. Update mobile CSS
        content = content.replace(mobile_css_old, mobile_css_new)
        
        # 4. Add JavaScript before closing script tag
        content = re.sub(
            r'(</script>\s*<script src="../js/search-script.js"></script>)',
            mobile_menu_js + r'\1',
            content,
            count=1
        )
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✓ Successfully updated {filepath}")
        
    except Exception as e:
        print(f"✗ Error processing {filepath}: {e}")

print("\nDone!")
