import { ElementRef, Injectable } from "@angular/core";
import { WindowSize } from "src/site/model/window.interface";

@Injectable({
  providedIn: "root",
})
export class SizeService {
  #_size: WindowSize = null;
  public set size(val: WindowSize) {
    this.#_size = val;
  }

  public get size(): WindowSize {
    return this.#_size;
  }

  public getSize(el: ElementRef<HTMLElement>) {
    let style = window.getComputedStyle(el.nativeElement);
    let height = ["height", "padding-top", "padding-bottom", "border-top", "border-bottom", "margin-top", "margin-bottom"]
      .map((key) => parseInt(style.getPropertyValue(key), 10))
      .reduce((prev, cur) => prev + cur);
    this.size = { height, width: el.nativeElement.offsetWidth };
    console.log(el, this.size);
    return this.size;
  }
}
