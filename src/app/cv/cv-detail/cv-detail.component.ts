import { Component,Input } from '@angular/core';
import { Cv } from "../model/cv";
import { EmbaucherService } from '../embaucher.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cv-detail',
  templateUrl: './cv-detail.component.html',
  styleUrls: ['./cv-detail.component.css']
})
export class CvDetailComponent {
  @Input()
  cv: Cv = new Cv();
 constructor(private embaucheservice:EmbaucherService, private route:Router){}
 
  embaucher(){
    
    this.embaucheservice.embaucherCvne(this.cv);
  }

  getmoreinfo(){
    this.route.navigate(['cv/detail',this.cv.id]);
  }
}
