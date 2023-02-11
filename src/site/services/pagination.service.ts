import { ElementRef, Injectable } from "@angular/core";
import { WindowSize } from "src/site/model/window.interface";

@Injectable({
  providedIn: "root",
})
export class PaginationService {
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

  getOverflowingExp(experiences: ElementRef<HTMLElement>[]) {
    let size = 0;
    let preOverflowSize = 0;
    const experience = experiences.find((exp) => {
      size += exp.nativeElement.offsetHeight;
      if (size > window.innerHeight) {
        preOverflowSize = size - exp.nativeElement.offsetHeight; // keep max size
        return exp;
      }
    });
    return { experience, preOverflowSize };
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
