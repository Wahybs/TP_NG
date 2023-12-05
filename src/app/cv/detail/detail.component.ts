import { Component} from '@angular/core';
import { Cv } from '../model/cv';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../cv.service';
import { EmbaucherService } from '../embaucher.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent {
  cv: Cv = new Cv();

   constructor( private activerouter : ActivatedRoute,  
    private cvservice :CvService, 
    private  router : Router) {
     
    const cvId = +activerouter.snapshot.params['id'];
    this.cv= cvservice.getCvneById(cvId);
  }

  supprimercv() {
    this.cvservice.deletehttpCvne$(this.cv.id);
    this.cvservice.deleteCvne(this.cv);
    this.router.navigate(['']);
  }
}
