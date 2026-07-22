# Introduction

Scrapping the information of Book listing website (https://books.toscrape.com).

# Steps

1. Visit the given website -  https://books.toscrape.com/catalogue/category/books/mystery_3/index.html
2. Calling the website using axios.
3. Using cheerio, to have document.querySelector feature.
4. Collecting all the cards in an array.
5. Then pick the data, name of the book, price and in stock.
6. Saving those data in a text file **book.txt**.

# Technologies and Method Used

- Node JS
- Cheerio & Axios


# Installation

To run this test project locally, follow these steps :

1. <b>First Step - </b> Clone the repository :
   
   ```bash
    git clone https://github.com/Aftahiislam007/BookDataScrapping.git
    ```

2. <b>Second Step (If needed) - </b> Using `npm` to Instantly Initialize a Project 
 and it will create `package-lock.json` and `package.json` files :
    
    ```bash
    npm init -y
    ```

3. <b>Third Step - </b> Install `axios` and `cheerio` via `npm` :
   
    ```bash
    npm install axios cheerio
    ```

4. <b>Fourth Step - </b> To run the file in `Terminal` :
   
   ```bash
    node main.js
    ```
