


// Full stack page
function FullStackRequestQuery() {
    let name = document.getElementById("name").value
    console.log(name)
    let email = document.getElementById("email").value
    let mobile = document.getElementById("mobile").value
    let course = document.getElementById("course").value
    let message = document.getElementById("message").value
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
        document.getElementById("name").value=""
    document.getElementById("email").value=""
     document.getElementById("mobile").value=""
    document.getElementById("course").value=""
    document.getElementById("message").value=""
       
    }).catch((err) => {
        alert("Network Error, So try after some time "+ err)
    })
}



function FullStackContactQuery() {
    let name = document.getElementById("name1").value
    // console.log(name)
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
    }).then((resp) => {
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

