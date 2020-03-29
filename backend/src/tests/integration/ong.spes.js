const request = require('supertest');
const app = require('../../../src/app');
const connection = require('../../../src/database/conections');

describe('ONG', () => {

     beforeEach(async () => {
        await connection.migrate.rollback(); //It's good do a rollback to tests database not have in future a big number of tests registries
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('Should be able to create a new ONG', () => {
        const response = request(app)
        //.set('Authorization', 'e34rtis') //When is necessary set a data on Header
        .post('/ongs').send({
            name: "Dorime Do Thanos",
            email: "dorime@thanos.com",
            whatsapp: "55869994580815",
            city: "Teresina",
            uf: "PI",
            cep: "64101845",
            end_num: "25",
            type_ong: "GRUPO",
            person_name: "Antônio Fernandi",
            person_document: "12344321"
        })

        expect(response.body).toHaveProperty('id');
        expect(responde.body.id).toHaveLenght(8);
    });
})