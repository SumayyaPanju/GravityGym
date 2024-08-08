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

#### HTML Validator - without changes made 
The table below shows the screenshots of the error and warning messages from the HTML Validator before any changes are made

| Page                       | Screenshot        | Notes          |
|----------------------------|-------------------|-------------------|
| **Home**                   |![Screenshot](/assets/images/testing/html-validator-home-before.png)|**2 Errors:**<br> - Element a must not appear as descendent of button element <br> - Script element is stray <br><br> **2 Warnings:**<br> - Name attribute is obsolete for a element <br>- Section lacks heading|
| **Plans**                  |![Screenshots](/assets/images/testing/html-validator-plans-before.png)|**8 Errors:**<br> - Button element cannot be descendent of a element <br> -  No space between attributes ""<br> - Possibly missing = before " <br> - " not allowed in div element <br><br>**2 Warnings:**<br>- Attribute " is not serializable|
| **Plans - Thank you**      |                   |                |
| **Gallery**                |                   |                |
| **Scheudles**              |                   |                |
| **Contact Us**             |                   |                |
| **Contact Us - Thank you** |                   |                |
| **404**                    |                   |                |


#### HTML Validator - after changes made 

The Table below shows screenshots of the error and warning messages from the HTML Validator after changes have been made

| Page                       | W3C URL           | Screenshot        | Notes          |
|----------------------------|-------------------|-------------------|----------------|
| **Home**                   |[Results page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fsumayyapanju.github.io%2FGravityGym%2Findex.html)|![Screenshot](/assets/images/testing/html-validator-home-after.png)|**No errors.** <br> <br> Previous erorr overcomed by changing the button element to div element and by repositioning the script element within the body element at the bottom of the footer. This change is applied to all of the pages. <br><br>Name attribute is changed to id attribute <br><br> **1 error:** <br> - Section lacks heading element.|
| **Plans**                  |[Results page](https://validator.w3.org/nu/?useragent=Validator.nu%2FLV+https%3A%2F%2Fvalidator.w3.org%2Fservices&acceptlanguage=&doc=https%3A%2F%2Fsumayyapanju.github.io%2FGravityGym%2Fplans.html)|![Screenshot](/assets/images/testing/html-validator-plans-after.png)|**No Errors**<br><br> - Typing error "". The extra " is removed <br> - Button element restyled to div element and CSS page changed accordingly|
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
| **style.css**         |[Result page](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fsumayyapanju.github.io%2FGravityGym%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)              |![Screenshot](/assets/images/testing/css-validator.png)|No error found.|


[BACK TO TOP](#table-of-contents)

### JavaScript


| File                  | Screenshot        | Notes          |
|-----------------------|-------------------|----------------|
| **script.js**         |![Screenshot](/assets/images/testing/js-validator.png)|6 warnings found. However, unable to resolve it due to lack of knowledge in JavaScript.|



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

### Desktop Audit - Before making improvements

|                            | Screenshot                                                   | Evaluation tool suggests: |
|----------------------------|--------------------------------------------------------------|-------|
| **Home**                   |![Screenshot](/assets/images/testing/la-home-before.png)      |Add metadata, improve contrast, improve, preload, [and more](#further-information-on-lighthouse-audit-for-desktops)|
| **Plans**                  |![Screenshot](/assets/images/testing/la-plans-before.png)     |Add metadata, [and more](#further-information-on-lighthouse-audit-for-desktops)|
| **Plans - Thank you**      |![Screenshot](/assets/images/testing/la-plans-ty-before.png)  |Add metadata, [and more](#further-information-on-lighthouse-audit-for-desktops)|
| **Gallery**                |![Screenshot](/assets/images/testing/la-gallery-before.png)   |Add metadata, reduce network payloads, reduce large layout shifts, have discernible name for links, images to webp or avif, [and more](#further-information-on-lighthouse-audit-for-desktops) |
| **Scheudles**              |![Screenshot](/assets/images/testing/la-schedules-before.png) |Add metadata, increase space for touch targets, [and more](#further-information-on-lighthouse-audit-for-desktops)|
| **Contact Us**             |![Screenshot](/assets/images/testing/la-contact-us-before.png)|Add metadata, resize background image to match natural aspect ratio, [and more](#further-information-on-lighthouse-audit-for-desktops)|
| **Contact Us - Thank you** |![Screenshot](/assets/images/testing/la-thankyou-before.png)  |Add metadata, [and more](#further-information-on-lighthouse-audit-for-desktops)|
| **404**                    |![Screenshot](/assets/images/testing/la-404-before.png)       |Add metadata, [and more](#further-information-on-lighthouse-audit-for-desktops)|

#### Further information on lighthouse audit for desktops

For all or almost all pages, there were common suggestions by lighthouse to improve performance of the website. These suggestions were not carried out due to lack of skills/knowledge in those areas. The screenshot below shows the suggestions given by lighthouse:

![Screenshot](/assets/images/testing/diagnostic-results.png)

### Desktop Audit - After making improvements

|                            | Screenshot                                                   | Notes |
|----------------------------|--------------------------------------------------------------|-------|
| **Home**                   |![Screenshot](/assets/images/testing/la-home-after.png)       |Meta data was added, contrast was changed|
| **Plans**                  |![Screenshot](/assets/images/testing/la-plans-after.png)      |Meta description is added|
| **Plans - Thank you**      |![Screenshot](/assets/images/testing/la-plans-ty-after.png)   |Meta description is added|
| **Gallery**                |![Screenshot](/assets/images/testing/la-gallery-after.png)    |Meta data was added, links were given a discernible name, alt texts was assigned, images were converted to webp|
| **Scheudles**              |![Screenshot](/assets/images/testing/la-schedules-after.png)  |Meta data was added, and spacing was also added. However, it still does not meet the minimum threshold required for accessibility. Further spacing is not added, as spacing seems sufficient. There is no adjacent buttons. The next button is in the next section which acts as a tab.|
| **Contact Us**             |![Screenshot](/assets/images/testing/la-contact-us-after.png) |Meta data was added and image was resized|
| **Contact Us - Thank you** |![Screenshot](/assets/images/testing/la-thankyou-after.png)   |Meta data was added.|
| **404**                    |![Screenshot](/assets/images/testing/la-404-after.png)        |Meta data was added.|


### Mobile Audit 


|                            | Screenshot                                               | Notes                                                             |
|----------------------------|----------------------------------------------------------|-------------------------------------------------------------------|
| **Home**                   |![Screenshot](/assets/images/testing/la-m-home.png)       |[See below](#further-information-on-lighthouse-audit-for-mobiles)  |
| **Plans**                  |![Screenshot](/assets/images/testing/la-m-plans.png)      |[See below](#further-information-on-lighthouse-audit-for-mobiles)  |
| **Plans - Thank you**      |![Screenshot](/assets/images/testing/la-m-plans-ty.png)   |[See below](#further-information-on-lighthouse-audit-for-mobiles)  |
| **Gallery**                |![Screenshot](/assets/images/testing/la-m-gallery.png)    |[See below](#further-information-on-lighthouse-audit-for-mobiles)  |
| **Scheudles**              |![Screenshot](/assets/images/testing/la-m-schedules.png)  |[See below](#further-information-on-lighthouse-audit-for-mobiles)  |
| **Contact Us**             |![Screenshot](/assets/images/testing/la-m-contactus.png)  |[See below](#further-information-on-lighthouse-audit-for-mobiles)  |
| **Contact Us - Thank you** |![Screenshot](/assets/images/testing/la-m-thankyou.png)         |[See below](#further-information-on-lighthouse-audit-for-mobiles)  |
| **404**                    |![Screenshot](/assets/images/testing/la-m-404.png)        |[See below](#further-information-on-lighthouse-audit-for-mobiles)  |

#### Further information on lighthouse audit for mobiles

For all or almost all pages, there were common suggestions by lighthouse to improve performance of the website. These suggestions were not carried out due to lack of skills/knowledge in those areas. The screenshot below shows the suggestions given by lighthouse:

![Screenshot](/assets/images/testing/m-diagnostic-results.png)

[BACK TO TOP](#table-of-contents)
## Wave Web Accessibility Evaluation

[WAVE](https://wave.webaim.org/) is another evaluation tool which evaluates the webpage and it also helps developers make content more accessible to individuals with special needs. It can be used with or without the extension. 

|                            | Screenshot                                                   | Message from wave |
|----------------------------|--------------------------------------------------------------|-------|
| **Home**                   | ![Screenshot](/assets/images/testing/w-home.png)             | Congratulations! No errors were detected! Manual testing is still necessary to ensure compliance and optimal accessibility.|
| **Plans**                  | ![Screenshot](/assets/images/testing/w-plans.png)            |Congratulations! No errors were detected! Manual testing is still necessary to ensure compliance and optimal accessibility|
| **Plans - Thank you**      | ![Screenshot](/assets/images/testing/w-plans-ty.png)         |Congratulations! No errors were detected! Manual testing is still necessary to ensure compliance and optimal accessibility|
| **Gallery**                | ![Screenshot](/assets/images/testing/w-gallery.png)          |Congratulations! No errors were detected! Manual testing is still necessary to ensure compliance and optimal accessibility|
| **Scheudles**              | ![Screenshot](/assets/images/testing/w-schedules.png)        |Congratulations! No errors were detected! Manual testing is still necessary to ensure compliance and optimal accessibility|
| **Contact Us** - Before    |![Screenshot](/assets/images/testing/w-contact-us-before.png) |2 errors showed up. 1 missing label and 1 multiple label. This indicated an error with labels. Upon looking, there was a pasting/typing error. This was corrected.|
| **Contact Us** - After     |![Screenshot](/assets/images/testing/w-contact-us-after.png)  |Congratulations! No errors were detected! Manual testing is still necessary to ensure compliance and optimal accessibility|
| **Contact Us - Thank you** |![Screenshot](/assets/images/testing/w-thankyou.png)          |Congratulations! No errors were detected! Manual testing is still necessary to ensure compliance and optimal accessibility|
| **404**                    |![Screenshot](/assets/images/testing/w-404.png)               |Congratulations! No errors were detected! Manual testing is still necessary to ensure compliance and optimal accessibility|


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