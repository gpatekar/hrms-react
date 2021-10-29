export interface detailItemSchema {
    label: string;
    value: string;
}

export interface detailsSchema {
    personal: detailItemSchema[];
    employment: detailItemSchema[];
}

export interface employeeSchema {
    code: string;
    name: string;
    isAdmin?: boolean;
    isCurrentUser?: boolean;
}