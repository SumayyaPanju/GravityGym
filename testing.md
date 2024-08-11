#### [Previous page - README.md](/README.md)
# Table of contents 

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
7. [Features](#features)
    * [404 page](#404-page)
    * [Links](#links)
    * [Form validation](#form-validation)
8. [Solved Bugs](#solved-bugs)
9. [Unsolved Bugs](#unsolved-bugs)

## Code Validation
Code is validated for each page to identify any major problems with the code. For HTML, the recommended [HTML W3C Validator](https://validator.w3.org/) is used. For CSS, the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator/) is used. For JS, [JS Hint](https://jshint.com/) is used.

### HTML

HTML validator was used to test all HTML pages. Based on the results, ammendments were made to the code. The tables below shows the results of HTML validator before changes made and after the changes were made.

>Click below, on the relevant headings to expand

<details>

**<summary>Before changes made...</summary>**

The table below shows the screenshots of the error and warning messages from the HTML Validator before any changes are made

| Page                       | Screenshot                                                                 | Notes                                                                                                                                                                                                                                          |
|----------------------------|----------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Home**                   | ![Screenshot](/assets/images/testing/validator/html-validator-home-before.png)       | **2 Errors:**<br> - Element a must not appear as descendent of button element <br> - Script element is stray <br><br> **2 Warnings:**<br> - Name attribute is obsolete for a element <br>- Section lacks heading                               |
| **Plans**                  | ![Screenshots](/assets/images/testing/validator/html-validator-plans-before.png)     | **8 Errors:**<br> - Button element cannot be descendent of a element <br> -  No space between attributes ""<br> - Possibly missing = before " <br> - " not allowed in div element <br><br>**2 Warnings:**<br>- Attribute " is not serializable |
| **Plans - Thank you**      | ![Screenshots](/assets/images/testing/validator/html-validator-plans-thankyou.png)   | **No error**                                                                                                                                                                                                                                   |
| **Gallery**                | ![Screenshot](/assets/images/testing/validator/html-validator-gallery.png)           | **No error**<br><br>**1 warning**<br> - Section lacks heading                                                                                                                                                                                  |
| **Scheudles**              | ![Screenshots](/assets/images/testing/validator/html-validator-schedules-before.png) | **3 Errors**<br><br> - a element cannot be descendent of button element                                                                                                                                                                        |
| **Contact Us**             | ![Screenshots](/assets/images/testing/validator/html-validator-contactus-before.png) | **1 Error:**<br><br> - Duplicate ID **1 Warning:** - First ID occurence                                                                                                                                                                        |
| **Contact Us - Thank you** | ![Screenshots](/assets/images/testing/validator/html-validator-contactus-before.png) | **1 Error:**<br><br> - Duplicate title under head section                                                                                                                                                                                      |
| **404**                    | ![Screenshots](/assets/images/testing/validator/html-validator-404-before.png)       | **1 Error:**<br><br> - Button element cannot be descendent of a element                                                                                                                                                                        |

</details>

<details>

**<summary>After changes made...</summary>**

The Table below shows screenshots of the error and warning messages from the HTML Validator after changes have been made

| Page                       | W3C URL                                                                                                                                                                                               | Screenshot                                                               | Notes                                                                                                                                                                                                                                                                                                                                                  |
|----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Home**                   | [Results page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fsumayyapanju.github.io%2FGravityGym%2Findex.html)                                                                                       | ![Screenshot](/assets/images/testing/validator/html-validator-home-after.png)      | **No error** <br> <br> Previous erorr overcomed by changing the button element to div element and by repositioning the script element within the body element at the bottom of the footer. This change is applied to all of the pages. <br><br>Name attribute is changed to id attribute <br><br> **1 warning:** <br> - Section lacks heading element. |
| **Plans**                  | [Results page](https://validator.w3.org/nu/?useragent=Validator.nu%2FLV+https%3A%2F%2Fvalidator.w3.org%2Fservices&acceptlanguage=&doc=https%3A%2F%2Fsumayyapanju.github.io%2FGravityGym%2Fplans.html) | ![Screenshot](/assets/images/testing/validator/html-validator-plans-after.png)     | **No Error**<br><br> Typing error "". The extra " is removed <br> Button element restyled to div element and CSS page changed accordingly                                                                                                                                                                                                              |
| **Plans - Thank you**      | [Results page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fsumayyapanju.github.io%2FGravityGym%2Fmembership-thankyou.html)                                                                         | ![Screenshots](/assets/images/testing/validator/html-validator-plans-thankyou.png) | **No Error**<br><br>No changes made                                                                                                                                                                                                                                                                                                                    |
| **Gallery**                | [Results page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fsumayyapanju.github.io%2FGravityGym%2Fgallery.html)                                                                                     | ![Screenshot](/assets/images/testing/validator/html-validator-gallery.png)         | **No error**<br><br>**1 warning**<br> No changes made                                                                                                                                                                                                                                                                                                  |
| **Scheudles**              | [Results page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fsumayyapanju.github.io%2FGravityGym%2Fschedules.html)                                                                                   | ![Screenshot](/assets/images/testing/validator/html-validator-schedules-after.png) | **No error**<br><br>Button element was changed to div element and css page is styled accordingly                                                                                                                                                                                                                                                       |
| **Contact Us**             | [Results page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fsumayyapanju.github.io%2FGravityGym%2Fcontactus.html)                                                                                   | ![Screenshot](/assets/images/testing/validator/html-validator-contactus-after.png) | **No error** <br><br> Duplicate ID removed as not required                                                                                                                                                                                                                                                                                             |
| **Contact Us - Thank you** | [Results page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fsumayyapanju.github.io%2FGravityGym%2Fthank-you.html)                                                                                   | ![Screenshot](/assets/images/testing/validator/html-validator-thankyou-after.png) | **No error**<br><br> Duplicate title was removed                                                                                                                                                                                                                                                                                                       |
| **404**                    | [Results page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fsumayyapanju.github.io%2FGravityGym%2F404.html)                                                                                         | ![Screenshots](/assets/images/testing/validator/html-validator-404-after.png)      | **No error**<br><br>Button element changed to div element                                                                                                                                                                                                                                                                                              |
</details>
<br>

[BACK TO TOP](#table-of-contents)
### CSS

>Click below, on the relevant headings to expand

<details>

**<summary>CSS Table...</summary>**

| File          | Jigsaw URL                                                                                                                                                                          | Screenshot                                              | Notes           |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|-----------------|
| **style.css** | [Result page](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fsumayyapanju.github.io%2FGravityGym%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en) | ![Screenshot](/assets/images/testing/validator/css-validator.png) | No error found. |

</details>
<br>

[BACK TO TOP](#table-of-contents)

### JavaScript

>Click below, on the relevant headings to expand

<details>

**<summary>JavaScript Table...</summary>**

| File          | Screenshot                                             | Notes                                                                                   |
|---------------|--------------------------------------------------------|-----------------------------------------------------------------------------------------|
| **script.js** | ![Screenshot](/assets/images/testing/validator/js-validator.png) | 6 warnings found. However, unable to resolve it due to lack of knowledge in JavaScript. |

</details>
<br>

[BACK TO TOP](#table-of-contents)

## Browser Compatibility 

Bassed on research, the most commonly used browsers in 2024 are: 
1. Google Chrome (65.41%)
2. Safari (18.39%)
3. Edge (5.24%)
4. Firefox (2.74%)
5. Samsung Internet (2.59%)
6. Opera (2.06%)

<details>

>Click below, on the relevant headings to expand

**<summary>View Statistics...</summary>**

![Screenshot](/assets/images/testing/browser-stats.png)
[View website here](https://gs.statcounter.com/browser-market-share)
</details>
<br>
Based on the informaiton obtained, these browsers are used to test website compatibility for each page.

For better reading and presentation, a table will be used for each browser.

>Click below, on the relevant headings to expand

<details>

**<summary>Google Chrome...</summary>**

|                           | Screenshots                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Notes             |
|---------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|
| **Home**                  | ![Screenshot](/assets/images/testing/browser-compatibility/chrome-home-1.png) ![Screenshot](/assets/images/testing/browser-compatibility/chrome-home-2.png) ![Screenshot](/assets/images/testing/browser-compatibility/chrome-home-3.png) ![Screenshot](/assets/images/testing/browser-compatibility/chrome-home-4.png) ![Screenshot](/assets/images/testing/browser-compatibility/chrome-home-5.png) ![Screenshot](/assets/images/testing/browser-compatibility/chrome-home-6.png) | Works as expected |
| **Plans**                 | ![Screenshot](/assets/images/testing/browser-compatibility/chrome-plans-1.png) ![Screenshot](/assets/images/testing/browser-compatibility/chrome-plans-2.png) ![Screenshot](/assets/images/testing/browser-compatibility/chrome-plans-3.png)                                                                                                                                                                                                                                        | Works as expected |
| **Plans - Thank you**     | ![Screenshot](/assets/images/testing/browser-compatibility/chrome-plans-ty.png)                                                                                                                                                                                                                                                                                                                                                                                                     | Works as expected |
| **Gallery**               | ![Screenshot](/assets/images/testing/browser-compatibility/chrome-gallery-1.png) ![Screenshot](/assets/images/testing/browser-compatibility/chrome-gallery-2.png)                                                                                                                                                                                                                                                                                                                   | Works as expected |
| **Schedule**              | ![Screenshot](/assets/images/testing/browser-compatibility/chrome-schedules-1.png) ![Screenshot](/assets/images/testing/browser-compatibility/chrome-schedules-2.png) ![Screenshot](/assets/images/testing/browser-compatibility/chrome-schedules-3.png) ![Screenshot](/assets/images/testing/browser-compatibility/chrome-schedules-4.png)                                                                                                                                         | Works as expected |
| **Contact Us**            | ![Screenshot](/assets/images/testing/browser-compatibility/chrome-contactus-1.png) ![Screenshot](/assets/images/testing/browser-compatibility/chrome-contactus-2.png)                                                                                                                                                                                                                                                                                                               | Works as expected |
| **Contact Us -Thank you** | ![Screenshot](/assets/images/testing/browser-compatibility/chrome-contactus-ty.png)                                                                                                                                                                                                                                                                                                                                                                                                 | Works as expected |
| **404**                   | ![Screenshot](/assets/images/testing/browser-compatibility/chrome-404.png)                                                                                                                                                                                                                                                                                                                                                                                                          | Works as expected |

</details>


<details>

**<summary>Safari...</summary>**

Safari is no longer supported by windows. Attempts were made to download safari browser using [this website](https://safari.en.uptodown.com/windows/download). Although the download and installation was successful, the applications would not run smoothly as nothing would load. Hence, for this part of the testing, safari browser compatibility cannot be tested. 

</details>

<details>

**<summary>Microsoft Edge...</summary>**

|                           | Screenshots                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Notes             |
|---------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|
| **Home**                  | ![Screenshot](/assets/images/testing/browser-compatibility/edge-home-1.png) ![Screenshot](/assets/images/testing/browser-compatibility/edge-home-2.png) ![Screenshot](/assets/images/testing/browser-compatibility/edge-home-3.png) ![Screenshot](/assets/images/testing/browser-compatibility/edge-home-4.png) ![Screenshot](/assets/images/testing/browser-compatibility/edge-home-5.png) ![Screenshot](/assets/images/testing/browser-compatibility/edge-home-6.png) | Works as expected |
| **Plans**                 | ![Screenshot](/assets/images/testing/browser-compatibility/edge-plans-1.png) ![Screenshot](/assets/images/testing/browser-compatibility/edge-plans-2.png) ![Screenshot](/assets/images/testing/browser-compatibility/edge-plans-3.png)                                                                                                                                                                                                                                  | Works as expected |
| **Plans - Thank you**     | ![Screenshot](/assets/images/testing/browser-compatibility/edge-plans-ty.png)                                                                                                                                                                                                                                                                                                                                                                                           | Works as expected |
| **Gallery**               | ![Screenshot](/assets/images/testing/browser-compatibility/edge-gallery-1.png) ![Screenshot](/assets/images/testing/browser-compatibility/edge-gallery-2.png)                                                                                                                                                                                                                                                                                                           | Works as expected |
| **Schedule**              | ![Screenshot](/assets/images/testing/browser-compatibility/edge-schedules-1.png) ![Screenshot](/assets/images/testing/browser-compatibility/edge-schedules-2.png) ![Screenshot](/assets/images/testing/browser-compatibility/edge-schedules-3.png) ![Screenshot](/assets/images/testing/browser-compatibility/edge-schedules-4.png)                                                                                                                                     | Works as expected |
| **Contact Us**            | ![Screenshot](/assets/images/testing/browser-compatibility/edge-contactus-1.png) ![Screenshot](/assets/images/testing/browser-compatibility/edge-contactus-2.png)                                                                                                                                                                                                                                                                                                       | Works as expected |
| **Contact Us -Thank you** | ![Screenshot](/assets/images/testing/browser-compatibility/edge-contactus-ty.png)                                                                                                                                                                                                                                                                                                                                                                                       | Works as expected |
| **404**                   | ![Screenshot](/assets/images/testing/browser-compatibility/edge-404.png)       


</details>

<details>


**<summary>Firefox...</summary>**

|                           | Screenshots                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Notes             |
|---------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|
| **Home**                  | ![Screenshot](/assets/images/testing/browser-compatibility/firefox-home-1.png) ![Screenshot](/assets/images/testing/browser-compatibility/firefox-home-2.png) ![Screenshot](/assets/images/testing/browser-compatibility/firefox-home-3.png) ![Screenshot](/assets/images/testing/browser-compatibility/firefox-home-4.png) ![Screenshot](/assets/images/testing/browser-compatibility/firefox-home-5.png) ![Screenshot](/assets/images/testing/browser-compatibility/firefox-home-6.png) | Works as expected |
| **Plans**                 | ![Screenshot](/assets/images/testing/browser-compatibility/firefox-plans-1.png) ![Screenshot](/assets/images/testing/browser-compatibility/firefox-plans-2.png) ![Screenshot](/assets/images/testing/browser-compatibility/firefox-plans-3.png)                                                                                                                                                                                                                                           | Works as expected |
| **Plans - Thank you**     | ![Screenshot](/assets/images/testing/browser-compatibility/firefox-plans-ty.png)                                                                                                                                                                                                                                                                                                                                                                                                          | Works as expected |
| **Gallery**               | ![Screenshot](/assets/images/testing/browser-compatibility/firefox-gallery-1.png) ![Screenshot](/assets/images/testing/browser-compatibility/firefox-gallery-2.png)                                                                                                                                                                                                                                                                                                                       | Works as expected |
| **Schedule**              | ![Screenshot](/assets/images/testing/browser-compatibility/firefox-schedules-1.png) ![Screenshot](/assets/images/testing/browser-compatibility/firefox-schedules-2.png) ![Screenshot](/assets/images/testing/browser-compatibility/firefox-schedules-3.png) ![Screenshot](/assets/images/testing/browser-compatibility/firefox-schedules-4.png)                                                                                                                                           | Works as expected |
| **Contact Us**            | ![Screenshot](/assets/images/testing/browser-compatibility/firefox-contactus-1.png) ![Screenshot](/assets/images/testing/browser-compatibility/firefox-contactus-2.png)                                                                                                                                                                                                                                                                                                                   | Works as expected |
| **Contact Us -Thank you** | ![Screenshot](/assets/images/testing/browser-compatibility/firefox-contactus-ty.png)                                                                                                                                                                                                                                                                                                                                                                                                      | Works as expected |
| **404**                   | ![Screenshot](/assets/images/testing/browser-compatibility/firefox-404.png)       


</details>

<details>


**<summary>Samsung Internet...</summary>**


Samsung Internet is a mobile phone browser. Attempts were made to download [BlueStacks](https://www.bluestacks.com). Blue Stacks is a windows application where android applications can work. Although the download and installation was successful, the applications would not run smoothly. Hence, for this part of the testing, samsung internet browser compatibility cannot be tested. 

</details>

<details>

**<summary>Opera...</summary>**

|                           | Screenshots                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Notes             |
|---------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|
| **Home**                  | ![Screenshot](/assets/images/testing/browser-compatibility/opera-home-1.png) ![Screenshot](/assets/images/testing/browser-compatibility/opera-home-2.png) ![Screenshot](/assets/images/testing/browser-compatibility/opera-home-3.png) ![Screenshot](/assets/images/testing/browser-compatibility/opera-home-4.png) ![Screenshot](/assets/images/testing/browser-compatibility/opera-home-5.png) ![Screenshot](/assets/images/testing/browser-compatibility/opera-home-6.png) | Works as expected |
| **Plans**                 | ![Screenshot](/assets/images/testing/browser-compatibility/opera-plans-1.png) ![Screenshot](/assets/images/testing/browser-compatibility/opera-plans-2.png) ![Screenshot](/assets/images/testing/browser-compatibility/opera-plans-3.png)                                                                                                                                                                                                                                     | Works as expected |
| **Plans - Thank you**     | ![Screenshot](/assets/images/testing/browser-compatibility/opera-plans-ty.png)                                                                                                                                                                                                                                                                                                                                                                                                | Works as expected |
| **Gallery**               | ![Screenshot](/assets/images/testing/browser-compatibility/opera-gallery-1.png) ![Screenshot](/assets/images/testing/browser-compatibility/opera-gallery-2.png)                                                                                                                                                                                                                                                                                                               | Works as expected |
| **Schedule**              | ![Screenshot](/assets/images/testing/browser-compatibility/opera-schedules-1.png) ![Screenshot](/assets/images/testing/browser-compatibility/opera-schedules-2.png) ![Screenshot](/assets/images/testing/browser-compatibility/opera-schedules-3.png) ![Screenshot](/assets/images/testing/browser-compatibility/opera-schedules-4.png)                                                                                                                                       | Works as expected |
| **Contact Us**            | ![Screenshot](/assets/images/testing/browser-compatibility/opera-contactus-1.png) ![Screenshot](/assets/images/testing/browser-compatibility/opera-contactus-2.png)                                                                                                                                                                                                                                                                                                           | Works as expected |
| **Contact Us -Thank you** | ![Screenshot](/assets/images/testing/browser-compatibility/opera-contactus-ty.png)                                                                                                                                                                                                                                                                                                                                                                                            | Works as expected |
| **404**                   | ![Screenshot](/assets/images/testing/browser-compatibility/opera-404.png)                                                                                                                                                                                                                                                                                                                                                                                                     | Works as expected |

</details>
<br>

[BACK TO TOP](#table-of-contents)
## Responsiveness

To test the responsiveness of GravityGym, DevTools is used. The Device is tested at different breakpoints based on Bootstrap that was used to design this project.

The following breakpoints was used for this project:
* Extra Small devices for portrait phones (less than 575px). 
    * Max-width set at 575.98px
* Small devices for landscape phones (576-767px). 
    * Max-width set at 767.98px
* Medium devices for tablets (between 768-991px). 
    * Max-width set at 991.98px
* Large devices for desktops (between 992-1119px). 
    * Max-width set at 1199.98px
* X-large devices for larger desktops (1200px upwards). 
    * Min-width set at 1200px

>Click below, on the relevant headings to expand

<details>

**<summary>Smallest device at 320px...</summary>**

The test is carried out for extra small devices such as portrait phones at 320px:

|                           |Screenshots        |Notes      |
|---------------------------|-------------------|-----------|
|**Header and menu**|![Screenshot](/assets/images/testing/responsiveness/xs-320-header.png)|Works as expected. <br><br> The consistency of header throughout all 8 pages was checked, it all has the same layout.|
|**Home**                   |![Screenshot](/assets/images/testing/responsiveness/xs-320-home-1.png)![Screenshot](/assets/images/testing/responsiveness/xs-320-home-2.png) ![Screenshot](/assets/images/testing/responsiveness/xs-320-home-3.png) ![Screenshot](/assets/images/testing/responsiveness/xs-320-home-4.png) ![Screenshot](/assets/images/testing/responsiveness/xs-320-home-5.png) ![Screenshot](/assets/images/testing/responsiveness/xs-320-home-6.png) ![Screenshot](/assets/images/testing/responsiveness/xs-320-home-7.png) ![Screenshot](/assets/images/testing/responsiveness/xs-320-home-8.png) ![Screenshot](/assets/images/testing/responsiveness/xs-320-home-9.png) |Works as expected. |
|**Plans**                  |![Screenshot](/assets/images/testing/responsiveness/xs-320-plans-1.png)![Screenshot](/assets/images/testing/responsiveness/xs-320-plans-2.png)![Screenshot](/assets/images/testing/responsiveness/xs-320-plans-3.png)![Screenshot](/assets/images/testing/responsiveness/xs-320-plans-4.png)![Screenshot](/assets/images/testing/responsiveness/xs-320-plans-5.png)![Screenshot](/assets/images/testing/responsiveness/xs-320-plans-6.png)|Works as expected. |
|**Plans - Thank you**      |![Screenshot](/assets/images/testing/responsiveness/xs-320-plans-ty.png) |Works as expected. |
|**Gallery**                |![Screenshot](/assets/images/testing/responsiveness/xs-320-gallery-1.png)![Screenshot](/assets/images/testing/responsiveness/xs-320-gallery-2.png) |Works as expected.|
|**Schedules**              |![Screenshot](/assets/images/testing/responsiveness/xs-320-schedules-1.png)![Screenshot](/assets/images/testing/responsiveness/xs-320-schedules-2.png)![Screenshot](/assets/images/testing/responsiveness/xs-320-schedules-3.png)|Works as expected.|
|**Contact Us**             |![Screenshot](/assets/images/testing/responsiveness/xs-320-contactus.png)|Works as expected.|
|**Contact Us - Thank you** |![Screenshot](/assets/images/testing/responsiveness/xs-320-ty.png) |Works as expected. |
|**404**                    |![Screenshot](/assets/images/testing/responsiveness/xs-320-404.png) |Works as expected.|
|**Footer and back to top button**|![Screenshot](/assets/images/testing/responsiveness/xs-320-footer.png) |Works as expected. <br><br> The consistency of footer throughout all 8 pages was checked, it all has the same layout.|

</details>

<br>

<details>

**<summary>Smallest device at 575px...</summary>**

The test is carried out for extra small devices such as portrait phones at 575px:

|                           |Screenshots        |Notes      |
|---------------------------|-------------------|-----------|
|**Header**                 |![Screenshot](/assets/images/testing/responsiveness/xs-575-header.png) |Works as expected. <br><br> The consistency of header throughout all 8 pages was checked, it all has the same layout.|
|**Home**                   |![Screenshot](/assets/images/testing/responsiveness/xs-575-home-1.png) ![Screenshot](/assets/images/testing/responsiveness/xs-575-home-2.png) ![Screenshot](/assets/images/testing/responsiveness/xs-575-home-3.png) ![Screenshot](/assets/images/testing/responsiveness/xs-575-home-4.png) ![Screenshot](/assets/images/testing/responsiveness/xs-575-home-5.png) ![Screenshot](/assets/images/testing/responsiveness/xs-575-home-6.png) ![Screenshot](/assets/images/testing/responsiveness/xs-575-home-7.png) ![Screenshot](/assets/images/testing/responsiveness/xs-575-home-8.png) ![Screenshot](/assets/images/testing/responsiveness/xs-575-home-9.png) |Works as expected.|
|**Plans**                  |![Screenshot](/assets/images/testing/responsiveness/xs-575-plans-1.png) ![Screenshot](/assets/images/testing/responsiveness/xs-575-plans-2.png) ![Screenshot](/assets/images/testing/responsiveness/xs-575-plans-3.png) ![Screenshot](/assets/images/testing/responsiveness/xs-575-plans-4.png) ![Screenshot](/assets/images/testing/responsiveness/xs-575-plans-5.png) ![Screenshot](/assets/images/testing/responsiveness/xs-575-plans-6.png) |Works as expected.|
|**Plans - Thank you**      |![Screenshot](/assets/images/testing/responsiveness/xs-575-plans-ty.png) |Works as expected.|
|**Gallery**                |![Screenshot](/assets/images/testing/responsiveness/xs-575-gallery-1.png) ![Screenshot](/assets/images/testing/responsiveness/xs-575-gallery-2.png) ![Screenshot](/assets/images/testing/responsiveness/xs-575-gallery-3.png) |Works as expected.|
|**Schedules**              |![Screenshot](/assets/images/testing/responsiveness/xs-575-schedules-1.png) ![Screenshot](/assets/images/testing/responsiveness/xs-575-schedules-2.png) ![Screenshot](/assets/images/testing/responsiveness/xs-575-schedules-3.png) |Works as expected.|
|**Contact Us**             |![Screenshot](/assets/images/testing/responsiveness/xs-575-contactus.png) |Works as expected.|
|**Contact Us - Thank you** |![Screenshot](/assets/images/testing/responsiveness/xs-575-ty.png) |Works as expected.|
|**404**                    |![Screenshot](/assets/images/testing/responsiveness/xs-575-404.png) |Works as expected.|
|**Footer**                 |![Screenshot](/assets/images/testing/responsiveness/xs-575-footer.png) |Works as expected. <br><br> The consistency of footer throughout all 8 pages was checked, it all has the same layout.|

</details>

<br>

<details>

**<summary>Small device...</summary>**

The test is carried out for small devices such as landscape phones at 576px:

|                           |Screenshots        |Notes      |
|---------------------------|-------------------|-----------|
|**Home**                   |                   |           |
|**Plans**                  |                   |           |
|**Plans - Thank you**      |                   |           |
|**Gallery**                |                   |           |
|**Schedules**              |                   |           |
|**Contact Us**             |                   |           |
|**Contact Us - Thank you** |                   |           |
|**404**                    |                   |           |


</details>
<details>

**<summary>Medium device...</summary>** 

The test is carried out for medium devices such as tablets at 768px:

|                           |Screenshots        |Notes      |
|---------------------------|-------------------|-----------|
|**Home**                   |                   |           |
|**Plans**                  |                   |           |
|**Plans - Thank you**      |                   |           |
|**Gallery**                |                   |           |
|**Schedules**              |                   |           |
|**Contact Us**             |                   |           |
|**Contact Us - Thank you** |                   |           |
|**404**                    |                   |           |


</details>
<details>

**<summary>Large device...</summary>**

The test is carried out for large devices such as large desktops at 992px:

|                           |Screenshots        |Notes      |
|---------------------------|-------------------|-----------|
|**Home**                   |                   |           |
|**Plans**                  |                   |           |
|**Plans - Thank you**      |                   |           |
|**Gallery**                |                   |           |
|**Schedules**              |                   |           |
|**Contact Us**             |                   |           |
|**Contact Us - Thank you** |                   |           |
|**404**                    |                   |           |

</details>
<details>

**<summary>Extra Large device...</summary>**

The test is carried out for extra large devices such as large desktops at 1200px:

|                           |Screenshots        |Notes      |
|---------------------------|-------------------|-----------|
|**Home**                   |                   |           |
|**Plans**                  |                   |           |
|**Plans - Thank you**      |                   |           |
|**Gallery**                |                   |           |
|**Schedules**              |                   |           |
|**Contact Us**             |                   |           |
|**Contact Us - Thank you** |                   |           |
|**404**                    |                   |           |

</details>

<details>

**<summary>Extra Extra Large device...</summary>**

The test is carried out for extra extra large devices such as extra extra large desktops at 1400px:

|                           |Screenshots        |Notes      |
|---------------------------|-------------------|-----------|
|**Home**                   |                   |           |
|**Plans**                  |                   |           |
|**Plans - Thank you**      |                   |           |
|**Gallery**                |                   |           |
|**Schedules**              |                   |           |
|**Contact Us**             |                   |           |
|**Contact Us - Thank you** |                   |           |
|**404**                    |                   |           |

</details>
<br>
Further tests were carried out for responsiveness. This was carried out using [Blisk](https://blisk.io/product). The following devices have been chosen to be tested: 

| Device Group                | Device type                             | Reason for choosing                                                                                                                                                                                                                |
|-----------------------------|-----------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Android - Google Pixel**  | Google Pixel 8, <br> Google Pixel 8 Pro | Pixel 8 is the latest model released in 2023/2024. Previous model of Pixel 7 has identical size                                                                                                                                    |
| **Android - Galaxy Series** | S22, S22 plus, S22 Ultra, S21 Ultra     | Although S24 is the latest release, this is not available on the software to be tested. The previous version is S22. Previous models have similar sizes with the exception of S21 which is slightly larger in size.                |
| **iOS**                     | iPhone 15, 15 plus, 15 Pro              | iPhone 15 is the latest model released in 2023. iPhone 15 Pro Max is not tested as it has an identical size to iPhone 15 Plus. Previous model varies in size. Hence, instead of testing all of them, the latest models are tested. |
| **iPad OS**                 | iPad Pro 9, 11, 12                      | Different iPads are chosen based on the sizes. The other models available on Blisk have similar sizes, hence they are not chosen for test.                                                                                         |
| **Windows**                 | Smallest desktop at 1280px              | This is the smallest desktop size available on Blisk                                                                                                                                                                               |
| **Windows**                 | Largest desktop at 3840px               | This is the largest desktop size available on Blisk                                                                                                                                                                                |
| **macOS**                   | Smallest iMac at 1440px                 | This is the smallest iMac size available on Blisk                                                                                                                                                                                  |
| **macOS**                   | Largest iMac at 3200px                  | This is the largest iMac size available on Blisk                                                                                                                                                                                   |

The results from Blisk are shown here:

| Notes                                       | Home | Plans | Plans - Thank you | Gallery | Schedules | Contact Us | Contact Us - Thank you | 404 | Notes |
|---------------------------------------------|------|-------|-------------------|---------|-----------|------------|------------------------|-----|-------|
| **Google Pixel 8, <br> Google Pixel 8 Pro** |      |       |                   |         |           |            |                        |     |       |
| **S22, S22 plus, S22 Ultra, S21 Ultra**     |      |       |                   |         |           |            |                        |     |       |
| **iPhone 15, 15 plus, 15 Pro**              |      |       |                   |         |           |            |                        |     |       |
| **iPad Pro 9, 11, 12**                      |      |       |                   |         |           |            |                        |     |       |
| **Windows Desktop - smallest**              |      |       |                   |         |           |            |                        |     |       |
| **Windows Desktop - largest**               |      |       |                   |         |           |            |                        |     |       |
| **iMac Desktop - smallest**                 |      |       |                   |         |           |            |                        |     |       |
| **iMac Desktop - largest**                  |      |       |                   |         |           |            |                        |     |       |

[BACK TO TOP](#table-of-contents)
## Lighthouse Audit 

[Lighthouse](https://developer.chrome.com/docs/lighthouse/overview) is a chrome extension which is installed on the browser. It is used to audit quality of the website. The report indicates how the page can be improved. Lighthouse audit test is carried out for desktop and mobile. 

>Click below, on the relevant headings to expand

<details>

**<summary> Desktop Audit - Before making improvements...</summary>**

|                            | Screenshot                                                     | Evaluation tool suggests:                                                                                                                                                                     |
|----------------------------|----------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Home**                   | ![Screenshot](/assets/images/testing/audits/la-home-before.png)       | Add metadata, improve contrast, improve, preload, [and more](#further-information-on-lighthouse-audit-for-desktops)                                                                           |
| **Plans**                  | ![Screenshot](/assets/images/testing/audits//la-plans-before.png)      | Add metadata, [and more](#further-information-on-lighthouse-audit-for-desktops)                                                                                                               |
| **Plans - Thank you**      | ![Screenshot](/assets/images/testing/audits/la-plans-ty-before.png)   | Add metadata, [and more](#further-information-on-lighthouse-audit-for-desktops)                                                                                                               |
| **Gallery**                | ![Screenshot](/assets/images/testing/audits/la-gallery-before.png)    | Add metadata, reduce network payloads, reduce large layout shifts, have discernible name for links, images to webp or avif, [and more](#further-information-on-lighthouse-audit-for-desktops) |
| **Scheudles**              | ![Screenshot](/assets/images/testing/audits/la-schedules-before.png)  | Add metadata, increase space for touch targets, [and more](#further-information-on-lighthouse-audit-for-desktops)                                                                             |
| **Contact Us**             | ![Screenshot](/assets/images/testing/audits/la-contact-us-before.png) | Add metadata, resize background image to match natural aspect ratio, [and more](#further-information-on-lighthouse-audit-for-desktops)                                                        |
| **Contact Us - Thank you** | ![Screenshot](/assets/images/testing/audits/la-thankyou-before.png)   | Add metadata, [and more](#further-information-on-lighthouse-audit-for-desktops)                                                                                                               |
| **404**                    | ![Screenshot](/assets/images/testing/audits/la-404-before.png)        | Add metadata, [and more](#further-information-on-lighthouse-audit-for-desktops)                                                                                                               |

#### Further information on lighthouse audit for desktops

For all or almost all pages, there were common suggestions by lighthouse to improve performance of the website. These suggestions were not carried out due to lack of skills/knowledge in those areas. The screenshot below shows the suggestions given by lighthouse:

>![Screenshot](/assets/images/testing/audits/diagnostic-results.png)

</details>

<details>

**<summary> Desktop Audit - After making improvements...</summary>**

|                            | Screenshot                                                    | Notes                                                                                                                                                                                                                                                                                   |
|----------------------------|---------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Home**                   | ![Screenshot](/assets/images/testing/audits/la-home-after.png)       | Meta data was added, contrast was changed                                                                                                                                                                                                                                               |
| **Plans**                  | ![Screenshot](/assets/images/testing/audits/la-plans-after.png)      | Meta description is added                                                                                                                                                                                                                                                               |
| **Plans - Thank you**      | ![Screenshot](/assets/images/testing/audits/la-plans-ty-after.png)   | Meta description is added                                                                                                                                                                                                                                                               |
| **Gallery**                | ![Screenshot](/assets/images/testing/audits/la-gallery-after.png)    | Meta data was added, links were given a discernible name, alt texts was assigned, images were converted to webp                                                                                                                                                                         |
| **Scheudles**              | ![Screenshot](/assets/images/testing/audits/la-schedules-after.png)  | Meta data was added, and spacing was also added. However, it still does not meet the minimum threshold required for accessibility. Further spacing is not added, as spacing seems sufficient. There is no adjacent buttons. The next button is in the next section which acts as a tab. |
| **Contact Us**             | ![Screenshot](/assets/images/testing/audits/la-contact-us-after.png) | Meta data was added and image was resized                                                                                                                                                                                                                                               |
| **Contact Us - Thank you** | ![Screenshot](/assets/images/testing/audits/la-thankyou-after.png)   | Meta data was added.                                                                                                                                                                                                                                                                    |
| **404**                    | ![Screenshot](/assets/images/testing/audits/la-404-after.png)        | Meta data was added.                                                                                                                                                                                                                                                                    |
</details>

<details>

**<summary> Mobile Audit...</summary>**


|                            | Screenshot                                               | Notes                                                             |
|----------------------------|----------------------------------------------------------|-------------------------------------------------------------------|
| **Home**                   | ![Screenshot](/assets/images/testing/audits/la-m-home.png)      | [See below](#further-information-on-lighthouse-audit-for-mobiles) |
| **Plans**                  | ![Screenshot](/assets/images/testing/audits/la-m-plans.png)     | [See below](#further-information-on-lighthouse-audit-for-mobiles) |
| **Plans - Thank you**      | ![Screenshot](/assets/images/testing/audits/la-m-plans-ty.png)  | [See below](#further-information-on-lighthouse-audit-for-mobiles) |
| **Gallery**                | ![Screenshot](/assets/images/testing/audits/la-m-gallery.png)   | [See below](#further-information-on-lighthouse-audit-for-mobiles) |
| **Scheudles**              | ![Screenshot](/assets/images/testing/audits/la-m-schedules.png) | [See below](#further-information-on-lighthouse-audit-for-mobiles) |
| **Contact Us**             | ![Screenshot](/assets/images/testing/audits/la-m-contactus.png) | [See below](#further-information-on-lighthouse-audit-for-mobiles) |
| **Contact Us - Thank you** | ![Screenshot](/assets/images/testing/audits/la-m-thankyou.png)  | [See below](#further-information-on-lighthouse-audit-for-mobiles) |
| **404**                    | ![Screenshot](/assets/images/testing/audits/la-m-404.png)       | [See below](#further-information-on-lighthouse-audit-for-mobiles) |

#### Further information on lighthouse audit for mobiles

For all or almost all pages, there were common suggestions by lighthouse to improve performance of the website. These suggestions were not carried out due to lack of skills/knowledge in those areas. The screenshot below shows the suggestions given by lighthouse:

>![Screenshot](/assets/images/testing/audits/m-diagnostic-results.png)

</details>
<br>

[BACK TO TOP](#table-of-contents)
## Wave Web Accessibility Evaluation

[WAVE](https://wave.webaim.org/) is another evaluation tool which evaluates the webpage and it also helps developers make content more accessible to individuals with special needs. It can be used with or without the extension. 

>Click below, on the relevant headings to expand

<details>

**<summary>Wave Table for desktop, includes changes...</summary>**

|                            | Screenshot                                                    | Message from wave                                                                                                                                                  |
|----------------------------|---------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Home**                   | ![Screenshot](/assets/images/testing/audits/w-home.png)              | Congratulations! No errors were detected! Manual testing is still necessary to ensure compliance and optimal accessibility.                                        |
| **Plans**                  | ![Screenshot](/assets/images/testing/audits/w-plans.png)             | Congratulations! No errors were detected! Manual testing is still necessary to ensure compliance and optimal accessibility                                         |
| **Plans - Thank you**      | ![Screenshot](/assets/images/testing/audits/w-plans-ty.png)          | Congratulations! No errors were detected! Manual testing is still necessary to ensure compliance and optimal accessibility                                         |
| **Gallery**                | ![Screenshot](/assets/images/testing/audits/w-gallery.png)           | Congratulations! No errors were detected! Manual testing is still necessary to ensure compliance and optimal accessibility                                         |
| **Scheudles**              | ![Screenshot](/assets/images/testing/audits/w-schedules.png)         | Congratulations! No errors were detected! Manual testing is still necessary to ensure compliance and optimal accessibility                                         |
| **Contact Us** - Before    | ![Screenshot](/assets/images/testing/audits/w-contact-us-before.png) | 2 errors showed up. 1 missing label and 1 multiple label. This indicated an error with labels. Upon looking, there was a pasting/typing error. This was corrected. |
| **Contact Us** - After     | ![Screenshot](/assets/images/testing/audits/w-contact-us-after.png)  | Congratulations! No errors were detected! Manual testing is still necessary to ensure compliance and optimal accessibility                                         |
| **Contact Us - Thank you** | ![Screenshot](/assets/images/testing/audits/w-thankyou.png)          | Congratulations! No errors were detected! Manual testing is still necessary to ensure compliance and optimal accessibility                                         |
| **404**                    | ![Screenshot](/assets/images/testing/audits/w-404.png)               | Congratulations! No errors were detected! Manual testing is still necessary to ensure compliance and optimal accessibility                                         |

</details>

<br>

[BACK TO TOP](#table-of-contents)
## User Story Testing 

[BACK TO TOP](#table-of-contents)
### First Time Visitor

[BACK TO TOP](#table-of-contents)
### Returning Visitor

[BACK TO TOP](#table-of-contents)
### Frequent User

[BACK TO TOP](#table-of-contents)

## Features

### 404 page

A test was carried out to ensure that if a user types in the wrong link, they are redirected to correct 404 page. 

To do this the following steps were taken:
1. Go to the deployed page using this link: https://sumayyapanju.github.io/GravityGym
2. At the end of the link, type in anything random
3. This is what was typed during the test process: https://sumayyapanju.github.io/GravityGym/dfdddfdf.html

Based on the test, the user is directed to the correct 404 page. this is shown in the following screenshot:

>Click below, on the relevant headings to expand

<details>

**<summary>404 Screenshot...</summary>**

![Screenshot](/assets/images/testing/features/404-test.png)

</details>

### Links

There are various links throughout the webpage. All of them were tested to see if they do what they are supposed to do. The table below shows the test done and its results. 

>Click below, on the relevant headings to expand

<details>

**<summary>Links test results...</summary>**

|Tests done     |Expected results:      |Outcome:   |
|---------------|-----------------------|-----------|
|**Nav Links**      | - Home tab - Redirects to home. <br> - Plans tab - Redirects to Plans page <br> - Gallery tabs - Redirects to gallery page <br> - Schedules tab- Redirects to schedules page <br> - Contact us page - Redirects to contact us page <br><br> **All of these links should open on the same browser window** | All links worked as expected and they opened up on the same window |
|**Back to top button** | Takes the user back to the top of the page | Back to top button worked as expected on all pages |
|**Social icons**   | - Twitter icon - Redirects to twitter website <br> - Facebook icon - Redirects to facebook website <br> - Whatsapp icon - Redirects to Whatsapp website <br> - Instagram icon - Redirects to Instagram website <br><br> **All of these links should open on the new browser tab** | All links worked as expected and they opened up on another browser tab|
|**Select button on membership page**|User should be redirected to a thank you page dedicated for membership plans in the same browser tab| Link worked as expected and it opened on the same windows tab|
|**Contact us link under membership queries**|User should be redirected to a contact us page in the same browser tab| Link worked as expected and it opened on the same windows tab|
|**Gallery images link**|Full size image should open in a new tab|Image links worked as expected|
|**Classes tabs**|It should collapse and display classess relevant to that day|Tab button worked as expected|
|**Swimming tabs**|It should collapse and display classess relevant to that day|Tab button worked as expected|
|**Sauna / Steam tabs**|It should collapse and display classess relevant to that day|Tab button worked as expected|
|**Download pdf button**|- Classes download button should open classes pdf <br> - Swimming download button should open swimming pdf <br>- Sauna / Steam download button should open sauna / steam pdf <br><br> **All of these links should open on the new browser tab** | The correct pdf files opened. However they did not open in a new tab <br><br> The code for schedule page was edited and an attribute was added target=_blank which fixed the problem. <br><br> The pdf files opens in a new tab |
|**Contact us submit button**|Thank you page should load up on the same tab| Link works as expected |
|**Contact us reset button**|The form to be reset| Link works as expected 
|**404 homepage button**|User to be redirected to home page on the same tab| Links works as expected|


</details>

### Form validation

All input fields on the contact us page is tested for validation.

The table below shows what is tested and the screenshot of the results 

>Click below, on the relevant headings to expand

<details>

**<summary>Form validation results...</summary>**

|Testing:                                   | Screenshot                                                                        | Results explained                                                            |
|-------------------------------------------|-----------------------------------------------------------------------------------|------------------------------------------------------------------------------|
|First Name - required                      |![Screenshot](/assets/images/testing/features/form-fname.png)                      |Form does not submit without this filled in.                                  |
|Second Name - required                     |![Screenshot](/assets/images/testing/features/form-sname.png)                      |Form does not submit without this filled in.                                  |
|Email addrerss - required                  |![Screenshot](/assets/images/testing/features/form-email.png)                      |Form does not submit without this filled in.                                  |
|Email address - format                     |![Screenshot](/assets/images/testing/features/form-email-format.png)               |Form does not submit without this filled in with the right format using @.    |
|Phone number - required                    |![Screenshot](/assets/images/testing/features/form-number.png)                     |Form does not submit without this filled in.                                  |
|Phone number - format                      |![Screenshot](/assets/images/testing/features/form-number-digits-validation.png)   |Form does not accept letters, it will only accept numbers.                    |
|Phone number - max characters              |![Screenshot](/assets/images/testing/features/form-number-maxchar-validation.png)  |Form does not accept anything less than or more than 11 characters.           |
|Reason for contact - required              |![Screenshot](/assets/images/testing/features/form-title.png)                      |Form does not submit without this filled in.                                  |
|Messages - required                        |![Screenshot](/assets/images/testing/features/form-message.png)                    |Form does not submit without this filled in.                                  |
|Phone - checked                            |![Screenshot](/assets/images/testing/features/reset.png)                           |This is checked by default.                                                   |
|Email - checked                            |![Screenshot](/assets/images/testing/features/reset.png)                           |This is checked by default.                                                   |
|Phone - unchecked                          |![Screenshot](/assets/images/testing/features/phone-uncheck.png)                   |Can be unchecked and the form will still work.                                |
|Email - unchecked                          |![Screenshot](/assets/images/testing/features/email-uncheck.png)                   |Can be unchecked and the form will still work.                                |
|Submit button - sends to thank you page    |![Screenshot](/assets/images/testing/features/submit.png)                          |Submit buttons redirects to thank you page.                                   |
|Reset button - clears the page             |![Screenshot](/assets/images/testing/features/reset.png)                           |Reset button clears the form, to its original state when initially loaded.    |


</details>

<br>

[BACK TO TOP](#table-of-contents)


## Solved Bugs

[BACK TO TOP](#table-of-contents)

## Unsolved Bugs 

[BACK TO TOP](#table-of-contents)