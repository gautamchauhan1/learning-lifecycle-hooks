import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-life-parent',
  templateUrl: './life-parent.component.html',
  styleUrls: ['./life-parent.component.scss']
})
export class LifeParentComponent implements OnInit, AfterViewInit {

  constructor(){}

  parentMessage: string= ''; 

  @ViewChild('myInput') inputBox!: ElementRef;


  ngOnInit(): void {
    //    this.inputBox.nativeElement.focus();
    // we can not focus this input here 
  }

  ngAfterViewInit(): void {
    this.inputBox.nativeElement.focus(); //Use here to focus input
  } 

}
