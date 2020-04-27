import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private _http : HttpClient) { }

  getData(){
    return this._http.get("http://localhost:3000/getData");
  }

}
