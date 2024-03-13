'use strict';

var assert = require('chai').assert;

var { withCallback } = require('../withCallback');

describe('withCallback', function () {
    it('should call the callback with the resolved value', function (done) {
        var promise = Promise.resolve(42);
        withCallback(promise, function (err, value) {
            assert.equal(err, null);
            assert.equal(value, 42);
            done();
        });
    });

    it('should call the callback with the rejected error', function (done) {
        var promise = Promise.reject(new Error('Boom!'));
        withCallback(promise, function (err, value) {
            assert.instanceOf(err, Error);
            assert.equal(err.message, 'Boom!');
            assert.isUndefined(value);
            done();
        });
    });

    it('should return the original promise if no callback is provided', function () {
        var promise = Promise.resolve(42);
        var result = withCallback(promise);
        assert.strictEqual(result, promise);
    });
});