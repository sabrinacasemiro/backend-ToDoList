import express from "express"
import data from "./data/index.js"
import cors from "cors"

const api = express()

api.use(express.json())
api.use(cors())

api.get('/taskList', (req, res) => {
    return res.send(data.read())
})

api.post('/task', (req, res) => {
    const body = req.body

    data.creat(body)

    const taskList = data.read()
    
    return res.send({taskList: taskList})
})

api.delete('/task/:id', (req, res) => {
    const id = req.params.id

    data.delete(id)

    const taskList = data.read()

    return res.send({taskList: taskList})
})

api.put('/task/:id', (req, res) => {
    const id = req.params.id
    const newData = req.body

    data.update(id, newData)

    const taskList = data.read()
    
    return res.send({taskList: taskList})
})

api.listen(3333, () => console.log('iniciado!'))