import { SizeService } from "src/site/services/size.service";
import { Component, QueryList, ViewChildren } from "@angular/core";
import { Experience } from "src/site/model/experience.interface";
import { ResumeJSONService } from "src/site/services/resume-json.service";
import { ExperienceComponent } from "./experience/experience.component";

@Component({
  selector: "resume-main-pane",
  templateUrl: "./resume-main-pane.component.html",
  styleUrls: ["./resume-main-pane.component.scss"],
})
export class ResumeMainPaneComponent {
  @ViewChildren(ExperienceComponent) exps: QueryList<ExperienceComponent>;

  public get experiences(): Experience[] {
    return this.json.resume.experience;
  }

  constructor(private json: ResumeJSONService, private svcSize: SizeService) {}

  ngAfterViewInit() {
    let size = 0;
    for (let exp of this.exps) {
      size += exp.size.height;
      if (size > window.innerHeight) {
        console.log("resize needed");
        this.svcSize.notifyResizeNeeded();
        break;
      }
    }
  }
}
