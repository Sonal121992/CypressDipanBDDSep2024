///<reference types = "cypress"/>

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import greenCart from "../../pages/GreenCartPagePOM";

let GC = new greenCart

Given("Navigate to we page green cart POM",()=>{
   GC.visitUrl()
})

When("Type {word} in search box click POM",(sb)=>{
   GC.searchForProducts(sb)
})

And("Select {word} and add to cart POM",(pr)=>{
   GC.addToCart(pr)
})

And("Proceed to checkout {word} POM",(prod)=>{
   GC.proceedToCKout(prod)
})

Then("Validate checkout page POM",()=>{
   GC.validation()
})