import {
  Component,
  ElementRef,
  QueryList,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
} from "@angular/core";
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
  @ViewChildren(ExperienceComponent, { read: ElementRef })
  expsElementRefs!: any;
  @ViewChildren(ExperienceComponent)
  expsCmps!: any;
  @ViewChild(ExperienceComponent, { read: ViewContainerRef })
  container!: ViewContainerRef;

  get experiences() {
    return this.json.resume.experience;
  }

  constructor(
    private json: ResumeJSONService,
    private svcPagination: PaginationService // private container: ViewContainerRef
  ) // private renderer: Renderer2
  {}

  // log(ev: any) {
  //   console.log(ev);
  // }

  ngAfterViewInit() {
    // console.log(this.pageBreakDiv);
    // console.log(this.exps.toArray());
    // this.checkOverflow(this.exps.toArray());
    // for (let tm of this.tmpl) {
    //   console.log(tm.elementRef.nativeElement);
    // }

    this.svcPagination.getPageCount(
      this.json.resume.experience,
      this.container
    );
  }
}
