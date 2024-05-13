var next_btn = document.getElementById("next_btn");
var add_course_div = document.getElementById("add_course_div");
var warning_space = document.getElementById("warning_space");

var sessions_num = document.getElementById("Sessions_num");
var course_name = document.getElementById("course_name");
var course_description = document.getElementById("course_description");

var courses_arr_index=0;
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



next_btn.addEventListener('click',function(){
    
    localStorage.setItem('current_course_size' , sessions_num.value);

    courses_arr[courses_arr_index]={
        Name :  course_name.value,
        description : course_description.value,
        size : sessions_num.value,
    };
    courses_arr_str [courses_arr_index] = JSON.stringify( courses_arr[courses_arr_index]);
    localStorage.setItem('course', courses_arr_str[courses_arr_index]);
    courses_arr_index++;
    localStorage.setItem('courses_num' , courses_arr_index);   

//  for(var i =0 ; i<localStorage.getItem('courses_num'); i++)
//  {
//     console.log(JSON.parse (localStorage.getItem('course_obj'+"0").course_Name));
//  }
})









sessions_num.addEventListener('blur',function(){
    var sessions_num_value = sessions_num.value;    
    if( (Number (sessions_num_value) % 2 != 0 & Number (sessions_num_value) % 2 != 1) || Number (sessions_num_value) <= 0 )
    {
        sessions_num.focus();
       var clas = next_btn.getAttribute("class");
       clas +=" disabled";
       next_btn.setAttribute("class",clas);
    }
    else
    {
        next_btn.classList.remove("disabled");
    }
    })
    