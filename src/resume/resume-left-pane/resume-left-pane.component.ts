import * as resume from '../resume.json';
import { Component, OnInit } from '@angular/core';
import { Resume } from '../resume.interface';

@Component({
  selector: 'resume-left-pane',
  templateUrl: './resume-left-pane.component.html',
  styleUrls: ['./resume-left-pane.component.scss']
})
export class ResumeLeftPaneComponent implements OnInit {

  public get resume(): Resume {
    return resume;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
