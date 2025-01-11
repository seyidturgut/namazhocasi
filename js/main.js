// Mobil menü işlevselliği
function initializeMobileMenu() {
    const menuButton = document.getElementById('menuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Sayfa dışına tıklandığında menüyü kapat
        document.addEventListener('click', (event) => {
            if (!menuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    }
}

// Scroll performansı için IntersectionObserver
function initializeScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100');
                entry.target.classList.remove('opacity-0');
                entry.target.classList.add('translate-y-0');
                entry.target.classList.remove('translate-y-4');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });

    // Animasyon için elementleri seç ve gözlemle
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => {
        el.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-500', 'ease-out');
        observer.observe(el);
    });
}

// Dark mode toggle
function initializeDarkMode() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        // Başlangıç durumunu ayarla
        darkModeToggle.checked = document.documentElement.classList.contains('dark');

        // Toggle olayını dinle
        darkModeToggle.addEventListener('change', function() {
            if (this.checked) {
                document.documentElement.classList.add('dark');
                localStorage.theme = 'dark';
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.theme = 'light';
            }
        });
    }
}

// Sayfa yüklendiğinde tüm inicializasyonları yap
document.addEventListener('DOMContentLoaded', () => {
    initializeMobileMenu();
    initializeScrollAnimations();
    initializeDarkMode();
    enhanceTouchTargets();
});

// Mobil cihazlarda dokunmatik hedefleri iyileştir
function enhanceTouchTargets() {
    const touchTargets = document.querySelectorAll('button, a, input[type="checkbox"], input[type="radio"]');
    touchTargets.forEach(target => {
        const rect = target.getBoundingClientRect();
        if (rect.width < 48 || rect.height < 48) {
            target.style.minWidth = '48px';
            target.style.minHeight = '48px';
            target.style.display = 'inline-flex';
            target.style.alignItems = 'center';
            target.style.justifyContent = 'center';
        }
    });
}

// Performans optimizasyonu için debounce fonksiyonu
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Sayfa yüklendiğinde ve yeniden boyutlandığında dokunmatik hedefleri iyileştir
window.addEventListener('DOMContentLoaded', enhanceTouchTargets);
window.addEventListener('resize', debounce(enhanceTouchTargets, 250));
