import { Component, OnInit } from '@angular/core';
import {Citation} from '../citation'
@Component({
  selector: 'app-form-citation',
  templateUrl: './form-citation.component.html',
  styleUrls: ['./form-citation.component.css']
})
export class FormCitationComponent implements OnInit {
  newCitation:Citation[];
  constructor() { }

  ngOnInit() {
  }

}
