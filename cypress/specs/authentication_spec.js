describe('Register a new account',() => {
    before(()=> {
        cy.visit('/')
        cy.get('.login').click()
    })

    beforeEach(()=>{
        cy.get('#create-account_form').as('form')
        cy.get('#email_create').clear()
    })

    it('should cause error with no email provided',()=>{
        //here we deliberately cause a failure to see how it will be rescued
        cy.get('@form').scrollIntoView().find("h3").should('have.text','Hello world!')
        cy.get('@form').submit()
        cy.get('#create_account_error')
    })

    it('should cause a validation error with incorrect email',()=>{
        let unacceptable_email = '123456.?DAS'
        cy.get('#email_create').type(unacceptable_email)
        cy.get('#create_account_error')
        cy.get('@form').submit()
    })

    it('should cause an error with an email already existed',()=>{
        let existing_email = 'test@test.test'
        cy.get('#email_create').type(existing_email)
        cy.get('@form').submit()
        cy.get('#create_account_error')
    })

    it('should pass to the next form with unique email',()=>{
        let correct_email = 'hello@cypress.io'
        cy.get('#email_create').type(correct_email)
        cy.get('@form').submit()
        cy.get('#account-creation_form').find('#email').should('have.value',correct_email)
    })

});