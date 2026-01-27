import { Component, ContentChild } from '@angular/core';

@Component({
  selector: 'app-life-parent',
  templateUrl: './life-parent.component.html',
  styleUrls: ['./life-parent.component.scss']
})
export class LifeParentComponent {

  constructor(){}

  projectedText = '';
  count: number =1;

  changeContent(){
    this.projectedText = ('Content has been Changed =' + this.count++);
  }

 
  

}
