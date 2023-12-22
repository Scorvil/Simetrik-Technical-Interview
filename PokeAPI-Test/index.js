// Libraries
const request = require('supertest');
const ajv = require('ajv');
const responseSchema = require('./schema.json');
const { describe, it } = require('mocha');
const { expect } = require('chai');

// Defining endpoint constants
const baseURL = 'https://pokeapi.co/api/v2/';
const path = 'pokemon?limit=100&offset=200';

// Initializing schema validator
const ajValidator = new ajv({allErrors: true, async: true});
const validate = ajValidator.compile(responseSchema);

describe("PokeAPI GET test", () => {
    it("Validate response status code is 200", async () => {
        const response = await request(baseURL).get(path);
        expect(response.status).to.equal(200, `Error: Status code is ${response.status}`);
    });
    it("Validate response schema", async () => {
        const response = await request(baseURL).get(path);
        const result = await validate(response.body);
        expect(result).to.equal(true, `Error: Response doesn't match provided schema`);
    });
    it("Validate response results are not empty", async () => {
        const response = await request(baseURL).get(path);
        expect(response.body.results).to.be.not.null;
    });
});