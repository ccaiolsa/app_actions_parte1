/// <reference types="cypress"/>

import { faker } from '@faker-js/faker'
const usuario = require('../support/page-objects/cadastro.page')

describe('Page Objects - Funcionalidade login', () => {

    beforeEach(() => {
        cy.setCookie('ebacStoreVersion', 'v2')
        cy.visit('/')
        cy.get('[href="/Tab/Account"]').click()
        cy.get('[data-testid="signUp"] > .css-146c3p1').click()
    });

    it('validar cadastro de novos usuários', () => {
        var nome = faker.person.firstName();
        var sobrenome = faker.person.lastName();
        var telefone = faker.phone.number();
        var email = faker.internet.email();
        var senha = faker.internet.password();

        usuario.cadastro_usuario(nome, sobrenome, telefone, email, senha)
        cy.get('[href="/Tab/Account"]').click()
        cy.get('[data-testid="CustomerName"]').should('contain', `${sobrenome} ${nome}`)
        
    });
});