import * as object from '../object/pages.js'

before(() => {
  cy.config("defaultCommandTimeout", 100000)

})

describe('Login', () => {
  beforeEach(() => { //hook
    cy.visit(Cypress.env('baseUrl'))
  })
  it('username invalid', () => {
    cy.get(object.input_username).type('testing')
    cy.get(object.input_password).type('secret_sauce')
    cy.get(object.btn_login).click()
    cy.get('.error-message-container').should('be.visible')
  })
  // it('password invalid', () => {
  //   cy.get(object.input_username).type('standard_user')
  //   cy.get(object.input_password).type('testing')
  //   cy.get(object.btn_login).click()
  //   cy.get('.error-message-container').should('be.visible')
  // })
  // it('username & password kosong', () => {
  //   cy.visit(Cypress.env('baseUrl'))
  //   cy.get(object.input_username).type('')
  //   cy.get(object.input_password).type('')
  //   cy.get(object.btn_login).click()
  //   cy.get('.error-message-container').should('be.visible')
  // })
  // it('passes', () => {
  //   cy.login('standard_user', 'secret_sauce')
  // })
})