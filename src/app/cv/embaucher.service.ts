import { Injectable } from '@angular/core';
import { Cv } from './model/cv';
import { ToastrService } from 'ngx-toastr'; 
@Injectable({
  providedIn: 'root'
})
export class EmbaucherService {
  private cvs: Cv[] = [];
  constructor(private toastr:ToastrService) { }
  
  getCvnes(): Cv[] {
    return this.cvs;
  }
  embaucherCvne(item: Cv) {
    let index = this.cvs.indexOf(item);
    if (index == -1){
      this.cvs.push(item);
      this.toastr.success(`${item.name} ${item.firstname} a été embauché avec succès`, 'Embauché');}
    else {
      this.toastr.warning(`${item.name} ${item.firstname} est déjà embauché`, 'Attention')
    }
    }
  }
  

