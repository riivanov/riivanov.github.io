import { ElementRef, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { WindowSize } from "src/site/model/window.interface";

@Injectable({
  providedIn: "root",
})
export class SizeService {
  #_resizeNeeded = new Subject<void>();
  resizeNeeded$ = this.#_resizeNeeded.asObservable();

  #_size: WindowSize = null;
  set size(val: WindowSize) {
    this.#_size = val;
  }

  get size(): WindowSize {
    return this.#_size;
  }

  getSize(el: ElementRef<HTMLElement>) {
    let style = window.getComputedStyle(el.nativeElement);
    let height = ["height", "padding-top", "padding-bottom", "border-top", "border-bottom", "margin-top", "margin-bottom"]
      .map((key) => parseInt(style.getPropertyValue(key), 10))
      .reduce((prev, cur) => prev + cur);
    this.size = { height, width: el.nativeElement.offsetWidth };
    return this.size;
  }

  notifyResizeNeeded() {
    this.#_resizeNeeded.next();
  }
}
