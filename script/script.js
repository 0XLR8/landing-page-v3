/* About Section - text switch script */

$(".about-toggle-section .toggle-btn").on("click", function(){
    if($(this).text() == "Life"){
        $("#about-education-text").removeClass("about-active");
        $("#about-life-text").addClass("about-active");
    }else{
        $("#about-life-text").removeClass("about-active");
        $("#about-education-text").addClass("about-active");
    }
})

/* --------------------------- */


/* Client Section - display content script */

/* Show content function */
function showContent(name, job, text, url){
    $(".client-img").attr("src", url);
    $(".client-text").text(text);
    $(".client-name").text(name);
    $(".client-job").text(job);
}

/* Script will run when the page is loaded */
$(document).ready(function(){
    let index = 0;

    $(".client-toggle-section .toggle-btn").eq(0).addClass("client-active");
    showContent(clients[0].name, clients[0].job, clients[0].text, clients[0].url);

    setInterval(function(){
        if(index === 3){
            index = 0;
        }
        index++;

        $(".client-toggle-section .toggle-btn").each(function(i){
            $(".client-toggle-section .toggle-btn").eq(i).removeClass("client-active");
        })

        $(".client-toggle-section .toggle-btn").eq(index).addClass("client-active");

        showContent(clients[index].name, clients[index].job, clients[index].text, clients[index].url)
    }, 15000);
})

/* Event on click */

$(".client-toggle-section .toggle-btn").on("click", function(){
    $(".client-toggle-section .toggle-btn").each(function(index){
        $(".client-toggle-section .toggle-btn").eq(index).removeClass("client-active");
    })
    $(this).addClass("client-active");

    let index = $(this).index();
    
    showContent(clients[index].name, clients[index].job, clients[index].text, clients[index].url)
})

/* --------------------------- */

/* Contact extra script */

$("#contact-btn").on("click", function(event){
    event.preventDefault();
    alert("Back-End section locked. Hire me to unlock the next chapter.")
})

/* Smooth Scrolling when clicking on anchor link */

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});