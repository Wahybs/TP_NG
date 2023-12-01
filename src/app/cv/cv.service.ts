import { Injectable,Inject } from '@angular/core';
import { Cv } from './model/cv';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  private personnes : Cv[] = []
  private fakepersonnes: Cv [] = [
    new Cv(1, "Slimen", "Labyeth", 48,"1254976","psychothérapeute","slimen.png"),
    new Cv(2, "fouchika", "ferid",38,"0145787","portier", "fouchika.jpg"),
    new Cv(3, "Janet", "el3arafa",53,"0135687","test")
  ]

  constructor(private http:HttpClient) {
  }
  
  getCvnes$(): Observable<Cv[]> {
    return this.http.get<Cv[]>('https://apilb.tridevs.net/api/personnes')
  }

  deletehttpCvne$(id : number){
    return this.http.delete(`https://apilb.tridevs.net/api/personnes/${id}`);
  }
  setterCvnes(item : Cv[]){
    this.personnes = item
  }
  getFakeCvnes(): Cv[] {
    return this.fakepersonnes;
  }

  getCvneById(id: number): any {
    return this.personnes.find((person) => {
      return person.id == id
    });
  }

  addCvne(personne: Cv) {
    personne.id = this.personnes.length + 1;
    this.personnes.push(personne);
  }

  deleteCvne(item: Cv) {
    let index = this.personnes.indexOf(item);
    this.personnes.splice(index, 1);
  }
}
