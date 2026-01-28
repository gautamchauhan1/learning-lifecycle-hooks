import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-child',
  templateUrl: './life-child.component.html',
  styleUrls: ['./life-child.component.scss']
})
export class LifeChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { }

  count: number =0;
  timer: any;

  ngOnChanges(changes: SimpleChanges): void {

  }


  ngOnInit(): void {
    this.timer = setInterval(()=>{
      this.count++;
    }, 1000
    );
    console.log('Timer started');
    
  }

    ngOnDestroy(): void {
    clearInterval(this.timer);
    console.log('timer stopped, Component destroyed');
    
  }

  ngDoCheck(): void {

  }
  ngAfterContentInit(): void {


  }

  ngAfterContentChecked(): void {

  }

  ngAfterViewInit(): void {

  }

  ngAfterViewChecked(): void {

  }


}
