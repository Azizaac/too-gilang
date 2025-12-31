// Create stars - Reduced for performance
function createStars() {
    const starsContainer = document.getElementById('stars');
    const starCount = 30; // Reduced from 100

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 2 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 4 + 's';
        star.style.animationDuration = (Math.random() * 2 + 3) + 's';
        starsContainer.appendChild(star);
    }
}

// Create particles - Reduced for performance
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 20; // Reduced from 80

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 5 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 25 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 20) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Scroll reveal animation
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
            
            // Special handling for section titles
            if (element.classList.contains('section-title')) {
                element.classList.add('visible');
            }
            
            // Special handling for story content
            if (element.classList.contains('story-content')) {
                element.classList.add('visible');
            }
            
            // Special handling for quotes
            if (element.classList.contains('quote')) {
                element.classList.add('visible');
            }
            
            // Special handling for closing message
            if (element.classList.contains('closing-message')) {
                element.classList.add('visible');
            }
        }
    });
}

// Countdown Timer
function updateCountdown() {
    const now = new Date().getTime();
    const currentYear = new Date().getFullYear();
    const targetDate = new Date(currentYear, 4, 18, 0, 0, 0).getTime(); // May 18, 00:00
    
    // If birthday has passed this year, set for next year
    const target = targetDate > now ? targetDate : new Date(currentYear + 1, 4, 18, 0, 0, 0).getTime();
    
    const distance = target - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

    // Add animation class when numbers change
    const numbers = document.querySelectorAll('.countdown-number');
    numbers.forEach((num, index) => {
        const oldValue = num.getAttribute('data-old-value') || '';
        const newValue = num.textContent;
        
        if (oldValue !== newValue) {
            num.classList.add('changing');
            num.setAttribute('data-old-value', newValue);
            
            setTimeout(() => {
                num.classList.remove('changing');
            }, 600);
        }
    });

    // Trigger confetti when countdown reaches zero
    if (distance < 1000 && distance > 0) {
        createConfetti();
    }
}

// Create confetti
function createConfetti() {
    const confettiCount = 150;
    const colors = ['#87ceeb', '#ffffff', '#4a90e2', '#b0d4f1', '#add8e6', '#7ec8e3'];

    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            const size = Math.random() * 12 + 6;
            confetti.style.width = size + 'px';
            confetti.style.height = size + 'px';
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 3) + 's';
            confetti.style.setProperty('--drift', (Math.random() * 200 - 100) + 'px');
            document.body.appendChild(confetti);

            setTimeout(() => {
                confetti.remove();
            }, 6000);
        }, i * 8);
    }
}

// Memory Gallery
const memories = [
    {
        image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800',
        caption: 'Momen kebersamaan yang tak terlupakan, penuh tawa dan kebahagiaan.'
    },
    {
        image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800',
        caption: 'Setiap petualangan bersama adalah cerita indah yang terukir dalam memori.'
    },
    {
        image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800',
        caption: 'Persahabatan sejati terlihat dari senyuman yang tulus dan dukungan yang tak pernah pudar.'
    },
    {
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
        caption: 'Di setiap langkah perjalanan, ada cerita baru yang kita tulis bersama.'
    },
    {
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800',
        caption: 'Kenangan manis yang akan selalu menjadi bagian dari cerita hidup kita.'
    },
    {
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800',
        caption: 'Persahabatan adalah hadiah terindah yang membuat hidup lebih berarti.'
    }
];

// Memory Slider
let currentSlide = 0;
let sliderTrack, sliderDots, prevBtn, nextBtn;

function loadMemories() {
    sliderTrack = document.getElementById('sliderTrack');
    sliderDots = document.getElementById('sliderDots');
    prevBtn = document.getElementById('prevBtn');
    nextBtn = document.getElementById('nextBtn');
    
    // Create slides
    memories.forEach((memory, index) => {
        const slide = document.createElement('div');
        slide.className = 'memory-slide';
        slide.innerHTML = `
            <img src="${memory.image}" alt="Memory ${index + 1}" class="memory-image" loading="lazy">
            <div class="memory-caption">
                <p class="memory-caption-text">${memory.caption}</p>
            </div>
        `;
        sliderTrack.appendChild(slide);

        // Create dots
        const dot = document.createElement('div');
        dot.className = 'dot';
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        sliderDots.appendChild(dot);
    });
}

function goToSlide(index) {
    currentSlide = index;
    sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % memories.length;
    goToSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + memories.length) % memories.length;
    goToSlide(currentSlide);
}

// Auto slide
let autoSlideInterval;
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Music Player with Autoplay
let isPlaying = false;
let audio, musicBtn;

function toggleMusic() {
    if (isPlaying) {
        audio.pause();
        musicBtn.innerHTML = '<span class="music-icon">🎵</span>';
        isPlaying = false;
    } else {
        audio.play().catch(e => {
            console.log('Audio play failed:', e);
        });
        musicBtn.innerHTML = '<span class="music-icon">⏸️</span>';
        isPlaying = true;
    }
}

// Autoplay music
function autoPlayMusic() {
    audio.volume = 0.5; // Set volume to 50%
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
        playPromise.then(() => {
            isPlaying = true;
            musicBtn.innerHTML = '<span class="music-icon">⏸️</span>';
        }).catch(error => {
            // Autoplay was prevented, user needs to interact first
            console.log('Autoplay prevented:', error);
            musicBtn.innerHTML = '<span class="music-icon">🎵</span>';
        });
    }
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    createStars();
    createParticles();
    loadMemories();
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Setup slider controls
    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoSlide();
        startAutoSlide();
    });
    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoSlide();
        startAutoSlide();
    });
    
    // Start auto slide
    startAutoSlide();
    
    // Pause auto slide on hover
    const sliderWrapper = document.querySelector('.slider-wrapper');
    sliderWrapper.addEventListener('mouseenter', stopAutoSlide);
    sliderWrapper.addEventListener('mouseleave', startAutoSlide);
    
    // Create confetti on page load
    setTimeout(() => {
        createConfetti();
    }, 1500);
    
    // Get audio and music button elements
    audio = document.getElementById('birthdayMusic');
    musicBtn = document.getElementById('musicBtn');
    
    // Try to autoplay music
    setTimeout(() => {
        autoPlayMusic();
    }, 500);
    
    // Initial reveal check
    revealOnScroll();
});

// Scroll event listener for reveal animations
window.addEventListener('scroll', revealOnScroll);

// Smooth scroll for better UX
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
