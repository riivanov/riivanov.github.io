import { Component, Input } from "@angular/core";
import { Experience, Location } from "src/site/model/experience.interface";

@Component({
  selector: "experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.scss"],
})
export class ExperienceComponent {
  _experience: Experience = null;
  @Input()
  public set experience(exp: Experience) {
    this._experience = exp;
  }
  public get experience(): Experience {
    return this._experience;
  }

  public get loc(): Location {
    return this.experience.position.location;
  }
}
