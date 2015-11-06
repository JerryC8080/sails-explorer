/**
 * Copyright (c) 2015 Meizu bigertech, All rights reserved.
 * http://www.bigertech.com/
 * @author JerryC
 * @date  15/11/6
 * @description
 *
 */

var should = require('should');
var request = require('supertest');

describe('UserController', function () {
  describe('#getUser', function () {
    it('should return data', function (done) {
      var app = sails.hooks.http.app;
      request(app)
        .get('/user/getUser')
        .end(function (err, res) {
          if(err) {return done(err)}
          console.log(res.body);
          done();
        });
    });
  });
});