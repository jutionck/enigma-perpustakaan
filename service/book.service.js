import { Response } from '../utils/response.js';
import Validate from '../utils/validate.js';

export default class BookService extends Validate {
  constructor() {
    super();
    this.books = [];
    this.response = new Response();
  }

  add(book) {
    console.log(`[ADD] Tambah buku.....`);
    if (this.require(book)) {
      this.books.push(book);
      return this.response.successMessage(book);
    }
    return this.response.errorMessage(commonResponse.isRequire);
  }

  list() {
    console.log(`[LIST] Melihat list buku.....`);
    if (this.isExist(this.books)) {
      return this.response.successMessage(this.books);
    }
    return this.response.errorMessage(commonResponse.dataNotExist);
  }

  findByTitle(title) {
    console.log(`[LIST] Mencari buku dengan judul ${title}`);
    const book = this.books.filter(
      (book) => book.title.toLowerCase() === title.toLowerCase()
    );
    if (book.length === 0) {
      return this.response.errorMessage(`${title} not found`);
    }
    return this.response.successMessage(book);
  }

  delete(code) {
    console.log(`[LIST] Menghapus buku dengan code ${code}`);
    if (this.isExist(this.books)) {
      let i = 0;
      for (let book of this.books) {
        if (book.code.toLowerCase() === code.toLowerCase()) {
          this.books.splice(i, 1);
          return this.response.successMessage(code, "Success deleted");
        }
        i++;
      }
    }
    return this.response.errorMessage(`${code} not found`);
  }
}
