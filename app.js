//using selectors inside the element

const questions = document.querySelectorAll(".question");

questions.forEach(function (question){
    const btn = question.querySelector(".question-btn");

    btn.addEventListener("click",function(){

        questions.forEach(function(item){
            console.log("hii......",item);
            if(item !== question){
                item.classList.remove("show-text");
            }
        });
        question.classList.toggle("show-text");
        
    });

});

// traversing the dom
