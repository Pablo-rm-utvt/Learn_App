export interface Welcome {
    status: string;
    data:   Users[];
    total:  number;
}

export interface Users {
    id_user:       string;
    name_user:     string;
    lastname_user: string;
    age:           string;
}
