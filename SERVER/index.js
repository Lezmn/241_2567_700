const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 8000;

app.use(bodyParser.json()); // ส่งข้อมูลตรง body เป็น json

let users = []
let counter = 1

/* Get ใช้สำหรับแสดงข้อมูล user ทั้งหมด
Get /users/:id ใช้สำหรับแสดงข้อมูล user ตาม id ที่ระบุ
Post /user ใช้สำหรับสร้างข้อมูล user ใหม่
Put /user/:id ใช้สำหรับแก้ไขข้อมูล user ตาม id ที่ระบุ
Delete /user/:id ใช้สำหรับลบข้อมูล user ตาม id ที่ระบุ */

//Get ใช้สำหรับแสดงข้อมูล user ทั้งหมด path = /users
app.get('/users', (req, res) => { // '/' คือ path root ที่เราจะเข้าถึง อาจเข้าถึง path อื่นแทน เช่น '/test' คือ path test
  //res.send('Hello World! Test'); ส่งข้อมุลไป browser
  res.json(users); 
})

//post  ใช้สำหรับสร้างข้อมูล user ใหม่   path: /user
app.post('/user', (req, res) => {
  let user = req.body;
  user.id = counter;
  counter += 1 
  users.push(user);
  res.json({
    message: 'Create new user successfully',
    user: user
  });
})

//put ใช้สำหรับแก้ไขข้อมูล user ตาม id ที่ระบุ  path /user/:id 
app.put('/user/:id', (req, res) => {
  let id = req.params.id;
  let updateUser = req.body;

  //หา users จาก id ที่ส่งมา
  let selectIndex = users.findIndex(user => user.id == id); //findIndex คือการหา index ของข้อมูลที่ตรงกับเงื่อนไข
  
  //แก้ไขข้อมูล users ที่เจอ
  if(updateUser.firstname){
      users[selectIndex].firstname = updateUser.firstname// ถ้าไม่มีข้อมูลให้ใช้ข้อมูลเดิม
  }
  if(updateUser.lastname){
      users[selectIndex].lastname = updateUser.lastname
  }

  res.json({
    message: 'Update user successfully',
    data:{
      user: updateUser,
      indexUpdate : selectIndex
    }
  })
})

//path:Delete /user/:id ใช้สำหรับลบข้อมูล user ตาม id ที่ระบุ
app.delete('/user/:id', (req, res) => {
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


app.listen(port, (req, res) => {
  console.log('Server is running on port' +port);
});

