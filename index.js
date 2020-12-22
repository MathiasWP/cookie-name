'use strict';
module.exports = ({len = 10, letters = true, numbers = true, special = true} = {}) => {
    const letters_chars = "abdefghijklmnqrstuvxyzABDEFGHIJKLMNQRSTUVXYZ";
    const numbers_chars = "0123456789";
    const special_chars = "!#$%&'()*+-./:<>?@[]^_`{|}~";
    const chosen_chars = `${!!letters ? letters_chars : ''}${!!numbers ? numbers_chars : ''}${!!special ? special_chars : ''}`;
    let cookie_name = '';
    for(let i = 0; i < len; i++) 
        cookie_name += chosen_chars[Math.floor(Math.random() * Math.floor(chosen_chars.length - 1))];
    return cookie_name;
}