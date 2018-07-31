import { Component, OnInit } from '@angular/core';
import { card } from '../card';
import { Cards } from '../cards';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  Talon: card[] = Cards;
  FlipManeuver: any = "test";
  FromManeuver: any = "test";
  ToManeuver: any = "test";
  test: any = 0;
  WastePile: card[] = [];
  Maneuver1: card[] = [];
  Maneuver2: card[] = [];
  Maneuver3: card[] = [];
  Maneuver4: card[] = [];
  Maneuver5: card[] = [];
  Maneuver6: card[] = [];
  Maneuver7: card[] = [];
  Foundation1: card[] = [];
  Foundation2: card[] = [];
  Foundation3: card[] = [];
  Foundation4: card[] = [];
  toWaste: card[] = [];

  //Maneuver: { "A": card[], "B": card[], "C": card[], "D": card[],"E": card[], "F": card[], "G": card[]};


  constructor() { 
    
    var shuffleArray = function(array) {
      var arrayLength = array.length, temp, index;
      while (arrayLength) {
        index = Math.floor(Math.random() * arrayLength--);

        temp = array[arrayLength];
        array[arrayLength] = array[index];
        array[index] = temp;
      }
      return array;
    }
  shuffleArray(Cards);
 
  this.Maneuver1 = this.Talon.splice(0,1);
  this.Maneuver2 = this.Talon.splice(0,2);
  this.Maneuver3 = this.Talon.splice(0,3);
  this.Maneuver4 = this.Talon.splice(0,4);
  this.Maneuver5 = this.Talon.splice(0,5);
  this.Maneuver6 = this.Talon.splice(0,6);
  this.Maneuver7 = this.Talon.splice(0,7);
}
 

drawTalon() {
  if (this.Talon.length) {
    this.toWaste = this.Talon.splice(0,3);
    for(var i = 0; i < 3; i++){
      this.toWaste[0].face = true;
      this.WastePile.push(this.toWaste.shift());
  }
  } else {
    var ii = this.WastePile.length;
    for(var i = 0; i < ii; i++){
      this.Talon.unshift(this.WastePile.pop());
    }
  }
}
  
allowDrop(ev) {
    ev.preventDefault();
}

drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    this.FromManeuver = ev.target;
}

drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    this.ToManeuver = ev.target.id;
    this.moveCard(this.FromManeuver, this.ToManeuver);
}

