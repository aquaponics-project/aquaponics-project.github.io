
const hiddenElements = document.querySelectorAll(".hidden");
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
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
const galItem = document.querySelector(".gallery_item");
var gal = document.getElementById("gallery_wrapper")

let gal_pos = 1
document.getElementById("nextSlide").addEventListener("click", function(e) {
    const galWidth = galItem.clientWidth;
    gal.scrollLeft+=(gal_pos%6<5)?galWidth:-5*galWidth;
    gal_pos = (gal_pos==5)?1:(gal_pos + 1) % 6;
    console.log(gal_pos);
})
document.getElementById("lastSlide").addEventListener("click", function(e) {
    const galWidth = galItem.clientWidth;
    gal.scrollLeft-=(gal_pos>1)?galWidth:-4*galWidth;
    gal_pos =(gal_pos==1)? 5 : (gal_pos - 1) % 6
    console.log(gal_pos);
})
