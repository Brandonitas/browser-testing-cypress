describe('https://acid.com.mx/', () =>{
  describe('Page loads', () =>{
    it('should load the page', ()=>{
      cy.visit('https://acid.com.mx/');
    })
  })

  describe('Productos destacados', () =>{
    it('should have productos destacados', ()=>{
      //CONTENTA EL TEXTO
      cy.contains('PRODUCTOS DESTACADOS');
    })
  })

  describe('Descuentos', () =>{
    it('should load descuentos page', ()=>{
      //CONTENTA EL TEXTO
      cy.visit('https://acid.com.mx/')

      //Buscamos donde dice descuentos y damos click
      cy.contains('Descuentos').click();

      //Verificamos que la url incluya el texto de descuentos
      cy.url().should('include', '/descuentos')
    })
  })

})