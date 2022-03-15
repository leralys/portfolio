import { gsap } from "gsap";

export const fade = el => {
    gsap.fromTo(el, {
        opacity: 0,
        x: -30,
        ease: "circ.out",
    }, {
        opacity: 1,
        y: 0,
        duration: 1.5,
    });
}