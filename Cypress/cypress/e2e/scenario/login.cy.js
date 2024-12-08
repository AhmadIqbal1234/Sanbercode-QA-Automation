
import * as object from '../object/pages.js'

before(() => {
  cy.config("defaultCommandTimeout", 20000)

})

describe('login', () => {
  it('succes login', () => {
    cy.login('Admin', 'admin123')
    cy.get(object.img_logo).should('be.visible')
  })
})