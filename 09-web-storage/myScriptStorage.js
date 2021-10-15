console.log('WEB STORAGE');

localStorage.setItem('usuario', 'Rodrigo');
sessionStorage.setItem('usuario', 'Rodrigo');

localStorage.senha = 123456;
sessionStorage.senha = 123456;

var userLocal = localStorage.getItem('usuario');
var userSession = sessionStorage.getItem('usuario');
console.log(userLocal, userSession);

var pwdLocal = localStorage.senha;
var pwdSession = sessionStorage.senha;
console.log(pwdLocal, pwdSession);

console.log(localStorage.length);

for(var index =0; index < localStorage.length; index++) {
    var key = localStorage.key(index);
    var value = localStorage.getItem(key);
    console.log(key, value);
}

localStorage.removeItem('usuario');
sessionStorage.removeItem('senha');

localStorage.clear();
sessionStorage.clear();



