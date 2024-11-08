// Form validation script
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (username === '' || password === '') {
        errorMessage.textContent = 'Please fill in all fields';
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        // Simulate form submission (e.g., navigate to another page)
        alert('Form submitted successfully!');
    }
});

// Simulate form submission with a loading animation
document.querySelector('.login-button').addEventListener('click', function(event) {
    const button = event.target;
    button.textContent = 'Loading...';
    button.classList.add('loading');
    setTimeout(() => {
        button.textContent = 'Login';
        button.classList.remove('loading');
        alert('Form submitted successfully!');
    }, 2000);
});

// Form validation with shake animation on error
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (username === '' || password === '') {
        errorMessage.textContent = 'Please fill in all fields';
        errorMessage.style.display = 'block';
        document.querySelector('.container').classList.add('shake');
        setTimeout(() => {
            document.querySelector('.container').classList.remove('shake');
        }, 500);
    } else {
        errorMessage.style.display = 'none';
        // Simulate form submission (e.g., navigate to another page)
        alert('Form submitted successfully!');
    }
});

// Adding success animation
document.querySelector('.login-button').addEventListener('click', function(event) {
    const button = event.target;
    button.textContent = 'Loading...';
    button.classList.add('loading');
    setTimeout(() => {
        button.textContent = 'Login';
        button.classList.remove('loading');
        button.classList.add('success');
        setTimeout(() => {
            button.classList.remove('success');
            alert('Form submitted successfully!');
        }, 1000);
    }, 2000);
});

// Dark mode toggle functionality
document.getElementById('darkModeCheckbox').addEventListener('change', function(event) {
    if (event.target.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});

// Show circular progress during form submission
document.querySelector('.login-button').addEventListener('click', function() {
    const progressIndicator = document.querySelector('.progress-indicator');
    progressIndicator.style.display = 'block';
    let progress = 0;

    const interval = setInterval(() => {
        progress += 10;
        document.querySelector('.inside-circle').textContent = `${progress}%`;
        if (progress >= 100) {
            clearInterval(interval);
            progressIndicator.style.display = 'none';
        }
    }, 200);
});

// Initialize particle effect
particlesJS('particles-js', {
    particles: {
        number: { value: 50 },
        size: { value: 3 },
        move: { speed: 3 },
        line_linked: { enable: true, distance: 150, color: '#ffffff' },
        color: { value: '#ffffff' },
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
        },
    },
    retina_detect: true,
});

// Simulate MFA process
document.querySelector('.login-button').addEventListener('click', function(event) {
    event.preventDefault();
    // Assume form validation was successful
    document.getElementById('mfa-section').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
});

// High contrast mode toggle
document.getElementById('highContrastCheckbox').addEventListener('change', function(event) {
    if (event.target.checked) {
        document.body.classList.add('high-contrast');
    } else {
        document.body.classList.remove('high-contrast');
    }
});

// Voice recognition for login inputs
if ('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = false;

    document.getElementById('voiceLogin').addEventListener('click', function() {
        recognition.start();
    });

    recognition.onresult = function(event) {
        const input = event.results[0][0].transcript;
        document.getElementById('username').value = input;
    };

    recognition.onspeechend = function() {
        recognition.stop();
    };
}

// Background theme change functionality
document.getElementById('backgroundTheme').addEventListener('change', function(event) {
    const theme = event.target.value;
    switch (theme) {
        case 'nature':
            document.body.style.backgroundImage = 'url("nature.jpg")';
            break;
        case 'space':
            document.body.style.backgroundImage = 'url("space.jpg")';
            break;
        case 'abstract':
            document.body.style.backgroundImage = 'url("abstract.jpg")';
            break;
        default:
            document.body.style.backgroundImage = 'none';
            break;
    }
});

// Parallax effect for the background
document.addEventListener('mousemove', function (event) {
    const x = (window.innerWidth - event.pageX) / 100;
    const y = (window.innerHeight - event.pageY) / 100;
    document.getElementById('particles-js').style.transform = `translate(${x}px, ${y}px)`;
});

// Personalized greeting based on time of day
const greetingElement = document.getElementById('greeting');
const hours = new Date().getHours();

if (hours < 12) {
    greetingElement.textContent = 'Good Morning!';
} else if (hours < 18) {
    greetingElement.textContent = 'Good Afternoon!';
} else {
    greetingElement.textContent = 'Good Evening!';
}

// Optionally, add the user's name if available
const userName = localStorage.getItem('userName') || 'User';
greetingElement.textContent += `, ${userName}`;

// Track login streaks
const lastLogin = localStorage.getItem('lastLogin');
const today = new Date().toDateString();
let streak = parseInt(localStorage.getItem('loginStreak')) || 0;

if (lastLogin === today) {
    document.getElementById('login-streak').textContent = `Streak: ${streak} days`;
} else {
    streak += 1;
    localStorage.setItem('lastLogin', today);
    localStorage.setItem('loginStreak', streak);
    document.getElementById('login-streak').textContent = `Streak: ${streak} days`;
}


// Haptic feedback on button click (mobile only)
document.querySelector('.login-button').addEventListener('click', function() {
    if (navigator.vibrate) {
        navigator.vibrate(100);
    }
});