describe('https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do', () =>{
  describe('Load prestamos', () =>{
    it('should show the texto Nuestra mejor tasa', ()=>{
      cy.visit('https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do');


      /*
      Fecha de disposición: 5 de mayo del 2020
      Monto del Crédito: 20,000
      Forma de pago: Mensual
      Plazo: 2 años
      Interés: 15.0%
      */

      //Colocar input
      //Inspeccionamos pagina y copiamos su id
      cy.get('#dispDate')
        .clear()
        .type('05/05/2020')

      cy.contains('Fecha de disposición:').click();
      //cy.window().click('right')  

      cy.get('#creditAmount')
        .clear()
        .type(20000)        

      cy.get('#paymentMethod')
        .select('1')      

      cy.get('#period')
        .select('2')     
        
      cy.get('#rate')
        .clear()
        .type(15)   
        
      //Buscamos donde dice descuentos y damos click
      cy.contains('Calcular').click();

      cy.get('#shortEncuestaNafin-close').click();
      
      cy.get('#resultadosSimulador').find('tr').should('have.length', 25)
        
      /*cy.get('#loan_term')
        .select('24')
      
      cy.contains('Nuestra mejor tasa').should('be.visible')*/

    })
  })

})