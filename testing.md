#### [Previous page - README.md](/README.md)
# Table of content 

1. [Code Validation](#code-validation)
    * [HTML](#html)
    * [CSS](#css)
    * [JavaScript](#javascript)
2. [Browser Compatibility](#browser-compatibility)
3. [Responsiveness](#responsiveness)
4. [Lighthouse Audit](#lighthouse-audit)
    * [Desktop Audit](#desktop-audit)
    * [Mobile Audit](#mobile-audit)
5. [Wave Web Accessibility Evaluation](#wave-web-accessibility-evaluation)
6. [User Story Testing](#user-story-testing)
    * [First Time Visitor](#first-time-visitors)
    * [Returning Visitor](#returning-visitors)
    * [Frequent User](#frequent-users)
7. [Solved Bugs](#solved-bugs)
8. [Unsolved Bugs](#unsolved-bugs)

## Code Validation

Code is validated for each page to identify any major problems with the code. For HTML, the recommended [HTML W3C Validator](https://validator.w3.org/) is used. For CSS, the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator/) is used. For JS, [JS Hint](https://jshint.com/) is used. 

[BACK TO TOP](#table-of-contents)

### HTML

| Page                       | W3C URL           | Screenshot        | Notes          |
|----------------------------|-------------------|-------------------|----------------|
| **Home**                   |                   |                   |                |
| **Plans**                  |                   |                   |                |
| **Plans - Thank you**      |                   |                   |                |
| **Gallery**                |                   |                   |                |
| **Scheudles**              |                   |                   |                |
| **Contact Us**             |                   |                   |                |
| **Contact Us - Thank you** |                   |                   |                |
| **404**                    |                   |                   |                |


[BACK TO TOP](#table-of-contents)
### CSS

| File                  | Jigsaw URL         | Screenshot        | Notes          |
|-----------------------|--------------------|-------------------|----------------|
| **style.css**         |                    |                   |                |


[BACK TO TOP](#table-of-contents)

### JavaScript


| File                  | JS Hint URL         | Screenshot        | Notes          |
|-----------------------|--------------------|-------------------|----------------|
| **script.js**         |                    |                   |                |



[BACK TO TOP](#table-of-contents)

## Browser Compatibility 

Bassed on research, the most commonly used browsers in 2024 are: 
1. Google Chrome (65.41%)
2. Safari (18.39%)
3. Edge (5.24%)
4. Firefox (2.74%)
5. Samsung Internet (2.59%)
6. Opera (2.06%)

![Screenshot](/assets/images/testing/browser-stats.png)
[View website here](https://gs.statcounter.com/browser-market-share)

Based on the informaiton obtained, these browsers are used to test website compatibility for each page. 

|                            | Google Chrome        | Safari            | Edge              | Firefox       | Samsung Internet      | Opera         |
|----------------------------|----------------------|-------------------|-------------------|---------------|-----------------------|---------------|
| **Home**                   |                      |                   |                   |               |                       |               |
| **Plans**                  |                      |                   |                   |               |                       |               |
| **Plans - Thank you**      |                      |                   |                   |               |                       |               |
| **Gallery**                |                      |                   |                   |               |                       |               |
| **Scheudles**              |                      |                   |                   |               |                       |               |
| **Contact Us**             |                      |                   |                   |               |                       |               |
| **Contact Us - Thank you** |                      |                   |                   |               |                       |               |
| **404**                    |                      |                   |                   |               |                       |               |
| **Notes**                  |                      |                   |                   |               |                       |               |



[BACK TO TOP](#table-of-contents)
## Responsiveness

To test the responsiveness of GravityGym, DevTools is used. The Device is tested at different breakpoints based on Bootstrap:

|Breakpoints                        | Notes                    | Home  | Plans  | Plans - Thank you    | Gallery   | Schedules | Contact Us    | Contact Us - Thank you   | 404|Notes |
|-----------------------------------|--------------------------|-------|--------|----------------------|-----------|-----------|---------------|--------------------------|----|------|
| **Smallest Devices**          |Portrait phones at 320px      |        |       |        |                      |           |           |               |   |    |       |
| **Small Devices**             |Lanscape phones at 576px      |        |       |        |                      |           |           |               |   |    |       |
| **Medium Devices**            |Tablets at 768px              |        |       |        |                      |           |           |               |   |    |       |
| **Large Devices**             |Small desktops at 992px       |        |       |        |                      |           |           |               |   |    |       |
| **Extra Large Devices**       |Large desktops at 1200px      |        |       |        |                      |           |           |               |   |    |       |

Further tests were carried out for responsiveness. This was carried out using [Blisk](https://blisk.io/product). The following devices have been chosen to be tested: 

|Device Group                   |Device type                                | Reason for choosing                                                                               |
|-------------------------------|-------------------------------------------|---------------------------------------------------------------------------------------------------|
|**Android - Google Pixel**     |Google Pixel 8, <br> Google Pixel 8 Pro    | Pixel 8 is the latest model released in 2023/2024. Previous model of Pixel 7 has identical size   |
|**Android - Galaxy Series**    |S22, S22 plus, S22 Ultra, S21 Ultra        | Although S24 is the latest release, this is not available on the software to be tested. The previous version is S22. Previous models have similar sizes with the exception of S21 which is slightly larger in size.|
|**iOS**                        |iPhone 15, 15 plus, 15 Pro                 | iPhone 15 is the latest model released in 2023. iPhone 15 Pro Max is not tested as it has an identical size to iPhone 15 Plus. Previous model varies in size. Hence, instead of testing all of them, the latest models are tested. |
|**iPad OS**                     |iPad Pro 9, 11, 12                        | Different iPads are chosen based on the sizes. The other models available on Blisk have similar sizes, hence they are not chosen for test.|
|**Windows**                     |Smallest desktop at 1280px                | This is the smallest desktop size available on Blisk|
|**Windows**                     |Largest desktop at 3840px                 | This is the largest desktop size available on Blisk|
|**macOS**                       |Smallest iMac at 1440px                   | This is the smallest iMac size available on Blisk|
|**macOS**                       |Largest iMac at 3200px                    | This is the largest iMac size available on Blisk|

The results from Blisk are shown here:

| Notes                                     | Home  | Plans | Plans - Thank you     | Gallery   | Schedules | Contact Us    | Contact Us - Thank you    | 404   |Notes      |
|-------------------------------------------|-------|-------|-----------------------|-----------|-----------|---------------|---------------------------|-------|-----------|
|**Google Pixel 8, <br> Google Pixel 8 Pro**|       |       |                       |           |           |               |                           |       |           |
|**S22, S22 plus, S22 Ultra, S21 Ultra**    |       |       |                       |           |           |               |                           |       |           |
|**iPhone 15, 15 plus, 15 Pro**             |       |       |                       |           |           |               |                           |       |           |
|**iPad Pro 9, 11, 12**                     |       |       |                       |           |           |               |                           |       |           |
|**Windows Desktop - smallest**             |       |       |                       |           |           |               |                           |       |           |
|**Windows Desktop - largest**              |       |       |                       |           |           |               |                           |       |           |
|**iMac Desktop - smallest**                |       |       |                       |           |           |               |                           |       |           |
|**iMac Desktop - largest**                 |       |       |                       |           |           |               |                           |       |           |

[BACK TO TOP](#table-of-contents)
## Lighthouse Audit 

[Lighthouse](https://developer.chrome.com/docs/lighthouse/overview) is a chrome extension which is installed on the browser. It is used to audit quality of the website. The report indicates how the page can be improved. Lighthouse audit test is carried out for desktop and mobile. 

### Desktop Audit 

|                            | Screenshot               | Notes |
|----------------------------|--------------------------|-------|
| **Home**                   |                          |       |
| **Plans**                  |                          |       |
| **Plans - Thank you**      |                          |       |
| **Gallery**                |                          |       |
| **Scheudles**              |                          |       |
| **Contact Us**             |                          |       |
| **Contact Us - Thank you** |                          |       |
| **404**                    |                          |       |

### Mobile Audit 


|                            | Screenshot               | Notes |
|----------------------------|--------------------------|-------|
| **Home**                   |                          |       |
| **Plans**                  |                          |       |
| **Plans - Thank you**      |                          |       |
| **Gallery**                |                          |       |
| **Scheudles**              |                          |       |
| **Contact Us**             |                          |       |
| **Contact Us - Thank you** |                          |       |
| **404**                    |                          |       |

[BACK TO TOP](#table-of-contents)
## Wave Web Accessibility Evaluation

[WAVE](https://wave.webaim.org/) is another evaluation tool which evaluates the webpage and it also helps developers make content more accessible to individuals with special needs. It can be used with or without the extension. 

|                            | Screenshot               | Notes |
|----------------------------|--------------------------|-------|
| **Home**                   |                          |       |
| **Plans**                  |                          |       |
| **Plans - Thank you**      |                          |       |
| **Gallery**                |                          |       |
| **Scheudles**              |                          |       |
| **Contact Us**             |                          |       |
| **Contact Us - Thank you** |                          |       |
| **404**                    |                          |       |


[BACK TO TOP](#table-of-contents)
## User Story Testing 

[BACK TO TOP](#table-of-contents)
### First Time Visitor

[BACK TO TOP](#table-of-contents)
### Returning Visitor

[BACK TO TOP](#table-of-contents)
### Frequent User

[BACK TO TOP](#table-of-contents)

## Solved Bugs

[BACK TO TOP](#table-of-contents)

## Unsolved Bugs 

[BACK TO TOP](#table-of-contents)