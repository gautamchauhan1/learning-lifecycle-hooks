import { Component } from '@angular/core';

@Component({
  selector: 'app-life-parent',
  templateUrl: './life-parent.component.html',
  styleUrls: ['./life-parent.component.scss']
})
export class LifeParentComponent {

  constructor(){}
  

  obj= {name: 'old Name'};

  updateName(){

    this.obj.name= 'new Name'; // object reference (address) is same.

    // this.obj= {name: 'new Name'}; // object reference is changed. 
  }

}
