/// <reference types="cypress" />
describe("My siq4l suite test case execution",function()
{
    it("My first test case execution from siq4l suite",function()
    {
        cy.log("test case execution started")
        cy.visit("http://10.5.0.9:9080/ilg-fulfillment-mock/FulfillmentService")
       // cy.title().should('eq', 'BWS DEV Instance') //expected BWS DEV Instance to equal My SIQ4L Application

    })
})