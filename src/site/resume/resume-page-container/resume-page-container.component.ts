import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewContainerRef } from "@angular/core";
import { WindowSize } from "src/site/model/window.interface";
import { SizeService } from "src/site/services/size.service";
import { ResumePageComponent } from "../resume-page/resume-page.component";

@Component({
  selector: "resume-page-container",
  templateUrl: "./resume-page-container.component.html",
  styleUrls: ["./resume-page-container.component.scss"],
})
export class ResumePageContainerComponent implements OnInit, AfterViewInit {
  #_size: WindowSize = null;
  public set size(val: WindowSize) {
    this.#_size = val;
  }
  public get size(): WindowSize {
    return this.#_size;
  }

  constructor(
    private svcSize: SizeService,
    private el: ElementRef<ResumePageContainerComponent>,
    private container: ViewContainerRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.svcSize.resizeNeeded$.subscribe((val) => {
      console.log("resizing");
      if (this.container.length) {
        return;
      }
      const cmp = this.container.createComponent(ResumePageComponent);
      this.renderer.appendChild(this.el.nativeElement, cmp.location.nativeElement);

      const html = cmp.location.nativeElement as HTMLElement;
      const mainPane = html.children.item(html.children.length - 1);
      mainPane.replaceChildren(""); // blank the resume-main-pane
    });
  }

  ngAfterViewInit() {
    console.log("page-container");
    this.size = { height: window.innerHeight, width: window.innerWidth };
  }
}
