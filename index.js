const accordion = document.querySelectorAll(".accordion");

accordion.forEach(function(acc){
    const btn = acc.querySelector(".arrow");
    btn.addEventListener("click", function(){
        acc.classList.toggle("active");
        accordion.forEach(function(item){
            if(item !== acc){
                item.classList.remove("active");
            }
        })
    })
})

// const btn = document.querySelectorAll(".arrow");

// btn.forEach((bt)=>{
//     bt.addEventListener("click", function(e){
//         const target = e.currentTarget.parentElement.parentElement;

//         target.classList.toggle("active");
//     });
// })