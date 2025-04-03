const baseurl = 'http://localhost:8000'

window.onload = async () => {
    await loadData();
    
}

//แสดงผล data
const loadData = async() =>{
        console.log('load user');
    //1. load user ทั้งหมดจาก api ที่เตรียมไว้ 
    const response = await axios.get(`${baseurl}/users`);

    console.log(response.data);
    const userDOM = document.getElementById('user');
    let htmldata = `<table class = "center"> <div>
    <tr>
                <th>ID</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>`
//2. นำ user ทั้งหมด โหลดกลับเข้าไปใน html
for (let i = 0; i < response.data.length; i++) {
    let user = response.data[i];
    htmldata += ` <div> <tr>
    <td>${user.id}</td>
    <td>${user.firstname}</td> 
    <td>${user.lastname}</td>
    <td><a href ='edit.html?id=${user.id}' style="text-decoration:none;"><button class="edit">edit</button></a></td>
    <td><button class = 'delete' data-id='${user.id}'>delete</button></td>
    </tr>
    </div>`
}
htmldata += '</div> </table>'
userDOM.innerHTML = htmldata

//3.ลบ user ที่ต้องการ
const deleteDOMs = document.getElementsByClassName('delete');
for (let i = 0; i < deleteDOMs.length; i++) {
    deleteDOMs[i].addEventListener('click', async (event) => {
        //ดึง id ของ user ที่ต้องการลบ
        const id = event.target.getAttribute('data-id');
        try{
            await axios.delete(`${baseurl}/users/${id}`);
            loadData();// recursive function = เรียกใช้ function ตัวเอง
        }catch(error){
            console.error('error:',error);
        }
    })
}
}