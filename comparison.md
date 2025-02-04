##LLM COMPARISON
Project: Create a website using Deepseek-r1 in Console
Date: 31 Jan 2025

##Testing Sequence
### Step 1: Project Structure Generation
**Initial Prompt:**
```
I want to create a modern responsive webpage with a navigation bar, hero section, features section, and contact form. Please generate the initial project structure and HTML boilerplate. Use semantic HTML5 elements and set up the file structure for CSS and JavaScript.
```

- Time to generate response: 20 seconds
- Completeness of structure: Complete as per the prompt
- Additional clarifications needed: No

### Step 2: Basic Styling
**Initial Prompt:**
```
Create modern CSS styles for the webpage structure. Include:
- Responsive navigation that becomes a hamburger menu on mobile
- Hero section with a gradient background
- Card-based features section
- Styled contact form
Use Flexbox/Grid and implement a mobile-first approach.
```

*Track for each version:*
- Quality of responsive design: 8
- Modern CSS practices used: Yes
- Browser compatibility considerations: Considered browser compatibility, it was also mobile responsive

### Step 3: JavaScript Functionality
**Initial Prompt:**
```
Add JavaScript functionality to the page:
1. Smooth scrolling navigation
2. Form validation with error messages
3. Mobile menu toggle
4. Simple animation for feature cards on scroll
Use modern JavaScript (ES6+) and implement error handling.
```

*Compare:*
- Code modularity: 10
- Error handling implementation: 10
- Modern JS features usage: 10

### Step 4: Component Enhancement
**Iterative Prompt:**
```
The feature cards section needs improvement. Each card should:
- Have hover effects
- Include an icon
- Support an image
- Have a "Learn More" button
Update the HTML, CSS, and JavaScript accordingly.
```

- This step required a lot of to and fro which is visible in the chat. It took a lot of iterations and RCAs to fix the hover over feature cards.
- At one point, I tried sharing the image of the frontend to explain the issue when I realized that Deepseek-r1 doesn't support image reading.
- Even then explaining the issues on the frontend and catching errors in the console helped the LLM to correctly fix the issues.

### Step 5: Bug Fixing
**Problem-Solving Prompt:**
```
The mobile menu doesn't close when clicking outside, and the form submission doesn't clear fields after success. Please fix these issues and add appropriate user feedback.
```
