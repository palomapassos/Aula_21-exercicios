const Koa = require('koa');
const server = new Koa();

const contexto = async(ctx) => {
    const elementosUrl = ctx.originalUrl.split("/");
    if(elementosUrl[1]==='divisao'){
        if(elementosUrl.length<4){
            ctx.body = 'Você precisa passar dois números na requisição!';
        }else{
            const quebra = ctx.originalUrl.split("/");
            const resposta = quebra[quebra.length-2]/quebra[quebra.length-1];
            ctx.body = `A divisão de ${quebra[quebra.length-2]} por ${quebra[quebra.length-1]} é ${resposta}`;
        }
    }else{
        ctx.body = "Requisição inválida!"
    }
}

server.use(contexto);

server.listen(8081, () => console.log("Requisição recebida"));