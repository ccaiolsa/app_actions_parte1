/// <reference types="cypress"/>

export const filtrar = {
    selecionar_filtro(){
        cy.get('[data-testid="SortBy"]', {timeout: 4000}).click()
        cy.get('[style="flex-direction: row; align-items: center; justify-content: space-between; flex: 1 1 0%;"] > .css-146c3p1').eq(1).click()
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