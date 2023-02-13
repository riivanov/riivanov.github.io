import { ElementRef, Injectable, Renderer2 } from "@angular/core";
import { WindowSize } from "src/site/model/window.interface";
import { ExperienceWithOverflow } from "../model/experience.interface";

@Injectable({
  providedIn: "root",
})
export class PaginationService {
  #pageBreaks = new Array<HTMLDivElement>();
  #ovflExps = new Array<ExperienceWithOverflow>();

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

  insertPageBreak(
    renderer: Renderer2,
    parent: ElementRef<HTMLElement>,
    exps: ExperienceWithOverflow[]
  ) {
    // Remove previous page breaks; Start fresh
    if (this.#pageBreaks.length) {
      for (let brk of this.#pageBreaks) {
        brk.remove();
      }
      this.#pageBreaks = new Array();
    }

    // Create and insert new page break div
    for (let exp of exps) {
      const brk = renderer.createElement("div") as HTMLDivElement;
      this.#pageBreaks.push(brk);
      console.log(this.#pageBreaks);
      renderer.setStyle(brk, "height", window.innerHeight - exp.overflow);
      renderer.addClass(brk, "page-break");
      renderer.insertBefore(
        parent.nativeElement,
        brk,
        exp.experience.nativeElement
      );
    }
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

  getRowPositionInGrid(grid: HTMLElement, el: HTMLElement) {
    const numRows = window
      .getComputedStyle(grid)
      .gridTemplateRows.split(" ").length;
    const rowHeight = grid.clientHeight / numRows;
    const elementRect = el.getBoundingClientRect();
    const gridRow = Math.ceil(elementRect.bottom / rowHeight);
    return gridRow;
  }
}
