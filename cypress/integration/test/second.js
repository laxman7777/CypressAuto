/// <reference types="cypress" />
describe("My second suite test case execution",function()
{
    it("My first test case execution from second suite",function()
    {
        cy.log("test case execution started")
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //checkbox checked
        cy.get("#checkBoxOption1").check()  //click also use but check is more reliable
        cy.get("#checkBoxOption1").uncheck() //unchecked
        //use asseration is checkbox checked or not
        cy.get("#checkBoxOption1").check().should("be.checked").and("have.value","option1")

        //assertion unchecked
        cy.get("#checkBoxOption1").uncheck().should("not.be.checked").should("have.value","option1")
    })
})