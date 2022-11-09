import Book from '../model/book.js';
import BookService from '../service/book.service.js';

const main = () => {
  try {
    console.log(`Enigma Perpustakaan`);
    const bookService = new BookService();
    const book01 = new Book("B001");
    const book02 = new Book("B001", "Book 01", "PT ABC", 2022, "Juju");
    const add01 = bookService.add(book02);
    console.log(add01);
    const list = bookService.list();
    console.log(list);
    const findBook01 = bookService.findByTitle("Book 01");
    console.log(findBook01);
    const delBook01 = bookService.delete("B001");
    console.log(delBook01);
    const findBook02 = bookService.findByTitle("Book 01");
    console.log(findBook02);
  } catch (err) {
    console.error(err);
  }
};

export default main;
