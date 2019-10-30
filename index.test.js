/**
 * Testing API functionality using Supertest
 */

const request = require('supertest');

describe('Testing API functions', () => {
    const app = require('./')
    it('Testing: request without data should return error 400', async done  =>{
        const res = await request(app)
            .post('/analyze')
            .send();
        expect(res.statusCode).toEqual(400)
        done()
    })

    it('Testing: Successful request gives correct status code', async done  =>{
        const res = await request(app)
            .post('/analyze')
            .send({text: ""});
        expect(res.statusCode).toEqual(200)
        done()
    })
    
    it('Testing: Successful request gets all the expected properties', async done  =>{
        const res = await request(app)
            .post('/analyze')
            .send({text: ""});
        expect(res.body).toHaveProperty("characterCount")
        expect(res.body).toHaveProperty("wordCount")
        expect(res.body).toHaveProperty("textLength")
        done()
    })


    
    it('Testing: Successful request gets correct data return', async done  =>{
        const res = await request(app)
            .post('/analyze')
            .send({text: "   "});
        expect(res.body).toStrictEqual({textLength: {withSpaces:3 , withoutSpaces:0} , wordCount :0 ,characterCount: []})
        
        done()
    })


    it('Testing: Successful request with a number gets correct data return', async done  =>{
        const res = await request(app)
            .post('/analyze')
            .send({text: "5"});
        expect(res.body).toStrictEqual({textLength: {withSpaces:1 , withoutSpaces:1} , wordCount :1 ,characterCount: []})
        
        done()
    })


})