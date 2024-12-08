import { it } from 'mocha'
import * as object from '../object/pages.js'

before(() => {
    cy.config("defaultCommandTimeout", 500000)

})

describe('dashboard', () => {
  beforeEach(() => { //hook
        cy.login('standard_user', 'secret_sauce')
    })
    it('add produk', () => {
        cy.get('button[name="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('span[data-test="shopping-cart-badge"]').click()
        cy.get('button[name="checkout"]').click()
        cy.get('input[name="firstName"]').type('John')
        cy.get('input[name="lastName"]').type('Doe')
        cy.get('input[name="postalCode"]').type('12345')
        cy.get('input[name="continue"]').click()
        cy.get('button[name="finish"]').click()
        cy.get('h2[data-test="complete-header"]').should('be.visible')
    })

})