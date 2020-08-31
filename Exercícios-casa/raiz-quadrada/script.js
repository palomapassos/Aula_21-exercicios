const Koa = require('koa');
const server = new Koa();

const contexto = async(ctx) => {
    const elementosUrl = ctx.originalUrl.split("/");
    if(elementosUrl[1]==='raiz_quadrada'){
        if(elementosUrl<3){
            ctx.body = 'Você precisa passar um número na requisição!';
        }else{
            const quebra = ctx.originalUrl.split("/");
            const resposta = Math.sqrt(quebra[quebra.length-1])
            ctx.body = `A raiz quadrada de ${quebra[quebra.length-1]} é ${resposta}`;
        }
    }else{
        ctx.body = "Requisição inválida!"
    }

}

server.use(contexto);


server.listen(8081, () => console.log("Requisição recebida"));
