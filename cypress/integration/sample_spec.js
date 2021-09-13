describe('My first test', () => {
    it(`Doesn't do much`, () => {
        expect(true).to.equal(true)
    })
})

describe('My second test', () => {
    it(`Also doesn't do much`, () => {
        expect(true).to.equal(false)
    })
})

describe('My first real test on the app', () => {
    it('Visits my React Gallery', () => {
        cy.visit('https://localhost:3000')
    })
})