flip(ev) {
  this.FlipManeuver = ev.target.id;
  if (this.FlipManeuver == "B") {
    if (!this.Maneuver2[this.Maneuver2.length - 1].face) {
      this.Maneuver2[this.Maneuver2.length - 1].face = true;
    }
  } else if (this.FlipManeuver == "C") {
    if (!this.Maneuver3[this.Maneuver3.length - 1].face) {
      this.Maneuver3[this.Maneuver3.length - 1].face = true;
    }
  } else if (this.FlipManeuver == "D") {
    if (!this.Maneuver4[this.Maneuver4.length - 1].face) {
      this.Maneuver4[this.Maneuver4.length - 1].face = true;
    }
  } else if (this.FlipManeuver == "E") {
    if (!this.Maneuver5[this.Maneuver5.length - 1].face) {
      this.Maneuver5[this.Maneuver5.length - 1].face = true;
    }
  } else if (this.FlipManeuver == "F") {
    if (!this.Maneuver6[this.Maneuver6.length - 1].face) {
      this.Maneuver6[this.Maneuver6.length - 1].face = true;
    }
  } else if (this.FlipManeuver == "G") {
    if (!this.Maneuver7[this.Maneuver7.length - 1].face) {
      this.Maneuver7[this.Maneuver7.length - 1].face = true;
    }
  }
}

  moveCard(source, destination) {
    this.test = source.length;
    if ( source.id == "Maneuver1"){
      if (destination == "Maneuver2") {
        this.Maneuver2.push(this.Maneuver1.pop());
        this.FromManeuver.style.display = "none";
      }
      if (destination == "Maneuver3") {
        this.Maneuver3.push(this.Maneuver1.pop());
        this.FromManeuver.style.display = "none";
      }
      if (destination == "Maneuver4") {
        this.Maneuver4.push(this.Maneuver1.pop());
        this.FromManeuver.style.display = "none";
      }
      if (destination == "Maneuver5") {
        this.Maneuver5.push(this.Maneuver1.pop());
        this.FromManeuver.style.display = "none";
      }
      if (destination == "Maneuver6") {
        this.Maneuver6.push(this.Maneuver1.pop());
        this.FromManeuver.style.display = "none";
      }
      if (destination == "Maneuver7") {
        this.Maneuver7.push(this.Maneuver1.pop());
        this.FromManeuver.style.display = "none";
      }
    } else if ( source.id == "Maneuver2"){
      if (destination == "Maneuver1") {
        this.Maneuver1.push(this.Maneuver2.pop());
        this.FromManeuver.style.display = "none";
      }
      if (destination == "Maneuver3") {
        this.Maneuver3.push(this.Maneuver2.pop());
        this.FromManeuver.style.display = "none";
      }
      if (destination == "Maneuver4") {
        this.Maneuver4.push(this.Maneuver2.pop());
        this.FromManeuver.style.display = "none";
      }
      if (destination == "Maneuver5") {
        this.Maneuver5.push(this.Maneuver2.pop());
        this.FromManeuver.style.display = "none";
      }
      if (destination == "Maneuver6") {
        this.Maneuver6.push(this.Maneuver2.pop());
        this.FromManeuver.style.display = "none";
      }
      if (destination == "Maneuver7") {
        this.Maneuver7.push(this.Maneuver2.pop());
        this.FromManeuver.style.display = "none";
      }
    } else if ( source.id == "Maneuver3"){
      if (destination == "Maneuver2") {
        this.Maneuver2.push(this.Maneuver3.pop());
        this.FromManeuver.style.display = "none";
      }
      if (destination == "Maneuver1") {
        this.Maneuver1.push(this.Maneuver3.pop());
        this.FromManeuver.style.display = "none";
      }
      if (destination == "Maneuver4") {
        this.Maneuver4.push(this.Maneuver3.pop());
        this.FromManeuver.style.display = "none";
      }
      if (destination == "Maneuver5") {
        this.Maneuver5.push(this.Maneuver3.pop());
        this.FromManeuver.style.display = "none";
      }
      if (destination == "Maneuver6") {
        this.Maneuver6.push(this.Maneuver3.pop());
        this.FromManeuver.style.display = "none";
      }
      if (destination == "Maneuver7") {
        this.Maneuver7.push(this.Maneuver3.pop());
        this.FromManeuver.style.display = "none";
      }
    } else if ( source.id == "Maneuver4"){
      if (destination == "Maneuver2") {
        this.Maneuver2.push(this.Maneuver4.pop());
        this.FromManeuver.style.display = "none";
      }
      if (destination == "Maneuver3") {
        this.Maneuver3.push(this.Maneuver4.pop());
        this.FromManeuver.style.display = "none";
      }
      if (destination == "Maneuver1") {
        this.Maneuver1.push(this.Maneuver4.pop());
        this.FromManeuver.style.display = "none";
      }
      if (destination == "Maneuver5") {
        this.Maneuver5.push(this.Maneuver4.pop());
        this.FromManeuver.style.display = "none";
      }
      if (destination == "Maneuver6") {
        this.Maneuver6.push(this.Maneuver4.pop());
        this.FromManeuver.style.display = "none";
      }
      if (destination == "Maneuver7") {
        this.Maneuver7.push(this.Maneuver4.pop());
        this.FromManeuver.style.display = "none";
      }
    } else if ( source.id == "Maneuver5"){
      if (destination == "Maneuver2") {
        this.Maneuver2.push(this.Maneuver5.pop());
        this.FromManeuver.style.display = "none";
      }
      if (destination == "Maneuver3") {
        this.Maneuver3.push(this.Maneuver5.pop());
        this.FromManeuver.style.display = "none";
      }
      if (destination == "Maneuver4") {
        this.Maneuver4.push(this.Maneuver5.pop());
        this.FromManeuver.style.display = "none";
      }
      if (destination == "Maneuver1") {
        this.Maneuver1.push(this.Maneuver5.pop());
        this.FromManeuver.style.display = "none";
      }
      if (destination == "Maneuver6") {
        this.Maneuver6.push(this.Maneuver5.pop());
        this.FromManeuver.style.display = "none";
      }
      if (destination == "Maneuver7") {
        this.Maneuver7.push(this.Maneuver5.pop());
        this.FromManeuver.style.display = "none";
      }
    } else if ( source.id == "Maneuver6"){
      if (destination == "Maneuver2") {
        this.Maneuver2.push(this.Maneuver6.pop());
        this.FromManeuver.style.display = "none";
      }
      if (destination == "Maneuver3") {
        this.Maneuver3.push(this.Maneuver6.pop());
        this.FromManeuver.style.display = "none";
      }
      if (destination == "Maneuver4") {
        this.Maneuver4.push(this.Maneuver6.pop());
        this.FromManeuver.style.display = "none";
      }
      if (destination == "Maneuver5") {
        this.Maneuver5.push(this.Maneuver6.pop());
        this.FromManeuver.style.display = "none";
      }
      if (destination == "Maneuver1") {
        this.Maneuver1.push(this.Maneuver6.pop());
        this.FromManeuver.style.display = "none";
      }
      if (destination == "Maneuver7") {
        this.Maneuver7.push(this.Maneuver6.pop());
        this.FromManeuver.style.display = "none";
      }
    } else if ( source.id == "Maneuver7"){
      if (destination == "Maneuver2") {
        this.Maneuver2.push(this.Maneuver7.pop());
        this.FromManeuver.style.display = "none";
      }
      if (destination == "Maneuver3") {
        this.Maneuver3.push(this.Maneuver7.pop());
        this.FromManeuver.style.display = "none";
      }
      if (destination == "Maneuver4") {
        this.Maneuver4.push(this.Maneuver7.pop());
        this.FromManeuver.style.display = "none";
      }
      if (destination == "Maneuver5") {
        this.Maneuver5.push(this.Maneuver7.pop());
        this.FromManeuver.style.display = "none";
      }
      if (destination == "Maneuver6") {
        this.Maneuver6.push(this.Maneuver7.pop());
        this.FromManeuver.style.display = "none";
      }
      if (destination == "Maneuver1") {
        this.Maneuver1.push(this.Maneuver7.pop());
        this.FromManeuver.style.display = "none";
      }
    }
    
  }
  ngOnInit() {
    this.Maneuver1[0].face = true;
    this.Maneuver2[1].face = true;
    this.Maneuver3[2].face = true;
    this.Maneuver4[3].face = true;
    this.Maneuver5[4].face = true;
    this.Maneuver6[5].face = true;
    this.Maneuver7[6].face = true;
  }
}
