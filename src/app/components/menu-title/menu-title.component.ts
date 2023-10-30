import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-title',
  templateUrl: './menu-title.component.html',
  styleUrls: ['./menu-title.component.css'],
})
export class MenuTitleComponent {
  @Input()
  photoCover: string =
    'https://www.freepnglogos.com/uploads/marvel-logo-png/marvel-kyln-disney-wiki-fandom-powered-wikia-21.png';
}
