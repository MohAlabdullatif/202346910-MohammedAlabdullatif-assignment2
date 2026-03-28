# Technical Documentation – Moe Website Portfolio

## 1. Project Overview

Moe Website is a personal portfolio website designed to showcase my skills, projects, achievements, and contact information. The website has been enhanced in this assignment to include interactive features, improved user experience, and modern web development practices.

The website is fully responsive, includes dark/light mode functionality with persistence, dynamic project filtering, form validation, and a personalized greeting based on the time of day.

### Key Features

* Responsive multi-section layout (About Me, Projects, Achievements, Contact)
* Dark/Light theme toggle with localStorage persistence
* Greeting message based on user’s local time
* Live project search and filtering
* Contact form with validation and user feedback
* Smooth animations and transitions
* Clean, structured, and accessible design

---

## 2. File Structure

```text
project-root/
│
├─ index.html                # Main HTML page
├─ css/
│   └─ style.css            # Styling, animations, dark mode, responsiveness
├─ js/
│   └─ script.js            # JavaScript for interactivity and data handling
├─ assets/
│   ├─ Me.jpg               # Profile image
│   ├─ phys.jpg             # Achievement image: Physics
│   ├─ edad.jpg             # Achievement image: Edad Program
│   └─ CalcAward.jpg        # Achievement image: Calculus Award
└─ docs/
    ├─ ai-usage-report.md
    └─ technical-documentation.md
```

---

## 3. Technologies Used

* HTML5 – Page structure and semantic elements
* CSS3 – Styling, Flexbox layout, responsive design, animations, and dark mode
* JavaScript (ES6) – Dynamic features, DOM manipulation, event handling, and localStorage

---

## 4. Design and Layout

### 4.1 Header

The header is fixed (sticky) at the top of the page and includes:

* Website title
* Navigation links
* Dynamic greeting message
* Theme toggle button

Navigation links allow smooth scrolling to different sections of the page.

---

### 4.2 Sections

* **About Me**
  Displays a profile image and a descriptive introduction.

* **Projects**
  Displays project cards and includes a live search feature that filters content dynamically based on user input.

* **Achievements**
  Displays key achievements with images and descriptions.

* **Contact**
  Displays contact details and includes a contact form with validation and feedback messages.

---

### 4.3 Footer

The footer contains navigation links and a link to the LinkedIn profile. It maintains consistent styling with the header.

---

### 4.4 Dark/Light Mode

A toggle button allows switching between light and dark themes.

* Implemented using a CSS class (`dark-mode`) applied to the `<body>` element
* Theme preference is stored using `localStorage`
* The selected theme persists across page reloads

---

## 5. JavaScript Functionality

### 5.1 Greeting Message

* Uses the `Date` object to retrieve the current hour
* Displays:

  * "Good Morning!" (0–11)
  * "Good Afternoon!" (12–17)
  * "Good Evening!" (18–23)
* Injects the greeting into the `#greeting` element when the page loads

---

### 5.2 Theme Toggle with Persistence

* Button with `id="themeToggle"` toggles the `dark-mode` class on the `<body>`
* Updates button text based on the current mode
* Stores user preference in `localStorage`
* Applies saved theme when the page loads

---

### 5.3 Project Search and Filtering

* Users can type into a search input field
* JavaScript listens to input events and filters project cards in real time
* Matching projects remain visible, while non-matching projects are hidden
* Displays feedback messages:

  * Showing all projects
  * Number of matching results
  * No projects found

---

### 5.4 Contact Form Validation

* Prevents form submission if fields are empty
* Validates email format using a regular expression
* Displays user feedback:

  * Error messages for invalid input
  * Success message upon valid submission
* Resets the form after successful submission

---

### 5.5 Scroll-Based Animation

* Uses the Intersection Observer API
* Sections fade in when they enter the viewport
* Improves user experience by adding smooth visual transitions

---

## 6. CSS Styling

* Flexbox is used for layout and alignment
* Responsive design implemented using media queries (≤768px)
* Cards use consistent styling with borders, padding, and hover effects
* Transitions and animations improve user interaction
* Dark mode modifies background colors, text colors, and UI elements for better usability

---

## 7. Error Handling and User Feedback

The application provides clear feedback to users:

* Form validation errors for missing or invalid input
* Success message after form submission
* Dynamic messages for project search results
* Visual feedback through animations and transitions

This ensures the user always understands what is happening and how to proceed.

---

## 8. Development Notes

* Code is organized into separate HTML, CSS, and JavaScript files
* Semantic HTML elements are used for structure
* Comments are included in key sections for clarity
* Accessibility considerations include proper headings, labels, and alt text for images
* Tested across different screen sizes for responsiveness

---

## 9. Future Improvements

* Integrate a public API to load project data dynamically
* Add advanced accessibility features (ARIA roles, keyboard navigation)
* Implement a backend for handling form submissions
* Enhance visual design and animations
* Expand project portfolio with additional content

---

## 10. Summary

This project demonstrates the transformation of a static portfolio into an interactive web application. By integrating dynamic content, data persistence, animations, and user feedback, the website provides a more engaging and user-centered experience while maintaining clean structure and code quality.
