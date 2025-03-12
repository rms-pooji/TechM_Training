import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent {
  comics = [
    { title: 'One Piece', author: 'Eiichiro Oda', genre: 'Adventure', rating: 4.9 },
    { title: 'Naruto', author: 'Masashi Kishimoto', genre: 'Action', rating: 4.8 },
    { title: 'Attack on Titan', author: 'Hajime Isayama', genre: 'Dark Fantasy', rating: 4.9 },
    { title: 'Death Note', author: 'Tsugumi Ohba', genre: 'Psychological Thriller', rating: 4.9 },
    { title: 'Demon Slayer', author: 'Koyoharu Gotouge', genre: 'Fantasy', rating: 4.8 },
    { title: 'Tokyo Ghoul', author: 'Sui Ishida', genre: 'Dark Fantasy', rating: 4.7 },
    { title: 'Jujutsu Kaisen', author: 'Gege Akutami', genre: 'Supernatural', rating: 4.8 },
    { title: 'My Hero Academia', author: 'Kohei Horikoshi', genre: 'Superhero', rating: 4.7 },
    { title: 'Fullmetal Alchemist', author: 'Hiromu Arakawa', genre: 'Steampunk', rating: 4.9 },
    { title: 'Hunter x Hunter', author: 'Yoshihiro Togashi', genre: 'Adventure', rating: 4.9 },
    { title: 'Chainsaw Man', author: 'Tatsuki Fujimoto', genre: 'Dark Fantasy', rating: 4.8 },
    { title: 'Bleach', author: 'Tite Kubo', genre: 'Action', rating: 4.7 },
    { title: 'Black Clover', author: 'Yūki Tabata', genre: 'Fantasy', rating: 4.6 },
    { title: 'Vinland Saga', author: 'Makoto Yukimura', genre: 'Historical', rating: 4.9 },
    { title: 'Solo Leveling', author: 'Chugong', genre: 'Action', rating: 4.8 }
  ];
}
