/// <reference types="cypress"/>

import { email, senha } from '../fixtures/adm.json'
import produtosPage, { buscar_produto } from '../support/page-objects/produtos.page'

describe('Funcionalidade checkout', () => {
    beforeEach(() => {
        cy.setCookie('ebacStoreVersion', 'v2');
        cy.login( email, senha );
        cy.visit('/')
    });
    it('Deve validar produto no carrinho', () => {
        var produto = 'tênis esportivo'
        produtosPage.buscar_produto(produto);
        produtosPage.adicionar_produto();
        cy.get('[data-testid="remove"]').should('exist')

    });
});