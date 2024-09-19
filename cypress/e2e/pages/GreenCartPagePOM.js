class greenCart {
    selector = {
        url: 'https://rahulshettyacademy.com/seleniumPractise/#/',
        sbType: '[class="search-keyword"]',
        sbBtn: '[class="search-button"]',
        prodList: '[class="products"]>.product',
        prodName: 'h4',
        addToCartBtn: '[class="product-action"]>button',
        cartBagBtn: '[alt="Cart"]',
        proceedCKO: 'PROCEED TO CHECKOUT',
        tableRow: 'table[class="cartTable"]>tbody>tr',
        tableData: 'td',
        placeOrder: 'Place Order',
        country: 'select',
        checkBx: '[class="chkAgree"]',
        placeOrder1: 'Proceed'
    }
    visitUrl() {
        cy.visit(this.selector.url)
    }
    searchForProducts(sb) {
        cy.get(this.selector.sbType).type(sb)
        cy.get(this.selector.sbBtn).click()
        cy.wait(2000)
    }
    addToCart(pr) {
        let productArr = pr.split(",") //productArr=[Strawberry,Pista]
        productArr.forEach((prs, id) => {
            cy.get(this.selector.prodList).each((el, index) => {
                //cy.log(el.find('h4').text())
                if (el.find(this.selector.prodName).text().includes(prs)) {
                    cy.get(this.selector.addToCartBtn).eq(index).click()
                }
            })
        })
    }
    proceedToCKout(prod) {
        let finalProd = prod.split(",")
        cy.get(this.selector.cartBagBtn).click()
        cy.contains(this.selector.proceedCKO).click()
        let tablVal = []
        cy.get(this.selector.tableRow).each((el, index) => {
            //cy.log(el.find('td').eq(1).text())
            //expect(el.find('td').eq(1).text()).include('Pista')
            let txt = el.find(this.selector.tableData).eq(1).text()
            let txtArr = txt.split("-") //Strawberry - 1/4 Kg
            tablVal.push(txtArr[0].trim())
        }).then(() => {
            expect(tablVal).to.have.members(finalProd)
        })
        cy.contains(this.selector.placeOrder).click()
        cy.wait(2000)
        cy.get(this.selector.country).select('India')
        cy.wait(2000)
        cy.get(this.selector.checkBx).click()
        cy.contains(this.selector.placeOrder1).click()
    }
    validation() {
        cy.contains("Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!").should('be.visible')
    }
}

export default greenCart