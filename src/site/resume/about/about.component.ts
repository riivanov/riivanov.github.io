import { Component } from "@angular/core";
import { ResumeJSONService } from "src/site/resume/resume-json.service";
import { Resume } from "src/site/model/resume.interface";

@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent {

  public get resume(): Resume {
    return this.json.resume;
  }

  constructor(private json: ResumeJSONService) {}
}
