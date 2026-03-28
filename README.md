# Assignment 2 – Interactive Portfolio Website

## Project Description

This project is an enhanced version of my personal portfolio website developed in Assignment 1. The objective of this assignment was to improve interactivity, usability, and overall user experience using modern web development techniques.

The website demonstrates how JavaScript can be used to transform a static webpage into an interactive application. It includes dynamic content updates, persistent user preferences, animations, and clear user feedback mechanisms.

---

# Alignment with Grading Rubric

## 1. Technical Implementation

### Functionality

The application fully implements all required features:

* **Dynamic Content:** Live project search and filtering updates project cards in real time based on user input
* **Data Handling:** Theme preference is stored using localStorage and persists across sessions
* **Form Handling:** Contact form validates user input and displays appropriate feedback messages
* **Personalization:** Greeting message changes based on the user’s local time
* **User Interaction:** Smooth animations and transitions enhance usability

All features are fully functional, respond correctly to user actions, and improve the overall usability of the website.

---

### Code Quality

* Code is modular and separated into HTML, CSS, and JavaScript files
* Consistent naming conventions and formatting are used throughout
* JavaScript logic is structured using event listeners and clear functions
* CSS is organized with reusable classes and grouped sections
* The codebase is easy to read, maintain, and extend

---

### Performance

* No external libraries are used, keeping the application lightweight
* Efficient DOM manipulation ensures minimal performance overhead
* Assets are limited and optimized for fast loading
* Smooth animations are implemented without affecting responsiveness

---

### Compatibility

* Fully responsive layout using Flexbox and media queries
* Works across modern browsers such as Chrome and Edge
* Adapts correctly to different screen sizes including mobile devices

---

## 2. Documentation

### README Quality

This README provides a comprehensive and well-structured overview of the project. It clearly explains the purpose, features, implementation details, and how the project aligns with assignment requirements.

---

### Setup Instructions

1. Clone the repository:

   ```
   git clone https://github.com/MohAlabdullatif/202346910-MohammedAlabdullatif-assignment2.git
   ```
2. Navigate to the project directory:

   ```
   cd 202346910-MohammedAlabdullatif-assignment2
   ```
3. Run the project:

   * Open `index.html` directly in a web browser
   * Or use a development server such as Live Server in Visual Studio Code

The project does not require any installation, build tools, or dependencies.

---

### Technical Details

Detailed implementation and design information is available in:

```
docs/technical-documentation.md
```

This documentation includes:

* File structure and organization
* Explanation of JavaScript features (filtering, validation, localStorage)
* Description of UI and UX decisions
* Implementation approach for dynamic behavior

---

### User Experience

* Clear navigation between sections using a consistent layout
* Immediate visual feedback for all user interactions
* Informative messages guide the user in case of errors or successful actions
* Animations improve usability without being distracting
* Layout and content are structured for clarity and readability

---

## 3. AI Integration

### Effective Use

AI tools were used as a development assistant to:

* Debug JavaScript and CSS issues
* Improve implementation logic
* Suggest better structure and organization
* Enhance user experience decisions

---

### Documentation

AI usage is fully documented in:

```
docs/ai-usage-report.md
```

The report explains:

* Tools used
* Purpose of usage
* Specific tasks assisted by AI
* How outputs were adapted

---

### Understanding

All AI-generated suggestions were reviewed and understood before implementation. This included:

* Analyzing the logic behind code suggestions
* Testing behavior within the project
* Modifying code to match project requirements
* Ensuring consistency with existing design

The final implementation reflects a clear understanding of:

* DOM manipulation
* Event handling
* Data persistence using localStorage
* Input validation logic

---

### Innovation

AI was used iteratively to refine the project by:

* Improving feature implementation
* Enhancing user interaction design
* Simplifying complex logic
* Increasing overall code clarity and maintainability

---

# Features Implemented

## Dynamic Content

* Live project search that filters projects instantly based on user input
* Dynamic feedback messages indicating search results

---

## Data Handling

* Theme toggle using localStorage
* Persistent user preference across page reloads

---

## Animation and Transitions

* Fade-in animations triggered on scroll using Intersection Observer
* Hover effects on cards and buttons
* Smooth transitions for theme switching and UI elements

---

## Error Handling and User Feedback

* Contact form validation:

  * Prevents empty submissions
  * Validates email format
  * Displays success and error messages

* Search feedback:

  * Displays message when no projects match the search
  * Provides real-time user guidance

---

## Additional Enhancement

* Time-based greeting message that adapts to the user’s local time

---

# Technologies Used

* HTML5
* CSS3 (Flexbox, responsive design, animations)
* JavaScript (DOM manipulation, event handling, localStorage)

---

# Project Structure

```
project/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── Me.jpg
│   ├── phys.jpg
│   ├── edad.jpg
│   └── CalcAward.jpg
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
└── README.md
```

---

# Future Improvements

* Integrate backend functionality to enable real email submission
* Load project data dynamically from external APIs
* Improve accessibility using ARIA attributes
* Expand interactive features and UI enhancements

---

# Author

Mohammed Alabdullatif

---

# Summary

This project successfully transforms a static portfolio into an interactive web application. It fulfills all assignment requirements and aligns closely with the grading rubric by demonstrating strong technical implementation, clear documentation, effective AI integration, and a focus on user experience.
