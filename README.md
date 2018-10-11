# MyReads
This is my solution  for the final assessment project for Udacity's React Fundamentals course, developed by [React Training](https://reacttraining.com).I started with started code provided by Udacity .

The task was to build an application to manage books.The books are managed in different shelfs, Books are provided by a backend server which was put up by the guys from udacity/react training. To sum things up, the user can move books between a fixed set of bookshelves. He can also add new books to his collection or remove previously added books.  

## Getting Started

`npm install`

When everything is downloaded and installed, stay in the same directory run the following command to get the application running.

`npm start`

That's it! You can now access the web application in your web browser via this url:

`http://localhost:3000` 

## Features
The app consists of three pages, which the user can access.

### `Home`
The home view displays three bookshelves: `currently reading`, `want to read` and `read`. Each shelf holds multiple books. The books can be moved between from one shelf to another.

The user can navigate to the book details by clicking on the cover of a book. The user can also navigate to the book search.

### `Search`
The search view consists of an input field. When the user changes the value of the input field, a search request is sent to the backend. The search results are displayed in the area below the input field. Books can be added to shelves, moved between shelves or removed from their current shelf. 

Note: The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md]`(SEARCH_TERMS.md)`. That list of terms are the _only_ terms that will work with the backend, so don't be surprised if searches for Basket Weaving or Bubble Wrap don't come back with any results. 

### `Details`
The details view shows detailed information of a book. In addition to the title, the cover and the authors, which are available in the home and search view too, the user gets access to a description, a list of categories, the book's publication date and he can follow a link to google where he can either preview or buy the book.

## `Demo Execution of the app`
![alt text](./screenshot/screenshot.gif);

## `Code`
```
+--public/    
 |-- index.html - Template file
 |-- favicon.ico - React Icon
+-- src/
 +-- components/ All react components. Each has a JS and a CSS file.
  +-- App - This is the root of the app. The initial data is loaded here. Routes are also set up here.
  +-- BackButton - A simple BackButton component ensuring it looks and behaves the same everywhere in the application.
  +-- Book - Collection of subcomponents to help build components to reflect a book. Used in BookDetails and BookListItem.
   +-- BookAuthors - List of Book Authors.
   +-- BookCategories - List of Book Categories.
   +-- BookPurchase - Buttons for info and preview link on google.
   +-- BookShelfChanger - Component to change the shelf a book is in.
  +-- BookDetails - Extra component to display the details of a book.
  +-- BookList - Component to display a list of books. Used in BookShelf and BookSearch.
   +-- BookListItem - Component to reflect a book as a list item
  +-- BookSearch - Component to search additional books and add them to the shelves.
  +-- BookShelves - BookShelves component, has a page title and a list of book shelves. Uses the BookShelf component.
   +-- BookShelf - BookShelf component, has a title and a list of books. Uses the BookList component.
 +-- icons/ - Helpful images for your app. Use at your discretion.
  |-- add.svg
  |-- arrow-back.svg
  |-- arrow-drop-down.svg
 +-- util/ - Util javascripts
  |-- BooksAPI.js - A JavaScript API for the provided Udacity backend.
 |-- index.js - BrowserRouter was added here. Also the shelves are defined in this file and passed to the app.
 |-- index.css - Global styles. You probably won't need to change anything here.
|-- .gitignore 
|-- README.MD - This README file.
|-- SEARCH_TERMS.md - The whitelisted short collection of available search terms 
for you to use with your app.
|-- package.json - npm package manager file.
```

# create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). More information on how to perform common tasks can be found [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Concepts Learned by doing this project 
`React Router, function way of writing js using Es6, Lifecycle Methods , State Management `
