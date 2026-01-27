/// <reference types="cypress"/>

class FiltroPage {
    acessar_filtro(){
        return cy.get('[data-testid="SortBy"]').click()
    };
    selecionar_filtro(){

    }

}

module.exports = new FiltroPage