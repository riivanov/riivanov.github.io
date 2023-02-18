import { Injectable, ViewContainerRef } from "@angular/core";
import { Experience } from "../model/experience.interface";
import { ExperienceComponent } from "./../resume/experience/experience.component";

@Injectable({
  providedIn: "root",
})
export class PaginationService {
  pageBreaks = new Array<HTMLDivElement>();

  getPageCount(experiences: Array<Experience>, container: ViewContainerRef) {
    const heights = experiences.map((exp) => {
      const cmp = container.createComponent(ExperienceComponent);
      cmp.instance.experience = exp;
      cmp.changeDetectorRef.detectChanges();
      const size = this.getSize(cmp.location.nativeElement);
      cmp.destroy();
      return size.height;
    });

    console.log(heights);

    // If the sum of the previous two heights is less than window.innerHeight, continue adding
    // Until the sum is greater. Then take all of the summed items and add them to paginatedHeights as an array

    // let margin = 20;
    // if (page) {
    //   const style = window.getComputedStyle(page.nativeElement);
    //   const margin = parseInt(style.marginTop) + parseInt(style.marginBottom);
    //   console.log(margin);
    // }

    let sum = 0;
    let idxSubAryStart = 0;
    let paginatedExps = new Array<Array<Experience>>();
    for (let i = 1; i < experiences.length; ++i) {
      const idxPrev = i - 1;
      const prev = i > 0 ? heights[idxPrev] : 0;
      const curr = heights[i];
      sum += prev + curr;
      if (i === heights.length - 1) {
        paginatedExps.push(experiences.slice(idxSubAryStart));
        break;
      }
      if (sum < window.innerHeight) {
        continue;
      }
      sum = 0;
      const subAry = experiences.slice(idxSubAryStart, i);
      paginatedExps.push(subAry);
      idxSubAryStart += subAry.length;
    }

    return paginatedExps;
  }

  getSize(el: HTMLElement) {
    let style = window.getComputedStyle(el);
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
    const size = { height, width: el.offsetWidth };
    return size;
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
