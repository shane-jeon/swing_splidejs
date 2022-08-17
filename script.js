// const splide = new Splide('.splide', {
//   type: 'slide', //slide, loop, fade
//   // padding: { y: 10 }, //css values
//   gap: '20px', //1 rem default
//   // rewind: true,
//   speed: 500, //transition in milliseconds
//   // fixedWidth: '10vw',
//   // width: '100vw',
//   perPage: 5,
//   start: 3,
//   perMove: 2,
//   autoplay: true,
//   interval: 3000,
//   arrows: false,
//   pagination: false,
//   pauseOnHover: true,
//   wheel: true,
// });
// splide.mount();



var main = new Splide('.splide', {
  type: 'fade', //slide, loop, fade
  // padding: { y: 10 }, //css values
  // gap: '20px', //1 rem default
  rewind: true,
  // speed: 500, //transition in milliseconds
  // fixedWidth: '10vw',
  // width: '100vw',
  // perPage: 5,
  // start: 3,
  // perMove: 2,
  // autoplay: true,
  // interval: 3000,
  arrows: true,
  pagination: false,
  // pauseOnHover: true,
  // wheel: true,
});

counter = 1
main.mount();
