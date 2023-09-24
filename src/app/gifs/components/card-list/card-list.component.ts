import { Component } from '@angular/core';
import { Gifs } from '../../interfaces/gifs.interfaces';
import { Input } from '@angular/core';

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {


  @Input()
  public gifList: Gifs[] = [];

}
