import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Observable, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-life-child',
  templateUrl: './life-child.component.html',
  styleUrls: ['./life-child.component.scss']
})
export class LifeChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {



  count: number =0;
  timer: any;
  mySubscription!: Subscription;
  manualVal: number =0;
  dataStream$ : Observable<number>;


  constructor() {
      // We just define the stream. We DO NOT subscribe 

      this.dataStream$ = interval(1000).pipe(tap(value=> console.log(value)
      ))
      
     }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {
   // setInterval and clearInterval

    this.timer = setInterval(()=>{
      this.count++;
    }, 1000
    );
    console.log('Timer started');

   // Manual subscription

   this.mySubscription = interval(1000).subscribe((value)=>
  { 
    this.manualVal = value;
  })

  }

    ngOnDestroy(): void {
    clearInterval(this.timer);

    // 🛑 CRITICAL: We manually Unsubscribe here
    if(this.mySubscription)
    {
      this.mySubscription.unsubscribe();
    }
    console.log('timer stopped, Component destroyed');

    // We do not write code here for destroy component.
    
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
