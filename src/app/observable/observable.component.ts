import { Component } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent {
  data = [
    "anais.gif",
    "darwin.gif",
    "gumball.png",
    "joe.gif",
    "nicole.jpg",
    "penny.gif",
    "richard.gif",
    "tinarex.gif"
  ]
  currentImg : string = "";
  myObservalble : Observable<string> = new Observable<string>(
    (observer)=>{
      let i = 0;
      setInterval(
        ()=>{
          observer.next(this.data[i]);
          i++;
          i%=this.data.length;
        }
        ,1000)
    }
  )
  constructor() {
    this.myObservalble.subscribe(
      (result)=>{
        this.currentImg = result;
      }
    )
  }
}
