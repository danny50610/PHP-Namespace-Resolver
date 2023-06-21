const assert = require('assert');
const Resolver = require('../../src/Resolver');

suite('calculateNamespace', () => {
    let resolver = new Resolver;

    test('test top folder', () => {
        assert.strictEqual(resolver.calculateNamespace(
            '/home/user/project/app',
            '/home/user/project',
            {
                'App\\': 'app/',
            }
        ), 'App');
    });

    test('test second folder', () => {
        assert.strictEqual(resolver.calculateNamespace(
            '/home/user/project/app/Http',
            '/home/user/project',
            {
                'App\\': 'app/',
            }
        ), 'App\\Http');
    });

    test('test third folder', () => {
        assert.strictEqual(resolver.calculateNamespace(
            '/home/user/project/app/Http/Controller',
            '/home/user/project',
            {
                'App\\': 'app/',
            }
        ), 'App\\Http\\Controller');
    });

    test('test not found', () => {
        assert.strictEqual(resolver.calculateNamespace(
            '/home/user/project/src/Http/Controller',
            '/home/user/project',
            {
                'App\\': 'app/',
            }
        ), null);
    });
});
