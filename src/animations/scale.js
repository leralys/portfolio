import { gsap } from "gsap";

export const scale = el => {
  gsap.fromTo(el, {
    scale: 0.7,
    ease: "expo.out",
  }, {
    scale: 1,
    duration: 1
  });
}