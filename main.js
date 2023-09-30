const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

function HeroSectionAnimation()
{
  var tl=gsap.timeline();
  tl.from('#Heroline1',{y:-400,
  duration:1,
  opacity:0
});
tl.from('#Heroline2',{x:400,
  duration:1,
  opacity:0
});
tl.from('#Heroline3',{y:400,
  duration:1,
  opacity:0
});
  // gsap.from('#Heroline1',{y:-400});
  // gsap.from('#Heroline2',{x:400});
  // gsap.from('#Heroline3',{y:400});
}


function circleMouseFollow(){
    window.addEventListener('mousemove',function (e) {

        let mouseElement=this.document.querySelector('#minicircle');
        mouseElement.style.transform=`translate(${e.clientX}px,${e.clientY}px)`
    });
  }
  circleMouseFollow()
  HeroSectionAnimation()

  document.querySelectorAll('.projectitem').forEach((elem) => {
    var oldx=0;
    elem.addEventListener('mouseleave', (e) => {
      gsap.to(elem.querySelector('img'), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener('mousemove', (e) => {
      var diff = e.clientY - elem.getBoundingClientRect().top;
      xMovement=e.clientX-oldx;
      oldx=e.clientX;
      gsap.to(elem.querySelector('img'), {
        opacity: 1,
        top: diff,
        left: e.clientX,
        rotate:gsap.utils.clamp(-20,20,xMovement)
      });
    });

  });
