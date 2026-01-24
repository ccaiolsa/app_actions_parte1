///<reference types="cypress" />

// Teste utilizando appActions

const usuario = require('../fixtures/adm.json')

describe('Funcionalidade login', () => {

  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'v2')
    cy.login(usuario.email, usuario.senha)
    cy.visit('/')
  });

  it('Realizar login com sucesso', () => {
    cy.get('[href="/Tab/Account"]').click()
    cy.get('[data-testid="CustomerEmail"]').should('contain', usuario.email)

  })
})