import { ElementRef, Injectable, Renderer2 } from "@angular/core";
import { WindowSize } from "src/site/model/window.interface";
import { ExperienceWithOverflow } from "../model/experience.interface";

@Injectable({
  providedIn: "root",
})
export class PaginationService {
  #pageBreak = null as unknown as HTMLDivElement;

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
    before: ExperienceWithOverflow
  ) {
    if (this.#pageBreak) this.#pageBreak.remove();

    // Create and insert new page break div
    this.#pageBreak = renderer.createElement("div") as HTMLDivElement;
    renderer.setStyle(
      this.#pageBreak,
      "height",
      window.innerHeight - before.overflow
    );
    renderer.addClass(this.#pageBreak, "page-break");
    renderer.insertBefore(
      parent.nativeElement,
      this.#pageBreak,
      before.experience.nativeElement
    );
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
