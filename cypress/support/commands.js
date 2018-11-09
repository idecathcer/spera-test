// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add("signin",(email) => {
    const formData = new FormData()
    formData.set('controller:', 'authentication')
    formData.set('SubmitCreate:', 1)
    formData.set('ajax:', true)
    formData.set('email_create:', email)
    formData.set('back:', 'my-account')
    formData.set('token:', 'ce65cefcbafad255f0866d3b32d32058')
    cy.request({
        method: 'POST',
        url: "http://automationpractice.com/index.php?controller=authentication",
        body: formData,
        headers:{
            Accept: 'application/json, text/javascript, */*; q=0.01'
        }
    }).then((resp) => {
        console.log(resp.body)
    })
})