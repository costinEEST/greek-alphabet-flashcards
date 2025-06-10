// Greek alphabet data with authentic transliterations and pronunciations
const greekAlphabet = [
    {
        uppercase: 'Α',
        lowercase: 'α',
        name: 'Alpha',
        pronunciation: '/ˈælfə/',
        romanization: 'A, a'
    },
    {
        uppercase: 'Β',
        lowercase: 'β',
        name: 'Beta',
        pronunciation: '/ˈbeɪtə/',
        romanization: 'B, b'
    },
    {
        uppercase: 'Γ',
        lowercase: 'γ',
        name: 'Gamma',
        pronunciation: '/ˈɡæmə/',
        romanization: 'G, g'
    },
    {
        uppercase: 'Δ',
        lowercase: 'δ',
        name: 'Delta',
        pronunciation: '/ˈdɛltə/',
        romanization: 'D, d'
    },
    {
        uppercase: 'Ε',
        lowercase: 'ε',
        name: 'Epsilon',
        pronunciation: '/ˈɛpsɪlɒn/',
        romanization: 'E, e'
    },
    {
        uppercase: 'Ζ',
        lowercase: 'ζ',
        name: 'Zeta',
        pronunciation: '/ˈzeɪtə/',
        romanization: 'Z, z'
    },
    {
        uppercase: 'Η',
        lowercase: 'η',
        name: 'Eta',
        pronunciation: '/ˈeɪtə/',
        romanization: 'H, h'
    },
    {
        uppercase: 'Θ',
        lowercase: 'θ',
        name: 'Theta',
        pronunciation: '/ˈθeɪtə/',
        romanization: 'Th, th'
    },
    {
        uppercase: 'Ι',
        lowercase: 'ι',
        name: 'Iota',
        pronunciation: '/aɪˈoʊtə/',
        romanization: 'I, i'
    },
    {
        uppercase: 'Κ',
        lowercase: 'κ',
        name: 'Kappa',
        pronunciation: '/ˈkæpə/',
        romanization: 'K, k'
    },
    {
        uppercase: 'Λ',
        lowercase: 'λ',
        name: 'Lambda',
        pronunciation: '/ˈlæmdə/',
        romanization: 'L, l'
    },
    {
        uppercase: 'Μ',
        lowercase: 'μ',
        name: 'Mu',
        pronunciation: '/mjuː/',
        romanization: 'M, m'
    },
    {
        uppercase: 'Ν',
        lowercase: 'ν',
        name: 'Nu',
        pronunciation: '/nuː/',
        romanization: 'N, n'
    },
    {
        uppercase: 'Ξ',
        lowercase: 'ξ',
        name: 'Xi',
        pronunciation: '/zaɪ/',
        romanization: 'X, x'
    },
    {
        uppercase: 'Ο',
        lowercase: 'ο',
        name: 'Omicron',
        pronunciation: '/ˈoʊmɪkrɒn/',
        romanization: 'O, o'
    },
    {
        uppercase: 'Π',
        lowercase: 'π',
        name: 'Pi',
        pronunciation: '/paɪ/',
        romanization: 'P, p'
    },
    {
        uppercase: 'Ρ',
        lowercase: 'ρ',
        name: 'Rho',
        pronunciation: '/roʊ/',
        romanization: 'R, r'
    },
    {
        uppercase: 'Σ',
        lowercase: 'σ/ς',
        name: 'Sigma',
        pronunciation: '/ˈsɪɡmə/',
        romanization: 'S, s'
    },
    {
        uppercase: 'Τ',
        lowercase: 'τ',
        name: 'Tau',
        pronunciation: '/taʊ/',
        romanization: 'T, t'
    },
    {
        uppercase: 'Υ',
        lowercase: 'υ',
        name: 'Upsilon',
        pronunciation: '/ˈʌpsɪlɒn/',
        romanization: 'U, u'
    },
    {
        uppercase: 'Φ',
        lowercase: 'φ',
        name: 'Phi',
        pronunciation: '/faɪ/',
        romanization: 'Ph, ph'
    },
    {
        uppercase: 'Χ',
        lowercase: 'χ',
        name: 'Chi',
        pronunciation: '/kaɪ/',
        romanization: 'Ch, ch'
    },
    {
        uppercase: 'Ψ',
        lowercase: 'ψ',
        name: 'Psi',
        pronunciation: '/saɪ/',
        romanization: 'Ps, ps'
    },
    {
        uppercase: 'Ω',
        lowercase: 'ω',
        name: 'Omega',
        pronunciation: '/oʊˈmeɪɡə/',
        romanization: 'O, o'
    }
];

