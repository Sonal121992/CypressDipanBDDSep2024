class homePage{
    selector ={
        url : 'https://webdriveruniversity.com/Contact-Us/contactus.html',
        firatName : '[name="first_name"]',
        lastName : '[name="last_name"]',
        email : '[name="email"]',
        message : '[name="message"]',
        submitBtn : '[type="submit"]',
        validateText : 'h1'
    }

    visitUrl(){
        cy.visit(this.selector.url)
    }

    formFill(fn,ln,em,msg){
        cy.get(this.selector.firatName).type(fn)
        cy.get(this.selector.lastName).type(ln)
        cy.get(this.selector.email).type(em)
        cy.get(this.selector.message).type(msg)
        cy.get(this.selector.submitBtn).click()
    }

    validation(){
        cy.get(this.selector.validateText).should('have.text',"Thank You for your Message!")
    }


    formFillFixture(cd){
        cy.get(this.selector.firatName).type(cd.fn)
        cy.get(this.selector.lastName).type(cd.ln)
        cy.get(this.selector.email).type(cd.em)
        cy.get(this.selector.message).type(cd.msg)
        cy.get(this.selector.submitBtn).click()
    }
}

export default homePage