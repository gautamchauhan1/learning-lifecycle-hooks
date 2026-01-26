import { Component } from '@angular/core';

@Component({
  selector: 'app-life-parent',
  templateUrl: './life-parent.component.html',
  styleUrls: ['./life-parent.component.scss']
})
export class LifeParentComponent {

  constructor(){}
  
  data: string = 'user 1';
  count: number = 1;

  changeUser(){
    this.data = 'This is user 2'
  }

  counter(){
    this.count++;
  }

}
