// Greek alphabet data with authentic transliterations and pronunciations
const greekAlphabet = [
  {
    uppercase: "Α",
    lowercase: "α",
    name: "Alpha",
    pronunciation: "/ˈælfə/",
    romanization: "A, a",
    greekPronunciation: "άλφα",
  },
  {
    uppercase: "Β",
    lowercase: "β",
    name: "Beta",
    pronunciation: "/ˈbeɪtə/",
    romanization: "B, b",
    greekPronunciation: "βήτα",
  },
  {
    uppercase: "Γ",
    lowercase: "γ",
    name: "Gamma",
    pronunciation: "/ˈɡæmə/",
    romanization: "G, g",
    greekPronunciation: "γάμμα",
  },
  {
    uppercase: "Δ",
    lowercase: "δ",
    name: "Delta",
    pronunciation: "/ˈdɛltə/",
    romanization: "D, d",
    greekPronunciation: "δέλτα",
  },
  {
    uppercase: "Ε",
    lowercase: "ε",
    name: "Epsilon",
    pronunciation: "/ˈɛpsɪlɒn/",
    romanization: "E, e",
    greekPronunciation: "έψιλον",
  },
  {
    uppercase: "Ζ",
    lowercase: "ζ",
    name: "Zeta",
    pronunciation: "/ˈzeɪtə/",
    romanization: "Z, z",
    greekPronunciation: "ζήτα",
  },
  {
    uppercase: "Η",
    lowercase: "η",
    name: "Eta",
    pronunciation: "/ˈeɪtə/",
    romanization: "H, h",
    greekPronunciation: "ήτα",
  },
  {
    uppercase: "Θ",
    lowercase: "θ",
    name: "Theta",
    pronunciation: "/ˈθeɪtə/",
    romanization: "Th, th",
    greekPronunciation: "θήτα",
  },
  {
    uppercase: "Ι",
    lowercase: "ι",
    name: "Iota",
    pronunciation: "/aɪˈoʊtə/",
    romanization: "I, i",
    greekPronunciation: "ιώτα",
  },
  {
    uppercase: "Κ",
    lowercase: "κ",
    name: "Kappa",
    pronunciation: "/ˈkæpə/",
    romanization: "K, k",
    greekPronunciation: "κάππα",
  },
  {
    uppercase: "Λ",
    lowercase: "λ",
    name: "Lambda",
    pronunciation: "/ˈlæmdə/",
    romanization: "L, l",
    greekPronunciation: "λάμδα",
  },
  {
    uppercase: "Μ",
    lowercase: "μ",
    name: "Mu",
    pronunciation: "/mjuː/",
    romanization: "M, m",
    greekPronunciation: "μι",
  },
  {
    uppercase: "Ν",
    lowercase: "ν",
    name: "Nu",
    pronunciation: "/nuː/",
    romanization: "N, n",
    greekPronunciation: "νι",
  },
  {
    uppercase: "Ξ",
    lowercase: "ξ",
    name: "Xi",
    pronunciation: "/zaɪ/",
    romanization: "X, x",
    greekPronunciation: "ξι",
  },
  {
    uppercase: "Ο",
    lowercase: "ο",
    name: "Omicron",
    pronunciation: "/ˈoʊmɪkrɒn/",
    romanization: "O, o",
    greekPronunciation: "όμικρον",
  },
  {
    uppercase: "Π",
    lowercase: "π",
    name: "Pi",
    pronunciation: "/paɪ/",
    romanization: "P, p",
    greekPronunciation: "πι",
  },
  {
    uppercase: "Ρ",
    lowercase: "ρ",
    name: "Rho",
    pronunciation: "/roʊ/",
    romanization: "R, r",
    greekPronunciation: "ρο",
  },
  {
    uppercase: "Σ",
    lowercase: "σ/ς",
    name: "Sigma",
    pronunciation: "/ˈsɪɡmə/",
    romanization: "S, s",
    greekPronunciation: "σίγμα",
  },
  {
    uppercase: "Τ",
    lowercase: "τ",
    name: "Tau",
    pronunciation: "/taʊ/",
    romanization: "T, t",
    greekPronunciation: "ταυ",
  },
  {
    uppercase: "Υ",
    lowercase: "υ",
    name: "Upsilon",
    pronunciation: "/ˈʌpsɪlɒn/",
    romanization: "U, u",
    greekPronunciation: "ύψιλον",
  },
  {
    uppercase: "Φ",
    lowercase: "φ",
    name: "Phi",
    pronunciation: "/faɪ/",
    romanization: "Ph, ph",
    greekPronunciation: "φι",
  },
  {
    uppercase: "Χ",
    lowercase: "χ",
    name: "Chi",
    pronunciation: "/kaɪ/",
    romanization: "Ch, ch",
    greekPronunciation: "χι",
  },
  {
    uppercase: "Ψ",
    lowercase: "ψ",
    name: "Psi",
    pronunciation: "/saɪ/",
    romanization: "Ps, ps",
    greekPronunciation: "ψι",
  },
  {
    uppercase: "Ω",
    lowercase: "ω",
    name: "Omega",
    pronunciation: "/oʊˈmeɪɡə/",
    romanization: "O, o",
    greekPronunciation: "ωμέγα",
  },
];

