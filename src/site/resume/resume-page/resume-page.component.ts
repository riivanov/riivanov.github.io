import { Component } from "@angular/core";
import { ResumeJSONService } from "src/site/services/resume-json.service";

@Component({
  selector: "resume-page",
  templateUrl: "./resume-page.component.html",
  styleUrls: ["./resume-page.component.scss"],
})
export class ResumePageComponent {
  get experiences() {
    return this.json.resume.experience;
  }

  constructor(private json: ResumeJSONService) {}
}
