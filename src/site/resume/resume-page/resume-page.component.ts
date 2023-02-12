import {
  Component,
  ElementRef,
  HostListener,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { ResumeJSONService } from "src/site/services/resume-json.service";
import { ContactSkillsContainerComponent } from "../contact-skills-container/contact-skills-container.component";
import { PaginationService } from "./../../services/pagination.service";
import { ExperienceComponent } from "./../experience/experience.component";

@Component({
  selector: "resume-page",
  templateUrl: "./resume-page.component.html",
  styleUrls: ["./resume-page.component.scss"],
})
export class ResumePageComponent {
  @ViewChild(ContactSkillsContainerComponent, { read: ElementRef })
  contact!: ElementRef<HTMLElement>;

  @ViewChildren(ExperienceComponent, { read: ElementRef })
  exps!: QueryList<ElementRef<HTMLElement>>;

  get experiences() {
    return this.json.resume.experience;
  }

  constructor(
    private json: ResumeJSONService,
    private svcPagination: PaginationService,
    private renderer: Renderer2,
    private el: ElementRef<HTMLElement>
  ) {}

  @HostListener("window:resize")
  onResize() {
    this.checkOverflow(this.exps.toArray());
  }

  checkOverflow(experiences: ElementRef<HTMLElement>[]) {
    this.svcPagination.clearOverflowExperiences();
    const ovflExps = this.svcPagination.paginate(experiences);

    this.svcPagination.insertPageBreak(this.renderer, this.el, ovflExps);

    // if (exp) {
    // this.svcPagination.insertPageBreak(this.renderer, this.el, exp);
    // Span contact-skills-container to page break's row
    // const breakOnRow = this.svcPagination.getRowPositionInGrid(
    //   this.el.nativeElement,
    //   this.#pageBreak
    // );
    // this.renderer.setStyle(
    //   this.contact.nativeElement,
    //   "grid-row",
    //   `span ${breakOnRow}`
    // );
    // }
  }

  ngAfterViewInit() {
    console.log(this.exps.toArray());
    this.checkOverflow(this.exps.toArray());
  }
}
