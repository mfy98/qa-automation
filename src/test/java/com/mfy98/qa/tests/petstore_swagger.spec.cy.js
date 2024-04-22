/* GET METHOD */

describe('Petstore Swagger API Test', () => {
  it('Test GET /pet endpoint', () => {
    cy.request('GET', 'https://petstore.swagger.io/v2/pet/123').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('id', 123)
      expect(response.body).to.have.property('name', 'french bulldog')
      expect(response.body).to.have.property('category')
      expect(response.body.category).to.have.property('id', 0)
      expect(response.body.category).to.have.property('name', 'string')
      expect(response.body).to.have.property('status', 'available')
    })
  })
})
/* GET METHOD */

/* POST METHOD */

describe('Petstore Swagger API Test', () => {
  it('Test POST /pet endpoint', () => {
    const newPet = {
      id: 123,
      name: 'newDoggie',
      category: {
        id: 0,
        name: 'string'
      },
      status: 'available'
    }

    cy.request('POST', 'https://petstore.swagger.io/v2/pet', newPet).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('id', 123)
      expect(response.body).to.have.property('name', 'newDoggie')
      expect(response.body).to.have.property('category')
      expect(response.body.category).to.have.property('id', 0)
      expect(response.body.category).to.have.property('name', 'string')
      expect(response.body).to.have.property('status', 'available')
    })
  })
})

/* POST METHOD */

/* PUT METHOD */

describe('Petstore Swagger API Test', () => {
  it('Test PUT /pet endpoint', () => {
    const updatedPet = {
      id: 123,
      name: 'updatedDoggie',
      category: {
        id: 0,
        name: 'string'
      },
      status: 'available'
    }

    cy.request('PUT', 'https://petstore.swagger.io/v2/pet', updatedPet).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('id', 123)
      expect(response.body).to.have.property('name', 'updatedDoggie')
      expect(response.body).to.have.property('category')
      expect(response.body.category).to.have.property('id', 0)
      expect(response.body.category).to.have.property('name', 'string')
      expect(response.body).to.have.property('status', 'available')
    })
  })
})

/* PUT METHOD */

/* DELETE METHOD */
describe('Petstore Swagger API Test', () => {
  it('Test DELETE /pet endpoint', () => {
    cy.request('DELETE', 'https://petstore.swagger.io/v2/pet/124').then((response) => {expect(response.status).to.eq(200)
      expect(response.body).to.have.property('message', 'Pet deleted')
    })
  })
})
/* DELETE METHOD */
