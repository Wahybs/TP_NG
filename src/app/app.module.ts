import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PremiercomposantComponent } from './premiercomposant/premiercomposant.component';
import { CardComponent } from './card/card.component';
import { FilspremierComponent } from './filspremier/filspremier.component';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { RainbowDirective } from './rainbow-style-writer/rainbow-style-writer.component';
import { CvComponent } from './cv/cv/cv.component';
import { CvDetailComponent } from './cv/cv-detail/cv-detail.component';
import { ItemComponent } from './cv/item/item.component';
import { ListComponent } from './cv/list/list.component';
import { DefaultImagePipe } from './cv/pipes/default-image.pipe';
import {HttpClientModule } from '@angular/common/http';
import { EmbaucheComponent } from './cv/embauche/embauche.component';
import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailComponent } from './cv/detail/detail.component';
import { LoginComponent } from './login/login.component';
import { ObservableComponent } from './observable/observable.component';

@NgModule({
  declarations: [
    AppComponent,
    PremiercomposantComponent,
    CardComponent,
    FilspremierComponent,
    MiniWordComponent,
    RainbowDirective,
    CvComponent,
    CvDetailComponent,
    ItemComponent,
    ListComponent,
    DefaultImagePipe,
    EmbaucheComponent,
    NavbarComponent,
    DetailComponent,
    LoginComponent,
    ObservableComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot({preventDuplicates:true,timeOut:2000,easeTime:300})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
