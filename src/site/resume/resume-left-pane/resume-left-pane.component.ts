import { Component, OnInit } from '@angular/core';
import { ResumeJSONService } from '../resume-json.service';
import { Resume } from '../resume.interface';

@Component({
  selector: 'resume-left-pane',
  templateUrl: './resume-left-pane.component.html',
  styleUrls: ['./resume-left-pane.component.scss']
})
export class ResumeLeftPaneComponent {

  public get resume(): Resume {
    return this.json.resume;
  }

  constructor(private json: ResumeJSONService) { }
}
