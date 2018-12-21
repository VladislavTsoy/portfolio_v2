let angle = 0;
let cvn;
function setup() {
    cvn = createCanvas(windowWidth, windowHeight, WEBGL);
    cvn.parent('parent')
}

function draw() {
    background(255);
	noFill();
	stroke(0, 6);
    push();
    rotateY(angle * -.05)
    translate(120, -100, 100)
	sphere(120);
    pop();

    noFill();
	stroke(0, 70);
    push();
    rotateY(angle * -.05)
    translate(120, -100, 100)
	box(100);
    pop();


    noFill()
    stroke(0, 50);
    push();
    rotateY(angle * .05)
    translate(-120, -100, 80)
    box(190);
    pop();

    noFill()
    stroke(0, 5);
    push();
    rotateY(angle * .05);
    translate(-120, -100, 80);
    sphere(60);
    pop();

    angle += .08
}

document.addEventListener('DOMContentLoaded', () => {
    anime.timeline({
        targets: '.welcome',
        easing: 'easeOutExpo',
        duration: 1200
    })
    .add({
        delay: 3200,
        duration: 1500,
        opacity: 0,
        complete: function(anime) {
            document.querySelector('.welcome').remove();
        }
    })

    anime({
        targets: '#parent',
        opacity: 1,
        duration: 1500,
        easing:'easeOutExpo'
    })

    // heading animation
    anime({
        targets: '#title',
        delay: 400,
        opacity: 1,
        duration: 1800,
        translateY: ['-30px', '0px'],
        easing: 'easeOutExpo'
    })

    // subheading animation
    anime({
        targets: '#subheading',
        delay: 600,
        opacity: 1,
        duration: 1800,
        easing: 'easeOutExpo',
        translateY: ['-30px', '0px']
    })

    // loader wrapper
    anime({
        targets: '.loader-wrapper',
        opacity: 1,
        easing: 'easeOutExpo',
        duration: 1800,
        delay: 1200
    })

    // loader 
    anime({
        targets: '.loader',
        opacity: 1,
        easing: 'easeOutExpo',
        duration: 2000,
        delay: 1600,
        width: ['0%', '100%']
    })
    anime({
        targets: '#root',
        duration: 1000,
        delay: 3000,
        complete: function(anime) {
            document.querySelector('#root').style.height = 'auto';
        }
    })

    anime({
        targets: '#root',
        opacity: 1,
        easing: 'easeOutExpo',
        duration: 2400,
        delay: 4000,
        complete: function(anime) {
            document.querySelector('#root').style.height = 'auto';
        }
    })
})