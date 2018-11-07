# FrontendChallenge

by [Hassan Sani](hassansani.me)

github.com/inidaname

## Instructions
1. Navigate to the repository here [Front End Challenge](https://github.com/inidaname/frontendChallenge)
2. Clone the repository to your local machine type `git clone https://github.com/inidaname/frontendChallenge.git`, in a `terminal/cmd`.
3. Navigate to the repository's directory type `cd frontendChallenge`
4. Install the application dependencies using `npm install`
5. Run `ng test` to execute the unit tests
6. Run `ng serve` this will run a dev build and serve the application. Navigate to `http://localhost:4200/` to view the served application.

## Discussion
This project was built using HTML, [Angular](https://angular.io), [BootStrap](https://getbootstrap.com) and TypeScript, I generated the scafolding of the project using the [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

Other external dependencies used in this project include:
* [ngBootStrap](https://ng-bootstrap.github.io/) for Styling and layouts,
* [ngx-pagination](https://www.npmjs.com/package/ngx-pagination) for data pagination,
* [fonts-awesome](https://fontawesome.com/) for calendar icons,
* [Underscore.js](https://undersocrejs.org) for array sorting

# Requirements
## Use the `data.json` file to create a responsive grid with headers city, start date, end date, price, status, color.

I used bootstrap's grid layout and card to display each object from the array and added a `span` with angular's ngStyle I display the color property for each object at the bottom of it's card, this is to help users who may not be able to translate color hex-codes of the objects.

## All columns should be sortable.
Using bootstrap's nav-links class I added a header card at the top of the object cards with all the objects properties for proper sorting. This is to help provide easy click navigation without having to remember name of each property in the object.

## Above the grid, please add two date pickers to filter the object by date range.
Using ngBootstrap's datepicker I added two calender dropdowns with labels **FROM** and **TO**. This will give the user a friendly view to pick the desired dates for proper filter of the array object.

## Please create a form with validation of the following fields email, password, confirm password. All fields are required.
Using *angular router* I added a register route which if clicked will navigate the user to a registration page, I created a form with three (3) input fields and a submit button. The submit button shall be disabled until the user has passed all input checks in a case of user error the affected input element will trigger an `invalid` class which changes the border color of the element to red and display the error message below the element while in a case of input check success the affected input element trigger's a `valid` class which changes the border color to green

Input error and checks include
* Email field: required and must be Email type,
* Password field: required and must be 8 characters or more
* Confirm Password field: required and must be equal to *Password field*

On submit the user is navigated to the home route, using Angular Service the User's email is display to replace to register link and a logout link which if click will clear the user's stored data from the `localStorage`.

Though this is a small app, please pay attention to your application structure.
Host your code on github or bitbucket and include a README with instructions on
how to install and run your application.

I have attached this document to the repository of this project, as the README file.
