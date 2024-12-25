import { Given,When,Then } from "@cucumber/cucumber";
import { HomePage } from "../../pages/homePage";
import { fixture } from "../../hooks/pageFixture";

let homePage : HomePage;

Given(`user navigates to Leads Bridge Home Page`,async function()
{
    homePage = new HomePage(fixture.page)
    await homePage.navigateToHomePage();
   })

When(`User should be able to enter  {string},{string},{string}`,async function(firstName:string,lastName:string,email:string)
{
    await homePage.fillOutForm(firstName,lastName,email);
})

Then(`Validation of text`,async function(){
    await homePage.Validate();
})