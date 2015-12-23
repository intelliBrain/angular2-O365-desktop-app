# angular2-O365-desktop-app
Desktop application using Electron, Angular 2, Material Design Lite and Office 365 (Microsoft Graph API).

## Getting started

Install dependencies

`
npm install
`

Compile typescript files

`
npm run tsc
`

Run application

`
npm run electron
`

## Azure AD application Registration

Set "oauth2AllowImplicitFlow": true in application manifest file.

### Azure AD Application Permission requirements

* Read Files

## Application Build & Deployment

Follow Electron documentation for build for Windows, Linux and OSX.

To package files for deployment:


* npm install -g asar
* asar pack angular2-O365-desktop-app app.asar


** More details to follow **

## Resources

* [Angular 2](https://angular.io/)
* [Material Design Lite](http://www.getmdl.io/)
* [Electron](http://electron.atom.io/)
* [Office 365](https://products.office.com/en-gb/business/compare-office-365-for-business-plans)
* [Office 365 Development](https://dev.office.com/)

## TODO

* Improve error handling.
* Implement better design for each section.
* Manual refresh button for user.
* Add content paging.
* Add D3.js for dashboard components
* Setup production build task.
* Create unit tests.