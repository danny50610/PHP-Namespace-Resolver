const assert = require('assert');
const Resolver = require('../../src/Resolver');

suite('calculateNamespace', () => {
    let resolver = new Resolver;

    test('test second folder', () => {
        assert.strictEqual('App\\Http', resolver.calculateNamespace(
            '/home/user/project/app/Http',
            '/home/user/project',
            {
                'App\\': 'app/',
            }
        ));
    });
});
