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
7. [Features](#features)
    * [404 page](#404-page)
    * [Links](#links)
    * [Form validation](#form-validation)
8. [Solved Bugs](#solved-bugs)
9. [Unsolved Bugs](#unsolved-bugs)

## Code Validation
Code is validated for each page to identify any major problems with the code. For HTML, the recommended [HTML W3C Validator](https://validator.w3.org/) is used. For CSS, the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator/) is used. For JS, [JS Hint](https://jshint.com/) is used.

### HTML

HTML validator was used to test all HTML pages. Based on the results, amendments  were made to the code. The tables below shows the results of HTML validator before changes made and after the changes were made.

>Click below, on the relevant headings to expand

<details>

**<summary>Before changes made...</summary>**

The table below shows the screenshots of the error and warning messages from the HTML Validator before any changes are made

| Page                       | Screenshot                                                                 | Notes                                                                                                                                                                                                                                          |
|----------------------------|----------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Home**                   | ![Screenshot](/assets/images/testing/validator/html-validator-home-before.png)       | **2 Errors:**<br> - Element a must not appear as descendant of button element <br> - Script element is stray <br><br> **2 Warnings:**<br> - Name attribute is obsolete for a element <br>- Section lacks heading                               |
| **Plans**                  | ![Screenshots](/assets/images/testing/validator/html-validator-plans-before.png)     | **8 Errors:**<br> - Button element cannot be descendant of a element <br> -  No space between attributes ""<br> - Possibly missing = before " <br> - " not allowed in div element <br><br>**2 Warnings:**<br>- Attribute " is not serializable |
| **Plans - Thank you**      | ![Screenshots](/assets/images/testing/validator/html-validator-plans-thankyou.png)   | **No error**                                                                                                                                                                                                                                   |
| **Gallery**                | ![Screenshot](/assets/images/testing/validator/html-validator-gallery.png)           | **No error**<br><br>**1 warning**<br> - Section lacks heading                                                                                                                                                                                  |
| **Schedules**              | ![Screenshots](/assets/images/testing/validator/html-validator-schedules-before.png) | **3 Errors**<br><br> - a element cannot be descendant of button element                                                                                                                                                                        |
| **Contact Us**             | ![Screenshots](/assets/images/testing/validator/html-validator-contactus-before.png) | **1 Error:**<br><br> - Duplicate ID **1 Warning:** - First ID occurrence                                                                                                                                                                        |
| **Contact Us - Thank you** | ![Screenshots](/assets/images/testing/validator/html-validator-contactus-before.png) | **1 Error:**<br><br> - Duplicate title under head section                                                                                                                                                                                      |
| **404**                    | ![Screenshots](/assets/images/testing/validator/html-validator-404-before.png)       | **1 Error:**<br><br> - Button element cannot be descendant of a element                                                                                                                                                                        |

</details>

<details>

**<summary>After changes made...</summary>**

The Table below shows screenshots of the error and warning messages from the HTML Validator after changes have been made

| Page                       | W3C URL                                                                                                                                                                                               | Screenshot                                                               | Notes                                                                                                                                                                                                                                                                                                                                                  |
|----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Home**                   | [Results page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fsumayyapanju.github.io%2FGravityGym%2Findex.html)                                                                                       | ![Screenshot](/assets/images/testing/validator/html-validator-home-after.png)      | **No error** <br> <br> Previous error overcame by changing the button element to div element and by repositioning the script element within the body element at the bottom of the footer. This change is applied to all of the pages. <br><br>Name attribute is changed to id attribute <br><br> **1 warning:** <br> - Section lacks heading element. |
| **Plans**                  | [Results page](https://validator.w3.org/nu/?useragent=Validator.nu%2FLV+https%3A%2F%2Fvalidator.w3.org%2Fservices&acceptlanguage=&doc=https%3A%2F%2Fsumayyapanju.github.io%2FGravityGym%2Fplans.html) | ![Screenshot](/assets/images/testing/validator/html-validator-plans-after.png)     | **No Error**<br><br> Typing error "". The extra " is removed <br> Button element restyled to div element and CSS page changed accordingly                                                                                                                                                                                                              |
| **Plans - Thank you**      | [Results page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fsumayyapanju.github.io%2FGravityGym%2Fmembership-thankyou.html)                                                                         | ![Screenshots](/assets/images/testing/validator/html-validator-plans-thankyou.png) | **No Error**<br><br>No changes made                                                                                                                                                                                                                                                                                                                    |
| **Gallery**                | [Results page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fsumayyapanju.github.io%2FGravityGym%2Fgallery.html)                                                                                     | ![Screenshot](/assets/images/testing/validator/html-validator-gallery.png)         | **No error**<br><br>**1 warning**<br> No changes made                                                                                                                                                                                                                                                                                                  |
| **Schedules**              | [Results page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fsumayyapanju.github.io%2FGravityGym%2Fschedules.html)                                                                                   | ![Screenshot](/assets/images/testing/validator/html-validator-schedules-after.png) | **No error**<br><br>Button element was changed to div element and css page is styled accordingly                                                                                                                                                                                                                                                       |
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

Based on research, the most commonly used browsers in 2024 are: 
1. Google Chrome (65.41%)
2. Safari (18.39%)
3. Edge (5.24%)
4. Firefox (2.74%)
5. Samsung Internet (2.59%)
6. Opera (2.06%)

>Click below, on the relevant headings to expand

<details>

>Click below, on the relevant headings to expand

**<summary>View Statistics...</summary>**

![Screenshot](/assets/images/testing/browser-stats.png)
[View website here](https://gs.statcounter.com/browser-market-share)
</details>
<br>
Based on the information  obtained, these browsers are used to test website compatibility for each page.

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


Samsung Internet is a mobile phone browser. Attempts were made to download [BlueStacks](https://www.bluestacks.com). Blue Stacks is a windows application where android applications can work. Although the download and installation was successful, the applications would not run smoothly. Hence, for this part of the testing, Samsung internet browser compatibility cannot be tested. 

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

|Breakpoints             |Type of devices            |Max/Min width          |Screen size range      |
|-----------------------|---------------------------|-----------------------|-----------------------|
|**Extra Small**        |Portrait phones            |max-width: 575.98px    |less than 575px        |
|**Small**              |Landscape phones           |max-width:767.98px     |576-767px              |
|**Medium**             |Tablets                    |max-width:991.98px     |768-991px              |
|**Large**              |Desktops                   |max-width:1119.98px    |992-1199.98px          |
|**Extra Large**        |Extra large desktops       |min-width:1200px       |More than 1200px       |
|**Extra Extra Large**  |Extra Extra large desktops |min-width:2500px       |More than 2500px       |

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

<details>

**<summary>Smallest device at 575px...</summary>**

The test is carried out for extra small devices such as portrait phones at 575px:

|                           |Screenshots        |Notes      |
|---------------------------|-------------------|-----------|
|**Header and menu**                 |![Screenshot](/assets/images/testing/responsiveness/xs-575-header.png) |Works as expected. <br><br> The consistency of header throughout all 8 pages was checked, it all has the same layout.|
|**Home**                   |![Screenshot](/assets/images/testing/responsiveness/xs-575-home-1.png) ![Screenshot](/assets/images/testing/responsiveness/xs-575-home-2.png) ![Screenshot](/assets/images/testing/responsiveness/xs-575-home-3.png) ![Screenshot](/assets/images/testing/responsiveness/xs-575-home-4.png) ![Screenshot](/assets/images/testing/responsiveness/xs-575-home-5.png) ![Screenshot](/assets/images/testing/responsiveness/xs-575-home-6.png) ![Screenshot](/assets/images/testing/responsiveness/xs-575-home-7.png) ![Screenshot](/assets/images/testing/responsiveness/xs-575-home-8.png) ![Screenshot](/assets/images/testing/responsiveness/xs-575-home-9.png) |Works as expected.|
|**Plans**                  |![Screenshot](/assets/images/testing/responsiveness/xs-575-plans-1.png) ![Screenshot](/assets/images/testing/responsiveness/xs-575-plans-2.png) ![Screenshot](/assets/images/testing/responsiveness/xs-575-plans-3.png) ![Screenshot](/assets/images/testing/responsiveness/xs-575-plans-4.png) ![Screenshot](/assets/images/testing/responsiveness/xs-575-plans-5.png) ![Screenshot](/assets/images/testing/responsiveness/xs-575-plans-6.png) |Works as expected.|
|**Plans - Thank you**      |![Screenshot](/assets/images/testing/responsiveness/xs-575-plans-ty.png) |Works as expected.|
|**Gallery**                |![Screenshot](/assets/images/testing/responsiveness/xs-575-gallery-1.png) ![Screenshot](/assets/images/testing/responsiveness/xs-575-gallery-2.png) ![Screenshot](/assets/images/testing/responsiveness/xs-575-gallery-3.png) |Works as expected.|
|**Schedules**              |![Screenshot](/assets/images/testing/responsiveness/xs-575-schedules-1.png) ![Screenshot](/assets/images/testing/responsiveness/xs-575-schedules-2.png) ![Screenshot](/assets/images/testing/responsiveness/xs-575-schedules-3.png) |Works as expected.|
|**Contact Us**             |![Screenshot](/assets/images/testing/responsiveness/xs-575-contactus.png) |Works as expected.|
|**Contact Us - Thank you** |![Screenshot](/assets/images/testing/responsiveness/xs-575-ty.png) |Works as expected.|
|**404**                    |![Screenshot](/assets/images/testing/responsiveness/xs-575-404.png) |Works as expected.|
|**Footer and back to top button**                 |![Screenshot](/assets/images/testing/responsiveness/xs-575-footer.png) |Works as expected. <br><br> The consistency of footer throughout all 8 pages was checked, it all has the same layout.|

</details>

<details>

**<summary>Small device at 576px...</summary>**

The test is carried out for small devices such as landscape phones at 576px:

|                           |Screenshots        |Notes      |
|---------------------------|-------------------|-----------|
|**Header and menu** |![Screenshot](/assets/images/testing/responsiveness/s-576-header.png) |Works as expected. <br><br> The consistency of header throughout all 8 pages was checked, it all has the same layout.|
|**Home**                   |![Screenshot](/assets/images/testing/responsiveness/s-576-home-1.png)![Screenshot](/assets/images/testing/responsiveness/s-576-home-2.png) ![Screenshot](/assets/images/testing/responsiveness/s-576-home-3.png) ![Screenshot](/assets/images/testing/responsiveness/s-576-home-4.png) ![Screenshot](/assets/images/testing/responsiveness/s-576-home-5.png) ![Screenshot](/assets/images/testing/responsiveness/s-576-home-6.png) ![Screenshot](/assets/images/testing/responsiveness/s-576-home-7.png) |Works as expected.|
|**Plans**                  |![Screenshot](/assets/images/testing/responsiveness/s-576-plans-1.png) ![Screenshot](/assets/images/testing/responsiveness/s-576-plans-2.png) ![Screenshot](/assets/images/testing/responsiveness/s-576-plans-3.png) ![Screenshot](/assets/images/testing/responsiveness/s-576-plans-4.png) ![Screenshot](/assets/images/testing/responsiveness/s-576-plans-5.png) |Works as expected.|
|**Plans - Thank you**      |![Screenshot](/assets/images/testing/responsiveness/s-576-plans-ty.png) |Works as expected.|
|**Gallery**                |![Screenshot](/assets/images/testing/responsiveness/s-576-gallery-1.png) ![Screenshot](/assets/images/testing/responsiveness/s-576-gallery-2.png) ![Screenshot](/assets/images/testing/responsiveness/s-576-gallery-3.png) |Works as expected.|
|**Schedules**              |![Screenshot](/assets/images/testing/responsiveness/s-576-schedules-1.png)![Screenshot](/assets/images/testing/responsiveness/s-576-schedules-2.png) ![Screenshot](/assets/images/testing/responsiveness/s-576-schedules-3.png) |Works as expected.|
|**Contact Us**             |![Screenshot](/assets/images/testing/responsiveness/s-576-contactus.png) |Works as expected.|
|**Contact Us - Thank you** |![Screenshot](/assets/images/testing/responsiveness/s-576-ty.png) |Works as expected.|
|**404**                    |![Screenshot](/assets/images/testing/responsiveness/s-576-404.png) |Works as expected.|
|**Footer and back to top button** |![Screenshot](/assets/images/testing/responsiveness/s-576-footer.png) |Works as expected. <br><br> The consistency of footer throughout all 8 pages was checked, it all has the same layout.|


</details>

<details>

**<summary>Small device at 767px...</summary>** 

The test is carried out for small devices such as landscape phones at 767px:

|                           |Screenshots        |Notes      |
|---------------------------|-------------------|-----------|
|**Header and menu** |![Screenshot](/assets/images/testing/responsiveness/s-767-header.png)|Works as expected. <br><br> The consistency of header throughout all 8 pages was checked, it all has the same layout.|
|**Home**                   |![Screenshot](/assets/images/testing/responsiveness/s-767-home-1.png) ![Screenshot](/assets/images/testing/responsiveness/s-767-home-2.png) ![Screenshot](/assets/images/testing/responsiveness/s-767-home-3.png) ![Screenshot](/assets/images/testing/responsiveness/s-767-home-4.png) ![Screenshot](/assets/images/testing/responsiveness/s-767-home-5.png) ![Screenshot](/assets/images/testing/responsiveness/s-767-home-6.png) |Works as expected.|
|**Plans**                  |![Screenshot](/assets/images/testing/responsiveness/s-767-plans-1.png)![Screenshot](/assets/images/testing/responsiveness/s-767-plans-2.png) ![Screenshot](/assets/images/testing/responsiveness/s-767-plans-3.png) ![Screenshot](/assets/images/testing/responsiveness/s-767-plans-4.png) ![Screenshot](/assets/images/testing/responsiveness/s-767-plans-5.png) |Works as expected.|
|**Plans - Thank you**      |![Screenshot](/assets/images/testing/responsiveness/s-767-plans-ty.png) |Works as expected.|
|**Gallery**                |![Screenshot](/assets/images/testing/responsiveness/s-767-gallery-1.png) ![Screenshot](/assets/images/testing/responsiveness/s-767-gallery-2.png) ![Screenshot](/assets/images/testing/responsiveness/s-767-gallery-3.png) |Works as expected.|
|**Schedules**              |![Screenshot](/assets/images/testing/responsiveness/s-767-schedules-1.png) ![Screenshot](/assets/images/testing/responsiveness/s-767-schedules-2.png) ![Screenshot](/assets/images/testing/responsiveness/s-767-schedules-3.png) |Works as expected.|
|**Contact Us**             |![Screenshot](/assets/images/testing/responsiveness/s-767-contactus.png) |Works as expected.|
|**Contact Us - Thank you** |![Screenshot](/assets/images/testing/responsiveness/s-767-ty.png) |Works as expected.|
|**404**                    |![Screenshot](/assets/images/testing/responsiveness/s-767-404.png) |Works as expected.|
|**Footer and back to top button** |![Screenshot](/assets/images/testing/responsiveness/s-767-footer.png) |Works as expected. <br><br> The consistency of footer throughout all 8 pages was checked, it all has the same layout.|


</details>

<details>

**<summary>Medium device at 768px...</summary>** 

The test is carried out for medium devices such as tablets at 768px:

|                           |Screenshots        |Notes      |
|---------------------------|-------------------|-----------|
|**Header and menu** |![Screenshot](/assets/images/testing/responsiveness/md-768-header.png) |Works as expected. <br><br> The consistency of header throughout all 8 pages was checked, it all has the same layout.|
|**Home** |![Screenshot](/assets/images/testing/responsiveness/md-768-home-1.png) ![Screenshot](/assets/images/testing/responsiveness/md-768-home-2.png) ![Screenshot](/assets/images/testing/responsiveness/md-768-home-3.png) ![Screenshot](/assets/images/testing/responsiveness/md-768-home-4.png) ![Screenshot](/assets/images/testing/responsiveness/md-768-home-5.png) ![Screenshot](/assets/images/testing/responsiveness/md-768-home-6.png) |Works as expected. |
|**Plans** |![Screenshot](/assets/images/testing/responsiveness/md-768-plans-1.png) ![Screenshot](/assets/images/testing/responsiveness/md-768-plans-2.png) ![Screenshot](/assets/images/testing/responsiveness/md-768-plans-3.png) |Works as expected. However, buttons could be styled so that the position of it is consistent. 'Select' button for day pass is slightly higher than the other two 'Select' buttons. |
|**Plans - Thank you** |![Screenshot](/assets/images/testing/responsiveness/md-768-plans-ty.png) |Works as expected. |
|**Gallery** |![Screenshot](/assets/images/testing/responsiveness/md-768-gallery-1.png) ![Screenshot](/assets/images/testing/responsiveness/md-768-gallery-2.png)|Works as expected. |
|**Schedules** |![Screenshot](/assets/images/testing/responsiveness/md-768-schedules-1.png) ![Screenshot](/assets/images/testing/responsiveness/md-768-schedules-2.png) ![Screenshot](/assets/images/testing/responsiveness/md-768-schedules-3.png)|Works as expected. |
|**Contact Us** |![Screenshot](/assets/images/testing/responsiveness/md-768-contactus.png)                   |Works as expected. |
|**Contact Us - Thank you** |![Screenshot](/assets/images/testing/responsiveness/md-768-ty.png) |Works as expected. |
|**404** |![Screenshot](/assets/images/testing/responsiveness/md-768-404.png) |Works as expected. |
|**Footer and back to top button** |![Screenshot](/assets/images/testing/responsiveness/md-768-footer.png) |Works as expected. <br><br> The consistency of footer throughout all 8 pages was checked, it all has the same layout.|


</details>
<details>

**<summary>Medium device at 991px...</summary>**

The test is carried out for medium devices such as tablets at 991px:

|                           |Screenshots        |Notes      |
|---------------------------|-------------------|-----------|
|**Header and menu** |![Screenshot](/assets/images/testing/responsiveness/md-991-header.png) |Works as expected. <br><br> The consistency of header throughout all 8 pages was checked, it all has the same layout.|
|**Home**                   |![Screenshot](/assets/images/testing/responsiveness/md-991-home-1.png) ![Screenshot](/assets/images/testing/responsiveness/md-991-home-2.png) ![Screenshot](/assets/images/testing/responsiveness/md-991-home-3.png) ![Screenshot](/assets/images/testing/responsiveness/md-991-home-4.png) ![Screenshot](/assets/images/testing/responsiveness/md-991-home-5.png) ![Screenshot](/assets/images/testing/responsiveness/md-991-home-6.png) |Works as expected.|
|**Plans**                  |![Screenshot](/assets/images/testing/responsiveness/md-991-plans-1.png) ![Screenshot](/assets/images/testing/responsiveness/md-991-plans-2.png) ![Screenshot](/assets/images/testing/responsiveness/md-991-plans-3.png) |Works as expected. However, buttons could be styled so that the position of it is consistent. 'Select' button for day pass and yearly pass is slightly higher than the other 'Select' buttons. |
|**Plans - Thank you**      |![Screenshot](/assets/images/testing/responsiveness/md-991-plans-ty.png) |Works as expected.|
|**Gallery**                |![Screenshot](/assets/images/testing/responsiveness/md-991-gallery-1.png) ![Screenshot](/assets/images/testing/responsiveness/md-991-gallery-2.png) |Works as expected.|
|**Schedules**              |![Screenshot](/assets/images/testing/responsiveness/md-991-schedules-1.png) ![Screenshot](/assets/images/testing/responsiveness/md-991-schedules-2.png) ![Screenshot](/assets/images/testing/responsiveness/md-991-schedules-3.png) |Works as expected.|
|**Contact Us**|![Screenshot](/assets/images/testing/responsiveness/md-991-contactus.png) |Works as expected.|
|**Contact Us - Thank you** |![Screenshot](/assets/images/testing/responsiveness/md-991-ty.png) |Works as expected.|
|**404**|![Screenshot](/assets/images/testing/responsiveness/md-991-404.png) |Works as expected.|
|**Footer and back to top button** |![Screenshot](/assets/images/testing/responsiveness/md-991-footer.png) |Works as expected. <br><br> The consistency of footer throughout all 8 pages was checked, it all has the same layout.|

</details>
<details>

**<summary>Large device at 992px...</summary>**

The test is carried out for large devices such as large desktops at 992px:

|                           |Screenshots        |Notes      |
|---------------------------|-------------------|-----------|
|**Header and menu** |![Screenshot](/assets/images/testing/responsiveness/lg-992-header.png) |Works as expected. <br><br> The consistency of header throughout all 8 pages was checked, it all has the same layout.|
|**Home**                   |![Screenshot](/assets/images/testing/responsiveness/lg-992-home-1.png) ![Screenshot](/assets/images/testing/responsiveness/lg-992-home-2.png) ![Screenshot](/assets/images/testing/responsiveness/lg-992-home-3.png) ![Screenshot](/assets/images/testing/responsiveness/lg-992-home-4.png) ![Screenshot](/assets/images/testing/responsiveness/lg-992-home-5.png) ![Screenshot](/assets/images/testing/responsiveness/lg-992-home-6.png) |Works as expected.|
|**Plans**                  |![Screenshot](/assets/images/testing/responsiveness/lg-992-plans-1.png) ![Screenshot](/assets/images/testing/responsiveness/lg-992-plans-2.png) ![Screenshot](/assets/images/testing/responsiveness/lg-992-plans-3.png)|Works as expected.|
|**Plans - Thank you**      |![Screenshot](/assets/images/testing/responsiveness/lg-992-plans-ty.png)  |Works as expected.|
|**Gallery**                |![Screenshot](/assets/images/testing/responsiveness/lg-992-gallery-1.png) ![Screenshot](/assets/images/testing/responsiveness/lg-992-gallery-2.png) |Works as expected.|
|**Schedules**              |![Screenshot](/assets/images/testing/responsiveness/lg-992-schedules-1.png) ![Screenshot](/assets/images/testing/responsiveness/lg-992-schedules-2.png) ![Screenshot](/assets/images/testing/responsiveness/lg-992-schedules-3.png)|Works as expected.|
|**Contact Us**             |![Screenshot](/assets/images/testing/responsiveness/lg-992-contactus.png) |Works as expected.|
|**Contact Us - Thank you** |![Screenshot](/assets/images/testing/responsiveness/lg-992-ty.png) |Works as expected.|
|**404**                    |![Screenshot](/assets/images/testing/responsiveness/lg-992-404.png) |Works as expected.|
|**Footer and back to top button** |![Screenshot](/assets/images/testing/responsiveness/lg-992-footer.png) |Works as expected. <br><br> The consistency of footer throughout all 8 pages was checked, it all has the same layout.|

</details>
<details>

**<summary>Large device at 1199px...</summary>**

The test is carried out for large devices such as large desktops at 1199px:

|                           |Screenshots        |Notes      |
|---------------------------|-------------------|-----------|
|**Header and menu** |![Screenshot](/assets/images/testing/responsiveness/lg-1199-header.png) |Works as expected. <br><br> The consistency of header throughout all 8 pages was checked, it all has the same layout.|
|**Home** |![Screenshot](/assets/images/testing/responsiveness/lg-1199-home-1.png) ![Screenshot](/assets/images/testing/responsiveness/lg-1199-home-2.png) ![Screenshot](/assets/images/testing/responsiveness/lg-1199-home-3.png) ![Screenshot](/assets/images/testing/responsiveness/lg-1199-home-4.png) ![Screenshot](/assets/images/testing/responsiveness/lg-1199-home-5.png) ![Screenshot](/assets/images/testing/responsiveness/lg-1199-home-6.png) |Works as expected.|
|**Plans**                  |![Screenshot](/assets/images/testing/responsiveness/lg-1199-plans-1.png) ![Screenshot](/assets/images/testing/responsiveness/lg-1199-plans-2.png) ![Screenshot](/assets/images/testing/responsiveness/lg-1199-plans-3.png)|Works as expected.|
|**Plans - Thank you**      |![Screenshot](/assets/images/testing/responsiveness/lg-1199-plans-ty.png) |Works as expected.|
|**Gallery**                |![Screenshot](/assets/images/testing/responsiveness/lg-1199-gallery-1.png) ![Screenshot](/assets/images/testing/responsiveness/lg-1199-gallery-2.png) |Works as expected.|
|**Schedules**              |![Screenshot](/assets/images/testing/responsiveness/lg-1199-schedules-1.png) ![Screenshot](/assets/images/testing/responsiveness/lg-1199-schedules-2.png) ![Screenshot](/assets/images/testing/responsiveness/lg-1199-schedules-3.png) |Works as expected.|
|**Contact Us**             |![Screenshot](/assets/images/testing/responsiveness/lg-1199-contactus.png) |Works as expected.|
|**Contact Us - Thank you** |![Screenshot](/assets/images/testing/responsiveness/lg-1199-ty.png) |Works as expected.|
|**404**                    |![Screenshot](/assets/images/testing/responsiveness/lg-1199-404.png) |Works as expected.|
|**Footer and back to top button** |![Screenshot](/assets/images/testing/responsiveness/lg-1199-footer.png) |Works as expected. <br><br> The consistency of footer throughout all 8 pages was checked, it all has the same layout.|

</details>
<details>

**<summary>Extra Large device at 1200...</summary>**

The test is carried out for extra large devices such as large desktops at 1200px:

|                           |Screenshots        |Notes      |
|---------------------------|-------------------|-----------|
|**Header and menu**                   |![Screenshot](/assets/images/testing/responsiveness/xl-1200-header.png) |Works as expected. <br><br> The consistency of header throughout all 8 pages was checked, it all has the same layout.|
|**Home**                   |![Screenshot](/assets/images/testing/responsiveness/xl-1200-home-1.png) ![Screenshot](/assets/images/testing/responsiveness/xl-1200-home-2.png) ![Screenshot](/assets/images/testing/responsiveness/xl-1200-home-3.png) ![Screenshot](/assets/images/testing/responsiveness/xl-1200-home-4.png) ![Screenshot](/assets/images/testing/responsiveness/xl-1200-home-5.png) ![Screenshot](/assets/images/testing/responsiveness/xl-1200-home-6.png) ![Screenshot](/assets/images/testing/responsiveness/xl-1200-home-7.png) |Works as expected. |
|**Plans**                  |![Screenshot](/assets/images/testing/responsiveness/xl-1200-plans-1.png) ![Screenshot](/assets/images/testing/responsiveness/xl-1200-plans-2.png) ![Screenshot](/assets/images/testing/responsiveness/xl-1200-plans-3.png)|Works as expected. |
|**Plans - Thank you**      |![Screenshot](/assets/images/testing/responsiveness/xl-1200-plans-ty.png) |Works as expected. |
|**Gallery**                |![Screenshot](/assets/images/testing/responsiveness/xl-1200-gallery-1.png) ![Screenshot](/assets/images/testing/responsiveness/xl-1200-gallery-2.png) |Works as expected. |
|**Schedules**              |![Screenshot](/assets/images/testing/responsiveness/xl-1200-schedules-1.png) ![Screenshot](/assets/images/testing/responsiveness/xl-1200-schedules-2.png) ![Screenshot](/assets/images/testing/responsiveness/xl-1200-schedules-3.png) |Works as expected. |
|**Contact Us**             |![Screenshot](/assets/images/testing/responsiveness/xl-1200-contactus-1.png) ![Screenshot](/assets/images/testing/responsiveness/xl-1200-contactus-2.png) |Works as expected. |
|**Contact Us - Thank you** |![Screenshot](/assets/images/testing/responsiveness/xl-1200-ty.png) |Works as expected. |
|**404**                    |![Screenshot](/assets/images/testing/responsiveness/xl-1200-404.png) |Works as expected. |
|**Footer and back to top button**|![Screenshot](/assets/images/testing/responsiveness/xl-1200-footer.png) |Works as expected. <br><br> The consistency of footer throughout all 8 pages was checked, it all has the same layout.|

</details>

<details>

**<summary>Extra Extra Large device at 1600px...</summary>**

The test is carried out for extra extra large devices such as extra extra large desktops at 1600px:

|                           |Screenshots        |Notes      |
|---------------------------|-------------------|-----------|
|**Header and menu**|![Screenshot](/assets/images/testing/responsiveness/xxl-1600-header.png) |Works as expected. <br><br> The consistency of header throughout all 8 pages was checked, it all has the same layout.|
|**Home**                   |![Screenshot](/assets/images/testing/responsiveness/xxl-1600-home-1.png) ![Screenshot](/assets/images/testing/responsiveness/xxl-1600-home-2.png) ![Screenshot](/assets/images/testing/responsiveness/xxl-1600-home-3.png) ![Screenshot](/assets/images/testing/responsiveness/xxl-1600-home-4.png) ![Screenshot](/assets/images/testing/responsiveness/xxl-1600-home-5.png) ![Screenshot](/assets/images/testing/responsiveness/xxl-1600-home-6.png) |Works as expected.|
|**Plans**                  |![Screenshot](/assets/images/testing/responsiveness/xxl-1600-plans-1.png) ![Screenshot](/assets/images/testing/responsiveness/xxl-1600-plans-2.png) ![Screenshot](/assets/images/testing/responsiveness/xxl-1600-plans-3.png) |Works as expected.|
|**Plans - Thank you**      |![Screenshot](/assets/images/testing/responsiveness/xxl-1600-plans-ty.png) |Works as expected.|
|**Gallery**                |![Screenshot](/assets/images/testing/responsiveness/xxl-1600-gallery-1.png) ![Screenshot](/assets/images/testing/responsiveness/xxl-1600-gallery-2.png) |Works as expected.|
|**Schedules**              |![Screenshot](/assets/images/testing/responsiveness/xxl-1600-schedules-1.png) ![Screenshot](/assets/images/testing/responsiveness/xxl-1600-schedules-2.png) ![Screenshot](/assets/images/testing/responsiveness/xxl-1600-schedules-3.png) |Works as expected.|
|**Contact Us**             |![Screenshot](/assets/images/testing/responsiveness/xxl-1600-ty.png) |Works as expected.|
|**Contact Us - Thank you** |![Screenshot](/assets/images/testing/responsiveness/xxl-1600-contactus-1.png) ![Screenshot](/assets/images/testing/responsiveness/xxl-1600-contactus-2.png) |Works as expected.|
|**404**                    |![Screenshot](/assets/images/testing/responsiveness/xxl-1600-404.png) |Works as expected.|
|**Footer and back to top button**|![Screenshot](/assets/images/testing/responsiveness/xxl-1600-footer.png) |Works as expected. <br><br> The consistency of footer throughout all 8 pages was checked, it all has the same layout.|


</details>
<br>

Further tests were carried out for responsiveness. This was carried out using [Blisk](https://blisk.io/product). For each device group, a screen recording is taken instead of screenshots.  

>Click below, on the relevant headings to expand

<details>

**<summary>Blisk results</summary>**

The following devices have been chosen to be tested: 

| Device Group                | Device type                             | Reason for choosing                        |Link to screen recording| Results |
|-----------------------------|-----------------------------------------|--------------------------------------------|-----------------------|----------|
| **Android - Google Pixel**  | Google Pixel 8, <br> Google Pixel 8 Pro | Pixel 8 is the latest model released in 2023/2024. Previous model of Pixel 7 has identical size| [Watch the video](/assets/images/testing/responsiveness/android-google-pixel.mp4) | All pages are responsive, however, when clicking on the back to button causes the landscape tab bar to appear. Hence, CSS was edited to shift the button slightly upwards. This page was then tested on blisk once more, however it does not fix the issue. When back to button is click, the landscape bar appears on the bottom of the page instead of scrolling upwards. The change made on CSS is carried forward, as the back to bottom button is very low on the page. | 
| **Android - Galaxy Series** | S22, S22 plus, S22 Ultra, S21 Ultra     | Although S24 is the latest release, this is not available on the software to be tested. The previous version is S22. Previous models have similar sizes with the exception of S21 which is slightly larger in size.| **Before changes:** <br> [Watch the video](/assets/images/testing/responsiveness/galaxy-series.mp4) <br> <br> **After changes:** <br> [Watch the video](/assets/images/testing/responsiveness/galaxy-series-after.mp4)| All pages are responsive except for schedule page. When testing with blisk, it was noticed that the table for certain days under classes is not responsive. This can be seen on the first video. CSS changes were made to ensure that the page remains responsive on extra small devices. Furthermore, when clicking on the back to button causes the landscape tab bar to appear. Hence, CSS was edited to shift the button slightly upwards. This page was then tested on blisk once more, however it does not fix the issue. When back to button is click, the landscape bar appears on the bottom of the page instead of scrolling upwards. The change made on CSS is carried forward, as the back to bottom button is very low on the page. | 
| **iOS**                     | iPhone 15, 15 plus, 15 Pro              | iPhone 15 is the latest model released in 2023. iPhone 15 Pro Max is not tested as it has an identical size to iPhone 15 Plus. Previous model varies in size. Hence, instead of testing all of them, the latest models are tested.|[Watch the video](/assets/images/testing/responsiveness/iOS.mp4) |All pages are responsive.|
| **iPad OS**                 | iPad Pro 9, 11, 12                      | Different iPads are chosen based on the sizes. The other models available on Blisk have similar sizes, hence they are not chosen for test.|[Watch the video](/assets/images/testing/responsiveness/ipad-os.mp4) |All pages are responsive.|
| **Windows - Small**                 | Smallest desktop at 1280px              | This is the smallest desktop size available on Blisk| [Watch the video](/assets/images/testing/responsiveness/windows-s.mp4) |All pages are responsive.|
| **Windows - Large**                 | Largest desktop at 3840px               | This is the largest desktop size available on Blisk| **Before changes:** <br> [Watch the video](/assets/images/testing/responsiveness/windows-l.mp4) <br><br> **After changes:** [Watch the video](/assets/images/testing/responsiveness/windows-l-after.mp4) | None of the pages are responsive. CSS is styled for devices larger than 2500px.|
| **macOS - Small**                   | Smallest iMac at 1440px                 | This is the smallest iMac size available on Blisk| [Watch the video](/assets/images/testing/responsiveness/macOS-small.mp4) |All pages are responsive. |
| **macOS-= - Large**                   | Largest iMac at 3200px                  | This is the largest iMac size available on Blisk| [Watch the video](/assets/images/testing/responsiveness/macOS-l.mp4) |All pages are responsive. |

</details>

<br>

[BACK TO TOP](#table-of-contents)
<br>

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
| **Schedules**              | ![Screenshot](/assets/images/testing/audits/la-schedules-before.png)  | Add metadata, increase space for touch targets, [and more](#further-information-on-lighthouse-audit-for-desktops)                                                                             |
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
| **Home**                   | ![Screenshot](/assets/images/testing/audits/la-home-after.png)       | Metadata was added, contrast was changed                                                                                                                                                                                                                                               |
| **Plans**                  | ![Screenshot](/assets/images/testing/audits/la-plans-after.png)      | Meta description is added                                                                                                                                                                                                                                                               |
| **Plans - Thank you**      | ![Screenshot](/assets/images/testing/audits/la-plans-ty-after.png)   | Meta description is added                                                                                                                                                                                                                                                               |
| **Gallery**                | ![Screenshot](/assets/images/testing/audits/la-gallery-after.png)    | Metadata was added, links were given a discernible name, alt texts was assigned, images were converted to webp                                                                                                                                                                         |
| **Schedules**              | ![Screenshot](/assets/images/testing/audits/la-schedules-after.png)  | Metadata was added, and spacing was also added. However, it still does not meet the minimum threshold required for accessibility. Further spacing is not added, as spacing seems sufficient. There is no adjacent buttons. The next button is in the next section which acts as a tab. |
| **Contact Us**             | ![Screenshot](/assets/images/testing/audits/la-contact-us-after.png) | Metadata was added and image was resized                                                                                                                                                                                                                                               |
| **Contact Us - Thank you** | ![Screenshot](/assets/images/testing/audits/la-thankyou-after.png)   | Metadata was added.                                                                                                                                                                                                                                                                    |
| **404**                    | ![Screenshot](/assets/images/testing/audits/la-404-after.png)        | Metadata was added.                                                                                                                                                                                                                                                                    |
</details>

<details>

**<summary> Mobile Audit...</summary>**


|                            | Screenshot                                               | Notes                                                             |
|----------------------------|----------------------------------------------------------|-------------------------------------------------------------------|
| **Home**                   | ![Screenshot](/assets/images/testing/audits/la-m-home.png)      | [See below](#further-information-on-lighthouse-audit-for-mobiles) |
| **Plans**                  | ![Screenshot](/assets/images/testing/audits/la-m-plans.png)     | [See below](#further-information-on-lighthouse-audit-for-mobiles) |
| **Plans - Thank you**      | ![Screenshot](/assets/images/testing/audits/la-m-plans-ty.png)  | [See below](#further-information-on-lighthouse-audit-for-mobiles) |
| **Gallery**                | ![Screenshot](/assets/images/testing/audits/la-m-gallery.png)   | [See below](#further-information-on-lighthouse-audit-for-mobiles) |
| **Schedules**              | ![Screenshot](/assets/images/testing/audits/la-m-schedules.png) | [See below](#further-information-on-lighthouse-audit-for-mobiles) |
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

[WAVE](https://wave.webaim.org/) is another evaluation tool which evaluates the web page and it also helps developers make content more accessible to individuals with special needs. It can be used with or without the extension. 

>Click below, on the relevant headings to expand

<details>

**<summary>Wave Table for desktop, includes changes...</summary>**

|                            | Screenshot                                                    | Message from wave                                                                                                                                                  |
|----------------------------|---------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Home**                   | ![Screenshot](/assets/images/testing/audits/w-home.png)              | Congratulations! No errors were detected! Manual testing is still necessary to ensure compliance and optimal accessibility.                                        |
| **Plans**                  | ![Screenshot](/assets/images/testing/audits/w-plans.png)             | Congratulations! No errors were detected! Manual testing is still necessary to ensure compliance and optimal accessibility                                         |
| **Plans - Thank you**      | ![Screenshot](/assets/images/testing/audits/w-plans-ty.png)          | Congratulations! No errors were detected! Manual testing is still necessary to ensure compliance and optimal accessibility                                         |
| **Gallery**                | ![Screenshot](/assets/images/testing/audits/w-gallery.png)           | Congratulations! No errors were detected! Manual testing is still necessary to ensure compliance and optimal accessibility                                         |
| **Schedules**              | ![Screenshot](/assets/images/testing/audits/w-schedules.png)         | Congratulations! No errors were detected! Manual testing is still necessary to ensure compliance and optimal accessibility                                         |
| **Contact Us** - Before    | ![Screenshot](/assets/images/testing/audits/w-contact-us-before.png) | 2 errors showed up. 1 missing label and 1 multiple label. This indicated an error with labels. Upon looking, there was a pasting/typing error. This was corrected. |
| **Contact Us** - After     | ![Screenshot](/assets/images/testing/audits/w-contact-us-after.png)  | Congratulations! No errors were detected! Manual testing is still necessary to ensure compliance and optimal accessibility                                         |
| **Contact Us - Thank you** | ![Screenshot](/assets/images/testing/audits/w-thankyou.png)          | Congratulations! No errors were detected! Manual testing is still necessary to ensure compliance and optimal accessibility                                         |
| **404**                    | ![Screenshot](/assets/images/testing/audits/w-404.png)               | Congratulations! No errors were detected! Manual testing is still necessary to ensure compliance and optimal accessibility                                         |

</details>

<br>

[BACK TO TOP](#table-of-contents)
## User Story Testing 

Tests are carried out to ensure that the website designed serves it purposes for first time, returning and frequent users. 

>Click below, on the relevant headings to expand

<details>

**<summary>First time visitors</summary>**

The following table shows user goals and screenshot as supporting evidence whether the goal has been achieved or not. 

|Goals      |Screenshots        |Comments       |
|-----------|-------------------|---------------|
|**I want to learn more about Gravity Gym.** | ![Screenshot](/assets/images/testing/user-testing/first-g1a.png) ![Screenshot](/assets/images/testing/user-testing/first-g1b.png) | s soon as the user enters the home page, there is information  of what the gym has to offer|
|**The website should be simple to use and intuitive to browse.** | ![Screenshot](/assets/images/testing/user-testing/first-g2.png)  | The page has a menu bar at the top of the page, where they can easily navigate to other pages with one click. Back to button is also available for users to scroll to the top of the page regardless of whether they are in the top, middle, or bottom of the page.|
|**I want to know where the gym is location and what are their opening times. I want to know if it is local to me and if they are open at the hours I can go to the gym.**| ![Screenshot](/assets/images/testing/user-testing/first-g3.png) | At every page of the website, there is a footer with the gyms location and opening times. |
|**I want to know what the experience previous and current users have had with the gym**|![Screenshot](/assets/images/testing/user-testing/first-g4.png) |There is a testimonial section at the bottom of home page, that shows other users experience with the gym |
|**I want to know if the gym is reliable and trustworthy. I would want to have access to their social media platforms.** | ![Screenshot](/assets/images/testing/user-testing/first-g3.png) | At every page of the website, there is a footer with links to social media pages |
|**I want to know what membership plans they have, what the ranges are.**| ![Screenshot](/assets/images/testing/user-testing/first-g5.png) |There is a page dedicated to membership plans which shows the price ranges|
|**I would like to know what offers they have currently for new gym members**| ![Screenshot](/assets/images/testing/user-testing/first-g5.png) |There is a page dedidcated to membership plans and offers available |

</details>

<details>

**<summary>Returning visitor</summary>**

|Goals      |Screenshots        |Comments       |
|-----------|-------------------|---------------|
|**I want to know more about the gym, rather than just opening hours and location. I would like to know what facilities they offer.**| ![Screenshot](/assets/images/testing/user-testing/returning-1.png) | There is a section dedicated within the home page that shows what facilities the gym has to offer |
|**I want to know if they have classes, and usually around what times.**|![Screenshot](/assets/images/testing/user-testing/returning-2.png) | There is a page dedicated 'schedules' that has a subsection 'classes' that shows what classes the gym provides and what time |
|**I want to know if swimming is gender specific and if there are times allocated for that.**|![Screenshot](/assets/images/testing/user-testing/returning-3.png) | There is a page dedicated 'schedules' that has a subsection 'swimming' that shows the timing of swimming sessions and also whether it is for ladies, gents, mixed or under-16. |
|**I want to know what membership plans they have and the difference between their membership plans.** |![Screenshot](/assets/images/testing/user-testing/returning-4.png) | There is a page dedicated 'plans' that shows what membership plans are available and what the differences are between the different plans. |
|**To be able to contact the gym if needed**|![Screenshot](/assets/images/testing/user-testing/returning-5a.png) ![Screenshot](/assets/images/testing/user-testing/returning-5b.png)|There is a page dedicated for users so that they can contact the gym with any queries. Furthermore, there is a telephone number on the footer of every page. The user can use the contact number to get in touch with the gym |

</details>

<details>

**<summary>Frequent user</summary>**

|Goals      |Screenshots        |Comments       |
|-----------|-------------------|---------------|
|**I want to have easy access to the class information and their schedule.** |![Screenshot](/assets/images/testing/user-testing/frequent-1.png) | A page is dedicated for schedules which includes a timetable for classes. |
|**I want to have easy access to swimming schedule**|![Screenshot](/assets/images/testing/user-testing/frequent-2.png) |A page is dedicated for schedules which includes a timetable for swimming. |
|**I want to have easy access to sauna & steam schedule**|![Screenshot](/assets/images/testing/user-testing/frequent-3.png) | A page is dedicated for schedules which includes a timetable for sauna and steam. |
|**I want to be able to download the schedule as pdf for offline use.** |![Screenshot](/assets/images/testing/user-testing/frequent-4.png) |A page is dedicated for schedules which includes pdf versions of timetables so that users can download it for offline access. |
|**I want to be able to source membership information for renewal**|![Screenshot](/assets/images/testing/user-testing/frequent-5.png) | A page is dedicated for membership plans which includes all plans available. |
|**I would like to know what offers they have currently for current and previous gym members**|![Screenshot](/assets/images/testing/user-testing/frequent-6.png)  | A page is dedicated for membership plans which includes all plans available. |


</details>

<br>

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

There are various links throughout the web page. All of them were tested to see if they do what they are supposed to do. The table below shows the test done and its results. 

>Click below, on the relevant headings to expand

<details>

**<summary>Links test results...</summary>**

|Tests done     |Expected results:      |Outcome:   |
|---------------|-----------------------|-----------|
|**Nav Links**      | - Home tab - Redirects to home. <br> - Plans tab - Redirects to Plans page <br> - Gallery tabs - Redirects to gallery page <br> - Schedules tab- Redirects to schedules page <br> - Contact us page - Redirects to contact us page <br><br> **All of these links should open on the same browser window** | All links worked as expected, and they opened up on the same window |
|**Back to top button** | Takes the user back to the top of the page | Back to top button worked as expected on all pages |
|**Social icons**   | - Twitter icon - Redirects to twitter website <br> - Facebook icon - Redirects to facebook website <br> - Whatsapp icon - Redirects to Whatsapp website <br> - Instagram icon - Redirects to Instagram website <br><br> **All of these links should open on the new browser tab** | All links worked as expected, and they opened up on another browser tab|
|**Select button on membership page**|User should be redirected to a 'thank you' page dedicated for membership plans in the same browser tab| Link worked as expected, and it opened on the same windows tab|
|**Contact us link under membership queries**|User should be redirected to a contact us page in the same browser tab| Link worked as expected, and it opened on the same windows tab|
|**Gallery images link**|Full size image should open in a new tab|Image links worked as expected|
|**Classes tabs**|It should collapse and display classes relevant to that day|Tab button worked as expected|
|**Swimming tabs**|It should collapse and display classes relevant to that day|Tab button worked as expected|
|**Sauna / Steam tabs**|It should collapse and display classes relevant to that day|Tab button worked as expected|
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
|Email address - required                  |![Screenshot](/assets/images/testing/features/form-email.png)                      |Form does not submit without this filled in.                                  |
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

The following bugs were identified whilst creating the website. These bugs were tested and fixed. 

>Click below, on the relevant headings to expand

<details>

**<summary>Unwanted space</summary>**

**Information**
* There was unwanted space between the upper image and lower image for smaller screen size. 
* A solution for this problem was tested using dev tools and then fixed on GitPod

**Screenshots:**
|Identified                                                         |Fixed                                                      |
|-------------------------------------------------------------------|-----------------------------------------------------------|
![Identified](/assets/images/testing/solved-bugs/p1-identified.png)<br>**Date Identified:** 19/07/2024 | ![Fixed](/assets/images/testing/solved-bugs/p1-fixed.png) <br> **Date Fixed:** 19/07/2024     |

</details>

<details>

**<summary>Unaligned Nav Items</summary>**

**Information**
* Nav Items were not aligning correctly. 
* When looked at it closely, it can be seen that the 'Schedule' tab item under the 'Home' tab is not aligned. The 'Schedule' tab is slightly towards the right in comparisons to the 'Home' tab.  The same is for the 'Contact Us' under the 'Plans' tab which is slightly towards the right.
* I was unable to fix the problem myself. Support from my mentor was sougth on this
* My mentor helped me identify the issue using DevTools and showed me how I could use Bootstrap to resolve this issue.

**Screenshots:**
|Identified                                                         |Fixed                                                      |
|-------------------------------------------------------------------|-----------------------------------------------------------|
![Identified](/assets/images/testing/solved-bugs/p2-identified.png)<br>**Date Identified:** 19/07/2024 | ![Fixed](/assets/images/testing/solved-bugs/p2-fixed.png) <br> **Date Fixed:** 19/07/2024     |

</details>

<details>

**<summary>Navigation menu is not responsive</summary>**

**Information**
* Page was not responsive due to the navigation menu. 
* The two columns would not move to the next line as designed using bootstrap. 
* This was due to the set width which was identified using DevTools.

**Screenshots:**
|Identified                                                         |Fixed                                                      |
|-------------------------------------------------------------------|-----------------------------------------------------------|
![Identified](/assets/images/testing/solved-bugs/p3-identified.png)<br>**Date Identified:** 19/07/2024 | ![Fixed](/assets/images/testing/solved-bugs/p3-fixed.png) <br> **Date Fixed:** 19/07/2024     |

</details>

<details>

**<summary>Text Overflow</summary>**

**Information**
* Text overflows from the textbox container and is hidden under the image for smaller devices. 
* Problem has been identified and the fix was tested using DevTool. 
* This was then implemented on GitPod

**Screenshots:**
|Identified                                                         |Fixed                                                      |
|-------------------------------------------------------------------|-----------------------------------------------------------|
![Identified](/assets/images/testing/solved-bugs/p4-identified.png)<br>**Date Identified:** 20/07/2024 | ![Fixed](/assets/images/testing/solved-bugs/p4-fixed.png) <br> **Date Fixed:** 20/07/2024     |

</details>

<details>

**<summary>Text overlaps the images</summary>**

**Information**
* Text and images overlaps one another smaller devices. 
* Problem has been identified and the fix was tested using DevTool. The problem was caused due to a set height. 
* This was then implemented on GitPod

**Screenshots:**
|Identified                                                         |Fixed                                                      |
|-------------------------------------------------------------------|-----------------------------------------------------------|
![Identified](/assets/images/testing/solved-bugs/p5-identified.png)<br>**Date Identified:** 20/07/2024 | ![Fixed](/assets/images/testing/solved-bugs/p5-fixed.png) <br> **Date Fixed:** 20/07/2024     |

</details>

<details>

**<summary>Containers are not responsive</summary>**

**Information**
* There was an unwanted gap on the right side of the page which was caused by bootstrap default margin. 
* The default margin is overridden using CSS stylings 
* Upon retesting, the problem was still there. 
* Upon further checking using DevTools, I realised that I needed to apply this solution for all the rows. 
* Once completed, this was rechecked. It worked as expected.

**Screenshots:**
|Identified                                                         |Fixed                                                      |
|-------------------------------------------------------------------|-----------------------------------------------------------|
![Identified](/assets/images/testing/solved-bugs/p6-identified.png)<br>**Date Identified:** 20/07/2024 | ![Fixed](/assets/images/testing/solved-bugs/p6-fixed.png) <br> **Date Fixed:** 20/07/2024     |

</details>

<details>

**<summary>Facility paragraph is not responsive</summary>**

**Information**
* The paragraphs would not resize itself. 
* The icons would not be stacked properly as expected. 
* Multiple changes were required for this fix. 
* DevTools was used to explore what changes could be made and then this was implemented on GitPod.

**Screenshots:**
|Identified                                                         |Fixed                                                      |
|-------------------------------------------------------------------|-----------------------------------------------------------|
![Identified](/assets/images/testing/solved-bugs/p7-identified.png)<br>**Date Identified:** 23/07/2024 | ![Fixed](/assets/images/testing/solved-bugs/p7-fixed.png) <br> **Date Fixed:** 23/07/2024     |

</details>

<details>

**<summary>Social Icons is not responsive</summary>**

**Information**
* Social icon is not responsive for smaller devices which results in some unwanted space on the right side of the page. 
* The fix was tested using DevTools and then applied on GitPod.

**Screenshots:**
|Identified                                                         |Fixed                                                      |
|-------------------------------------------------------------------|-----------------------------------------------------------|
![Identified](/assets/images/testing/solved-bugs/p8-identified.png)<br>**Date Identified:** 24/07/2024 | ![Fixed](/assets/images/testing/solved-bugs/p8-fixed.png) <br> **Date Fixed:** 24/07/2024     |

</details>

<details>

**<summary>Images one after the other</summary>**

**Information**
* Images appeared one after the other on smaller devices which was not presentable.
* I wanted the text to appear first and then images on the smaller device and retain the current order for medium devices and upwards. 
* Bootstrap was used to fix this. 
* This was tested on DevTools and and then the fix was implemented on GitPod.

**Screenshots:**
|Identified                                                         |Fixed                                                      |
|-------------------------------------------------------------------|-----------------------------------------------------------|
![Identified](/assets/images/testing/solved-bugs/p9-identified.png)<br>**Date Identified:** 24/07/2024 | ![Fixed](/assets/images/testing/solved-bugs/p9-fixed.png) <br> **Date Fixed:** 24/07/2024     |

</details>

<details>

**<summary>Issue with CSS link</summary>**

**Information**
* Page was entirely messed up
* To fix the issue, multiple solutions were tried. 
* Tried to clear browser cache, tried to load the page using a different browser, carried out CSS validation to ensure there was no error within the CSS causing the issue. 
* Eventually realised that the link to the style sheet was accidentally deleted within the HTML file. 
* The link has been added again which resolved the issue. 

**Screenshots:**
|Identified                                                         |Fixed                                                      |
|-------------------------------------------------------------------|-----------------------------------------------------------|
![Identified](/assets/images/testing/solved-bugs/p10-identified.png)<br>**Date Identified:** 25/07/2024 | ![Fixed](/assets/images/testing/solved-bugs/p10-fixed.png) <br> **Date Fixed:** 25/07/2024     |

</details>

<details>

**<summary>Footer obstructs view</summary>**

**Information**
* Footer was sticky which caused obstruction. 
* I could not fix this on my own and sought help from online. 
* I found a code from [DEV](https://dev.to/nehalahmadkhan/how-to-make-footer-stick-to-bottom-of-web-page-3i14) which fixed the problem. 
* The code was first tested using DevTools and then implemented on GitPod. 
* The footer is now at the bottom of the page, regardless of the content in the body section.

**Screenshots:**
|Identified                                                         |Fixed                                                      |
|-------------------------------------------------------------------|-----------------------------------------------------------|
![Identified](/assets/images/testing/solved-bugs/p11-identified.png)<br>**Date Identified:** 25/07/2024 | ![Fixed](/assets/images/testing/solved-bugs/p11-fixed1.png) <br>![Fixed](/assets/images/testing/solved-bugs/p11-fixed2.png) <br> **Date Fixed:** 25/07/2024     |

</details>

<details>

**<summary>Input cannot be selected</summary>**

**Information**
* Textbox on contact us page could not be selected. 
* Problem could not be figured out. Mentor helped me identify the issue using DevTool. 
* It was easily sorted using z-index:-1

**Screenshots:**
|Identified                                                         |Fixed                                                      |
|-------------------------------------------------------------------|-----------------------------------------------------------|
![Identified](/assets/images/testing/solved-bugs/p12-identified.png)<br>**Date Identified:** 30/07/2024 | ![Fixed](/assets/images/testing/solved-bugs/p12-fixed.png) <br> **Date Fixed:** 30/07/2024     |

</details>

<details>

**<summary>Text is not responsive</summary>**

**Information**
* Text overlaps images for personal trainer and get started section
* Issue was identified using DevTools. 
* A set width was causing an issue. 
* The fix was tested using on DevTool and then implemented on GitPod 

**Screenshots:**
|Identified                                                         |Fixed                                                      |
|-------------------------------------------------------------------|-----------------------------------------------------------|
![Identified](/assets/images/testing/solved-bugs/p13-identified.png)<br>**Date Identified:** 02/08/2024 | ![Fixed](/assets/images/testing/solved-bugs/p13-fixed.png) <br> **Date Fixed:** 02/08/2024     |

</details>

<details>

**<summary>Button border appears in the wrong place</summary>**

**Information**
* Button border / shadow appears in its original place instead of its re-positioned place. 
* Couple of attempts were made to resolve this issue:
    * Using DevTool, the button is hidden, however this hid the anchor too. 
    * The button border was set to none, however there was still a line below it. 
    * The same position setting used for anchor is then used for the button. 
* The final solution resolved the issue

**Screenshots:**
|Identified                                                         |Fixed                                                      |
|-------------------------------------------------------------------|-----------------------------------------------------------|
![Identified](/assets/images/testing/solved-bugs/p14-identified.png)<br>**Date Identified:** 06/08/2024 | ![Fixed](/assets/images/testing/solved-bugs/p14-fixed.png) <br> **Date Fixed:** 06/08/2024     |

</details>

<details>

**<summary>Unwanted white space</summary>**

**Information**
* White space next to the full width image
* DevTools was used to identify the reason for the white space. 
* 12px padding was causing this issues. Padding is set to 0.

**Screenshots:**
|Identified                                                         |Fixed                                                      |
|-------------------------------------------------------------------|-----------------------------------------------------------|
![Identified](/assets/images/testing/solved-bugs/p15-identified.png)<br>**Date Identified:** 07/08/2024 | ![Fixed](/assets/images/testing/solved-bugs/p15-fixed.png) <br> **Date Fixed:** 07/08/2024     |

</details>

<details>

**<summary>Full width is not a full container</summary>**

**Information**
* The full width image was not a full container causing responsive issues at different screen sizes. 
* DevTool was used to identify the problem.
* It was identified that changing the background size to cover solves this issue
* This fix was then implemented.

**Screenshots:**
|Identified                                                         |Fixed                                                      |
|-------------------------------------------------------------------|-----------------------------------------------------------|
![Identified](/assets/images/testing/solved-bugs/p16-identified.png)<br>**Date Identified:** 12/08/2024 | ![Fixed](/assets/images/testing/solved-bugs/p16-fixed.png) <br> **Date Fixed:** 12/08/2024     |

</details>

<details>

**<summary>Text overlaps Back to top button</summary>**

**Information**
* Back to top button appears to be behind some of the texts. 
* To identify the issue, DevTools was used. 
* To fix it, z-index was used to bring it to the front. This solved the issue.

**Screenshots:**
|Identified                                                         |Fixed                                                      |
|-------------------------------------------------------------------|-----------------------------------------------------------|
![Identified](/assets/images/testing/solved-bugs/p17-identified.png)<br>**Date Identified:** 12/08/2024 | ![Fixed](/assets/images/testing/solved-bugs/p17-fixed.png) <br> **Date Fixed:** 12/08/2024     |

</details>

<br>

[BACK TO TOP](#table-of-contents)

## Unsolved Bugs 

>Click below, on the relevant headings to expand

<details>

**<summary>Menu not loading correctly</summary>**

**Problem:**
* The menu does not load properly
* It initially loads the box and the text
* It then loads the icon 

**Solutions attempted:**
* I thought this was caused because I moved the font awesome link icon to the bottom of the page
* I moved it back to the top, however the problem is not resolved
* I also cleared the cache and refreshed the browser, the problem did not resolve
* I changed the order of internal style links and the external links of JS, Bootstrap and Fontawesome, one at a time 
* After each changes, the cache was cleared and browser was refreshed. Problem was not resolved

|Screenshot of page when it first loads      |
|-----------------------------------|
|![Screenshot](/assets/images/testing/unsolved-bug/unsolved-bug-1a.png) |


|Screenshot of page when it has finished loading     |
|-----------------------------------|
|![Screenshot](/assets/images/testing/unsolved-bug/unsolved-bug-1b.png) |

</details>

<details>

**<summary>White Line above full width image</summary>**

**Problem:**
* Above the full width image, in home page, there is a white line
* The white line is visible intermittently when using DevTools
* However, it is consistently visible when using Blisk 
* The problem occurs for all device sizes 

**Solutions attempted:**

The following solutions have been attempted, however they have not worked:
* Setting margin to 0
* Setting padding to 0
* Changing background size to cover, contain etc 
* Changing background colour to black

|Screenshot for mobile devices      |
|-----------------------------------|
|![Screenshot](/assets/images/testing/unsolved-bug/unsolved-bug-2a.png) |

|Screenshot for tablet devices      |
|-----------------------------------|
|![Screenshot](/assets/images/testing/unsolved-bug/unsolved-bug-2b.png) |


|Screenshot for desktop devices     |
|-----------------------------------|
|![Screenshot](/assets/images/testing/unsolved-bug/unsolved-bug-2c.png) |

</details>

<details>

**<summary>Back to top button on small devices</summary>**

**Problem:**
* Back to top button on small devices does not work as expected
* When clicked on it, it should take the user to the top of the page
* However, when it is clicked, the landscape bar at the bottom of the page
* In order for the user to go to the top of the page, the user needs to click on the button again 
* This problem only occurs for extra small devices, portrait phones

**Solutions attempted:**
* Attempt was made to reposition the button slightly above the landscape bar 
* Cache was cleared and browser was refreshed 
* This did not resolve the issue

|Before selecting the Back to top button     |
|-----------------------------------|
|![Screenshot](/assets/images/testing/unsolved-bug/unsolved-bug-3a.png) |

|After selecting the Back to top button     |
|-----------------------------------|
|![Screenshot](/assets/images/testing/unsolved-bug/unsolved-bug-3b.png) |

</details>

<br>

[BACK TO TOP](#table-of-contents)
