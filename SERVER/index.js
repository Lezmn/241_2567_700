const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql2/promise');
const port = 8000;

app.use(bodyParser.json()); // ส่งข้อมูลตรง body เป็น json

let users = []

let conn = null
const initMySQL = async () => {
    conn = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'webdb',
    port: 8830
  })
}
/*
app.get('/testdbnew',async (req, res) => {
  try{
      const results = await conn.query('SELECT * FROM users')
      res.json(results[0]);
  } catch (err){
    console.log('error', err.message);
    res.status(500).json({error: 'error fetching data'});
  }
})*/
  

//Get ใช้สำหรับแสดงข้อมูล user ทั้งหมด path = /users
app.get('/users', async(req, res) => { // '/' คือ path root ที่เราจะเข้าถึง อาจเข้าถึง path อื่นแทน เช่น '/test' คือ path test
  const results = await conn.query('SELECT * FROM users')
  res.json(results[0]);
})

//post  ใช้สำหรับสร้างข้อมูล user ใหม่   path: /user
app.post('/users', async (req, res) => {
  let user = req.body;
  const results = await conn.query('INSERT INTO users SET ?',user)
  console.log('result',results);
  res.json({
    message: 'Create user successfully',
    data: results[0]
  })
})

//Get /users/:id ใช้สำหรับแสดงข้อมูล user ตาม id ที่ระบุ
app.get('/users/:id', (req, res) => { 
  let id = req.params.id;
  //ค้นหา user หรือ index ที่ต้องการดึงข้อมูล
  let selectIndex = users.findIndex(user => user.id == id); //findIndex คือการหา index ของข้อมูลที่ตรงกับเงื่อนไข
  res.json(users[selectIndex]);
})



//put ใช้สำหรับแก้ไขข้อมูล user ตาม id ที่ระบุ  path /user/:id 
app.put('/users/:id', (req, res) => {
  let id = req.params.id;
  let updateUser = req.body;
  //หา users จาก id ที่ส่งมา
  let selectIndex = users.findIndex(user => user.id == id); //findIndex คือการหา index ของข้อมูลที่ตรงกับเงื่อนไข
  
  //แก้ไขข้อมูล users ที่เจอ
      users[selectIndex].firstname = updateUser.firstname || users[selectIndex].firstname// ถ้าไม่มีข้อมูลให้ใช้ข้อมูลเดิม
      users[selectIndex].lastname = updateUser.lastname|| users[selectIndex].lastname
      users[selectIndex].age = updateUser.age|| users[selectIndex].age
      users[selectIndex].gender = updateUser.gender|| users[selectIndex].gender


  res.json({
    message: 'Update user successfully',
    data:{
      user: updateUser,
      indexUpdate : selectIndex
    }
  })
})

//path:Delete /user/:id ใช้สำหรับลบข้อมูล user ตาม id ที่ระบุ
app.delete('/users/:id', (req, res) => {
  let id = req.params.id;

  //หา index ของ users ที่ต้องการลบ
  let selectIndex = users.findIndex(user => user.id == id); //ค่า selectIndex = ตำแหน่ง index ที่หาเจอ

  //ลบข้อมูลใน users ที่เจอ
  users.splice(selectIndex, 1); //splice คือการลบข้อมูลใน array ตาม index ที่ระบุ
  res.json({
    message: 'Delete user successfully',
    indexDelete: selectIndex
  })
  
})

app.listen(port, async (req, res) => {
  await initMySQL()
  console.log('Server is running on port' +port);
});

