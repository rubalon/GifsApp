import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gifs } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

  constructor(private GifsService: GifsService){}

  get Gifs(): Gifs[] {
    return this.GifsService.Gifs;
  }
}
