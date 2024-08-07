var active = 3;

var mncircles = document.querySelectorAll('.mncircle');
var sec = document.querySelectorAll('.second');

gsap.to(mncircles[active-1],{
    opacity: .9,

})

gsap.to(sec[active-1],{
    opacity: 1,

})

mncircles.forEach(function(val, index){
    val.addEventListener("click",function(){
        gsap.to('#circle',{
            rotate: (3-(index + 1))*10,
            ease: Expo.easeInOut,
            duration:1.5
        })

        greyout()
        gsap.to(this,{
            opacity: .9
        })

        gsap.to(sec[index],{
            opacity: 1
        })
    }

    )
})

function greyout(){
    gsap.to(mncircles,{
        opacity: .2
    })

    gsap.to(sec,{
        opacity: 0.4
    })
}


gsap.to('#circle',{
    rotate:0,
    ease: Expo.easeInOutk,
    duration:2
})