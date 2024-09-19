///<reference types ="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import homePage from "../../pages/contactUsPage"
import data from "../../../fixtures/contactUsPayload.json"

let hp = new homePage
let currentData;


Given('I navigate to contact us page', () => {
     hp.visitUrl()
})

When('I enter data from datatable {word} , {word}, {word}, {word}', (fn, ln, em, msg) => {
hp.formFill(fn,ln,em,msg)
})


Then('I validate contact us page', () => {
hp.validation()
})


//-----------scenario 2 --------------------

Given('I navigate to contact us page using fixture {word}',(index)=>{
currentData= data[index]
hp.visitUrl()
})

When('I enter data from fixture',()=>{
    hp.formFillFixture(currentData)
})

