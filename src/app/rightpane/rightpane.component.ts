import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../item.model';

//  import * as $ from 'jquery' ;
declare const $: any;

@Component({
  selector: 'app-rightpane',
  templateUrl: './rightpane.component.html',
  styleUrls: ['./rightpane.component.css']
})
export class RightpaneComponent implements OnInit {
  @Input() item: Item;

  @Output() changeName = new EventEmitter();
  constructor() { 
  }

  ngOnInit(){
    $("#arc-slider").roundSlider({
        sliderType: "min-range",
        circleShape: "half-top",
        value: 50,
        startAngle: 45,
        editableTooltip: true,
        radius: 114,
        width: 6,
        handleSize: "+15",
        rangeColor: "red",
        pathColor: null,
        tooltipFormat: function (args) {
            return args.value ;
        }
    });
  }
    updateName() {
    // emitting changeName custom event
    this.changeName.emit();
  }
}
