
/* Class that takes a callback in the constructor
Observer mutiple elements at the same time.Runs when visability changes

Documentation: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
*/


let observer = new IntersectionObserver((entries) => {
    //looping over each element
    entries.forEach((entry) =>{
        //is it overlapping the viewpoint or not
        if(entry.isIntersecting){
            //show animation
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
        
    });
});
let  hiddenElement = document.querySelectorAll('.hidden');
//the lements to observe from
hiddenElement.forEach((el) => observer.observe(el));