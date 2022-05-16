gsap.from(".nav-item", { duration: 1,stagger: .6,
    opacity: 0, y: -90, x: - 90,ease:'bounce' })
gsap.fromTo('.circle-small',
    { x: '-30rem', opacity: 0 },
    { x: 0, opacity: 1, ease: 'back.out(1.7)', delay: 0.5 });

gsap.fromTo('.circle-large',
    { x: '30rem', opacity: 0 },
    { x: 0, opacity: 1, ease: 'back.out(1.7)', delay: 0.6 });
gsap.fromTo('.content',
    { x: '30rem', y: -50, opacity: 0 },
    { x: 0, opacity: 1, ease: 'back.out(1.7)', delay: 1 });
gsap.fromTo('.love',
    { x: '10rem', opacity: 0 },
    { x: 0, opacity: 1, ease: 'back', delay: 1.2 });

let t1=gsap.timeline({
        scrollTrigger:{
            trigger:'.second',
            start:'center bottom'
        }
})
t1.from(".couple", { duration: 1,opacity: 0, x:-200})
t1.from(".grid-list",{stagger:.6,x:100,opacity:0},"<")

let t2= gsap.timeline({
    scrollTrigger:{
        trigger: '.third',
    start:"center bottom"
    } 
})
t2.fromTo('.third',
{backgroundPosition: '20px 100px',opacity:0,duration:1},
{backgroundPosition:'200px 40px',opacity:1}
)
t2.from("h2",{x:100,opacity:0})