// Application state
let currentCardIndex = 0;
let isFlipped = false;
let cardOrder = [...Array(greekAlphabet.length).keys()]; // [0, 1, 2, ..., 23]

// DOM elements
const flashcard = document.getElementById('flashcard');
const flashcardFront = document.getElementById('flashcardFront');
const flashcardBack = document.getElementById('flashcardBack');
const letterUppercase = document.getElementById('letterUppercase');
const letterLowercase = document.getElementById('letterLowercase');
const transliteration = document.getElementById('transliteration');
const pronunciation = document.getElementById('pronunciation');
const romanization = document.getElementById('romanization');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const flipBtn = document.getElementById('flipBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const resetBtn = document.getElementById('resetBtn');
const currentCard = document.getElementById('currentCard');
const totalCards = document.getElementById('totalCards');
const progressFill = document.getElementById('progressFill');

// Initialize the application
function init() {
    totalCards.textContent = greekAlphabet.length;
    updateCard();
    updateProgress();
    addEventListeners();
}

// Add event listeners
function addEventListeners() {
    // Card flip
    flashcard.addEventListener('click', flipCard);
    flipBtn.addEventListener('click', flipCard);
    
    // Navigation
    prevBtn.addEventListener('click', previousCard);
    nextBtn.addEventListener('click', nextCard);
    
    // Action buttons
    shuffleBtn.addEventListener('click', shuffleCards);
    resetBtn.addEventListener('click', resetOrder);
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyPress);
    
    // Make flashcard focusable for accessibility
    flashcard.setAttribute('tabindex', '0');
}

// Handle keyboard input
function handleKeyPress(event) {
    switch(event.code) {
        case 'Space':
            event.preventDefault();
            flipCard();
            break;
        case 'ArrowLeft':
            event.preventDefault();
            previousCard();
            break;
        case 'ArrowRight':
            event.preventDefault();
            nextCard();
            break;
        case 'KeyS':
            if (event.ctrlKey || event.metaKey) {
                event.preventDefault();
                shuffleCards();
            }
            break;
        case 'KeyR':
            if (event.ctrlKey || event.metaKey) {
                event.preventDefault();
                resetOrder();
            }
            break;
    }
}

// Update the current card display
function updateCard() {
    const currentLetter = greekAlphabet[cardOrder[currentCardIndex]];
    
    // Update front of card
    letterUppercase.textContent = currentLetter.uppercase;
    letterLowercase.textContent = currentLetter.lowercase;
    
    // Update back of card
    transliteration.textContent = currentLetter.name;
    pronunciation.textContent = currentLetter.pronunciation;
    romanization.textContent = currentLetter.romanization;
    
    // Reset flip state
    if (isFlipped) {
        flashcard.classList.remove('flipped');
        isFlipped = false;
    }
    
    // Update navigation buttons
    prevBtn.disabled = currentCardIndex === 0;
    nextBtn.disabled = currentCardIndex === cardOrder.length - 1;
    
    // Trigger slide-in animation
    flashcard.style.animation = 'none';
    flashcard.offsetHeight; // Trigger reflow
    flashcard.style.animation = null;
}

// Update progress indicators
function updateProgress() {
    const progress = ((currentCardIndex + 1) / cardOrder.length) * 100;
    progressFill.style.width = `${progress}%`;
    currentCard.textContent = currentCardIndex + 1;
}

