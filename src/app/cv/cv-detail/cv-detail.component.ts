import { Component,Input, inject } from '@angular/core';
import { Cv } from "../model/cv";
import { EmbaucherService } from '../embaucher.service';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-cv-detail',
  templateUrl: './cv-detail.component.html',
  styleUrls: ['./cv-detail.component.css']
})
export class CvDetailComponent {
  @Input()
  cv: Cv = new Cv() ;
   /**ajout code  */
 subject = new Subject();
 private cvService = inject(CvService);

 /*    fin code */
 constructor(private embaucheservice:EmbaucherService, private route:Router ){
 /**ajout code  */
 this.cvService.selectCv$
 .pipe(
   takeUntil(this.subject)
 )
 .subscribe(
   (cv: Cv) => this.cv = cv
 )

 /*    fin code */
 }

    /**ajout code  */
    ngOnDestroy(): void {
      this.subject.next('je complete tout mes observateurs');
      this.subject.complete();
    }
   
    /*    fin code */
 
  embaucher(){
   this.embaucheservice.embaucherCvne(this.cv);
    
  }

  getmoreinfo(){
    this.route.navigate(['cv/detail',this.cv.id]);
  }
}
