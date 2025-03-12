import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent {
  books = [
    { title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy', rating: 4.8 },
    { title: '1984', author: 'George Orwell', genre: 'Dystopian', rating: 4.5 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Classic', rating: 4.9 },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic', rating: 4.4 },
    { title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', genre: 'Fantasy', rating: 4.7 },
    { title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance', rating: 4.6 },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Classic', rating: 4.3 },
    { title: 'Brave New World', author: 'Aldous Huxley', genre: 'Dystopian', rating: 4.2 },
    { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', genre: 'Fantasy', rating: 4.9 },
    { title: 'Moby-Dick', author: 'Herman Melville', genre: 'Adventure', rating: 4.1 },
    { title: 'The Alchemist', author: 'Paulo Coelho', genre: 'Philosophical', rating: 4.7 },
    { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', genre: 'Psychological', rating: 4.8 },
    { title: 'One Hundred Years of Solitude', author: 'Gabriel García Márquez', genre: 'Magical Realism', rating: 4.5 },
    { title: 'The Shining', author: 'Stephen King', genre: 'Horror', rating: 4.6 },
    { title: 'The Book Thief', author: 'Markus Zusak', genre: 'Historical Fiction', rating: 4.9 }
  ];
}
