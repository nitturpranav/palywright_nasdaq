import { Given, When, Then } from "@cucumber/cucumber";
import { HomePage } from "../../pages/homePage";
import { fixture } from "../../hooks/pageFixture";

let homePage: HomePage;

Given(`User navigates to Yahoo Finance Page`, async function () {
    homePage = new HomePage(fixture.page);
    await homePage.navigateToHomePage();
});

When(`User searches for {string}`, async function (search: string) {
    await homePage.searchGoogleFinance(search);
});

Then(`Validation of Content {string}`, async function (searchValidation: string) {
    await homePage.Validate(searchValidation);
});
