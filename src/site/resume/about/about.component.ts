import { Component, OnInit } from '@angular/core';
import { ResumeJSONService } from '../resume-json.service';
import { Resume } from '../resume.interface';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  public get resume(): Resume {
    return this.json.resume;
  }

  constructor(private json: ResumeJSONService) { }
}
