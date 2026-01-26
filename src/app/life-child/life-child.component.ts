import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-child',
  templateUrl: './life-child.component.html',
  styleUrls: ['./life-child.component.scss']
})
export class LifeChildComponent implements OnChanges, OnInit, DoCheck {

  @Input() data: any;

  constructor(){
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges data: ', this.data.name);
    console.log(changes);
    
    
  }

  ngDoCheck(): void {
    console.log('doCheck hooks data: ',this.data.name);
  }


  ngOnInit(): void {
  }




}
