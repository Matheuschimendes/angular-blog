import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-title',
  templateUrl: './menu-title.component.html',
  styleUrls: ['./menu-title.component.css'],
})
export class MenuTitleComponent {
  @Input()
  photoCover: string =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlzOxjh3uqCfpJJMJx9n3AYbIjaBhE94YlpBhVf1UgpJxGWcl5QPHekn85yx0-S4V-Ww&usqp=CAU';
}
