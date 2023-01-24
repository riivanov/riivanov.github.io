import { Component, ElementRef, HostListener, ViewChild, ViewContainerRef } from "@angular/core";
import { WindowSize } from "src/site/model/window.interface";
import { SizeService } from "src/site/services/size.service";
import { ExperienceComponent } from "../resume-main-pane/experience/experience.component";
import { ResumePageComponent } from "../resume-page/resume-page.component";

@Component({
  selector: "resume-page-container",
  templateUrl: "./resume-page-container.component.html",
  styleUrls: ["./resume-page-container.component.scss"],
})
export class ResumePageContainerComponent {
  @ViewChild(ExperienceComponent) experience: ExperienceComponent;

  @ViewChild("container", { read: ViewContainerRef })
  container: ViewContainerRef;

  #_size: WindowSize = null;
  public set size(val: WindowSize) {
    this.#_size = val;
  }
  public get size(): WindowSize {
    return this.#_size;
  }

  constructor(private el: ElementRef<HTMLElement>, private svcSize: SizeService) {
    svcSize.resizeNeeded$.subscribe((val) => {
      console.log("resizing");
    });
  }

  createNewPage() {
    this.container.createComponent(ResumePageComponent);
  }

  ngAfterViewInit() {
    this.size = { height: window.innerHeight, width: window.innerWidth };
  }
}
