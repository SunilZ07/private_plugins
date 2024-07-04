"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuyerMenu = void 0;
class BuyerMenu {
    getMenuOptionsByRole() {
        //#region Unsed/Mis
        let settingOption = [
            { title: 'Settings', url: '/settings', ionicon: "settings-sharp", displayOrder: 450 },
        ];
        let languageOption = [
            { title: 'GlobalStrings.Languages', url: '/language', ionicon: "language-outline", displayOrder: 400 },
        ];
        //theme menu
        let themeMenu = [
            { title: 'Mobile.ThemeUI', url: 'theme-ui', ionicon: 'rose-sharp', displayOrder: 450 },
        ];
        //#endregion
        //#region Role Independepent
        let requireAuthenticationMenu = [
            { title: 'GlobalStrings.Help', url: '/help', ionicon: "help-circle", displayOrder: 100 }, //component:Help,		
            { title: 'GlobalStrings.ContactUs', url: '/contact-us', ionicon: "mail", displayOrder: 200 }, // component: ContactUsPage,
            { title: 'AdminStrings.About', url: '/about-us', ionicon: "create", displayOrder: 300 }, // component: AboutUsPage,
            ...themeMenu
        ];
        let homePageOption = [
            { title: 'GlobalStrings.Home', url: '/home', ionicon: "home", displayOrder: 10 }, // component: HomePage,
        ];
        let commonOptions = [
            ...requireAuthenticationMenu,
            ...homePageOption,
            { title: 'Mobile.BrowseListings', url: 'home/listings', ionicon: "list", displayOrder: 40 }, // component: ListingPage,
            { title: 'GlobalStrings.Categories', url: 'home/sort-by-category', ionicon: "create", displayOrder: 90 }, // component:SortByCategory
        ];
        let eventCommonOptions = [
            { title: 'GlobalStrings.BrowseEvents', url: 'home/browse-events', ionicon: "list", displayOrder: 30 }, // component: BrowseEvents,
        ];
        let enterpriseCommonOptions = [];
        let loggedInOptions = [
            { title: 'GlobalStrings.MyAccount', url: 'my-account', ionicon: "newspaper", displayOrder: 20 }, // component: MyAccountPage,
            { title: 'GlobalStrings.LogOff', url: '/login', ionicon: "log-out", displayOrder: 500 }
            // { title: 'lblAccountSummary', url: '/account-summary', ionicon: "newspaper", displayOrder: 25 }, // component: AccountSummaryPage, specific for astock
        ];
        let logoutMenuOptions = [
            { title: 'GlobalStrings.SignIn', url: '/login', ionicon: "log-in", displayOrder: 500 }, // component: LoginPage,		
        ];
        //#endregion
        //#region Buyer
        let commonBuyerOptions = [
            { title: 'Mobile.MyActiveBids', url: 'home/my-active-bids', ionicon: "list", displayOrder: 95 }, //component: MyActiveBidsPage,	
        ];
        //#endregion
        //#region Seller
        let commonSellerOptions = [
            { title: 'GlobalStrings.MyListings', url: 'home/my-listings', ionicon: "list", displayOrder: 84 }, // component: MyListingPage,
            { title: 'Mobile.DraftListings', url: 'home/draft-listings', ionicon: "list", displayOrder: 86 }, // component: MyDraftListingPage,
        ];
        let createListingOption = [
            { title: 'GlobalStrings.CreateListing', url: '/create-listing', ionicon: "create", displayOrder: 80 }, // component: CreateListingPage Create and Edit listing page - US19808,
        ];
        let eventSellerOptions = [
            { title: 'GlobalStrings.CreateEvent', url: '/create-event', ionicon: "create", displayOrder: 60 },
            { title: 'GlobalStrings.CreateLot', url: '/create-lot', ionicon: "create", displayOrder: 70 },
            { title: 'GlobalStrings.MyEvents', url: 'home/published-events', ionicon: "list", displayOrder: 85 },
        ];
        //#endregion
        let slideMenu = [];
        //slideMenu = [...loggedInOptions, ...commonOptions, ...(true ? eventCommonOptions : enterpriseCommonOptions)]
        slideMenu = [...eventSellerOptions]; // Buyer options
        console.log("slideMenu from Plugin", slideMenu);
        return slideMenu;
    }
    UserHasRole(LoggedUserRoles, roleName) {
        roleName = roleName.toLowerCase();
        return LoggedUserRoles.find(x => x.Name.toLowerCase() == roleName) == roleName ? true : false;
    }
    SumCall() {
        return 5 + 8;
    }
}
exports.BuyerMenu = BuyerMenu;
