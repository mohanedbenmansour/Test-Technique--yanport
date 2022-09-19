import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercice';
  xMap: number = 10;
  yMap: number = 10;
submit:boolean=false;

  //Déclaration des variables

  xAspirateur: number = 5;
  yAspirateur: number = 5;
  orientation: string = "N";
  instructions: string = "";

  tournerAspirateur() {
    for (let i = 0; i < this.instructions.length; i++) {
      if (this.instructions[i] == "D") {
     
        this.tournerADroite();
      }
      else if (this.instructions[i] == "G") {
        this.tournerAGauche();
      }
      else if (this.instructions[i] == "A") {
        this.avancerAspirateur();
      }
    }
  }

  tournerADroite() {
    switch (this.orientation) {
      case "N":
       this.orientation = "E";
        break;
      case "S":
       this.orientation = "W";
        break;
      case "E":
        this.orientation = "S";
        break;
      case "W":
       this.orientation = "N";
        break;

    }
  }
  avancerAspirateur(){
    switch (this.orientation) {
      case "N":
        this.yAspirateur==this.yMap?this.yAspirateur=this.yAspirateur:this.yAspirateur++;
        break;
      case "S":
        this.yAspirateur==0?this.yAspirateur=this.yAspirateur:this.yAspirateur--;
        break;
      case "E":
        this.xAspirateur==this.xMap?this.xAspirateur=this.xAspirateur:this.xAspirateur++;
        break;
      case "W":
        this.xAspirateur==0?this.xAspirateur=this.xAspirateur:this.xAspirateur--;
        break;

    }
    
  }
  tournerAGauche() {
    switch (this.orientation) {
      case "N":
        this.orientation = "W";
        break;
      case "S":
        this.orientation = "E";
        break;
      case "E":
        this.orientation = "N";
        break;
      case "W":
        this.orientation = "S";
        break;


  }}


  addToInstruction(instruction: string) {
    this.instructions += instruction;

  }


  ShowFinalPosition(){
    this.submit=true;
    this.tournerAspirateur()
  }
}
