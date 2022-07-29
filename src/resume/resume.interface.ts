import {Experience} from './experience.interface';

export interface Resume {
    "contact" : {
        "name" : {
            "first" : string, 
            "last" : string
        },
        "about": string, 
        "location" : {
            "city": string,
            "country": string
        },
        "email" : string,
        "linked_in" : string,
        "websites" : {
            "leia" : string,
            "chapkinlab": string
        }
    },
    "skills" :string[],
    "experience" : Experience[]
}
