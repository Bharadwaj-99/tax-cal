﻿# Tax Calculator App

## Overview

This is a simple tax calculator web application built using HTML, CSS, and JavaScript. It calculates the tax amount based on the user's income, age, and deductions, following specific tax rules outlined in the problem statement.

## Features

-   Calculates tax based on income, age, and deductions.
-   Validates user inputs and displays error icons for incorrect entries.
-   Provides a modal with the final tax amount upon form submission.

## Usage

1.  Clone this repository to your local machine.
2.  Open `index.html` in your web browser.

## How to Use

1.  Enter the gross annual income, extra income, deductions, and select your age range from the dropdown.
2.  If any input is incorrect, error icons will appear next to the corresponding fields. Hover over the icons to view error messages.
3.  Once all inputs are valid, click the "Calculate Tax" button.
4.  A modal will appear showing the calculated tax amount.

## Test Cases

To ensure the application functions correctly, run the following test cases:

1.  **Valid Inputs - No Tax**:
    
    -   Gross Annual Income: 600000
    -   Extra Income: 0
    -   Deductions: 50000
    -   Age: <40
    -   Expected Tax: 0
2.  **Valid Inputs - Taxable**:
    
    -   Gross Annual Income: 900000
    -   Extra Income: 20000
    -   Deductions: 100000
    -   Age: >=40 & <60
    -   Expected Tax: 27000
3.  **Invalid Gross Annual Income**:
    
    -   Gross Annual Income: -5000
    -   Extra Income: 20000
    -   Deductions: 10000
    -   Age: <40
    -   Expected: Error icon visible for Gross Annual Income

...

20.  **Mixed Inputs - Taxable**:
    -   Gross Annual Income: 900000
    -   Extra Income: abc
    -   Deductions: 100000
    -   Age: >=40 & <60
    -   Expected: Error icon visible for Extra Income, calculated Tax should not show

## Screenshots

Include screenshots of the application interface and examples of error icons for invalid inputs.

![Screenshot (11)](https://github.com/Bharadwaj-99/tax-cal/assets/134267525/2271df3d-bbab-40e4-ae8c-c93f825d8a56)

![Screenshot (12)](https://github.com/Bharadwaj-99/tax-cal/assets/134267525/491b3e43-90f5-4f8a-8f6d-3cb856eea67e)
![Screenshot (13)](https://github.com/Bharadwaj-99/tax-cal/assets/134267525/ea9e5d93-e2ea-458b-b2f3-629730ea9319)
![Screenshot (14)](https://github.com/Bharadwaj-99/tax-cal/assets/134267525/7d3cd04c-3e6c-4f37-a710-b466b2a9166b)

## Technologies Used

-   HTML
-   CSS
-   JavaScript

## Contributors

-   [Rishhabha Bharadwaj](https://github.com/Bharadwaj-99)
