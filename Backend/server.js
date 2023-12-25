import express from 'express'

const app = express()

app.get('/api/jokes', (req, res) => {

    const jokes = [
        {
            id: 1,
            title: "first joke",
            content: "this is joke first"

        },
        {
            id: 2,
            title: "second joke",
            content: "this is joke second"

        },
        {
            id: 3,
            title: "third joke",
            content: "this is joke third"

        },
        {
            id: 4,
            title: "forth joke",
            content: "this is joke forth"

        },
        {
            id: 5,
            title: "fifth joke",
            content: "this is joke fifth"

        }
    ]

    res.send(jokes)
    
})

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server is listening at port: ${port}`)
})