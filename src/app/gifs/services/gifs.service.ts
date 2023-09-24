import {Injectable} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gifs, SearchResponse } from '../interfaces/gifs.interfaces';



@Injectable({
  providedIn: 'root'
})
export class GifsService {

	private _tagHistory: string[] = [];
  private _Gifs: Gifs[] =[];
	private apiKey: string = 'lfutO5yuJF1dzcQzpBoPeNNtQuphSJs4';
	private apiPrefix: string = 'https://api.giphy.com/v1/gifs'

  constructor(private http: HttpClient) {
    this.restoreLocalStorage();
    this.searchTag(this._tagHistory[0]);
   }


	public searchTag(tag: string): void {
		if (tag.length <= 0) {
			return;
		}
    this.orderTags(tag);

		const params = new HttpParams()
		.set('api_key',this.apiKey)
		.set('limit', 10)
		.set('q', tag)

		this.http.get<SearchResponse>(`${this.apiPrefix}/search`,{params})
      .subscribe(resp => {
        this._Gifs = resp.data;
      });

    this.saveToLocalStorage();


	}

	get tagHistory(): string[] {
		return [...this._tagHistory];
	}

  get Gifs(): Gifs[]{
    return [...this._Gifs];
  }

	private orderTags(tag: string): void {
		const newTag: string = tag.toLowerCase();

		if (this._tagHistory.includes(newTag)) {
			this._tagHistory = this._tagHistory.filter(tag => tag !== newTag);
		}

		this._tagHistory.unshift(newTag);
		this._tagHistory = this._tagHistory.splice(0, 10);
	}

  private saveToLocalStorage(){
    localStorage.setItem('tag_history',JSON.stringify(this._tagHistory));
  }

  private restoreLocalStorage(){
    if (!localStorage.getItem('tag_history')) return;
    if (localStorage.getItem('tag_history')!.length <= 0) return;

    this._tagHistory = JSON.parse(localStorage.getItem('tag_history')!)

  }


}
