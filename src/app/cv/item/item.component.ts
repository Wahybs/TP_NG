import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Cv } from "../model/cv";
import { CvService } from "../cv.service";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"],
})
export class ItemComponent {
 
  @Input()
  cv: Cv | null = null;
  
  //@Output()
 // selectCv = new EventEmitter<Cv>();
/*update*/ 
constructor(private cvService: CvService) {}
/*update*/
  onSelectCv() {
    if (this.cv) 
   // this.selectCv.emit(this.cv);
  /*update */
    this.cvService.selectCv(this.cv);
    /*update*/
  }
}