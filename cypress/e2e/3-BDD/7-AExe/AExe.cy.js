///<reference types = "cypress"/>

import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

import homepage from "../../pages/AEPage"

import data from "../../../fixtures/AEPayload"

let hp = new homepage;
let currentData;

Given('I navigate to signup page {word} and enter for new user signup and click on signup button', (index) => {
    currentData = data[index]
    hp.signUp(currentData.name, currentData.email)

})

When("I fill the data on enter account information page and click on create account button", () => {
    hp.creataUser(currentData)
})

And("I validate account is created", () => {
    hp.validation(hp.selector.accCreatedMsg, 'Account Created!')
    hp.btnClick(hp.selector.continueBtn)
})

Then("I verify for login to your account for same user", () => {
    hp.btnClick(hp.selector.logout)
    hp.btnClick(hp.selector.loginSignUpBtn)
    hp.loginUser(currentData)
    hp.validateLoginUser(currentData)
})