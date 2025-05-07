// deepseek_javascript_20250507_9371c4.js
document.addEventListener('DOMContentLoaded', function() {
  // 移动端适配
  const nav = document.querySelector('nav');
  const menuItems = document.querySelectorAll('#content > li');
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  // 移动端菜单切换
  if(isMobile) {
      const menuToggle = document.createElement('div');
      menuToggle.className = 'mobile-menu-toggle';
      menuToggle.innerHTML = '☰';
      nav.prepend(menuToggle);

      menuToggle.addEventListener('click', () => {
          nav.classList.toggle('active');
      });

      // 子菜单处理
      menuItems.forEach(item => {
          if(item.querySelector('.submenu')) {
              item.addEventListener('click', (e) => {
                  e.preventDefault();
                  item.classList.toggle('open');
              });
          }
      });
  }

  // 动态波纹效果
  document.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function(e) {
          let ripple = document.createElement('div');
          ripple.className = 'ripple';
          let rect = this.getBoundingClientRect();
          ripple.style.left = (e.clientX - rect.left) + 'px';
          ripple.style.top = (e.clientY - rect.top) + 'px';
          this.appendChild(ripple);
          
          setTimeout(() => {
              ripple.remove();
          }, 800);
      });
  });
});