import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv/cv.component';
import { MiniWordComponent } from './mini-word/mini-word.component';

import { PremiercomposantComponent } from './premiercomposant/premiercomposant.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  {path:"",component:CvComponent},
  {path:"mini-word",component:MiniWordComponent},
  {path:"card",component:CardComponent},
  {path:"pere",component:PremiercomposantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
