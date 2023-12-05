import { Component, Input, EventEmitter, Output } from "@angular/core";
import { Cv } from "../model/cv";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent {
  @Input() cvs: Cv[] = [];
 
 //@Output()
  //envcv = new EventEmitter();


  onSelectCv(cv: Cv): void {
    //this.envcv.emit(cv);
  }
}