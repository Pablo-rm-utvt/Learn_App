export interface Welcome {
    status:     string;
    pagination: Pagination;
    data:       Location[];
}

export interface Location {
    id:                 string;
    ubicacion:          string;
    fecha_inicio:       Date;
    fecha_modificacion: Date | null;
    fecha_fin:          Date;
    created_at:         Date;
    updated_at:         Date;
}

export interface Pagination {
    page:       number;
    limit:      number;
    total:      string;
    totalPages: number;
    prevPage:   null;
    nextPage:   null;
}
