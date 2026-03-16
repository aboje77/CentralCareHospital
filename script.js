let doctors = document.querySelectorAll(".team")
let count = 0;

doctors.forEach(function(card, index){
    card.style.left =`${index*100}%`
})

function myfun(){
    doctors.forEach(function(curValue){
        curValue.style.transform=`translateX(-${count * 100}%)`
    })
}

setInterval(function(){
    count++;
    if(count == doctors.length){
        count=0;
    }
    myfun()
}, 3000)

const slider = document.querySelector('.story-slider');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let scrollAmount = 0;
const scrollStep = 320; // width of one card + gap

nextBtn.addEventListener('click', () => {
  if (scrollAmount < slider.scrollWidth - slider.clientWidth) {
    scrollAmount += scrollStep;
    slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  }
});

prevBtn.addEventListener('click', () => {
  if (scrollAmount > 0) {
    scrollAmount -= scrollStep;
    slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  }
});

