[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/_bnPAxhd)
# U06 Receptapp

# Recipe App by Clara

Welcome to the Recipe App that I created. This application is designed to help users discover and manage recipes from an external recipe API. Let's dive into the details of the app.

## Introduction

I have developed a full-stack application that allows users to load, manage, and discover recipes from an external recipe API. The application enables users to create an account, log in, and log out. I used Angular for the frontend and Laravel for the backend, but also an external API to fetch data.

## Functionalities

### Suggested Recipes

- Users can access a suggested list of recipes from the external recipe API.
- The recipes can be filtered based on meal type (breakfast, lunch, or dinner) and allergens or dietary choices, in the search page.
- Users can click on a recipe to view more detailed information about a specific recipe.

### User Accounts

- Users can create an account, log in, and log out.
- Authentication and authorization are managed using Laravel Sanctum.

## Project Approach

While building the Recipe App, I encountered a slight misunderstanding regarding the implementation of filter functionalities. Initially, I implemented the filter functionalities in the search component instead of the suggested recipes. However, after discussions with classmates, I realized that the requirements suggested implementing filters in the suggested recipes component. Despite this, I decided to keep the logic in the search component due to the smooth user experience and logical flow of the website.


## Approach to Filter Functionality in Suggested Recipes

If I had initially understood the requirement to implement filter functionalities within the suggested recipes component, I would have approached it similarly to how I implemented the search functionality.

In the home component, where the suggested recipes are fetched, I would have added dropdown lists to allow users to select the mealType and health (allergens). These dropdown lists would then be used to send requests to the API via the `getRecipes()` inside my `recipesearch.service.ts`. Then I would use the same kind of html code to display the information. 

Understanding the concept, I prioritized clean coding. Filters were implemented in a separate component, ensuring a solution I'm proud of.

## Learning Experience

Throughout the development of the Recipe App, I gained valuable insights into frontend-backend communication, API integration, and user authentication. I thoroughly enjoyed working with an external API and exploring the possibilities of Angular and Laravel. However, I acknowledges the need for further improvement and plans to enhance the application during the upcoming summer break.

---