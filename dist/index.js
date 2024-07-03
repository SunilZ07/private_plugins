"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuyerMenu = void 0;
class BuyerMenu {
    constructor() {
        //#region Unsed/Mis
        this.settingOption = [
            { title: 'Settings', url: '/settings', ionicon: "settings-sharp", displayOrder: 450 },
        ];
        this.languageOption = [
            { title: 'GlobalStrings.Languages', url: '/language', ionicon: "language-outline", displayOrder: 400 },
        ];
        //theme menu
        this.themeMenu = [
            { title: 'Mobile.ThemeUI', url: 'theme-ui', ionicon: 'rose-sharp', displayOrder: 450 },
        ];
        //#endregion
        //#region Role Independepent
        this.requireAuthenticationMenu = [
            { title: 'GlobalStrings.Help', url: '/help', ionicon: "help-circle", displayOrder: 100 }, //component:Help,		
            { title: 'GlobalStrings.ContactUs', url: '/contact-us', ionicon: "mail", displayOrder: 200 }, // component: ContactUsPage,
            { title: 'AdminStrings.About', url: '/about-us', ionicon: "create", displayOrder: 300 }, // component: AboutUsPage,
            ...this.themeMenu
        ];
        this.homePageOption = [
            { title: 'GlobalStrings.Home', url: '/home', ionicon: "home", displayOrder: 10 }, // component: HomePage,
        ];
        this.commonOptions = [
            ...this.requireAuthenticationMenu,
            ...this.homePageOption,
            { title: 'Mobile.BrowseListings', url: 'home/listings', ionicon: "list", displayOrder: 40 }, // component: ListingPage,
            { title: 'GlobalStrings.Categories', url: 'home/sort-by-category', ionicon: "create", displayOrder: 90 }, // component:SortByCategory
        ];
        this.eventCommonOptions = [
            { title: 'GlobalStrings.BrowseEvents', url: 'home/browse-events', ionicon: "list", displayOrder: 30 }, // component: BrowseEvents,
        ];
        this.enterpriseCommonOptions = [];
        this.loggedInOptions = [
            { title: 'GlobalStrings.MyAccount', url: 'my-account', ionicon: "newspaper", displayOrder: 20 }, // component: MyAccountPage,
            { title: 'GlobalStrings.LogOff', url: '/login', ionicon: "log-out", displayOrder: 500 }
            // { title: 'lblAccountSummary', url: '/account-summary', ionicon: "newspaper", displayOrder: 25 }, // component: AccountSummaryPage, specific for astock
        ];
        this.logoutMenuOptions = [
            { title: 'GlobalStrings.SignIn', url: '/login', ionicon: "log-in", displayOrder: 500 }, // component: LoginPage,		
        ];
        //#endregion
        //#region Buyer
        this.commonBuyerOptions = [
            { title: 'Mobile.MyActiveBids', url: 'home/my-active-bids', ionicon: "list", displayOrder: 95 }, //component: MyActiveBidsPage,	
        ];
        //#endregion
        //#region Seller
        this.commonSellerOptions = [
            { title: 'GlobalStrings.MyListings', url: 'home/my-listings', ionicon: "list", displayOrder: 84 }, // component: MyListingPage,
            { title: 'Mobile.DraftListings', url: 'home/draft-listings', ionicon: "list", displayOrder: 86 }, // component: MyDraftListingPage,
        ];
        this.createListingOption = [
            { title: 'GlobalStrings.CreateListing', url: '/create-listing', ionicon: "create", displayOrder: 80 }, // component: CreateListingPage Create and Edit listing page - US19808,
        ];
        this.eventSellerOptions = [
            { title: 'GlobalStrings.CreateEvent', url: '/create-event', ionicon: "create", displayOrder: 60 },
            { title: 'GlobalStrings.CreateLot', url: '/create-lot', ionicon: "create", displayOrder: 70 },
            { title: 'GlobalStrings.MyEvents', url: 'home/published-events', ionicon: "list", displayOrder: 85 },
        ];
        this.enterpriseSellerOptions = [
            ...this.createListingOption,
            // { title: 'DraftListings', url: '/draft-listings', ionicon: "list", displayOrder: 86 }, // component: MyDraftListingPage,
        ];
    }
    //#endregion
    getMenuOptionsByRole() {
        let slideMenu = [];
        slideMenu = [...this.loggedInOptions, ...this.commonOptions, ...(true ? this.eventCommonOptions : this.enterpriseCommonOptions)];
        slideMenu = [...slideMenu, ...this.commonBuyerOptions]; // Buyer options
    }
}
exports.BuyerMenu = BuyerMenu;
