import {
  ElementRef,
  Injectable,
  Renderer2,
  ViewContainerRef,
} from "@angular/core";
import { WindowSize } from "src/site/model/window.interface";
import {
  Experience,
  ExperienceWithOverflow,
} from "../model/experience.interface";
import { ExperienceComponent } from "./../resume/experience/experience.component";

@Injectable({
  providedIn: "root",
})
export class PaginationService {
  #ovflExps = new Array<ExperienceWithOverflow>();
  pageBreaks = new Array<HTMLDivElement>();

  getPageCount(experiences: Array<Experience>, container: ViewContainerRef) {
    // for (let exp of experience) {
    // const frag = document.createDocumentFragment();
    // const div = renderer.createElement("div") as HTMLDivElement;
    const heights = experiences.map((exp) => {
      const cmp = container.createComponent(ExperienceComponent);
      cmp.setInput("experience", exp);
      cmp.changeDetectorRef.detectChanges();
      const { clientHeight } = cmp.location.nativeElement as HTMLUnknownElement;
      cmp.destroy();
      return clientHeight;
    });

    let sum = 0;
    let idxSubAryStart = 0;
    let paginatedHeights = new Array<Array<number>>();
    console.log(heights);
    // const paginatedExps = heights.map((curr, i, ary) => {
    for (let i = 0; i < heights.length; ++i) {
      if (i === 0) continue;
      const idxPrev = i - 1;
      const prev = heights[idxPrev];
      sum += prev;
      if (sum > window.innerHeight) {
        const arySub = heights.slice(idxSubAryStart, idxPrev);
        idxSubAryStart = idxPrev;
        i = idxSubAryStart;
        sum = 0;
        paginatedHeights.push(arySub);
      }
      if (i === heights.length - 1)
        paginatedHeights.push(heights.slice(idxSubAryStart, heights.length));
    }
    // });
    console.log(paginatedHeights);

    // container.createEmbeddedView();
    // container.detach();
    // cmp.hostView.detach();
    // container.insert(cmp.hostView);
    // cmp.hostView.
    // div.innerHTML = JSON.stringify(exp);
    // renderer.appendChild(container.nativeElement, div);
    // console.log(`${div.clientHeight}${div.clientWidth},${div.offsetHeight}`);
    // div.remove();
    // }
  }

  // Everything except the resume.experience input should be private

  getSize(el: ElementRef<HTMLElement>): WindowSize {
    let style = window.getComputedStyle(el.nativeElement);
    let height = [
      "height",
      "padding-top",
      "padding-bottom",
      "border-top",
      "border-bottom",
      "margin-top",
      "margin-bottom",
    ]
      .map((key) => parseInt(style.getPropertyValue(key), 10))
      .reduce((prev, cur) => prev + cur);

    return { height, width: el.nativeElement.offsetWidth };
  }

  clearOverflowExperiences() {
    this.#ovflExps = new Array<ExperienceWithOverflow>();
  }

  paginate(experiences: ElementRef<HTMLElement>[]) {
    const ovfl = this.getOverflowingExp(experiences);
    if (ovfl) {
      if (!this.#ovflExps.includes(ovfl)) this.#ovflExps.push(ovfl);
      const idx = experiences.indexOf(ovfl.experience);
      this.paginate(experiences.slice(idx > 0 ? idx : 1));
    }

    return this.#ovflExps;
  }

  getOverflowingExp(
    experiences: ElementRef<HTMLElement>[]
  ): ExperienceWithOverflow | null {
    let size = 0;
    let preOverflowSize = 0;
    const experience = experiences.find((exp) => {
      size += exp.nativeElement.offsetHeight;
      if (size > window.innerHeight) {
        preOverflowSize = size - exp.nativeElement.offsetHeight; // keep max size
        return exp;
      }
    });

    if (experience) {
      return {
        experience,
        overflow: preOverflowSize,
      };
    }

    return null;
  }

  insertPageBreak(
    renderer: Renderer2,
    parent: ElementRef<HTMLElement>,
    exps: ExperienceWithOverflow[]
  ) {
    // Remove previous page breaks; Start fresh
    if (this.pageBreaks.length) {
      for (let brk of this.pageBreaks) {
        brk.remove();
      }
      this.pageBreaks = new Array();
    }

    // Create and insert new page break div
    for (let exp of exps) {
      const brk = renderer.createElement("div") as HTMLDivElement;
      this.pageBreaks.push(brk);
      // console.log(this.#pageBreaks);
      renderer.setStyle(brk, "height", window.innerHeight - exp.overflow);
      renderer.addClass(brk, "page-break");
      renderer.setAttribute(brk, "dynamic", "");
      renderer.insertBefore(
        parent.nativeElement,
        brk,
        exp.experience.nativeElement
      );
    }
  }
  getRowPositionInGrid(grid: HTMLElement, pageBreak: HTMLDivElement) {
    const numRows = window
      .getComputedStyle(grid)
      .gridTemplateRows.split(" ").length;
    const rowHeight = grid.clientHeight / numRows;
    const divRect = pageBreak.getBoundingClientRect();
    const gridRow = Math.floor(divRect.top / rowHeight);
    return gridRow;
  }
}
