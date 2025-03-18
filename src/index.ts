import * as http from 'http'
const server=http.createServer((req,res)=>{
    res.write(`<h1>Hello worled</h1>`)
    res.end()
})
const PORT =5000
server.listen(PORT,()=>{
    console.log (`server is running on http://localhost:${PORT}`)
})