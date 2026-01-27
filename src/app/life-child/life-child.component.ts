import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-child',
  templateUrl: './life-child.component.html',
  styleUrls: ['./life-child.component.scss']
})
export class LifeChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit , AfterViewChecked {

 @Input() message!: string;

  constructor(){
  }

 ngAfterViewInit(): void {
   console.log('Life Child AfterViewInit');
   
 }

  ngAfterViewChecked(): void {
    console.log('Life Child AfterViewChecked', this.message); 
  }

  ngAfterContentInit(): void {
   
    
  }

  ngAfterContentChecked(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  ngDoCheck(): void {

  }


  ngOnInit(): void {
  }

}
