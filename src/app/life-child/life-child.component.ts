import { AfterContentChecked, AfterContentInit, Component, ContentChild, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'app-life-child',
  templateUrl: './life-child.component.html',
  styleUrls: ['./life-child.component.scss']
})
export class LifeChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked {

  @Input() data:any;

  @ContentChild(Child2Component) child !: Child2Component;

  constructor(){
  }

  ngAfterContentInit(): void {
    console.log('Content Init =', this.data);
    console.log('data from child2',this.child.child2Data);
    
  }

  ngAfterContentChecked(): void {
    console.log('Content Checked =', this.data);
    console.log('data from child2', this.child.child2Data);    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges =',this.data);
    
  }

  ngDoCheck(): void {

  }


  ngOnInit(): void {
  console.log('ngOnInit =', this.data);
  }

}
