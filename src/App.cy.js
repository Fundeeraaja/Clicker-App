import { click } from '@testing-library/user-event/dist/click'
import { slowCypressDown } from 'cypress-slow-down'
import React from 'react'
import App from './App'




describe('<App />', () => {
  it('renders', () => {
    slowCypressDown(400)
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />)

    cy.get('*[class^="cute"]')
    .click()
    .click()
    .click()
    .click()
    .click()
    .click()
    .click()

    cy.get('*[id^="double"]')
    .click()

    cy.get('*[id^="reset"]')
    .click()
    
  })
})