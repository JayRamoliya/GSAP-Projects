// 1. timeline create
var tl = gsap.timeline({
    scrollTrigger:{
    // select main kariyu
    trigger:'#main',
    markers:true,
    // 75% e main na che and 50% e display na 6 mobile display laptop display aem
    start:'75% 50%',
    end:'100% 50%',
    // scrub atle ke animations both side chale up and down ma
    scrub:5,
    duration:1,
    pin:true,
}})

// to yani ki kaha tak
// from yani ki kaha se
tl.to('.img',{
    width:'100vw',
    height:'100vh',
})