import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  name = 'Foulen';
  firstname = 'Fouleni';
  job = 'Journaliste';
  image = 'rotating_card_profile2.png';
  citation= "Je pense, donc je suis";
  description="Je suis un journaliste";
  mots="crime life press";
  
 
}
