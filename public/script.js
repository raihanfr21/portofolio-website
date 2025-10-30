// Toggle between dark mode and light mode
const themeToggleButton = document.querySelector('.theme-toggle button');
const body = document.body;

themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    updateThemeButton();
});

function updateThemeButton() {
    if (body.classList.contains('light-mode')) {
        themeToggleButton.textContent = '☀️'; // Light mode icon
    } else {
        themeToggleButton.textContent = '🌙'; // Dark mode icon
    }
}

// Language switcher (dummy function for illustration)
const languageButton = document.querySelector('.language-switcher button');

languageButton.addEventListener('click', () => {
    if (languageButton.textContent === 'EN') {
        languageButton.textContent = 'ID'; // Switch to Indonesian
    } else {
        languageButton.textContent = 'EN'; // Switch to English
    }
});

// Add smooth scroll for navigation links (optional)
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('.navbar nav ul li a');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(li => {
        li.classList.remove('active');
        if (li.getAttribute('href').includes(current)) {
            li.classList.add('active');
        }
    });
});


    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });