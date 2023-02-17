import { ChangeDetectorRef, Component, HostListener, ViewChild, ViewContainerRef } from "@angular/core";
import { ResumeJSONService } from "src/site/services/resume-json.service";
import { Experience } from "./../../model/experience.interface";
import { PaginationService } from "./../../services/pagination.service";
import { ExperienceComponent } from "./../experience/experience.component";

// I can't divide the height of the page (11in) by the # of items because each item has a differing height.
// 1. Instead I have to check if the heights of items add up to (>11in) and stop right before they do.
// 2. Take only that many items, which are less than (11in) and iterate over them.
// 3. Then create a new page, for the remaining items, and repeat the process at 1.,
//    until I have no more items.

@Component({
  selector: "resume-page",
  templateUrl: "./resume-page.component.html",
  styleUrls: ["./resume-page.component.scss"],
})
export class ResumePageComponent {
  #pages = null as unknown as Experience[][];

  @ViewChild(ExperienceComponent, { read: ViewContainerRef })
  container!: ViewContainerRef;

  get pages(): Experience[][] {
    return this.#pages;
  }

  get experiences() {
    return this.json.resume.experience;
  }

  constructor(private json: ResumeJSONService, private svcPagination: PaginationService, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.paginateExperiences();
  }

  @HostListener("window:resize")
  paginateExperiences() {
    this.#pages = this.svcPagination.getPageCount(this.json.resume.experience, this.container);
    this.cdr.detectChanges();
  }
}
