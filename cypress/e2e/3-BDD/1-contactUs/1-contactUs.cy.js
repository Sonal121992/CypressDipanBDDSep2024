///<reference types = "cypress"/>

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given('Navigate to webpage', () => {
    cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
})

When('Enter the data to all fields', () => {
    cy.get('[name="first_name"]').type('Sonal')
    cy.get('[name="last_name"]').type('Khante')
    cy.get('[name="email"]').type('sonalk@gmail.com')
    cy.get('[name="message"]').type('I am learning cypress using BDD')
})

And('Click on the Submit Button', () => {
    cy.get('[value="SUBMIT"]').click()
})

Then('Verify the validate message', () => {
    cy.get('h1').should('have.text', 'Thank You for your Message!')
})

When('Enter the data from data table for all fields', (datatable) => {
    datatable.hashes().forEach((el) => {
        cy.get('[name="first_name"]').clear().type(el.fn)
        cy.get('[name="last_name"]').clear().type(el.ln)
        cy.get('[name="email"]').clear().type(el.email)
        cy.get('[name="message"]').clear().type(el.msg)
    });
})