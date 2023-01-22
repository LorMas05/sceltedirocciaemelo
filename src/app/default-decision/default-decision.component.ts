import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NgxWheelComponent } from 'ngx-wheel';
@Component({
  selector: 'app-default-decision',
  templateUrl: './default-decision.component.html',
  styleUrls: ['./default-decision.component.scss']
})
export class DefaultDecisionComponent implements OnInit, AfterViewInit {
  
  @ViewChild(NgxWheelComponent, { static: false }) wheel; 
  idToLandOn:string="default" 
  showOptionCard:boolean=false
  newElement={
    color:"",
    text:""
  }
  items :{text:string,fillStyle:string,id:string,textFontSize?:number,textMargin?:number}[]=[
    
    ]
  constructor() {
  }
  ngAfterViewInit(): void {
  }
  ngOnInit(): void {

  }
  changedtext(value){
    this.newElement.text=value

  }
  changedcolor(value){
    this.newElement.color=value


  }
  
  addOption(){
    this.showOptionCard=true
   /* this.items.push({text:"dshd",fillStyle : 'aqua',id:"risposta1"})
    this.wheel.reset();*/

  }
  closedColorDialog(saved:boolean){
    let currentObject=this.newElement
    this.showOptionCard=false
    currentObject.color==''?currentObject.color="#7751b8":""
    console.log(currentObject)
    if(saved && currentObject.text.length>0){      
      this.items.push({text:currentObject.text,fillStyle : currentObject.color,id:currentObject.text,textFontSize:15,textMargin    : 2})
      
    }else{

    }
    
    this.newElement.color=''
    this.newElement.text=''
    this.wheel.reset()
    this.idToLandOn=this.items[Math.floor(Math.random() * this.items.length)].id;


  }
  SpinWheel(){
    this.wheel.spin()
  }


}
