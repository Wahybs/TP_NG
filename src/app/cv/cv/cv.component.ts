import { Component } from "@angular/core";
import { Cv } from "../model/cv";

@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
})
export class CvComponent {
  selectedCv: Cv = new Cv();
  cvs: Cv[] = [
    new Cv(1, "Slimen", "Labyeth", 48,"1254976","psychothérapeute","slimen.png"),
    new Cv(2, "fouchika", "ferid",38,"0145787","portier", "fouchika.jpg"),
    new Cv(3, "Janet", "el3arafa",53,"0135687","test")
  ];
  envoyercv(cv: Cv) {
    this.selectedCv = cv;
  }
}