const request = require('supertest')
const server = require('../api/server')
const db = require('../database/dbConfig')

describe('router tests', () => {
    beforeEach(async () => {
        await db('users').truncate()
    })

    describe('POST registers users', () => {
        test('register user', async () => {
            await db('users').insert({
                username: "testuser"
                , password: "testpassword"
            })

            const users = await db('users');
            // console.log(users[0].username)
            expect(users).toHaveLength(1)
        })

    describe('POST registers correct username', () => {
        test('register user', async () => {
            await db('users').insert({
                username: "testuser"
                , password: "testpassword"
            })

            const users = await db('users');
            // console.log(users[0].username)
            expect(users[0].username).toBe('testuser')
        })
    })

    describe("POST login status test", () => {
        it("returns status 201 and 200", async () => {
          let user = await request(server)
            .post("/api/auth/register")
            .send({ username: "testuser", password: "testpassword" });
    
          expect(user.status).toBe(201);
    
          let login = await request(server)
            .post("/api/auth/login")
            .send({ username: "testuser", password: "testpassword" });
            
            console.log(`login`, login.body.token)
          expect(login.status).toBe(200);
        });
})

    describe("POST login token test", () => {
        it("returns token", async () => {
        let user = await request(server)
            .post("/api/auth/register")
            .send({ username: "testuser", password: "testpassword" });

        expect(user.status).toBe(201);
	
      let login = await request(server)
        .post("/api/auth/login")
        .send({ username: "testuser", password: "testpassword" });

      expect(login.status).toBe(200);
      expect(login.body.token);
        });
    })
})
})