// Application state
let currentCardIndex = 0;
let isFlipped = false;
let cardOrder = [...Array(greekAlphabet.length).keys()]; // [0, 1, 2, ..., 23]

// DOM elements
const flashcard = document.getElementById("flashcard");
const flashcardFront = document.getElementById("flashcardFront");
const flashcardBack = document.getElementById("flashcardBack");
const letterUppercase = document.getElementById("letterUppercase");
const letterLowercase = document.getElementById("letterLowercase");
const transliteration = document.getElementById("transliteration");
const pronunciation = document.getElementById("pronunciation");
const romanization = document.getElementById("romanization");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const flipBtn = document.getElementById("flipBtn");
const shuffleBtn = document.getElementById("shuffleBtn");
const resetBtn = document.getElementById("resetBtn");
const currentCard = document.getElementById("currentCard");
const totalCards = document.getElementById("totalCards");
const progressFill = document.getElementById("progressFill");
const alphabetGrid = document.getElementById("alphabetGrid");

// Initialize the application
function init() {
  totalCards.textContent = greekAlphabet.length;
  updateCard();
  updateProgress();
  createAlphabetGrid();
  addEventListeners();
  initializeSpeechSynthesis();
}

// Add event listeners
function addEventListeners() {
  // Card flip
  flashcard.addEventListener("click", flipCard);
  flipBtn.addEventListener("click", flipCard);

  // Navigation
  prevBtn.addEventListener("click", previousCard);
  nextBtn.addEventListener("click", nextCard);

  // Action buttons
  shuffleBtn.addEventListener("click", shuffleCards);
  resetBtn.addEventListener("click", resetOrder);

  // Keyboard navigation
  document.addEventListener("keydown", handleKeyPress);

  // Make flashcard focusable for accessibility
  flashcard.setAttribute("tabindex", "0");
}

