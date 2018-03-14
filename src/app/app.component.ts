import { Component } from '@angular/core';

@Component({ // основные параметры компонента, данная конструкция называется декоратор
  selector: 'app-root', // селектор
  templateUrl: './app.component.html', // ссылка до шаблона данного селектора
  styleUrls: ['./app.component.scss'] // массив ссылок до стилей
})

export class AppComponent {

  users = [
    {name: 'WFM 1'},
    {name: 'WFM 2'},
    {name: 'WFM 3'},
    {name: 'WFM 4'}
  ];

}
