/// <reference types="cypress" />
describe('test items link',()=>{
    beforeEach(()=>{
        cy.visit('/collection');
    })
    it('check how links works',()=>{
        cy.get('.item').then(items=>{
            const randomItem=Cypress._.sample(items.toArray())!;
            const id=randomItem.getAttribute('data-id');
            cy.wrap(randomItem).click();
            cy.url().should('eq',`${Cypress.config('baseUrl')}/collection/${id}`)
        })  
    })
})
