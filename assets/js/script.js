// menu slider function

let menu_slider_val = true;
function menu_slider(){
    // let menu_btn = document.querySelectorAll(".menu_slider_icon");

    if(menu_slider_val){
        document.querySelector(".menu_slider_container").classList.add("left-0");
        menu_slider_val = false;
        console.log(menu_slider_val);
    }
}

function close_menu_slider(){
    // let menu_slider = true;
    if(menu_slider_val == false){
        document.querySelector(".menu_slider_container").classList.remove("left-0");
        menu_slider_val = true;
        console.log(menu_slider_val);
    }
}
