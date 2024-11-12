import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <h3>Comentarios del parrafo</h3>
    <img src="https://media.npr.org/assets/img/2023/01/14/this-is-fine_custom-b7c50c845a78f5d7716475a92016d52655ba3115.jpg?s=1100&c=85&f=jpeg" alt="">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis unde soluta earum totam. Quibusdam voluptatem     corporis impedit in adipisci labore, neque modi necessitatibus sapiente, ex aliquam itaque doloribus dolores deleniti.
    </p>
  `,
  styles: `
  img {
    width: 100%;
    height: auto;
  }`
})
export class CommentsComponent {

}
