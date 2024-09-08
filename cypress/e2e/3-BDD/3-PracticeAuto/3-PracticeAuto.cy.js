///<reference types = "cypress"/>

import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

// --------------------Scenarion 1 ----------------------------------

Given('Navigate to Login page',()=>{
    cy.visit('https://practice.automationtesting.in/my-account/')
})

When('Enter login uid and pw',()=>{
    cy.get('[id="username"]').type('productionTest1995@gmail.com')
    cy.get('[id="password"]').type('sonal@1995')
})

And('Click on login Button',()=>{
    cy.get('[name="login"]').click()
})

Then('Verify login page',()=>{
    let email = 'productionTest1995@gmail.com'
    let uid = email.split("@")
    cy.get('strong').should('have.text',uid[0])
})

//-----------------Scenarion 2 ------------------------------

When('Enter login {word} and {word}',(uid,pw)=>{
    cy.get('[id="username"]').type(uid)
    cy.get('[id="password"]').type(pw)
})

Then('Verify login page {word}',(em)=>{
    let email = em
    let uid = email.split("@")
    cy.get('strong').should('have.text',uid[0])
})

//----------------Scenario 3 ---------------------------------

When('Enter login {string} and {string}',(uid,pw)=>{
    cy.get('[id="username"]').type(uid)
    cy.get('[id="password"]').type(pw)
})

Then('Verify login page {string}',(em)=>{
    let email = em
    let uid = email.split("@")
    cy.get('strong').should('have.text',uid[0])
})