import {
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  HostListener,
  QueryList,
  Renderer2,
  ViewContainerRef,
} from "@angular/core";
import { ResumeJSONService } from "src/site/services/resume-json.service";
import { ExperienceComponent } from "../../experience/experience.component";
import { PaginationService } from "./../../../services/pagination.service";
import { ContactSkillsContainerComponent } from "./../../contact-skills-container/contact-skills-container.component";

@Component({
  selector: "page-container",
  templateUrl: "./page-container.component.html",
  styleUrls: ["./page-container.component.scss"],
})
export class PageContainerComponent {
  @ContentChild("pageBreak", { read: ElementRef })
  pageBreakDiv!: ElementRef<HTMLDivElement>;

  @ContentChild(ContactSkillsContainerComponent, { read: ElementRef })
  contact!: ElementRef<HTMLElement>;

  @ContentChildren(ExperienceComponent, { read: ElementRef })
  exps!: QueryList<ElementRef<HTMLElement>>;

  constructor(
    private svcPagination: PaginationService,
    private renderer: Renderer2,
    private el: ElementRef<HTMLElement>,
    private json: ResumeJSONService,
    private vcr: ViewContainerRef // private tmpl: TemplateRef<any>
  ) {}

  @HostListener("window:resize")
  onResize() {
    // this.checkOverflow(this.exps.toArray());
  }

  checkOverflow(experiences: ElementRef<HTMLElement>[]) {
    this.svcPagination.clearOverflowExperiences();
    const ovflExps = this.svcPagination.paginate(experiences);

    this.svcPagination.insertPageBreak(this.renderer, this.el, ovflExps);
    // this.insertPageBreak(ovflExps);

    if (ovflExps.length) {
      // this.svcPagination.insertPageBreak(this.renderer, this.el, exp);
      // Span contact-skills-container to page break's row
      // for (let brk of this.svcPagination.pageBreaks) {
      const breaksOnRow = this.svcPagination.pageBreaks.map((div) =>
        this.svcPagination.getRowPositionInGrid(this.el.nativeElement, div)
      );
      // console.log(breaksOnRow);
      // const breakOnRow = this.svcPagination.getRowPositionInGrid(
      //   this.el.nativeElement,
      //   brk
      // );
      let elToSpan = null as unknown as ElementRef<HTMLElement>;
      let pageBreakRow = null as unknown as number;
      for (let i = 0; i < breaksOnRow.length; ++i) {
        if (i === 0) elToSpan = this.contact;
        else elToSpan = this.pageBreakDiv;

        const breakOnRow = breaksOnRow[i];
        this.renderer.setStyle(
          elToSpan.nativeElement,
          `grid-row`,
          ` ${i > 0 ? breaksOnRow[i - 1] + 1 : 1} / 
            span ${i > 0 ? breakOnRow - (breaksOnRow[i - 1] + 1) : breakOnRow}`
        );
      }
      // console.log(breakOnRow);
      // }
    }
    // console.log(this.#pageBreaks);
  }
}
