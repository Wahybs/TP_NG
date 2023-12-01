import { Component } from '@angular/core';

@Component({
  selector: 'app-premiercomposant',
  templateUrl: './premiercomposant.component.html',
  styleUrls: ['./premiercomposant.component.css']
})
export class PremiercomposantComponent {
  couleurDivdefaut='red';
  couleurDiv = this.couleurDivdefaut;
  
  reinitialiserCouleur(div: HTMLElement) {
    this.couleurDiv=this.couleurDivdefaut;
    div.style.backgroundColor = this.couleurDiv; 
  }
  change(value: string){
    this.couleurDiv=value;
  }
}
