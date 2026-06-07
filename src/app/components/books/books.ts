import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subscription } from 'rxjs';

import { DataService } from '../../services/data';
import { Book } from '../../models/book';
import { BookCardComponent } from '../book-card/book-card';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, BookCardComponent],
  templateUrl: './books.html',
  styleUrl: './books.css'
})
export class BooksComponent implements OnInit, OnDestroy {

  books: Book[] = [];
  books$!: Observable<Book[]>;

  private subscription!: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {

    // Manual Subscribe
    this.subscription = this.dataService.getBooks()
      .subscribe(data => {
        this.books = data;
      });

    // Async Pipe
    this.books$ = this.dataService.getBooks();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}