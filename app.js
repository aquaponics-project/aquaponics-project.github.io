
const hiddenElements = document.querySelectorAll(".hidden");
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            if(entry.target.classList.contains('hidden_left')){
                entry.target.classList.add("show_left");
            }
            if(entry.target.classList.contains('hidden_right')){
                entry.target.classList.add("show_right");
            }
            if(entry.target.classList.contains('hidden_up')){
                entry.target.classList.add("show_up");
            } 
            if(entry.target.classList.contains('hidden_load')){
                entry.target.classList.add("show_load");
            }
        }else{
            entry.target.classList.remove("show_up");
            entry.target.classList.remove("show_left");
            entry.target.classList.remove("show_right");
            entry.target.classList.remove("show_load");
            
            
        }
    })
});
hiddenElements.forEach((el)=>observer.observe(el));