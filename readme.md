# cookie-name - 558 bytes & no dependencies
Create a valid cookie name in no time! 💚

### Install:
```
npm i cookie-name
```

### Configurations:
- `len` (default: 10)
- `letters` (default: true)
- `numbers` (default: true)
- `special` (default: true)

### Example:
```js
const cookie_name = require('cookie-name');
const cookie = cookie_name({numbers: false, len: 19})
console.log(cookie): // e.g: ^-zLufzx^Ii)_t}kqx.
```

