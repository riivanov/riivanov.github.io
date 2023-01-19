import { Component } from "@angular/core";
import { Experience } from "src/site/model/experience.interface";
import { ResumeJSONService } from "../resume-json.service";

@Component({
  selector: "resume-main-pane",
  templateUrl: "./resume-main-pane.component.html",
  styleUrls: ["./resume-main-pane.component.scss"],
})
export class ResumeMainPaneComponent {
  public get experiences(): Experience[] {
    return this.json.resume.experience;
  }

  constructor(private json: ResumeJSONService) {}
}
