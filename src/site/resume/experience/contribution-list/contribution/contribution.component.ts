import { Component, Input } from "@angular/core";

@Component({
  selector: "contribution",
  templateUrl: "./contribution.component.html",
  styleUrls: ["./contribution.component.scss"],
})
export class ContributionComponent {
  @Input() contrib!: string;
}
