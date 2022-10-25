import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.scss']
})
export class MyChartComponent implements OnInit {
  @Input() child:any[];
  childState:boolean;
  selectedId:number;
  rootClicked:boolean = false;

  constructor() {
    this.childState = false
    // this.selectedId = 0
  }
  
  ngOnInit(): void {
    // this.child = []
    console.log(this.child)
    this.selectedId = 0
  }

  hideChildren(event) {
    // this.childState = true;
    this.selectedId = Number(event.target.id)
    if (this.selectedId !== 1 && !this.rootClicked) {
      this.childState = true
      this.rootClicked = false
    } else {
      this.childState = !this.childState;
      this.rootClicked = true;
    }

  }

}
