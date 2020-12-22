const cookie_name = require('./index.js');
const test = require('ava');

test('Only valid characters in cookie names', t => {
    const valid_chars = "abdefghijklmnqrstuvxyzABDEFGHIJKLMNQRSTUVXYZ0123456789!#$%&'()*+-./:<>?@[]^_`{|}~";
    for(let i = 0; i <= 1000; i++) {
        const cookie = cookie_name();
        for(let i = 0; i < cookie.length; i++) {
           t.true(valid_chars.includes(cookie[i]));
        }
    }
});

test('Length is set correct', t => {
    for(let i = 0; i <= 1000; i++) {
        const cookie = cookie_name({len: i});
        t.true(cookie.length === i);
    }
});

const config_cases = [
    {
        letters: true,
        numbers: true,
        special: true,
    },
    {
        letters: false,
        numbers: true,
        special: true,
    },
    {
        letters: true,
        numbers: false,
        special: true,
    },
    {
        letters: true,
        numbers: true,
        special: false,
    },
    {
        letters: false,
        numbers: false,
        special: true,
    },
    {
        letters: false,
        numbers: true,
        special: false,
    },
    {
        letters: true,
        numbers: false,
        special: false,
    },
]

test('Options work as expected', t => {
    config_cases.forEach(config => {
        const cookie = cookie_name(config);
        const { letters, numbers, special } = config;
        const letters_chars = "abdefghijklmnqrstuvxyzABDEFGHIJKLMNQRSTUVXYZ";
        const numbers_chars = "0123456789";
        const special_chars = "!#$%&'()*+-./:<>?@[]^_`{|}~";
        const expected_chars = `${!!letters ? letters_chars : ''}${!!numbers ? numbers_chars : ''}${!!special ? special_chars : ''}`;
        for(let i = 0; i < cookie.length; i++) {
            t.true(expected_chars.includes(cookie[i]));
        }
    })
});


test('Stress test', t => {
    for(let i = 0; i < 10_000_000; i++) {
        const cookie = cookie_name();
    }
    t.pass();
});