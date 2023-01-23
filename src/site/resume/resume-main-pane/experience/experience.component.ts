import { WindowSize } from "./../../../model/window.interface";
import { ResumePageComponent } from "./../../resume-page/resume-page.component";
import { AfterViewInit, Component, ElementRef, HostListener, Input } from "@angular/core";
import { Experience, Location } from "src/site/model/experience.interface";

@Component({
  selector: "experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.scss"],
})
export class ExperienceComponent implements AfterViewInit {
  #_size: WindowSize = null;
  #_experience: Experience = null;

  @Input()
  public set experience(exp: Experience) {
    this.#_experience = exp;
  }
  public get experience(): Experience {
    return this.#_experience;
  }

  public get loc(): Location {
    return this.experience.position.location;
  }

  public set size(val: WindowSize) {
    this.#_size = val;
  }

  public get size(): WindowSize {
    return this.#_size;
  }

  constructor(private page: ResumePageComponent, private el: ElementRef<HTMLElement>) {
    this.size = {
      height: el.nativeElement.offsetHeight,
      width: el.nativeElement.offsetWidth,
    };
  }

  @HostListener("window:resize")
  private getSize() {
    this.size = { height: this.el.nativeElement.offsetHeight, width: this.el.nativeElement.offsetWidth };
  }

  ngAfterViewInit(): void {
    this.size = { height: this.el.nativeElement.offsetHeight, width: this.el.nativeElement.offsetWidth };
  }
}
