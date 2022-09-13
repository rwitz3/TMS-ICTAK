import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor(public http : HttpClient) { }

  getTrainers(){
    return this.http.get('http://localhost:3000/trainerlist');
  }

  addForms(){
    
  }
}
