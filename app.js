gsap.registerPlugin(Flip)

const links = document.querySelectorAll(".nav-item a")
const activeNav = document.querySelector(".active-nav")

links.forEach(link =>{
    link.addEventListener('click',(e)=>{
        // turn nav blue
        gsap.to(links ,{color : " #000021"})
        if(document.activeElement === link){
            gsap.to(link,{color:"#000021"})
        }
        //move the bottom line
        const state = Flip.getState(activeNav)
        link.appendChild(activeNav)
        Flip.from(state,{
            duration: 1,
            absolute:true,
            ease:'elastic.out(1,0.5)'
        })
    })
})
