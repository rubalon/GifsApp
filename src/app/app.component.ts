import { Component } from '@angular/core';
import { GifsService } from './gifs/services/gifs.service';
import { Gifs } from './gifs/interfaces/gifs.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private GifsService: GifsService){}

  get tagHistory(): string[] {
    return this.GifsService.tagHistory;
  }

  get Gifs(): Gifs[] {
    return this.GifsService.Gifs;
  }
}
