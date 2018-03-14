import { Component } from '@angular/core';

@Component({ // основные параметры компонента, данная конструкция называется декоратор
  selector: 'app-root', // селектор
  templateUrl: './app.component.html', // ссылка до шаблона данного селектора
  styleUrls: ['./app.component.scss'] // массив ссылок до стилей
})

export class AppComponent {
  title = 'World!';
}
