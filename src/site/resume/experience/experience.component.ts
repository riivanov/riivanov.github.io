import { Component, Injector, Input } from "@angular/core";
import { Experience, Location } from "src/site/model/experience.interface";
import { PaginationService } from "./../../services/pagination.service";
import { ResumeJSONService } from "./../../services/resume-json.service";

@Component({
  exportAs: "expr",
  selector: "experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.scss"],
})
export class ExperienceComponent {
  // @ViewChild(TemplateRef)
  // tmpl: any;

  #_experience = null as unknown as Experience;

  @Input()
  public set experience(exp: Experience) {
    this.#_experience = exp;
  }
  public get experience(): Experience {
    return this.#_experience;
  }

  public get loc(): Location {
    return this.experience.position.location;
  }

  constructor(private svcPagination: PaginationService, private json: ResumeJSONService) {}

  ngAfterViewInit() {}
}
