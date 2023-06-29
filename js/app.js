

$(document).ready(function () {
    //Owl
    $('.hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        navText: ['PREV', 'NEXT'],
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            }
        }
    })

    $('#projects-slider').owlCarousel({
        loop: true,
        nav: false,
        items: 2,
        dots: true,
        smartSpeed: 600,
        center: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2,
                margin: 8,
            }
        }
    })

    $('.reviews-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 900,
        items: 1,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 4000,
    })
});


// toggle
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}




// backend



// AI page



function IndexRequestQuery(event){
    event.preventDefault()
    let name = document.getElementById("index_name")
    let email = document.getElementById("index_email")
    let mobile = document.getElementById("index_mobile")
    let course = document.getElementById("index_course")
    // console.log(name.value)
    let std_data={
        name:name.value,
        email:email.value,
        mobile:mobile.value,
        course:course.value
    }
    fetch("https://lifetech-student-enquiry.onrender.com/Student_List",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(std_data)

    }).then(()=>{
        alert("We will get back to you very Soon...!!")
        name.value=""
        email.value=""
        mobile.value=""
        course.value=""
    }).catch((err)=>{
        alert("Network Error, So try after some time "+ err)
        name.value=""
        email.value=""
        mobile.value=""
        course.value=""
    })
   
}



function IndexContactQuery(event){
    event.preventDefault()
    let name = document.getElementById("index_name1")
    let email = document.getElementById("index_email1")
    let mobile = document.getElementById("index_mobile1")
    let course = document.getElementById("index_course1")
    let std_data={
        "name":name.value,
        "email":email.value,
        "mobile":mobile.value,
        "course":course.value
    }
    fetch("https://lifetech-student-enquiry.onrender.com/Student_List",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(std_data)

    }).then(()=>{
        alert("We will get back to you very Soon...!!")
        name.value=""
        email.value=""
        mobile.value=""
        course.value=""
    }).catch((err)=>{
        alert("Network Error, So try after some time "+ err)
        name.value=""
        email.value=""
        mobile.value=""
        course.value=""
    })
}
 

