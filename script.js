//Burger
function burgerMenu(){
    let burger = document.querySelector('.burger')
    let menu = document.querySelector('.header__list')
    const body = document.querySelector('body')
    const html = document.querySelector('html')
    burger.addEventListener('click', () =>{
        if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            burger.classList.add('active-burger')
            body.classList.add('locked')
            html.classList.add('locked')
        }
        else {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            body.classList.remove('locked')
            html.classList.remove('locked')
        }
    })

    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 992) {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            body.classList.remove('locked')
            html.classList.remove('locked')
        }
    })

}
burgerMenu()

gsap.registerPlugin(ScrollTrigger)
let mySplitText = new SplitType('.hero__title', {type: 'words'})
const chars = mySplitText.words

let mySplitText2 = new SplitType('.hero__text', {type: 'words'})

const chars2 = mySplitText2.words
const tl = gsap.timeline()


tl.from('.header__logo-img', {
    x: -300,
    opacity: 0,
    duration: 1,
}).from(chars, {
    opacity: 0,
    y: -10,
    stagger: 0.1,
    duration: .3,

}).from(chars2, {
    opacity: 0,
    y: 10,
    duration: .2,
    stagger: 0.02,
}).from('.hero__btn', {
    opacity: 0,
    x: -10,
    duration: 1,
})



gsap.from('.shop-by-room__title', {
    scrollTrigger: {
        trigger: '.shop-by-room__section',
        start: '-30% top',
        end: '+=100px',
        scrub: true,
    },

    opacity: 0,
    y: 50,
    duration: 1,
})



    if (window.innerWidth >= 992) {
        gsap.from('.shop-by-room__item', {
            scrollTrigger: {
                trigger: '.shop-by-room__section',
                start: '30% center',
                end: '+=300px',
                scrub: true,
                
            },
            stagger: 1, 
            opacity: 0,
            scale: 0,
            transformOrigin: 'center center',
            ease: 'back'
        
        })
    }

    if (window.innerWidth <= 564) {
        gsap.from('.shop-by-room__item', {
            scrollTrigger: {
                trigger: '.shop-by-room__section',
                start: '0% center',
                end: '+=1000px',
                scrub: true,
            },
            stagger: 1, 
            opacity: 0,
            scale: 0,
            transformOrigin: 'center center',
        
        })
    }

    let mySplitText3 = new SplitType('.enjoy-furnished__title', {type: 'words'})
    const chars3 = mySplitText3.words

    let mySplitText4 = new SplitType('.enjoy-furnished__text', {type: 'words'})
    const chars4 = mySplitText4.words

    gsap.from(chars3, {
        scrollTrigger: {
            trigger: '.enjoy-furnished__section',
            start: '0% center',
            end: '+=300px',
        },
    
        opacity: 0,
        y: 30,
        stagger: 0.1,
    })

    gsap.from(chars4, {
        scrollTrigger: {
            trigger: '.enjoy-furnished__section',
            start: '0% center',
            end: '+=300px',
        },
    
        opacity: 0,
        y: 30,
        stagger: 0.01,
    })


    gsap.from('.furnished-img-1', {
        scrollTrigger: {
            trigger: '.furnished-img-1',
            start: 'top center',
            end: '+=230px',
            scrub: true,
        },
    
        x: 400,
        opacity: 0,
    })


    gsap.from('.furnished-img-2', {
        scrollTrigger: {
            trigger: '.furnished-img-2',
            start: 'top center',
            end: '+=230px',
            scrub: true,
        },
    
        x: -400,
        opacity: 0,
    })

    gsap.from('.furnished-img-3', {
        scrollTrigger: {
            trigger: '.furnished-img-3',
            start: 'top center',
            end: '+=230px',
            scrub: true,
        },
    
        x: 400,
        opacity: 0,
    })

    gsap.from('.furnished-img-4', {
        scrollTrigger: {
            trigger: '.furnished-img-4',
            start: 'top center',
            end: '+=230px',
            scrub: true,
        },
    
        x: -400,
        opacity: 0,
    })

    gsap.from('.furnished-anim-1', {
        scrollTrigger: {
            trigger: '.furnished-anim-1',
            start: 'top center',
            end: '+=230px',
            scrub: true,
        },
    
        x: -400,
        opacity: 0,
    })

    gsap.from('.furnished-anim-2', {
        scrollTrigger: {
            trigger: '.furnished-anim-2',
            start: 'top center',
            end: '+=230px',
            scrub: true,
        },
    
        x: 400,
        opacity: 0,
    })

    gsap.from('.furnished-anim-3', {
        scrollTrigger: {
            trigger: '.furnished-anim-3',
            start: 'top center',
            end: '+=230px',
            scrub: true,
        },
    
        x: -400,
        opacity: 0,
    })

    gsap.from('.furnished-anim-4', {
        scrollTrigger: {
            trigger: '.furnished-anim-4',
            start: 'top center',
            end: '+=230px',
            scrub: true,
        },
    
        x: 400,
        opacity: 0,
    })

    gsap.from('.shop-bestsellers__item', {
        scrollTrigger: {
            trigger: '.shop-bestsellers__title', 
            start: '0% center',
            end: '+=250px',
            duration: 1,
        },
        stagger: 0.3,
        y: 20,
        opacity: 0,
    })

    gsap.from('.floyd__bed', {
        scrollTrigger: {
            trigger: '.floyd__section',
            start: '0% center'
            
        },
        duration: 1.5,
        x: -400,
        opacity: 0,
    })

    gsap.from('.floyd__wrapper', {
        scrollTrigger: {
            trigger: '.floyd__section',
            start: '0% center'
            
        },
        duration: 1.5,
        x: 400,
        opacity: 0,
    })

    gsap.from('.revies-in__wrapper', {
        scrollTrigger: {
            trigger: '.revies-in__title',
            start: '0% center',
            end: '+=200px',
            scrub: true,
        },

        xPercent: 60,
    })

    let mm = gsap.matchMedia();

