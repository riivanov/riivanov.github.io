import { Component, OnInit } from '@angular/core';
import { Resume } from '../resume.interface';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'resume-left-pane',
  templateUrl: './resume-left-pane.component.html',
  styleUrls: ['./resume-left-pane.component.scss']
})
export class ResumeLeftPaneComponent implements OnInit {

  public get resume(): Resume {
    return this.json.resume;
  }

  constructor(private json: ResumeService) { }

  ngOnInit(): void {
  }

}
