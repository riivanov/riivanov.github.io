import { Experience } from "./experience.interface";
import { Contact } from "./contact.interface";

export interface Resume {
  contact: Contact;
  skills: string[];
  experience: Experience[];
}
