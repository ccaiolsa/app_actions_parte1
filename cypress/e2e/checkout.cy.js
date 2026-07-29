/// <reference types="cypress"/>

import { email, senha } from '../fixtures/adm.json'

//checkout utilizando App Actions

describe('App Actions - Funcionalidade checkout', () => {
    beforeEach(() => {
        cy.setCookie('ebacStoreVersion', 'v2');
        cy.visit('/')

    });
    it('Deve validar produto no carrinho', () => {
        const produtoId = "683793a7eeee3279c776fa2b"
        const quantidade = 1

        // Para pegar ter acesso de usuário cadastrado + ter acesso ao userId
        // O userId ajuda a estabelecer o endpoint para aonde o produto será cadastrado
        cy.request({
            method: "POST",
            url: "http://lojaebac.ebaconline.art.br/public/authUser",
            body: {
                email: email,
                password: senha
            }
        }).then((response) => {
            const token = response.body.data.token;
            const userId = response.body.data._id;
            window.localStorage.setItem('token', token)

            cy.carrinho(produtoId, quantidade, userId);
            cy.window().then((win) => {
                expect(win.localStorage.getItem('token')).to.not.be.null;
            });
        })

            
        });
    });