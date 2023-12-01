import { Component ,Input,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-filspremier',
  templateUrl: './filspremier.component.html',
  styleUrls: ['./filspremier.component.css']
})
export class FilspremierComponent {
     myFavoriteColor="blue";
     
    @Input() couleur! : string;
    //Declaration d'un event
    @Output() ColorChange = new EventEmitter<string>();

    reinitialiserCouleurPere(){
      this.ColorChange.emit(this.myFavoriteColor);
    }
}
