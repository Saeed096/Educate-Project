var next_btn = document.getElementById("next_btn");
var add_course_div = document.getElementById("add_course_div");
var warning_space = document.getElementById("warning_space");

var sessions_num = document.getElementById("Sessions_num");
var course_name = document.getElementById("course_name");
var course_description = document.getElementById("course_description");

var courses_arr_index;
if(localStorage.getItem('courses_num')=== null)
{
    localStorage.setItem('courses_num', 0);

    courses_arr_index= parseInt (localStorage.getItem('courses_num'));
}
else
{
courses_arr_index= parseInt (localStorage.getItem('courses_num'));
}

var courses_arr=[];
var courses_arr_str =[];

// var x;

next_btn.addEventListener('click',function(){
    // x = sessions_num.value;
    // localStorage.setItem('les_num', x);})
    localStorage.setItem('current_course_size' , sessions_num.value);

    courses_arr[courses_arr_index]={
        Name :  course_name.value,
        description : course_description.value,
        size : sessions_num.value,
    };
    courses_arr_str [courses_arr_index] = JSON.stringify( courses_arr[courses_arr_index]);
    localStorage.setItem(course_name.value, courses_arr_str[courses_arr_index]);
    courses_arr_index++;
    localStorage.setItem('courses_num' , courses_arr_index);    
   console.log (localStorage.getItem('courses_num'));
})




//     lessons_num_arr[lessons_num_arr_index] = sessions_num.value;
//     add_course_div.innerHTML ="";
//     for(var i =0 ; i<sessions_num_value ; i++)
//     {
//         add_course_div.innerHTML+= `<div class="d-flex flex-column w-100 justify-content-start mb-3 border border-light" >
//         <h2 class="mt-5" >Session number ${i+1} details </h2>
      
//         <p class="fs-3 mt-5">Session name </p>
//         <input type="text" class="form-control" placeholder="">
      
//         <p class="fs-3 mt-5">Session link</p>
//         <input   type="url" class="form-control" placeholder="">
      
      
//       </div>`; 
//     };
//     add_course_div.innerHTML+=  `<div class="btn btn-info login_btn text-light btn-bg-color my-3">Save course</div>`
//     if(sessions_num_value == 1)
//     {
//         add_course_div.style="height: 72vh;";
//     }
// })




sessions_num.addEventListener('blur',function(){
    var sessions_num_value = sessions_num.value;    
    if( (Number (sessions_num_value) % 2 != 0 & Number (sessions_num_value) % 2 != 1) || Number (sessions_num_value) <= 0 )
    {
        sessions_num.focus();
        // next_btn.classList.add("disabled");
       var clas = next_btn.getAttribute("class");
       clas +=" disabled";
       next_btn.setAttribute("class",clas);
    //    warning_space.innerHTML += `<small>Please enter positive integer number</small>`;
    }
    else
    {
        next_btn.classList.remove("disabled");
        // warning_space.innerHTML = "";
    }
    })
    