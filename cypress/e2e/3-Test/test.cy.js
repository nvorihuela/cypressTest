describe('Test Nadia', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('https://www.freerangetesters.com/')
    })
  
    it('test ok', () => {
      cy.title().should('include','Free Range Testers')
      cy.xpath('//*[@id="page_header"]/div/section/div/header/nav/ul/li[1]/a').click()
      cy.contains('¿Con qué curso empiezo?').click()
    })

    it('test fail', () => {
      cy.title().should('equal','Free Range Tes')
      cy.xpath('//*[@id="page_header"]/div/section/div/header/nav/ul/li[1]/a').click()
      cy.contains('¿Con qué curso empiezo?').click()
    })
}
)