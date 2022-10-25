import { Component, Input, OnInit } from '@angular/core';
import { DataService } from './Services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'org-chart';
  data:any;
  tempData:any;
  treeData:any[];

  constructor(private dataService:DataService) {
    this.data = {};
    this.tempData = {}
    this.treeData = []
    this.dataService.getData().subscribe(data => {
      this.data = data;
      this.treeData.push(this.data.children[0])
    })
  }
  
  
  ngOnInit(): void {
    // this.treeData.push(this.tempData)
    
    console.log(this.treeData)
  }
  
 
}

// //DEFINE THE NEW ROOT TO WORK WITH CHART
      // this.tempData.expanded = true
      // this.tempData.id = this.data.children[0].value.id
      // this.tempData.label = this.data.children[0].value.en
      // this.tempData.parentId = this.data.children[0].value.parentId
      // this.tempData.ar = this.data.children[0].value.ar
      // this.tempData.en = this.data.children[0].value.en
      // this.tempData.code = this.data.children[0].value.code
      // this.tempData.hirarchyRoles = this.data.children[0].value.hirarchyRoles
      // this.tempData.image = this.data.children[0].value.image
      // this.tempData.path = this.data.children[0].value.path
      // this.tempData.translatable = this.data.children[0].value.translatable
      // this.tempData.children = this.data.children[0].children
      
      // //BULID THE CHILDREN WITH THE SAME TEMPLATE AS ROOT
      // this.tempData.children = this.buildTreeObject(this.tempData.children)

       // buildTreeObject(element:any[]) {
    
  //     element.forEach(item => {
  //       //SET THE VALUES OF EACH CHILD
  //       item.label = item.value.en;
  //       item.id = item.value.id;
  //       item.parentId = item.value.parentId
  //       item.ar = item.value.ar
  //       item.code = item.value.code
  //       item.en = item.value.en
  //       item.hirarchyRoles = item.value.hirarchyRoles
  //       item.image = item.value.image
  //       item.path = item.value.path
  //       item.translatable = item.value.translatable

  //       //DELETE THE VALUE PROPERTY FROM EACH CHILD (REPETITIVE DATA THAT WE DON'T NEED)
  //       delete item.value

  //       //CHECK IF NODE HAS CHILDREN
  //       if (item.children.length !== 0) {
  //         this.buildTreeObject(item.children)
  //       }
  //     })
  //     //RETURN THE NEW CHILDREN
  //     return element
  //   }