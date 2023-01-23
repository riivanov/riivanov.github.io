import { Component, HostListener } from "@angular/core";
import { WindowSize } from "./../../model/window.interface";

@Component({
  selector: "resume-page",
  templateUrl: "./resume-page.component.html",
  styleUrls: ["./resume-page.component.scss"],
})
export class ResumePageComponent {
  #_size: WindowSize = { height: window.innerHeight, width: window.innerWidth };
  public set size(val: WindowSize) {
    this.#_size = val;
  }
  public get size(): WindowSize {
    return this.#_size;
  }

  @HostListener("window:resize")
  private getSize() {
    this.size = { height: window.innerHeight, width: window.innerWidth };
  }
}
