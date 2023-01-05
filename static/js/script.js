// Select <ul> node
var ulElm = document.querySelector("ul");
// Create document fragment to later append googleAd
var docFrag = document.createDocumentFragment();

// create script element
var scriptElm = document.createElement("script");

// set script node attributes
scriptElm.setAttribute(
  "src",
  "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1234567890123456"
);
scriptElm.setAttribute("crossorigin", "anonymous");
scriptElm.setAttribute("async", "");

// create ins element
var insElm = document.createElement("ins");

// add class attribute
insElm.classList.add("adsbygoogle");

// look into inline CSS (not priority right now)
// set attribute
insElm.setAttribute("style", "display:inline-block;width:728px;height:90px");

// set datasets
insElm.dataset.adClient = "ca-pub-1234567890123456";
insElm.dataset.adSlot = "1234567890";

// create list element to put ad into
var liSlide = document.createElement("li");
// add class attribute
liSlide.classList.add("splide__slide");
// set dataset attribute
liSlide.dataset.splideHash = "googleAd";
// set id attribute
// liSlide.setAttribute('id', 'googleAd');
liSlide.setAttribute("class", "googleAd");
// console.log("liSlide before appendChild", liSlide);

// append script and ins nodes
liSlide.appendChild(scriptElm);
liSlide.appendChild(insElm);

// liSlide.appendChild(secScriptElm);
console.log("liSlide after appendChild", liSlide);

// GETTING A LIST OF ELEMENTS

// selects all nodes with class "splide__slide"
var liSlides = document.querySelectorAll("li");
console.log("splide__slides", liSlides);

// getting length of list
// console.log("length", liSlides.length);

// // creating array to hold index nums of liSlides
// slide_indices = [];

// // Pushing indices to array
// for (let i = 0; i < liSlides.length; i++) {
//   slide_indices.push(i);
// }

// Once DOM content is loaded, execute the following function:
// instantiate new splide instance, accepting ID selector
// accept options as 2nd argument (default settings)
document.addEventListener("DOMContentLoaded", function () {
  var main = new Splide("#main-carousel", {
    type: "fade",
    rewind: true,
    pagination: false,
    arrows: true,
  });

  // initializes instance, passing in extension object
  main.mount(window.splide.Extensions);
  // count how many times hash changes
  let counter = 0;

  // upon hashchange event,
  window.addEventListener("hashchange", () => {
    // tracks hash change through console
    const hash = window.location.hash;
    // increments counter by 1
    if (hash != "#googleAd") {
      counter += 1;
    }

    let mainIndex = main.index;
    const trackIndex = main.index + 1;
    console.log(
      `Hash: ${hash} | Counter: ${counter} | main.Index: ${mainIndex} | trackIndex: ${trackIndex}`
    );

    if (mainIndex % 3 === 2) {
      console.log("ADDED RIGHT");
      main.add(liSlide, trackIndex);

      // main.on("moved", function () {
      //   if (hash == "#googleAd") {
      //     console.log("MOVED");
      //     main.remove(".googleAd");
      //   }
      // });
    }
    main.on("moved", function () {
      if (hash == "#googleAd") {
        console.log("MOVED");
        main.remove(".googleAd");
      }
    });
  });
});

// ad is being removed no matter what direction
// however ad cannot be placed when arrow is clicked to the left
// addition of ad messes up index % 3
