import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-child',
  templateUrl: './life-child.component.html',
  styleUrls: ['./life-child.component.scss']
})
export class LifeChildComponent implements OnChanges {

  @Input() dataFromParent: string = '';
  @Input() count!: number;

  constructor(){
    console.log('This is Constructor', this.dataFromParent);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('This is OnChanges hook: ', this.dataFromParent);
    console.log(changes);
  }


}
