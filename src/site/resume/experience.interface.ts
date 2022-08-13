export interface Experience {
    "company" : string,
    "position": {
        "title": string,
        "duration": {
            "from" : string,
            "to" : string
        },
        "location": {
            "city": string,
            "state": string
        }
    },
    "contributions" : string[]
}