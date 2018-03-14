import { Component } from '@angular/core';

@Component({
  // селектор
  selector: 'app-root',
  // ссылка до шаблона данного селектора
  templateUrl: './app.component.html',
  // массив ссылок до стилей
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'World!';
}
