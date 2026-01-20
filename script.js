// Contract Address (ganti dengan CA asli kamu nanti)
const CONTRACT_ADDRESS = "TBA - Coming Soon";

// Update contract address display
window.addEventListener('load', () => {
    const contractDisplay = document.getElementById('contract-address');
    if (contractDisplay) {
        contractDisplay.textContent = CONTRACT_ADDRESS;
    }
});

// Copy Contract Address
function copyCA() {
    navigator.clipboard.writeText(CONTRACT_ADDRESS).then(() => {
        showToast();
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// Show Toast Notification
function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Animated Counter for Stats
function animateCounter(element, target, suffix = '') {
    let current = 0;
    const increment = target / 100;
    const duration = 2000;
    const stepTime = duration / 100;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, stepTime);
}

// Initialize counters when page loads
window.addEventListener('load', () => {
    // Add loading delay for effect
    setTimeout(() => {
        const holders = document.getElementById('holders');
        const mcap = document.getElementById('mcap');
        
        if (holders) animateCounter(holders, 9999);
        if (mcap) {
            mcap.textContent = '$404';
        }
    }, 500);
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Matrix rain effect
function createMatrixRain() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const matrixBg = document.querySelector('.matrix-bg');
    
    if (!matrixBg) return;
    
    matrixBg.appendChild(canvas);
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const chars = 'NOOBCODING01';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    
    const drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100;
    }
    
    function draw() {
        ctx.fillStyle = 'rgba(5, 8, 18, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = 'rgba(0, 255, 65, 0.5)';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(draw, 50);
    
    // Resize handler
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Initialize matrix rain
createMatrixRain();

// Random code errors in console
const consoleMessages = [
    "console.log('Why is this not working?');",
    "// TODO: Fix this mess",
    "Error: Missing semicolon (probably)",
    "Warning: Too many npm packages",
    "console.log('It works on my machine ¯\\_(ツ)_/¯');",
    "// This code was written at 3 AM, good luck",
    "undefined is not a function (it never was)",
    "TypeError: Cannot read property of undefined"
];

// Log random messages
setTimeout(() => {
    const randomMsg = consoleMessages[Math.floor(Math.random() * consoleMessages.length)];
    console.log(`%c${randomMsg}`, 'color: #00ff41; font-size: 14px; font-family: monospace;');
}, 2000);

// Easter egg - Konami code
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.keyCode);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        document.body.style.transform = 'rotate(360deg)';
        document.body.style.transition = 'transform 2s';
        
        setTimeout(() => {
            alert('🎮 You found the secret! You are a true NOOB coder! 🚀');
            document.body.style.transform = 'rotate(0deg)';
        }, 2000);
    }
});

// Typing effect for code block
function typeCode() {
    const codeElement = document.querySelector('.typing-text');
    if (!codeElement) return;
    
    const originalText = codeElement.innerHTML;
    codeElement.innerHTML = '';
    codeElement.style.opacity = '1';
    
    let i = 0;
    const speed = 30;
    
    function type() {
        if (i < originalText.length) {
            codeElement.innerHTML += originalText.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    // Start typing after a delay
    setTimeout(type, 1000);
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Animate elements on scroll
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all feature cards and meme cards
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .meme-card, .social-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// Mobile menu toggle (jika mau ditambahkan nanti)
const navToggle = document.createElement('div');
navToggle.className = 'nav-toggle';
navToggle.innerHTML = '☰';
navToggle.style.display = 'none';
navToggle.style.fontSize = '24px';
navToggle.style.cursor = 'pointer';
navToggle.style.color = 'var(--primary)';

// Responsive nav handling
function handleResponsiveNav() {
    if (window.innerWidth <= 768) {
        navToggle.style.display = 'block';
    } else {
        navToggle.style.display = 'none';
    }
}

window.addEventListener('resize', handleResponsiveNav);
handleResponsiveNav();

// Fun cursor trail effect (optional)
let cursorTrail = [];
const trailLength = 20;

document.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768) { // Only on desktop
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.position = 'fixed';
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
        trail.style.width = '5px';
        trail.style.height = '5px';
        trail.style.borderRadius = '50%';
        trail.style.background = 'var(--primary)';
        trail.style.pointerEvents = 'none';
        trail.style.opacity = '0.5';
        trail.style.zIndex = '9999';
        
        document.body.appendChild(trail);
        
        setTimeout(() => {
            trail.style.transition = 'all 0.5s';
            trail.style.opacity = '0';
            trail.style.transform = 'scale(2)';
            
            setTimeout(() => {
                trail.remove();
            }, 500);
        }, 50);
    }
});

// Random glitch effect on title
setInterval(() => {
    const glitch = document.querySelector('.glitch');
    if (glitch && Math.random() > 0.95) {
        glitch.style.textShadow = `
            ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #ff0055,
            ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #0066ff
        `;
        
        setTimeout(() => {
            glitch.style.textShadow = '';
        }, 100);
    }
}, 3000);

// Console welcome message
console.log('%c Welcome to NOOB CODING! ', 'background: #00ff41; color: #0a0e27; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%c If you can read this, you are already a better coder than most of us! 🚀 ', 'color: #00ff41; font-size: 14px;');
console.log('%c Contract Address: ' + CONTRACT_ADDRESS, 'color: #0066ff; font-size: 12px;');

// Update stats dynamically (mock data - ganti dengan real data dari blockchain nanti)
function updateStats() {
    const stats = {
        holders: Math.floor(Math.random() * 100) + 9900,
        errors: Math.floor(Math.random() * 50) + 400,
    };
    
    // Update holders count
    const holdersElement = document.getElementById('holders');
    if (holdersElement) {
        holdersElement.textContent = stats.holders.toLocaleString();
    }
}

// Update stats every 10 seconds
setInterval(updateStats, 10000);
