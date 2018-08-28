const Ruby = require('./ruby');
const args = process.argv;

let request = args[2];
let language = args[3];

if (language === 'ruby') {
  Ruby.test(request);
}
