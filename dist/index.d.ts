export declare class BuyerMenu {
    getMenuOptionsByRole(): MenuItem[];
}
export interface MenuItem {
    title: string;
    url: string;
    ionicon: string;
    displayOrder: number;
}
