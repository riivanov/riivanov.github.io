import { Component, Input } from "@angular/core";
import { Contributions } from "src/site/model/experience.interface";

@Component({
  selector: "contribution",
  templateUrl: "./contribution.component.html",
  styleUrls: ["./contribution.component.scss"],
})
export class ContributionComponent {
  #_contributions = [];

  @Input()
  public set contributions(contrib: Contributions) {
    this.#_contributions = contrib;
  }

  public get contributions(): Contributions {
    return this.#_contributions;
  }
}
