// describe('My first test', () => {
//     it(`Doesn't do much`, () => {
//         expect(true).to.equal(true)
//     })
// })

// describe('My second test', () => {
//     it(`Also doesn't do much`, () => {
//         expect(true).to.equal(false)
//     })
// })

// must run client and server before running test, 
// otherwise it won't work
describe('My first real test on the app', () => {
    it('Visits my React Gallery', () => {
        cy.visit('localhost:3000')
    })
})

describe('Testing for content on the app', () => {
    it('finds the content "like"', () => {
        cy.visit('localhost:3000')
        cy.contains('like')
    })
})

describe('Testing links on the app', () => {
    it('Clicks the link "Like"', () => {
        cy.visit('localhost:3000')
        cy.contains('like').click()
    })
})

describe(
    'Testing to see if clicking the image toggles to the description', 
    () => {
        it('Gets the description', () => {
            cy.visit('localhost:3000')
            cy.get('.test')
            cy.focused().click()

        })
})

