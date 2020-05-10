const request = require('supertest')
const should = require('should')
const app = require('../app')
const agent = request.agent(app);

describe('GET /v1/location', function () {
    it('response should be about Buenos Aires', function (done) {
        agent
            .get('/v1/location')
            .expect(200)
            .end((err, res) => {
                if (err) {
                    return done(err);
                } else {
                    const locationInfo = res.body.data;
                    locationInfo.city.should.equal('Buenos Aires');
                    locationInfo.country.should.equal('AR');
                    return done();
                }
            });
    });
});

describe('GET /v1/current', function () {
    it('response object should be correct', function (done) {
        agent
            .get('/v1/current')
            .expect(200)
            .end((err, res) => {
                if (err) {
                    return done(err);
                } else {
                    const currentWeather = res.body.data;
                    currentWeather.should.have.property('weather');
                    currentWeather.should.have.property('main');
                    return done();
                }
            });
    });
});

describe('GET /v1/current/Buenos Aires', function () {
    it('response object should be correct', function (done) {
        agent
            .get('/v1/current/Buenos Aires')
            .expect(200)
            .end((err, res) => {
                if (err) {
                    return done(err);
                } else {
                    const currentWeather = res.body.data;
                    currentWeather.should.have.property('weather');
                    currentWeather.should.have.property('main');
                    return done();
                }
            });
    });
});


describe('GET /v1/forecast', function () {
    it('response object should be correct', function (done) {
        agent
            .get('/v1/forecast')
            .expect(200)
            .end((err, res) => {
                if (err) {
                    return done(err);
                } else {
                    const forecast = res.body.data;
                    forecast.should.have.property('list');
                    forecast.should.have.property('cnt');
                    return done();
                }
            });
    });
});

describe('GET /v1/forecast/Buenos Aires', function () {
    it('response object should be correct', function (done) {
        agent
            .get('/v1/forecast/Buenos Aires')
            .expect(200)
            .end((err, res) => {
                if (err) {
                    return done(err);
                } else {
                    const forecast = res.body.data;
                    forecast.should.have.property('list');
                    forecast.should.have.property('cnt');
                    return done();
                }
            });
    });
});

describe('GET /v1/current/asd', function () {
    it('response should be an error', function (done) {
        agent
            .get('/v1/current/asd')
            .expect(500)
            .end((err, res) => {
                return done(err);
            });
    });
});

describe('GET /v1/forecast/asd', function () {
    it('response should be an error', function (done) {
        agent
            .get('/v1/forecast/asd')
            .expect(500)
            .end((err, res) => {
                return done(err);
            });
    });
});

