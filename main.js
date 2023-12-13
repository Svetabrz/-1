
const prevBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nextBtn')
const slides = document.querySelectorAll('.slide')

let currentSlide = 0; 

// console.log(prevBtn)
// console.log(nextBtn)
// console.log(slides)


function showSlide(index){
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block'
        } else {
            slide.style.display = 'none'
        }
    })
}

showSlide(currentSlide)

prevBtn.addEventListener('click', function() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length

    showSlide(currentSlide)
})

nextBtn.addEventListener('click', function() {
    currentSlide = (currentSlide + 1) % slides.length

    showSlide(currentSlide)
})

