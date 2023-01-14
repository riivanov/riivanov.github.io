import { Resume } from "./resume.interface";
import * as resume from "./resume.json";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ResumeJSONService {
  public get resume(): Resume {
    return resume;
  }
}
