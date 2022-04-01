import { gsap } from "gsap";

export const yoyo = el => {
  gsap.fromTo(el, {
    y: 5,
  }, {
    y: -10,
    repeat: -1,
    repeatDelay: 0,
    yoyo: true,
    duration: 2
  });
}

// fromTo('.test', 0.6, {
//   scale: 1
// }, {
//   scale: 1.1,
//   repeat: -1,
//   repeatDelay:0,
//   yoyo: true,
//   transformOrigin:'center center'
// });