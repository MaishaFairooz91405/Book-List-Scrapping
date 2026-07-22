const cheerio = require("cheerio");
const axios = require("axios");
// const express = require('express');
const fs = require('fs/promises');

// const port = process.env.PORT || 4000;

// const app = express();

const url =
  "https://books.toscrape.com/catalogue/category/books/mystery_3/index.html";

const book_data = [];

async function scrapeBooks() {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    $(".product_pod").each((index, element)=>{
        title = $(element).find("h3 a").text();
        price = $(element).find(".price_color").text();
        inStock = $(element).find(".instock.availability").text().trim();

        book_data.push({title, price, inStock});
    });

    const content = book_data.map((book) => `Name of the Book : ${book.title}, Price : ${book.price}, Stock Status : ${book.inStock}`).join('\n');

    await fs.writeFile('book.txt', content, 'utf8');

    console.log('Book data saved to book.txt successfully');
  } catch (error) {
    console.error(error);
  }
}

scrapeBooks();
