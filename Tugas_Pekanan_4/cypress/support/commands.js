// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
import * as object from '../e2e/object/pages.js'
Cypress.Commands.add("login", (username, password) => { 
    cy.visit(Cypress.env('baseUrl'))
    cy.get(object.input_username).type('standard_user')
    cy.get(object.input_password).type('secret_sauce')
    cy.get(object.btn_login).click()
    cy.get(object.img_logo).should('be.visible')
    })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })