export default class Validate {
    constructor() {}
    isExist(books) {
        return books.length !== 0;
    }

    require(book) {
        return !(!book.code || !book.title || !book.publisher || !book.publicationYear || !book.author);
    }
}
