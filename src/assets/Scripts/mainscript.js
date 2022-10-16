window.onscroll = function () {
    myfunction()
}


function myfunction() {
   /* var navbar = document.getElementById("navbar");
    var sticky=navbar.offsetTop;
   
    if (window.pageYOffset >= 105) {
       
        navbar.classList.add("stickynavbar")
    } else {
        
        navbar.classList.remove("stickynavbar");
    }*/
    header_height=document.querySelector('.header').offsetHeight;
    
    if(window.scrollY>=header_height){
        document.getElementById("navbar").classList.add('navbar-fixed-top');

        navbar_height=document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop=navbar_height+'px';
    }else{
        document.getElementById("navbar").classList.remove('navbar-fixed-top');
        document.body.style.paddingTop=0;
    }
}


function showPanel(id) {
    var panel = document.getElementById("panel_" + id);

    if (panel.style.display === "inline-table") {
        panel.style.display = "none";
    } else {
        panel.style.display = "inline-table";
    }
}

function minus(id) {
    var quantity = document.getElementById("quantity_" + id).innerHTML;
    if (quantity == 1) {
        alert("quantity should be bigger than 0")
    } else {
        quantity = Number(quantity) - 1;

        document.getElementById("quantity_" + id).innerHTML = quantity;
    }

}
function plus(id) {
    var quantity = document.getElementById("quantity_" + id).innerHTML;
    quantity = Number(quantity) + 1;

    document.getElementById("quantity_" + id).innerHTML = quantity;
}