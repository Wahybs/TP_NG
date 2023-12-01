import { Component } from '@angular/core';
import { Cv } from '../model/cv';
import { EmbaucherService } from '../embaucher.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent {
  constructor(private embaucheservice : EmbaucherService) {
  }
  cvs : Cv [] = this.embaucheservice.getCvnes();

  
}
