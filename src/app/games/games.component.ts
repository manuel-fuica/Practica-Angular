import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [ CommonModule ],
  template: `
    <!-- aca escribimos el codigo que muestra el componente app-games, le pasamos el input userName -->
    <h3>Juegos favoritos de {{ userName }}</h3>
    <ul>
      @for (game of games; track game.id) {
        <li (click)="fav(game.name)">{{ game.name }}</li>
      }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {

  @Input() userName = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(gameName: string) {
    this.addFavoriteEvent.emit(gameName);
  }

  games = [
    {
      id: 1,
      name: 'Uncharted 4',
    },
    {
      id: 2,
      name: 'Horizonton Zero Dawn',
    },
    {
      id: 3,
      name: 'Dragon Age Inquisition',
    }
  ]
}
