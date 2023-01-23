import { Component } from "@angular/core";
import { Resume } from "src/site/model/resume.interface";
import { ResumeJSONService } from "src/site/services/resume-json.service";

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
