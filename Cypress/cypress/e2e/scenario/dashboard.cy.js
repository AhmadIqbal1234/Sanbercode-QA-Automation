import * as object from '../object/pages.js'

before(() => {
  cy.config("defaultCommandTimeout", 20000)

})

describe('dashboard', () => {
  beforeEach(() => { //hook
    cy.login('Admin', 'admin123')
  })
  it('open page recruitment', () => {
    cy.get('a[href*="recruitment"]').click()
  })
  it('type search', () => {
    cy.get('input[placeholder="Search"]').type('Search word')
  })
})