// Flip the current card
function flipCard() {
    isFlipped = !isFlipped;
    flashcard.classList.toggle('flipped', isFlipped);
    
    // Add visual feedback
    flashcard.style.transform = isFlipped ? 'rotateY(180deg) scale(1.02)' : 'rotateY(0deg) scale(1.02)';
    setTimeout(() => {
        flashcard.style.transform = isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)';
    }, 100);
}

// Navigate to previous card
function previousCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateCard();
        updateProgress();
        
        // Add transition effect
        flashcard.style.transform = 'translateX(-10px)';
        setTimeout(() => {
            flashcard.style.transform = 'translateX(0)';
        }, 150);
    }
}

// Navigate to next card
function nextCard() {
    if (currentCardIndex < cardOrder.length - 1) {
        currentCardIndex++;
        updateCard();
        updateProgress();
        
        // Add transition effect
        flashcard.style.transform = 'translateX(10px)';
        setTimeout(() => {
            flashcard.style.transform = 'translateX(0)';
        }, 150);
    }
}

// Shuffle the card order for random practice
function shuffleCards() {
    // Fisher-Yates shuffle algorithm
    const newOrder = [...cardOrder];
    for (let i = newOrder.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newOrder[i], newOrder[j]] = [newOrder[j], newOrder[i]];
    }
    
    cardOrder = newOrder;
    currentCardIndex = 0;
    updateCard();
    updateProgress();
    
    // Visual feedback
    shuffleBtn.style.transform = 'rotate(180deg)';
    setTimeout(() => {
        shuffleBtn.style.transform = 'rotate(0deg)';
    }, 300);
    
    // Show notification
    showNotification('Cards shuffled! Random order activated.');
}

// Reset to alphabetical order
function resetOrder() {
    cardOrder = [...Array(greekAlphabet.length).keys()];
    currentCardIndex = 0;
    updateCard();
    updateProgress();
    
    // Visual feedback
    resetBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        resetBtn.style.transform = 'scale(1)';
    }, 150);
    
    // Show notification
    showNotification('Order reset! Back to alphabetical sequence.');
}

// Show temporary notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(76, 175, 80, 0.9);
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        font-size: 0.9rem;
        font-weight: 500;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        opacity: 0;
        transform: translateY(-10px);
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 10);
    
    // Remove after delay
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

// Add touch gesture support for mobile
let touchStartX = 0;
let touchEndX = 0;

flashcard.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

flashcard.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = touchEndX - touchStartX;
    
    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0 && currentCardIndex > 0) {
            // Swipe right - previous card
            previousCard();
        } else if (swipeDistance < 0 && currentCardIndex < cardOrder.length - 1) {
            // Swipe left - next card
            nextCard();
        }
    }
}

// Add performance optimization for smoother animations
function optimizePerformance() {
    // Preload next and previous cards for smoother transitions
    const preloadNext = () => {
        if (currentCardIndex < cardOrder.length - 1) {
            const nextLetter = greekAlphabet[cardOrder[currentCardIndex + 1]];
            // Preload could be implemented here if needed
        }
    };
    
    // Debounce rapid navigation
    let navigationTimeout;
    const originalNext = nextCard;
    const originalPrev = previousCard;
    
    nextCard = () => {
        clearTimeout(navigationTimeout);
        navigationTimeout = setTimeout(originalNext, 50);
    };
    
    previousCard = () => {
        clearTimeout(navigationTimeout);
        navigationTimeout = setTimeout(originalPrev, 50);
    };
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    init();
    optimizePerformance();
    
    // Add a welcome message
    setTimeout(() => {
        showNotification('Welcome! Use spacebar to flip cards, arrows to navigate.');
    }, 1000);
});

// Add service worker registration for potential offline use
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Service worker could be registered here for offline functionality
        console.log('Greek Alphabet Flashcards loaded successfully!');
    });
}
