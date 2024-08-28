import { Component, OnInit } from '@angular/core';
import Book from '../../types/book';
import Publisher from '../../types/publisher';
import { BookControllerService } from '../../controllers/book-controller.service';
import { PublisherControllerService } from '../../controllers/publisher-controller.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  book: Book[] = [];
  publisher: Publisher[] = [];

  constructor(private servBook: BookControllerService, private servPublisher: PublisherControllerService) { }

  ngOnInit() {
    this.publisher = this.servPublisher.getPublishers();
    this.book = this.servBook.getBooks();
  }

  deleteBook = (id: number) => {
    this.servBook.deleteBook(id);
    this.book = this.servBook.getBooks();
  }

  getName = (pubId: number) => {
    return this.servPublisher.getPublisherById(pubId).name;
  }
}
