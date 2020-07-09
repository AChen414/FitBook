var myinput = document.querySelector("#myinput");

myinput.addEventListener("keyup", function(e){
    var search_item = e.target.value.toLowerCase();
    var span_items = document.querySelectorAll(".exercise-item span")

    console.log(search_item)
    // span_items.forEach(function(item) {
    //     if(item.textContent.toLowerCase().indexOf(search_item) > -1) {
    //         item.closest("li").style.display = "";
    //     }
    //     else {
    //         item.closest("li").style.display = "none";
    //     }
    // })
})