function slider(){
    let indexSlider = 1,
    slidePhoto = document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    slidedots = document.querySelector('.slider-dots'),
    dots = document.querySelectorAll('.dot');
    console.log(dots.length);
    
    showSlide(indexSlider);
    function showSlide(n){
        if (n > slidePhoto.length){
            indexSlider = 1;
        }
        if (n < 1){
            indexSlider = slidePhoto.length
        }
        slidePhoto.forEach((item)=> item.style.display = 'none');
        dots.forEach((item)=> item.classList.remove('dot-active'));

        slidePhoto[indexSlider - 1].style.display = 'block';
        dots[indexSlider - 1].classList.add('dot-active');
    }

   function plusSlide(n){
        showSlide(indexSlider += n)
   }
    function currentSlide(n){
            showSlide(indexSlider = n)
        }
   
   prev.addEventListener('click' , function(){
        plusSlide(-1)
    });
    next.addEventListener('click' , function(){
        plusSlide(1);
    })

    slidedots.addEventListener('click' , function(event){
        for (let i = 0; i < dots.length; i++){
            if (event.target.classList.contains('dot') && event.target == dots[i]){
                currentSlide(i+1);
            }
        }
    });
}
module.exports = slider;