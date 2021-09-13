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

// must run client and server before running test, 
// otherwise it won't work
describe('My first real test on the app', () => {
    it('Visits my React Gallery', () => {
        cy.visit('localhost:3000')
    })
})