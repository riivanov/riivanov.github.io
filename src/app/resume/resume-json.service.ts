import * as resume from "./resume.json"
import { Injectable } from '@angular/core';
import { Resume } from "./resume.interface";

@Injectable({
  providedIn: 'root'
})
export class ResumeJSONService {

  public get resume(): Resume {
    return resume;
  }
}
