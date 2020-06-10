import fetch from 'node-fetch'
import koa from 'koa'
import koaRouter from 'koa-router'
import koaJson from 'koa-json'

// (async () => {
//     fetch('https://api2.isbndb.com/book/9788380080157', {
//         method: 'get',
//         headers: {
//             "Content-Type": 'application/json', 
//             'Authorization': '44151_dbd862b620e23d6ab5c3971156ce35a9' 
//         },
//     })
//     .then(res => res.json())
//     .then(json => console.log(json));
// })()

// cd $HOME/.local/bin
// ./isbn_meta 9788380080157

const app = new koa()

const router = new koaRouter()

router.get('/:id', async (ctx) => {
    const response = await fetch('https://api2.isbndb.com/book/' + ctx.params.id, {
        method: 'get',
        headers: {
            "Content-Type": 'application/json', 
            'Authorization': '44151_dbd862b620e23d6ab5c3971156ce35a9' 
        },
    })

    const json = await response.json()

    ctx.body = json
})


app.use(koaJson())
app.use(router.routes())


app.listen(8080, () => console.log('running on port 8080'))