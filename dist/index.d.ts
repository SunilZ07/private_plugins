export declare class BuyerMenu {
    getMenuOptionsByRole(): MenuItem[];
    UserHasRole(LoggedUserRoles: Array<any>, roleName: string): boolean;
}
export interface MenuItem {
    title: string;
    url: string;
    ionicon: string;
    displayOrder: number;
}