// add a media query. When it matches, the associated function will run
mm.add("(max-width: 761px)", () => {

  gsap.from('.revies-in__item-1', {
    scrollTrigger: {
        trigger: '.revies-in__item-1',
        start: '0% center',
        end: '+=100px',
        scrub: true,
    },

    x: 800,
  });

  gsap.from('.revies-in__item-2', {
    scrollTrigger: {
        trigger: '.revies-in__item-2',
        start: '0% center',
        end: '+=100px',
        scrub: true,
    },

    x: -800,
    ease: 'none',
  });

  gsap.from('.revies-in__item-3', {
    scrollTrigger: {
        trigger: '.revies-in__item-3',
        start: '0% center',
        end: '+=100px',
        scrub: true,
    },

    x: 800,
  });

  
});
let mySplitText5 = new SplitType('.ease-pain__title', {type: 'words'})
const chars5 = mySplitText5.words


gsap.from(chars5, {
    scrollTrigger: {
        trigger: '.ease-pain__section',
        start: '0% center',
    },
    y: 15,
    opacity: 0,
    stagger: 0.2,
})
gsap.from('.ease-pain__img', {
    scrollTrigger: {
    trigger: '.ease-pain__title', 
    start: '50% center',
    },

    'clip-path': 'inset(89% 99% 0 0)',
    stagger: '0.5',

})

const tl2 = gsap.timeline()

gsap.from('.woman', {
    scrollTrigger: {
        trigger: '.feather-stress',
        start: '20% center',

    },

    y: -300,
    opacity: 0,
    duration: 1.5,
})

gsap.from('.feather-stress__title', {

    scrollTrigger: {
        trigger: '.feather-stress',
        start: '20% center',

    },
        opacity: 0,
        x: 200,
        duration: 0.75,
        delay: 1.5,
})

gsap.from('.feather-stress__btn', {

    scrollTrigger: {
        trigger: '.feather-stress',
        start: '20% center',

    },
        opacity: 0,
        x: -200,
        duration: 0.75,
        delay: 2.25,
})