// Handle keyboard input
function handleKeyPress(event) {
  switch (event.code) {
    case "Space":
      event.preventDefault();
      flipCard();
      break;
    case "ArrowLeft":
      event.preventDefault();
      previousCard();
      break;
    case "ArrowRight":
      event.preventDefault();
      nextCard();
      break;
    case "KeyS":
      if (event.ctrlKey || event.metaKey) {
        event.preventDefault();
        shuffleCards();
      }
      break;
    case "KeyR":
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

  // Update accessibility labels
  letterUppercase.setAttribute(
    "aria-label",
    `Uppercase ${currentLetter.name}: ${currentLetter.uppercase}`
  );
  letterLowercase.setAttribute(
    "aria-label",
    `Lowercase ${currentLetter.name}: ${currentLetter.lowercase}`
  );
  transliteration.setAttribute(
    "aria-label",
    `Letter name: ${currentLetter.name}`
  );
  pronunciation.setAttribute(
    "aria-label",
    `Pronunciation: ${currentLetter.pronunciation}`
  );
  romanization.setAttribute(
    "aria-label",
    `Romanization: ${currentLetter.romanization}`
  );

  // Update flashcard aria-label
  flashcard.setAttribute(
    "aria-label",
    `Flashcard showing ${currentLetter.name}. Press space to flip`
  );

  // Reset flip state
  if (isFlipped) {
    flashcard.classList.remove("flipped");
    isFlipped = false;
  }

  // Update navigation buttons
  prevBtn.disabled = currentCardIndex === 0;
  nextBtn.disabled = currentCardIndex === cardOrder.length - 1;

  // Update button accessibility
  prevBtn.setAttribute(
    "aria-label",
    currentCardIndex === 0
      ? "Go to previous card (disabled)"
      : "Go to previous card"
  );
  nextBtn.setAttribute(
    "aria-label",
    currentCardIndex === cardOrder.length - 1
      ? "Go to next card (disabled)"
      : "Go to next card"
  );

  // Trigger slide-in animation
  flashcard.style.animation = "none";
  flashcard.offsetHeight; // Trigger reflow
  flashcard.style.animation = null;
}

// Update progress indicators
function updateProgress() {
  const progress = ((currentCardIndex + 1) / cardOrder.length) * 100;
  progressFill.style.width = `${progress}%`;
  currentCard.textContent = currentCardIndex + 1;

  // Update accessibility attributes
  const progressBar = document.querySelector(".progress-bar");
  progressBar.setAttribute("aria-valuenow", currentCardIndex + 1);
  progressBar.setAttribute(
    "aria-valuetext",
    `Card ${currentCardIndex + 1} of ${cardOrder.length}`
  );
}

// Flip the current card
function flipCard() {
  isFlipped = !isFlipped;
  flashcard.classList.toggle("flipped", isFlipped);

  // Add visual feedback
  flashcard.style.transform = isFlipped
    ? "rotateY(180deg) scale(1.02)"
    : "rotateY(0deg) scale(1.02)";
  setTimeout(() => {
    flashcard.style.transform = isFlipped ? "rotateY(180deg)" : "rotateY(0deg)";
  }, 100);
}

// Navigate to previous card
function previousCard() {
  if (currentCardIndex > 0) {
    currentCardIndex--;
    updateCard();
    updateProgress();

    // Add transition effect
    flashcard.style.transform = "translateX(-10px)";
    setTimeout(() => {
      flashcard.style.transform = "translateX(0)";
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
    flashcard.style.transform = "translateX(10px)";
    setTimeout(() => {
      flashcard.style.transform = "translateX(0)";
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
  shuffleBtn.style.transform = "rotate(180deg)";
  setTimeout(() => {
    shuffleBtn.style.transform = "rotate(0deg)";
  }, 300);

  // Show notification
  showNotification("Cards shuffled! Random order activated.");
}

// Reset to alphabetical order
function resetOrder() {
  cardOrder = [...Array(greekAlphabet.length).keys()];
  currentCardIndex = 0;
  updateCard();
  updateProgress();

  // Visual feedback
  resetBtn.style.transform = "scale(0.95)";
  setTimeout(() => {
    resetBtn.style.transform = "scale(1)";
  }, 150);

  // Show notification
  showNotification("Order reset! Back to alphabetical sequence.");
}

// Show temporary notification
function showNotification(message) {
  // Create notification element
  const notification = document.createElement("div");
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
    notification.style.opacity = "1";
    notification.style.transform = "translateY(0)";
  }, 10);

  // Remove after delay
  setTimeout(() => {
    notification.style.opacity = "0";
    notification.style.transform = "translateY(-10px)";
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 2000);
}

// Add touch gesture support for mobile
let touchStartX = 0;
let touchEndX = 0;

flashcard.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

flashcard.addEventListener("touchend", (e) => {
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

// Speech synthesis functionality
let speechSynth = null;
let greekVoice = null;

// Initialize speech synthesis with best Greek voice
function initializeSpeechSynthesis() {
  if ("speechSynthesis" in window) {
    speechSynth = window.speechSynthesis;

    // Wait for voices to load
    const setGreekVoice = () => {
      const voices = speechSynth.getVoices();
      // Look for Greek voices in order of preference
      greekVoice =
        voices.find(
          (voice) =>
            voice.lang === "el-GR" ||
            voice.lang === "el" ||
            voice.name.toLowerCase().includes("greek")
        ) ||
        voices.find((voice) => voice.lang.startsWith("el")) ||
        voices[0]; // Fallback to first available voice

      if (greekVoice) {
        console.log("Using voice:", greekVoice.name, greekVoice.lang);
      }
    };

    if (speechSynth.getVoices().length === 0) {
      speechSynth.addEventListener("voiceschanged", setGreekVoice);
    } else {
      setGreekVoice();
    }
  }
}

// Speak Greek letter pronunciation
function speakGreekLetter(letter) {
  if (!speechSynth || !greekVoice) {
    showNotification("Speech synthesis not available");
    return;
  }

  // Cancel any ongoing speech
  speechSynth.cancel();

  const utterance = new SpeechSynthesisUtterance(letter.greekPronunciation);
  utterance.voice = greekVoice;
  utterance.rate = 0.8; // Slightly slower for learning
  utterance.pitch = 1.0;
  utterance.volume = 1.0;

  // Set language to Greek if available
  if (greekVoice.lang.startsWith("el")) {
    utterance.lang = greekVoice.lang;
  }

  speechSynth.speak(utterance);

  return utterance;
}

// Create the alphabet grid for pronunciation
function createAlphabetGrid() {
  alphabetGrid.innerHTML = "";

  greekAlphabet.forEach((letter, index) => {
    const letterItem = document.createElement("div");
    letterItem.className = "letter-item";
    letterItem.setAttribute("data-index", index);
    letterItem.setAttribute("tabindex", "0");
    letterItem.setAttribute("role", "button");
    letterItem.setAttribute(
      "aria-label",
      `Pronounce ${letter.greekPronunciation}`
    );

    letterItem.innerHTML = `
          <div class="letter-item-upper">${letter.uppercase}</div>
          <div class="letter-item-lower">${letter.lowercase}</div>
          <div class="letter-item-name">${letter.greekPronunciation}</div>
      `;

    // Add click listener for pronunciation
    letterItem.addEventListener("click", () => {
      handleLetterPronunciation(index, letterItem);
    });

    // Add keyboard support
    letterItem.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleLetterPronunciation(index, letterItem);
      }
    });

    alphabetGrid.appendChild(letterItem);
  });
}

// Handle letter pronunciation with visual feedback
function handleLetterPronunciation(index, element) {
  const letter = greekAlphabet[index];

  // Add visual feedback
  element.classList.add("speaking");

  // Speak the letter
  const utterance = speakGreekLetter(letter);

  if (utterance) {
    utterance.addEventListener("end", () => {
      element.classList.remove("speaking");
    });

    utterance.addEventListener("error", () => {
      element.classList.remove("speaking");
      showNotification("Could not pronounce this letter");
    });

    // Remove speaking class after timeout as fallback
    setTimeout(() => {
      element.classList.remove("speaking");
    }, 3000);

    // Show notification with letter info
    showNotification(`Playing: ${letter.name} (${letter.greekPronunciation})`);
  }
}

// Initialize the application when the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  init();
  optimizePerformance();

  // Add a welcome message
  setTimeout(() => {
    showNotification(
      "Welcome! Use spacebar to flip cards, arrows to navigate."
    );
  }, 1000);
});

// PWA functionality is now handled by Vite PWA plugin
// The service worker will be automatically registered

// PWA Install prompt
let deferredPrompt;
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;

  // Show install button or notification
  setTimeout(() => {
    showNotification("Install this app for offline access!");
  }, 5000);
});

// Handle successful PWA installation
window.addEventListener("appinstalled", () => {
  showNotification("App installed successfully!");
  deferredPrompt = null;
});
