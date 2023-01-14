import * as resume from "src/site/model/resume.json";
import { Injectable } from "@angular/core";
import { Resume } from "src/site/model/resume.interface";

@Injectable({
  providedIn: "root",
})
export class ResumeJSONService {
  public get resume(): Resume {
    return resume;
  }
}
