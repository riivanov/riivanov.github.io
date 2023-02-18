import { ChangeDetectorRef, Component, Input } from "@angular/core";
import { Experience, Location } from "src/site/model/experience.interface";

@Component({
  exportAs: "expr",
  selector: "experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.scss"],
})
export class ExperienceComponent {
  #_experience = null as unknown as Experience;

  @Input()
  set experience(exp: Experience) {
    this.#_experience = exp;
  }
  get experience(): Experience {
    return this.#_experience;
  }

  get loc(): Location {
    return this.experience.position.location;
  }

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
}
