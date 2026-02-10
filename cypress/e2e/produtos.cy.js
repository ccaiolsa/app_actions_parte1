/// <reference types="cypress"/>

const {fixture}=require('../fixtures/lista_produtos_LH.json')
const { filtrar }=require('../support/page-objects/filtro.page')
const { cart } =require('../fixtures/carrinho.json')
const { success } =require('../fixtures/resposta.json')

describe('Teste UI utilizando Variáveis de Ambiente', () => {
    beforeEach(() => {
        cy.setCookie('ebacStoreVersion', Cypress.env("ebacStoreVersion"));
        cy.visit('/')
        cy.get('[data-testid="search-products"]', {timeout:2000}).click()

    });
    it('Deve validar itens ao filtrar a pesquisa Low to High', () => {
        cy.intercept('GET', `**/public/getProducts?sortBy=LTH`, {fixture: 'lista_produtos_LH.json'})
        filtrar.selecionar_filtro('Price -- Low to high').should('have.length.above', 10)
    });

    it('Deve validar itens adicionado no carrinho', () => {
        cy.intercept('PUT', `**/public/updateCart/${cart._id}`, {fixture: 'carrinho.json'})
        filtrar.selecionar_filtro('Price -- Low to high')
        filtrar.selecionar_produto(2,2)
        cy.get('[data-testid="productName"]').should('exist')

    });

    it('Deve remover produto do carrinho', () => {
        cy.intercept('PUT', `**/public/updateCart/${cart._id}`, {fixture: 'resposta.json'})
        filtrar.selecionar_filtro('Price -- Low to high')
        filtrar.selecionar_produto(2,2)
        filtrar.remover_produto()
        cy.get('[data-testid="emptyCart"]').should('exist')
    
    });
    
});