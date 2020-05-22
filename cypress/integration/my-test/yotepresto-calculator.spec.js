describe('https://www.yotepresto.com/prestamos-en-linea', () =>{
  describe('Load prestamos', () =>{
    it('should show the texto Nuestra mejor tasa', ()=>{
      cy.visit('https://www.yotepresto.com/prestamos-en-linea');

      //
      cy.contains('Entendido')
        .click()

      //Colocar input
      //Inspeccionamos pagina y copiamos su id
      cy.get('#amount')
        .clear()
        .type(25000)

      cy.get('#loan_term')
        .select('24')
      
      cy.contains('Nuestra mejor tasa').should('be.visible')

    })
  })

})