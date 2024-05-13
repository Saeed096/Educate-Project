


var save_lesson_btn = document.getElementById('save_lesson_btn');

var lessons_arr_index=0;
if(localStorage.getItem('lesons_num')=== null)
{
    localStorage.setItem('lesons_num', 0);

    lessons_arr_index= parseInt (localStorage.getItem('lesons_num'));
}
else
{
lessons_arr_index= parseInt (localStorage.getItem('lesons_num'));
}


var lessons_arr=[];
var lessons_arr_str =[];

    for(var i =0 ; i<localStorage.getItem('current_course_size') ; i++)
    {
        add_lesson_div.innerHTML+= `<div class="d-flex flex-column w-100 justify-content-start mb-3 border border-light" >
        <h2 class="mt-5" >Session number ${i+1} details </h2>
      
        <p class="fs-3 mt-5">Session name </p>
        <input type="text" class="form-control" placeholder="">
      
        <p class="fs-3 mt-5">Session link</p>
        <input type="url" class="form-control" placeholder="">
      
      
      </div>`; 
    };

    if(localStorage.getItem('current_course_size') == 1)
    {
        add_lesson_div.style="height: 72vh;";
    }

 var input_arr =document.getElementsByTagName("input");
         
var course_obj = JSON.parse (localStorage.getItem('course'));
// console.log(course_obj);
// console.log(course_obj.Name);

var les_Name = [];
var les_Link = [];

save_lesson_btn.addEventListener('click',function(){
 
var h = 0;
for(var i =0 ; i<localStorage.getItem('current_course_size')*2 ; i+=2)
{
 lessons_arr[lessons_arr_index] = {
    course_Name : course_obj.Name ,  
    course_Description :course_obj.description ,  
    course_Size : course_obj.size ,  
    lesson_Name : input_arr[i].value  ,         
    lesson_Link :  input_arr[i+1].value, 
  };
  les_Name[h] =lessons_arr[lessons_arr_index].lesson_Name; 
  les_Link[h] =lessons_arr[lessons_arr_index].lesson_Link; 
  h++;
}
lessons_arr[lessons_arr_index].lesson_Name = les_Name;
lessons_arr[lessons_arr_index].lesson_Link = les_Link;
    lessons_arr_str [lessons_arr_index] = JSON.stringify( lessons_arr[lessons_arr_index]);
    localStorage.setItem('course_obj'+lessons_arr_index, lessons_arr_str[lessons_arr_index]);
    lessons_arr_index++;
    localStorage.setItem('lesons_num' , lessons_arr_index); 



//     var arr = [];
//     for(var i =0 ; i<localStorage.getItem('courses_num'); i++)
// { 
//   var obj = JSON.parse(localStorage.getItem('course_obj'+i));
//    arr[i] = obj.course_Name;
// //    console.log(obj.course_Name);

// }
//     console.log(arr);
})






