import { Component, ElementRef } from "@angular/core";
import { Contact } from "src/site/model/contact.interface";
import { ResumeJSONService } from "src/site/services/resume-json.service";
import { PaginationService } from "./../../services/pagination.service";

@Component({
  selector: "contact-skills-container",
  templateUrl: "./contact-skills-container.component.html",
  styleUrls: ["./contact-skills-container.component.scss"],
})
export class ContactSkillsContainerComponent {
  isMobile = false;

  get contact(): Contact {
    return this.json.resume.contact;
  }

  get height() {
    return this.el.nativeElement.clientHeight;
  }

  constructor(
    private json: ResumeJSONService,
    private el: ElementRef<HTMLElement>,
    private svcPagination: PaginationService
  ) {
    this.svcPagination.onResize.subscribe(() => this.onResize());
  }

  onResize() {
    this.isMobile = window.innerWidth < 768;
  }
}
