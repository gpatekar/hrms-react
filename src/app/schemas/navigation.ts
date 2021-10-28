export interface navItem {
    name: string;
    link: string;
}

export interface nav extends navItem {
    subLinks?: navItem[];
}