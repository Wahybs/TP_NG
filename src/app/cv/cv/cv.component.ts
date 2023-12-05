import { Component } from "@angular/core";
import { Cv } from "../model/cv";
import { CvService } from "../cv.service";
import { ToastrService } from 'ngx-toastr'; 

@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
})
export class CvComponent {
  selectedCv: Cv |null=null;
  cvs : Cv[] =[];
  constructor(private cvservice : CvService , private toastr:ToastrService ) {
    this.cvservice.getCvnes$().subscribe({
     next: (item)=>{
        this.cvs = item;
        this.cvservice.setterCvnes(item)
      },
    error:(error)=>{
        this.toastr.warning("Connexion a l'API à échouer, c'est pourquoi on affiche fake data ");
        this.cvs = this.cvservice.getFakeCvnes();
        this.cvservice.setterCvnes(this.cvs)
    }
  })
  }
  envoyercv(cv: Cv) {
    this.selectedCv = cv;
  }
}