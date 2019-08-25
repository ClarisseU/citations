import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import {Citation} from '../citation'
@Component({
  selector: 'app-form-citation',
  templateUrl: './form-citation.component.html',
  styleUrls: ['./form-citation.component.css']
})
export class FormCitationComponent implements OnInit {
  newCitation = new Citation();
  @Output() addCitation = new EventEmitter<Citation>();
  submitCit(){
    this.addCitation.emit (this.newCitation);
    this.newCitation = new Citation();
  }

  constructor() { }

  ngOnInit() {
  }

}
