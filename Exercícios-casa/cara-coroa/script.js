const Koa = require('koa');
const server = new Koa();

const contexto = async(ctx) => {
    let resposta = Math.random()*100;
    resposta = Math.trunc(resposta);
    ctx.body = (ctx.originalUrl === '/cara_ou_cara') ? 
                 (resposta > 50 ? 
                    'cara' : 'coroa') : 'Requisição inválida';
}

server.use(contexto);

server.listen(8081, () => console.log("Requisição recebida"));