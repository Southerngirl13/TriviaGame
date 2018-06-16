# TriviaGame
<h1 align="center">MongoScraper</h1>
<h1 align="center">
  <br>
  <img src="https://github.com/Southerngirl13/MongoScraper/raw/master/public/assets/images/mongoscraper2.jpg">
</h1>

<h2 align="center">
An app that scrapes articles from the New York Times website <br>
and lets users save articles and leave comments on the latest news.
</h2>
<br>


# How It Works

  1. Whenever a user visits your site, the app should scrape stories from a news outlet of your choice and display them for the user. Each scraped article should be saved to your application database. At a minimum, the app should scrape and display the following information for each article:

     * Headline - the title of the article
     * Summary - a short summary of the article
     * URL - the url to the original article
     * Feel free to add more content to your database (photos, bylines, and so on).

  2. Users should also be able to leave comments on the articles displayed and revisit them later. The comments should be saved to the database as well and associated with their articles. Users should also be able to delete comments left on articles. All stored comments should be visible to every user.


## Technologies Used
- Express.js 
 - Moment.js
 - Express Handlebars
 - Bootstrap
 - Cheerio
 	- for scraping NYTimes.com 
 - Mongoose 
 - MongoDB
 	- Local database
 - mLab 
 	- Deployed Heroku database 

To visit deployed application, go to https://git.heroku.com/secure-fortress-37357.git



# JavaScript Assignment 2

### Overview

In this assignment, You'll create a Trivia game using JavaScript for the logic and jQuery to manipulate HTML. Be sure to layout this app with valid HTML and stylish CSS.

### Before You Begin

1. Create a GitHub repo called `TriviaGame`, then clone the repo to your computer.

2. Create a file inside of the `TriviaGame` folder called `index.html`. This is where you'll mark up all of your HTML.
3. Don't forget to include a script tag with the jQuery library.

4. Create a folder inside of the `TriviaGame` folder called `assets`.
5. Inside `assets`, create three folders: `css`, `javascript`, `images`

   * In your `css` folder, create a `style.css` file.
   * In your `javascript` folder, create an `app.js` file; here you'll write all of your JavaScript and jQuery.
   * In your `images` folder, save whatever images you'd like to use in this exercise.

6. Choose a game to build from your options below. 

### Option One: Basic Quiz (Timed Form)

![Basic](Images/1-basic.jpg)

**[Click Here to Watch the Demo](basic-trivia-demo.mov)**.

* You'll create a trivia form with multiple choice or true/false options (your choice).

* The player will have a limited amount of time to finish the quiz. 

  * The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

* Don't let the player pick more than one answer per question.

* Don't forget to include a countdown timer.

### Option Two: Advanced Assignment (Timed Questions)

![Advanced](Images/2-advanced.jpg)

**[Click Here to Watch the demo](advanced-trivia-demo.mov)**.

* You'll create a trivia game that shows only one question until the player answers it or their time runs out.

* If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

* The scenario is similar for wrong answers and time-outs.

  * If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
  * If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.

* On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).

- - -

### Minimum Requirements

Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed.

- - -

### Create a README.md

Add a `README.md` to your repository describing the project. Here are some resources for creating your `README.md`. Here are some resources to help you along the way:

* [About READMEs](https://help.github.com/articles/about-readmes/)

* [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

- - -

### Add To Your Portfolio

After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.
