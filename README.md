
Tax Calculator App
Overview
This is a simple tax calculator web application built using HTML, CSS, and JavaScript. It calculates the tax amount based on the user’s income, age, and deductions, following specific tax rules outlined in the problem statement.

Features
Calculates tax based on income, age, and deductions.
Validates user inputs and displays error icons for incorrect entries.
Provides a modal with the final tax amount upon form submission.
Usage
Clone this repository to your local machine.
Open index.html in your web browser.
How to Use
Enter the gross annual income, extra income, deductions, and select your age range from the dropdown.
If any input is incorrect, error icons will appear next to the corresponding fields. Hover over the icons to view error messages.
Once all inputs are valid, click the “Calculate Tax” button.
A modal will appear showing the calculated tax amount.
Test Cases
To ensure the application functions correctly, run the following test cases:

Valid Inputs - No Tax:

Gross Annual Income: 600000
Extra Income: 0
Deductions: 50000
Age: <40
Expected Tax: 0
Valid Inputs - Taxable:

Gross Annual Income: 900000
Extra Income: 20000
Deductions: 100000
Age: >=40 & <60
Expected Tax: 27000
Invalid Gross Annual Income:

Gross Annual Income: -5000
Extra Income: 20000
Deductions: 10000
Age: <40
Expected: Error icon visible for Gross Annual Income
…

Mixed Inputs - Taxable:
-   Gross Annual Income: 900000
-   Extra Income: abc
-   Deductions: 100000
-   Age: >=40 & <60
-   Expected: Error icon visible for Extra Income, calculated Tax should not show
Screenshots
Include screenshots of the application interface and examples of error icons for invalid inputs.

Technologies Used
HTML
CSS
JavaScript
Contributors
Rishhabha Bharadwaj
HTML 1480 characters 277 words 50 paragraphs
You've earned 1 badge: "Editor toggler".