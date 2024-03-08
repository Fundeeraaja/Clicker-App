import Autocomplete from './autocomplete';
import countries from '../data/countries';


describe('Test the autocomplete functionality', () => {
beforeEach(() => {
cy.mount(<Autocomplete countries={countries} />);
})


it('check everything is working in ui', () => {
cy.get('[data-cy="heading"]').contains('Search your country:');
cy.get('input[type="text"]').should('have.value', '');
cy.get('[data-cy="suggestion-list"]').should('not.exist');
})


it('check filter is working', () => {
cy.get('input[type="text"]').type('no');
cy.get('[data-cy="suggestion-list"]').should('be.visible').as('suggestList');
cy.get('@suggestList').should('have.length', 1);
})


it('check selections are working', () => {
cy.get('input[type="text"]').as('inputText');
cy.get('@inputText').type('no').type(Cypress._.repeat('{downArrow}{downArrow}', 1));
cy.get('[data-cy="suggestion-list"] li:nth-child(3)').should('have.class', 'active');
cy.get('@inputText').type(Cypress._.repeat('{upArrow}', 1));
cy.get('[data-cy="suggestion-list"] li:nth-child(2)').should('have.class', 'active');
cy.get('[data-cy="suggestion-list"] li:nth-child(2)').click();
cy.get('input[type="text"]').should('have.length', 1);
cy.get('[data-cy="suggestion-list"]').should('not.exist');
})


})