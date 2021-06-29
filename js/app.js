

const navSlide = () => {
    const burger = document.querySelector('.hamberger');
    const nav = document.querySelector('.mobile-nav');
    const times = document.querySelector('.times');
    const navLinks = document.querySelectorAll('nav-links li');

    burger.addEventListener('click',()=>{
        nav.classList.toggle('open');

        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.3}s`;
            }
        });
    });
    times.addEventListener('click',()=>{
        nav.classList.remove('open');
    });

}
navSlide();

    