import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-documentation',
  templateUrl: './directives-documentation.component.html',
  styleUrls: ['./directives-documentation.component.scss']
})
export class DirectivesDocumentationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  log(): void {
      console.log('clicked on Log');
  }
}
