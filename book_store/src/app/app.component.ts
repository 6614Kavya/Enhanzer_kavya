import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'book_store';

  books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { title: '1984', author: 'George Orwell', year: 1949 },
    { title: 'Moby-Dick', author: 'Herman Melville', year: 1851 },
    { title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
