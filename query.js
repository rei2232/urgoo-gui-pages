const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'urgoo',
    password: 'admin',
    port: 5432,
})
const createMovie = (request, response) => {
    const {title, image_url, director, mstate, duration, releasedate} = request.body

    pool.query('INSERT INTO movie (title, image_url, director, mstate, duration, releasedate) VALUES ($1, $2, $3, $4, $5, $6)', [title, image_url, director, mstate, duration, releasedate], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Movie added with ID: ${results.insertId}`)
    })
}
module.exports = {
    createMovie
}