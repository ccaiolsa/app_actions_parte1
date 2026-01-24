/// <reference types="cypress"/>

import { email, senha } from '../fixtures/adm.json'

//checkout utilizando App Actions

describe('App Actions - Funcionalidade checkout', () => {
    beforeEach(() => {
        cy.setCookie('ebacStoreVersion', 'v2');
        cy.login( email, senha );
        cy.visit('/')

    });
    it('Deve validar produto no carrinho', () => {
        var produtoId = "67e2bf49ad0a28d184fb08d4"
        var quantidade = 1

        cy.carrinho(produtoId, quantidade);

        cy.window().then((win) => {
        expect(win.localStorage.getItem('token')).to.not.be.null;
    });

    });
});