/// <reference types="cypress"/>

class ProdutosPage {
    buscar_produto(produto){
        cy.get('[href="/Tab/Browse"]').click()
        cy.get('[data-testid="searchInput"]').type(produto)
        
    };
    adicionar_produto(){
        cy.get('[style="padding: 8px;"] > :nth-child(1) > .r-18u37iz > :nth-child(1) > [data-testid="productDetails"]').click()
        cy.get('[data-testid="addToCart"]').click()
    }
}

module.exports = new ProdutosPage