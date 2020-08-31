const Koa = require('koa');
const server = new Koa();

const contexto = async(ctx) => {
    ctx.body='Hey! Esta é a aula 21!';
}

server.use(contexto);

server.listen(8081, () => console.log("Requisição recebida"));