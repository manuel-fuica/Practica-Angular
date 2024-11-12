import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user.component";
import { CommentsComponent } from "./comments/comments.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, UserComponent, CommentsComponent],
  // templateUrl: muestra ese archivo como prinicipal, styleUrl importa llos estilos al html, para mostar un componente solo lo dejamos en template
  //pongo un h1 en el html y le importo la la class citi declarada abajo, puedo usar javascript como touppercase
  templateUrl: './app.component.html', //importo el componente user, el cual contiene un parrafo 
  styleUrl: './app.component.css'
})

//exportamos esta clase para poder usarla en el html
export class AppComponent {
  city = 'Santiago';
}
