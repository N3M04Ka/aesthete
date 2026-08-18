/// <reference types="cypress" />

const emailsWithSpaces=[
  "user name@example.com",
  "user@exam ple.com",
]
const invalidEmails = [
  // Missing parts & "@" symbol errors
  "plainaddress",
  "@missinglocal.com",
  "username@",
  "username@com",
  "username@.com",
  "username@example..com",
  "username@@example.com",
  "user@sub@example.com",
  "@",
  '""@example.com',
  "user#domain.com",
  "user&domain.com",

  // Leading, trailing, and consecutive dots
  ".username@example.com",
  "username.@example.com",
  "user..name@example.com",
  "username@example.com.",
  "username@.example.com",
  ".user.name@example.com",
  "user.name.@example.com",

  // Illegal special characters
  "user\\name@example.com",
  "user<name>@example.com",
  "user(comment)@example.com",
  "user:name@example.com",
  "user;name@example.com",
  'user"name@example.com',
  "user,name@example.com",
  "user@domain,com",

  // Domain & TLD violations
  "user@-domain.com",
  "user@domain-.com",
  "user@domain.c",
  "user@domain.123",
  "user@domain_name.com",
  "user@.sub.domain.com",
  "user@sub..domain.com",

];

describe("email validation",()=>{
    beforeEach(()=>{
        cy.visit(`${Cypress.config('baseUrl')}/auth/login`);
    })
    it('empty email',()=>{
        cy.get('[data-test=password-input]').type('qwertyaaaa1')
        cy.get('.submitBtn').click();
        cy.get('.snackbar').should('exists');
        cy.get('.snackbar').should('contain.text','Invalid email');
    })
    it('emails with spaces',()=>{
        cy.get('[data-test=password-input]').type('aaaaaaaaa123');
        emailsWithSpaces.forEach(err=>{
            cy.get('[data-test=email-input]').invoke('val',err).trigger('change');
            cy.get('.submitBtn').click();
            cy.get('.snackbar').should('be.visible');
            cy.get('.snackbar').should('contain.text','Invalid email')
            cy.get('[data-test=email-input]').clear();
            cy.get('.snackbar>button').click();
        })
    })
    it("invalid emails",()=>{
        cy.get('[data-test=password-input]').type('abc123');
        invalidEmails.forEach(err=>{
            cy.get('[data-test=email-input]').type(err);
            cy.get('.submitBtn').click();
            cy.get('.snackbar').should('be.visible');
            cy.get('.snackbar').should('contain.text','Invalid email')
            cy.get('[data-test=email-input]').clear();
            cy.get('.snackbar>button').click();
        })
    })
})
describe("password validation",()=>{
    beforeEach(()=>{
        cy.visit(`${Cypress.config('baseUrl')}/auth/login`);
    });

    it('short password',()=>{
        cy.get('[data-test=email-input]').type('somevalidemail@mail.com');
        cy.get('[data-test=password-input]').type('aaaa12');
        cy.get('.submitBtn').click();
        cy.get('.snackbar').should('be.visible');
        cy.get('.snackbar').should('contain.text','Password to short');
    })

    it('long password',()=>{
        cy.get('[data-test=email-input]').type('somevalidemail@mail.com');
        cy.get('[data-test=password-input]').type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa121');
        cy.get('.submitBtn').click();
        cy.get('.snackbar').should('be.visible');
        cy.get('.snackbar').should('contain.text','Password to long');
    })

    it('forget to use digits',()=>{
        cy.get('[data-test=email-input]').type('somevalidemail@mail.com');
        cy.get('[data-test=password-input]').type('aaaaaaaaaaaa');
        cy.get('.submitBtn').click();
        cy.get('.snackbar').should('be.visible');
        cy.get('.snackbar').should('contain.text','Use digits');
    })

    it('forget to use letters',()=>{
        cy.get('[data-test=email-input]').type('somevalidemail@mail.com');
        cy.get('[data-test=password-input]').type('1111111111');
        cy.get('.submitBtn').click();
        cy.get('.snackbar').should('be.visible');
        cy.get('.snackbar').should('contain.text','Use letters');
    })
})
