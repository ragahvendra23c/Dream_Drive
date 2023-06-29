// AI page



function AIRequestQuery() {
    let name = document.getElementById("ai_name").value
    let email = document.getElementById("ai_email").value
    let mobile = document.getElementById("ai_mobile").value
    let course = document.getElementById("ai_course").value
    let message = document.getElementById("ai_message").value
    let data={
        "name":name,
        "email":email,
        "mobile":mobile,
        "course":course,
       "message":message
    }
    fetch("https://lifetech-student-enquiry.onrender.com/Student_List", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data)
    }).then((resp) => {
    alert("We will get back to you very Soon...!!")
    document.getElementById("ai_name").value=""
    document.getElementById("ai_email").value=""
     document.getElementById("ai_mobile").value=""
    document.getElementById("ai_course").value=""
    document.getElementById("ai_message").value=""
       
    }).catch((err) => {
        alert("Network Error, So try after some time "+ err)
    })
}








function AIContactQuery() {
    let name = document.getElementById("name1").value
    let email = document.getElementById("email1").value
    let mobile = document.getElementById("mobile1").value
    let course = document.getElementById("course1").value
    let message = document.getElementById("message1").value
    
    let data={
        "name":name,
        "email":email,
        "mobile":mobile,
        "course":course,
       "message":message
    }
    
    fetch("https://lifetech-student-enquiry.onrender.com/Student_List", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data)
    }).then(() => {
        alert("We will get back to you very Soon...!!")
        document.getElementById("name1").value=""
        document.getElementById("email1").value=""
        document.getElementById("mobile1").value=""
        document.getElementById("course1").value=""
        document.getElementById("message1").value=""
       
    }).catch((err) => {
        alert("Network Error, So try after some time "+ err)
    })
}


