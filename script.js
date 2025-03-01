// Animação suave do scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Efeito parallax na imagem do hero
const heroImage = document.querySelector('.hero-iphone');
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    if (heroImage) {
        heroImage.style.transform = `translateY(-50%) translateX(${scrolled * 0.1}px)`;
    }
});

// Animação de entrada dos elementos quando ficam visíveis
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

// Aplicar animação aos elementos
document.querySelectorAll('.product-info, .product-image, .product-card, .innovation-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Navbar transparente/sólida baseada no scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        nav.style.background = 'rgba(0, 0, 0, 0.8)';
    }
});

// Manipulação do formulário
const form = document.querySelector('.contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Mensagem enviada com sucesso!');
        form.reset();
    });
}
