import { Component } from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css'],
  
})
export class MiniWordComponent {
  textColor: string = '#000000'; // couleur par défaut
  fontSize: number = 16; // taille par défaut
  selectedFont: string = 'Arial'; // police par défaut

  textStyles = {};
  applyStyles() {
    this.textStyles = {
      color: this.textColor,
      'font-size': this.fontSize + 'px',
      'font-family': this.selectedFont,
    };
  }
}
