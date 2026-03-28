document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const toggleBtn = document.getElementById("themeToggle");
    const greetingElement = document.getElementById("greeting");
    const projectSearch = document.getElementById("projectSearch");
    const projectCards = document.querySelectorAll(".project-card");
    const projectFeedback = document.getElementById("projectFeedback");
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");
    const fadeSections = document.querySelectorAll(".fade-in-section");

    // ---------------- Theme Toggle with localStorage ----------------
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
        toggleBtn.textContent = "Light Mode";
    } else {
        toggleBtn.textContent = "Dark Mode";
    }

    toggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            toggleBtn.textContent = "Light Mode";
            localStorage.setItem("theme", "dark");
        } else {
            toggleBtn.textContent = "Dark Mode";
            localStorage.setItem("theme", "light");
        }
    });

    // ---------------- Greeting by Time ----------------
    const currentHour = new Date().getHours();
    let greetingText = "";

    if (currentHour < 12) {
        greetingText = "Good Morning!";
    } else if (currentHour < 18) {
        greetingText = "Good Afternoon!";
    } else {
        greetingText = "Good Evening!";
    }

    greetingElement.textContent = greetingText;

    // ---------------- Live Project Search ----------------
    function filterProjects() {
        const searchValue = projectSearch.value.trim().toLowerCase();
        let visibleCount = 0;

        projectCards.forEach((card) => {
            const cardText = card.textContent.toLowerCase();
            const matches = cardText.includes(searchValue);

            if (matches) {
                card.style.display = "block";
                visibleCount += 1;
            } else {
                card.style.display = "none";
            }
        });

        if (visibleCount === 0) {
            projectFeedback.textContent = "No projects found. Try another keyword.";
            projectFeedback.className = "statusMessage errorMessage";
        } else if (searchValue === "") {
            projectFeedback.textContent = "Showing all projects.";
            projectFeedback.className = "statusMessage infoMessage";
        } else {
            projectFeedback.textContent = `Found ${visibleCount} project(s) matching "${projectSearch.value.trim()}".`;
            projectFeedback.className = "statusMessage successMessage";
        }
    }

    projectSearch.addEventListener("input", filterProjects);

    // ---------------- Contact Form Validation ----------------
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const fullName = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!fullName || !email || !message) {
            formMessage.textContent = "Please fill in all fields before submitting.";
            formMessage.className = "statusMessage errorMessage showMessage";
            return;
        }

        if (!emailPattern.test(email)) {
            formMessage.textContent = "Please enter a valid email address.";
            formMessage.className = "statusMessage errorMessage showMessage";
            return;
        }

        formMessage.textContent = `Thank you, ${fullName}! Your message has been submitted successfully.`;
        formMessage.className = "statusMessage successMessage showMessage";
        contactForm.reset();
    });

    // ---------------- Fade-in on Scroll ----------------
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    fadeSections.forEach((section) => {
        observer.observe(section);
    });
});