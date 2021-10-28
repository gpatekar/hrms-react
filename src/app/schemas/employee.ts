export interface detailItemSchema {
    label: string;
    value: string;
}

export interface detailsSchema {
    personal: detailItemSchema[];
    employment: detailItemSchema[];
}