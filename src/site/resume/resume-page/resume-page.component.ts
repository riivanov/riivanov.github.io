import { Experience } from "./../../model/experience.interface";
import { Component, ElementRef, HostListener, ViewChild, ViewChildren, ViewContainerRef } from "@angular/core";
import { ResumeJSONService } from "src/site/services/resume-json.service";
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

  // @ViewChildren(ExperienceComponent, { read: ElementRef })
  // expsElementRefs!: any;
  // @ViewChildren(ExperienceComponent)
  // expsCmps!: any;
  @ViewChild(ExperienceComponent, { read: ViewContainerRef })
  container!: ViewContainerRef;

  get experiences() {
    return this.json.resume.experience;
  }

  // @HostListener("window:resize")
  // get pages() {
  // console.log(this.#pages);
  // }

  constructor(private json: ResumeJSONService, private svcPagination: PaginationService) {}

  ngAfterViewInit() {
    this.svcPagination.getPageCount(this.json.resume.experience, this.container);
    // this.#pages =
  }
}
