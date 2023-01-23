import { Component, ElementRef, HostListener } from "@angular/core";
import { WindowSize } from "src/site/model/window.interface";
import { SizeService } from "src/site/services/size.service";

@Component({
  selector: "resume-page-container",
  templateUrl: "./resume-page-container.component.html",
  styleUrls: ["./resume-page-container.component.scss"],
})
export class ResumePageContainerComponent {
  #_size: WindowSize = { height: window.innerHeight, width: window.innerWidth };
  public set size(val: WindowSize) {
    this.#_size = val;
  }
  public get size(): WindowSize {
    return this.#_size;
  }

  constructor(private el: ElementRef<HTMLElement>, private area: SizeService) {}

  @HostListener("window:resize")
  private getSize() {
    this.size = this.area.getSize(this.el);
  }
}
