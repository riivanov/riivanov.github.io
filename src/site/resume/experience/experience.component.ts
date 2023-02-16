import {
  Component,
  Input,
  Output,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { ReplaySubject } from "rxjs";
import { Experience, Location } from "src/site/model/experience.interface";

@Component({
  exportAs: "expr",
  selector: "experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.scss"],
})
export class ExperienceComponent {
  // @ViewChild(TemplateRef)
  // tmpl: any;

  #_experience = null as unknown as Experience;

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

  // constructor(private brk: PageBreakDirective) {}
  // constructor(public el: ElementRef) {}
  constructor() {}

  ngAfterViewInit() {
    // console.log(this.tmpl);
  }
}
