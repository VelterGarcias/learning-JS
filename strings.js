const site = 'www.Hcode.com.br';
const site2 = 'www.Hcode.com.br/cursos';

console.log(site.length)
console.log(site.substr(0,3))
console.log(site.substr(4,site.length - 4))
console.log(site.charAt(5))
console.log(site[0])
console.log(site.substr(-2,3))
console.log(site.substr(-2,3).toUpperCase())
console.log(site.toLowerCase())
console.log(site.toUpperCase())
console.log(site.replace('.com', '.org'))
console.log(site.includes('.com'))
console.log(site2.substr(site2.indexOf('.br'), site2.length))

const mensagem = "Bem-vindo ao Hcode Lab"
console.log(mensagem.split(' '))
console.log(mensagem.split(' ').length)

const email = 'velter@gmail.com'
const emailSplit = email.split('@')
const user = emailSplit[0]
const domain = emailSplit[1]

console.log(user, domain)