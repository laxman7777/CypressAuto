/// <reference types="cypress" />
describe("My first Test suite test case execution",function()
{

    it("my first test case",function()
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get(".search-keyword").type("Ca")
        cy.wait(2000)

        //first assertion //lengt is 4 for failed scenario i done 5
        cy.get(".product:visible").should('have.length',5)    //Cypress assertion- only visible product display.
        // parent child chaining
        // we learn find, eq, contain in get command
        //we can use alias in cypress
        cy.get(".products").as("productlocator")
        cy.get("@productlocator").find(".product").eq(2).contains("ADD TO CART").click()   //eq is for indexing and find is use to find locator in parent locator

        cy.get("@productlocator").find(".product").each(($el, index, $list) => {
            // $el is a wrapped jQuery element
            const vegText=$el.find("h4.product-name").text()
            if (vegText.includes("Cashews")) {
              // wrap this element so we can
              // use cypress commands on it
              cy.wrap($el).contains("ADD TO CART").click()
            } 
            
          })

          //Print logtxt on cyperess terminal and cypress log
          /*const logtext=cy.get(".brand.greenLogo").text()
          console.log(logtext)
          cy.log(logtext) */

          //resolve the promicess as it is not cypree command
          cy.get(".brand.greenLogo").then(function(logelement)  //logelement is variable 
          {
              cy.log(logelement.text())
              console.log("this is test case execution")  // print on F12 console- this is asyn but you have to resolve promicess for syn nature.
          } )

          //validate logtext is correct value or not- second assertion
          cy.get(".brand.greenLogo").should("have.text","GREENKART")

          //checkout scenario
          cy.get('.cart-icon > img').click()
          cy.contains("PROCEED TO CHECKOUT").click()
          cy.contains("Place Order").click()

    } )
})