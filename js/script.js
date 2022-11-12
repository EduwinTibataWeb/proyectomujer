$(document).ready(function(){
    "use strict";
    let getImg = $(".cont_graficas img");
    let modal = $(".modal");
    let getImgModal = $("#img_modal");
    let getClosed = $(".closed")
    getImg.on("click", function(){
        modal.css("display", "flex");
        getImgModal.attr("src", $(this).attr("src"));
    }); 
    getClosed.on("click", function(){
        modal.css("display", "none");
    });
});