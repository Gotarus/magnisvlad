import { Component, OnInit } from '@angular/core';

const boxes = [
  {
    data: 'so i want more'
  },
  {
    data: 'yes i agree'
  },
  {
    data: 'not interesting to me'
  }
    
]; 
class Box {
  constructor(public data:string) {}
}
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  boxes: Box[] = boxes;

  create(event: Event, data: string){
    event.preventDefault();

    let box: Box = new Box (data);

    this.boxes.push(box)
  }

  delete ( box:  Box ){
      let index = this.boxes.indexOf(box)

      if (index > -1) {
        this.boxes.splice(index, 1) 
      }
  }
  ngOnInit() {
  }
  
}
