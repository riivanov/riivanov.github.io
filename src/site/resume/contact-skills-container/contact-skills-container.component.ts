import { Component, ElementRef, Inject } from "@angular/core";
import { Contact } from "src/site/model/contact.interface";
import { ResumeJSONService } from "src/site/services/resume-json.service";
import { WINDOW } from "../resume.module";
import { PaginationService } from "./../../services/pagination.service";

@Component({
  selector: "contact-skills-container",
  templateUrl: "./contact-skills-container.component.html",
  styleUrls: ["./contact-skills-container.component.scss"],
})
export class ContactSkillsContainerComponent {
  get contact(): Contact {
    return this.json.resume.contact;
  }

  get height() {
    return this.el.nativeElement.clientHeight;
  }

  constructor(
    private json: ResumeJSONService,
    private el: ElementRef<HTMLElement>,
    private svcPagination: PaginationService,
    @Inject(WINDOW) public window: Window
  ) {}
}
