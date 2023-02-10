import { Component, Input } from "@angular/core";
import { Contributions } from "src/site/model/experience.interface";

@Component({
  selector: "contribution-list",
  templateUrl: "./contribution-list.component.html",
  styleUrls: ["./contribution-list.component.scss"],
})
export class ContributionListComponent {
  #_contributions = [];

  @Input()
  public set contributions(contrib: Contributions) {
    this.#_contributions = contrib;
  }

  public get contributions(): Contributions {
    return this.#_contributions;
  }
}
