 export interface PeopleListResponse {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number; 
    data:        People[];
}

export interface People {
    id:       number;
    name:     string;
    email:    string;
}
