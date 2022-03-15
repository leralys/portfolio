import { gsap } from "gsap";

export const fadeIn = el => {
    gsap.fromTo(el, {
        opacity: 0,
        y: 20,
        ease: "power4.out",
    }, {
        opacity: 1,
        y: 0,
        duration: 1.5
    });
}