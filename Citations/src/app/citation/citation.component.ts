import { Component, OnInit } from '@angular/core';
import {Citation } from '../citation'
@Component({
  selector: 'app-citation',
  templateUrl: './citation.component.html',
  styleUrls: ['./citation.component.css']
})
export class CitationComponent implements OnInit {
  newCitation:Citation[];

  constructor() { }

  ngOnInit() {
  }

}
