import { Injectable } from '@angular/core';
import Book from "../types/book"

@Injectable({
  providedIn: 'root'
})
export class BookControllerService {

  constructor() { }

  private static books: Book[] = [
    { bookId: 1, publisherId: 1, title: "Book One", synopsis: "The Story of Almighty Book One", authors: ["Book One Lover 69", "Cousin of Book One Lover 69"] },
    { bookId: 2, publisherId: 2, title: "Book Two", synopsis: "The Story of Almighty Book Two", authors: ["Book Two Lover 69", "Sister of Book Two Lover 69"] },
    { bookId: 3, publisherId: 3, title: "Book Three", synopsis: "The Story of Almighty Book Three", authors: ["Book Three Lover 69", "Uncle of Book Three Lover 69"] },
  ]
  getBooks = () => {
    return BookControllerService.books;
  }
  getBookById = (id: number): Book | undefined => {
    return BookControllerService.books.find((bok) => bok.publisherId === id);
  }
  deleteBook = (id: number) => {
    BookControllerService.books = BookControllerService.books.filter((val) => val.bookId !== id);
  }

  addBook = (book: Book): void => {
    book.bookId = BookControllerService.books.length + 1;
    BookControllerService.books.push(book);
  }
}
