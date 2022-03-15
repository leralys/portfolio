import { gsap } from "gsap";

export const slideIn = el => {
    gsap.fromTo(el, {
        opacity: 0,
        x: -30,
        ease: "power2.inOut",
    }, {
        opacity: 1,
        x: 0,
        duration: 1.5
    });
}