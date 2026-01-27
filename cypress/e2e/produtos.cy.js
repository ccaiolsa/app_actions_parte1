/// <reference types="cypress"/>

import { highToLow, lowToHigh, alfabetica } from '../fixtures/qa/adm.json'
import { products } from '../fixtures/filtro.json'
import { selecionar_filtro, acessar_filtro } from '../support/page-objects/filtro.page'

describe('Teste UI utilizando Variáveis de Ambiente', () => {
    beforeEach(() => {
        cy.setCookie('ebacStoreVersion', Cypress.env("ebacStoreVersion"));
        cy.visit('/')
        cy.get('[data-testid="search-products"]').click()

    });
    it.only('Deve validar itens ao filtrar a pesquisa Low to High', () => {
        cy.intercept('GET', `**/public/${Cypress.env(lowToHigh)}`)
        cy.get('[data-testid="SortBy"]').click()
        cy.get('[style="flex-direction: row; align-items: center; justify-content: space-between; flex: 1 1 0%;"] > .css-146c3p1').eq(1).click()
        cy.get('[data-testid="productDetails"]').should('have.length.greaterThan', 1)
    });

    it('Deve validar itens adicionado no carrinho', () => {
        

    });
    
});