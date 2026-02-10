/// <reference types="cypress"/>

export const filtrar = {
    selecionar_filtro(nomeFiltro){
        cy.get('[data-testid="SortBy"]', {timeout: 5000}).click()
        cy.get('.r-13hkvm').contains(nomeFiltro).click()
        return cy.get('[data-testid="productDetails"]')
    },
    selecionar_produto(linha, coluna){
        cy.get(`:nth-child(${linha}) > .r-18u37iz > :nth-child(${coluna}) > [data-testid="productDetails"]`).click()
        cy.get('[data-testid="addToCart"]').click()
    },
    remover_produto(){
        return cy.get('[data-testid="removeItem"]').click()

    }
}