import mysql from 'mysql2';
import dotenv from 'dotenv'
dotenv.config()

/*Connection pools help reduce the time spent connecting to
 the MySQL server by reusing a previous connection,
 leaving them open instead of closing when you are done with them.
This improves the latency of queries as 
you avoid all of the overhead that comes with establishing a new connection.*/

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}).promise()


//Get all Notes from my database
export async function getNotes() {
  // hear I use destructuring assignment for get first clean data
  const [result] = await pool.query("select * from notes")
  return result
}

// get single notes from my database by ID
export async function getSingleNote(id) {
  const [singleNote] = await pool.query(`SELECT * FROM  notes WHERE id =?`, [id])
  return singleNote[0]
}

//create Note or insert in database

export async function createNote(title, contents) {
  const [result] = await pool.query(`
  INSERT INTO notes (title, contents)
  VALUES (?, ?)
  `, [title, contents])
 
  const id = result.insertId
  return getSingleNote(id)

}



const nots = await getNotes();
// console.log(nots)

const note = await getSingleNote(1)
// console.log(note);

// const result = await createNote("note create node", "hello world suman")
// console.log(result)