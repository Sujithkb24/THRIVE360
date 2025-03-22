import React from "react";
import './Landingpage.css';
import 'remixicon/fonts/remixicon.css'
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useEffect } from "react";
import gsap from "gsap";
import { Navigate } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);
function Landingpage(){
    const navigate = useNavigate(); 
    const container = useRef();
    const solRef = useRef(null);
    const nameRef = useRef(); 
    const contentref=useRef();
    const cursorref=useRef();
    const tl = gsap.timeline();
    const tl2 = gsap.timeline();
    useEffect(() => {
        const h1 = nameRef.current;
        const name = h1.textContent;
        var namechar= name.split("");
        h1.innerHTML = "";
        namechar.forEach(function(e){
            h1.innerHTML+=`<span>${e}</span>`;
        })
        const spans = h1.querySelectorAll("#name h1 span");
gsap.from(spans,{
    y:100,
    opacity:0,
    duration:0.3,
    delay:0.3,
    stagger:0.2,
    ease:"circ.out",
    
})
     
      
      }, []);
    // for nav icons  
  useGSAP(()=>{
    tl2.from("#nav h2",{
      opacity:0,
      duration:0.3,
      delay:2.2
    })
    tl2.from("#nav i",{
      opacity:0,
      duration:0.3,
    })
  })
  // solutions page
  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#page2 h1", {
      xPercent: -120, 
      ease: "none", 
      scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 0%",
        end: "top -140%",
        scrub: 3,
        pin: true,
        
      }
    });
  })

  useGSAP(()=>{
    gsap.from("#slogan ",{
      opacity:0,
      stagger:0.2,
      duration:0.4,
      delay:0.5,
      scrollTrigger:{
        trigger:"#slogan",
        scroller:"body",
        start:"top 50%",
        end:"top 100%",
        scrub:3
      }
    })
  })
// content page
  useGSAP(()=>{
    
    gsap.from("#contentpage #page ",{
      opacity:0,
      y:100,
      stagger:0.5,
      duration:0.9,
      delay:0.8,
      scrollTrigger:{
        trigger:"#contentpage",
        scroller:"body",
        start:"top 30%",
        end:"top 100%",
        scrub:5
      }
    })
    
  })
 
  useEffect(()=>{
    var main=document.querySelector("#landing");
    var cursor1=document.querySelector("#cursor1")
    main.addEventListener("mousemove",function(ele){
      gsap.to(cursor1,{
        x:ele.x,
        y:ele.y,
        duration:1,
        ease:"back.out"
      })
    }) 
  })
  
    
  useGSAP(()=>{
    
    
    tl.to("#full",{
        right:0,
        duration:0.6
    })
    tl.from("#full h4",{
        x:150,
        duration:0.4,
        stagger:0.25,
        opacity:0
    })
    tl.from("#full i",{
        opacity:0
    })
}, { scope: container })

tl.pause();

const scrolltoSol = () => {
  solRef.current.scrollIntoView({ behavior: "smooth" });
};

  return (
    <>
    <div id="landing">
    <div  id="cursor1"><img src="plant.png"></img></div>
      <div ref={container}  className="main">
        <video autoPlay muted loop id="myVideo">
          <source src="landscape.mp4" type="video/mp4" />
        </video>

        <div id="nav">
          <h2>Thrive360</h2>
          <i onClick={()=> tl.play()}   className="ri-menu-3-line"></i>
        </div>

        <div  id="full">
          <h4 onClick={scrolltoSol}>Solutions</h4>
          <h4 >About</h4>
          <h4 >Contact Us</h4>

          <i  onClick={()=> tl.reverse()}  className="ri-close-line"></i>
        </div>
        <div id="name">
            <h1 ref={nameRef}>THRIVE360</h1>
        </div>
        <div id="slogan">
          <h2>Inclusive healthcare solutions for physical and mental well-being</h2>
        </div>
      </div>

      <div id="page2">
        <h1>SOLUTIONS</h1>
      </div>
      </div>

      <div ref={solRef} id="contentpage">
      
    
      <div id="page" className="mind">
      <h1 id="heading">Mindfull</h1>
      <h2 id="subheading">A student mental wellness platform</h2>
      <button type="submit" onClick={()=>{navigate("/")}} id="button" className="btn">Mind me There <i class="ri-arrow-right-up-line"></i></button>
      </div>
      <div id="page" className="fit">
      <h1 id="heading">FitFull</h1>
      <h2 id="subheading">A comprehensive wearable health monitoring platform</h2>
      <button type="submit" onClick={()=>{navigate("/")}} id="button" className="btn">Fit me There <i class="ri-arrow-right-up-line"></i></button>
      </div>
      <div id="page" className="care">
        <h1 id="heading">CareFull</h1>
        <h2 id="subheading">An Online Medicine ordering and inventory management platform</h2>
        <button type="submit" onClick={()=>{navigate("/")}} id="button" className="btn">Care me There <i class="ri-arrow-right-up-line"></i></button>
      
      </div>
      
      </div>
        </>
    )
}
export default Landingpage;