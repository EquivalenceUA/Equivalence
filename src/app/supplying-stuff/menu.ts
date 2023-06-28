export interface Menu {
    name: string,
    buttons: Button[];
}

export interface Button{
    buttonName: string;
    buttonIcon: string;
    routerHref: string;
}
