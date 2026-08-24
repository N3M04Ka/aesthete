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

// describe("email validation",()=>{
//     beforeEach(()=>{
//         cy.visit(`${Cypress.config('baseUrl')}/auth/signUp`);
//         cy.get('[data-test=firstName]').type('firstName');
//         cy.get('[data-test=lastName]').type('lastName');
//         cy.get('[data-test=phone]').type('+12345678910');
//         cy.get('[data-test=password1]').type('aaaaaaaaa123');
//         cy.get('[data-test=password2]').type('aaaaaaaaa123');
//     })
//     it('empty email',()=>{
//         cy.get('.submitBtn').click();
//         cy.get('.snackbar').should('exists');
//         cy.get('.snackbar').should('contain.text','Invalid email');
//     })
//     it('emails with spaces',()=>{
//         emailsWithSpaces.forEach(err=>{
//             cy.get('[data-test=email]').invoke('val',err).trigger('change');
//             cy.get('.submitBtn').click();
//             cy.get('.snackbar').should('be.visible');
//             cy.get('.snackbar').should('contain.text','Invalid email')
//             cy.get('[data-test=email]').clear();
//             cy.get('.snackbar>button').click();
//         })
//     })
//     it("invalid emails",()=>{
//         invalidEmails.forEach(err=>{
//             cy.get('[data-test=email-input]').type(err);
//             cy.get('.submitBtn').click();
//             cy.get('.snackbar').should('be.visible');
//             cy.get('.snackbar').should('contain.text','Invalid email')
//             cy.get('[data-test=email]').clear();
//             cy.get('.snackbar>button').click();
//         })
//     })
// })
// describe("password validation",()=>{
//     beforeEach(()=>{
//         cy.visit(`${Cypress.config('baseUrl')}/auth/signUp`);
//         cy.get('[data-test=firstName]').type('firstName');
//         cy.get('[data-test=lastName]').type('lastName');
//         cy.get('[data-test=phone]').type('+12345678910');
//         cy.get('data-test=email').type('somevalidemail@gmail.com')
//     });
//     it('short password',()=>{
//         cy.get('[data-test=password1]').type('aaaa12');
//         cy.get('[data-test=password2]').type('aaaa12');
//         cy.get('.submitBtn').click();
//         cy.get('.snackbar').should('be.visible');
//         cy.get('.snackbar').should('contain.text','Password is too short');
//     })

//     it('long password',()=>{
//         cy.get('[data-test=password1]').type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa121');
//         cy.get('[data-test=password2]').type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa121');
//         cy.get('.submitBtn').click();
//         cy.get('.snackbar').should('be.visible');
//         cy.get('.snackbar').should('contain.text','Password is too long');
//     })

//     it('forget to use digits',()=>{
//         cy.get('[data-test=password1]').type('aaaaaaaaaaaa');
//         cy.get('[data-test=password2]').type('aaaaaaaaaaaa');
//         cy.get('.submitBtn').click();
//         cy.get('.snackbar').should('be.visible');
//         cy.get('.snackbar').should('contain.text','Use digits');
//     })

//     it('forget to use letters',()=>{
//         cy.get('[data-test=password1]').type('1111111111');
//         cy.get('[data-test=password2]').type('1111111111');
//         cy.get('.submitBtn').click();
//         cy.get('.snackbar').should('be.visible');
//         cy.get('.snackbar').should('contain.text','Use letters');
//     })
//         it('passwords are not the same',()=>{
//         cy.get('[data-test=password1]').type('aaaaaaaa1');
//         cy.get('[data-test=password2]').type('aaaaaaaaa1');
//         cy.get('.submitBtn').click();
//         cy.get('.snackbar').should('be.visible');
//         cy.get('.snackbar').should('contain.text','Passwords are not the same');
//         })
// })
// describe("name validation",()=>{
//     beforeEach(()=>{
//         cy.visit(`${Cypress.config('baseUrl')}/auth/signUp`);
//         cy.get('[data-test=phone]').type('+12345678910');
//         cy.get('data-test=email').type('somevalidemail@gmail.com')
//         cy.get('[data-test=password1]').type('aaaaaaaaa1');
//         cy.get('[data-test=password2]').type('aaaaaaaaa1');
//     });
//     it('short password',()=>{
//         cy.get('[data-test=password1]').type('aaaa12');
//         cy.get('[data-test=password2]').type('aaaa12');
//         cy.get('.submitBtn').click();
//         cy.get('.snackbar').should('be.visible');
//         cy.get('.snackbar').should('contain.text','Password is too short');
//     })

//     it('long password',()=>{
//         cy.get('[data-test=password1]').type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa121');
//         cy.get('[data-test=password2]').type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa121');
//         cy.get('.submitBtn').click();
//         cy.get('.snackbar').should('be.visible');
//         cy.get('.snackbar').should('contain.text','Password is too long');
//     })

//     it('forget to use digits',()=>{
//         cy.get('[data-test=password1]').type('aaaaaaaaaaaa');
//         cy.get('[data-test=password2]').type('aaaaaaaaaaaa');
//         cy.get('.submitBtn').click();
//         cy.get('.snackbar').should('be.visible');
//         cy.get('.snackbar').should('contain.text','Use digits');
//     })

//     it('forget to use letters',()=>{
//         cy.get('[data-test=password1]').type('1111111111');
//         cy.get('[data-test=password2]').type('1111111111');
//         cy.get('.submitBtn').click();
//         cy.get('.snackbar').should('be.visible');
//         cy.get('.snackbar').should('contain.text','Use letters');
//     })
//         it('passwords are not the same',()=>{
//         cy.get('[data-test=password1]').type('aaaaaaaa1');
//         cy.get('[data-test=password2]').type('aaaaaaaaa1');
//         cy.get('.submitBtn').click();
//         cy.get('.snackbar').should('be.visible');
//         cy.get('.snackbar').should('contain.text','Passwords are not the same');
//         })
// })
