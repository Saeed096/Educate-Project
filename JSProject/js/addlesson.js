// next_btn.addEventListener('click',function(){
//     var sessions_num_value = sessions_num.value;
//     add_course_div.innerHTML ="";

// var saeed = localStorage.getItem('html');
// var final_saeed = JSON.parse(saeed);
// console.log(final_saeed.size);
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
    // add_course_div.innerHTML+=  `<div class="btn btn-info login_btn text-light btn-bg-color my-3 w-100">Save lessons</div>`
    if(localStorage.getItem('current_course_size') == 1)
    {
        add_lesson_div.style="height: 72vh;";
    }
// })

 var input_arr =document.getElementsByTagName("input");
// console.log(sasa[0]); 

save_lesson_btn.addEventListener('click',function(){
for(var i =0 ; i<localStorage.getItem('current_course_size')*2 ; i+=2)
{
  lessons_arr[lessons_arr_index] = {
    Name :  input_arr[i].value,         
    link :  input_arr[i+1].value, 
  };

    lessons_arr_str [lessons_arr_index] = JSON.stringify( lessons_arr[lessons_arr_index]);
    localStorage.setItem(input_arr[i].value, lessons_arr_str[lessons_arr_index]);
    lessons_arr_index++;
    localStorage.setItem('lesons_num' , lessons_arr_index); 

}

for(var h =0 ; h<lessons_arr_index*2-1 ; h+=2)
{
  alert("ss");                                                  // stop here
  console.log(JSON.parse (localStorage.getItem(input_arr[h].value)));
}
   
  // localStorage.getItem('courses_num')=1;
})


