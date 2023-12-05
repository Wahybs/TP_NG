import {Component, inject} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    constructor( private router:Router) {}
    login(formulaire : NgForm){
      this.router.navigate([''])
    }
}