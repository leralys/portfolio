import { gsap } from "gsap";

export const yoyo = el => {
  gsap.fromTo(el, {
    yoyo: true,
    y: 20,
    ease: "power4.out",
  }, {
    y: 0,
    duration: 1
  });
}