/// <reference types="cypress"/>

class Cadastrar {
    get primeiro_nome() { return cy.get('[data-testid="firstName"]')};
    get sobrenome(){ return cy.get('[data-testid="lastName"]')};
    get telefone(){ return cy.get('[data-testid="phone"]')};
    get email(){ return cy.get(':nth-child(7) > .css-175oi2r > [data-testid="email"]')};
    get senha(){ return cy.get(':nth-child(8) > .css-175oi2r > [data-testid="password"]')};
    get senha2(){ return cy.get('[data-testid="repassword"]')};
    get btnLogin(){ return cy.get('[data-testid="create"]')}

    cadastro_usuario (nome, sobrenome, telefone, email, senha){
        this.primeiro_nome.type(nome)
        this.sobrenome.type(sobrenome)
        this.telefone.type(telefone)
        this.email.type(email)
        this.senha.type(senha)
        this.senha2.type(senha)
        this.btnLogin.click()

    }
}



module.exports = new Cadastrar