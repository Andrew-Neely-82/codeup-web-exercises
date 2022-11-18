`use strict`;

(() => {
  // $(`h1`).click(function () {
  //   $(this).css(`background-color`, `#ff0000`);
  // });

  // $(`p`).dblclick(function () {
  //   $(this).css(`font-size`, `18px`);
  // });

  // $(`li`).hover(
  //   function () {
  //     $(this).css(`color`, `red`);
  //   },
  //   function () {
  //     $(this).css(`color`, `black`);
  //   }
  // );

  // const video = document.createElement(`video`);
  // video.poster = `https://www.youtube.com/watch?v=5UqXbEwqwF8`;
  // video.autoplay = false;
  // video.controls = false;
  // video.muted = false;
  // video.height = 0;
  // video.width = 0;
  // const player = document.querySelector(`body`);

  // $(`body`).keyup(function (e) {
  //   if (e.which === 38) {
  //     $(`body`).keyup(function (e) {
  //       if (e.which === 38) {
  //         $(`body`).keyup(function (e) {
  //           if (e.which === 40) {
  //             $(`body`).keyup(function (e) {
  //               if (e.which === 40) {
  //                 $(`body`).keyup(function (e) {
  //                   if (e.which === 37) {
  //                     $(`body`).keyup(function (e) {
  //                       if (e.which === 39) {
  //                         $(`body`).keyup(function (e) {
  //                           if (e.which === 37) {
  //                             $(`body`).keyup(function (e) {
  //                               if (e.which === 39) {
  //                                 $(`body`).keyup(function (e) {
  //                                   if (e.which === 66) {
  //                                     $(`body`).keyup(function (e) {
  //                                       if (e.which === 65) {
  //                                         $(`body`).keyup(function (e) {
  //                                           if (e.which === 13) {
  //                                             $(`body`).css(`background-color`, `#000000`);
  //                                             let div = $(`body`).html(`<div></div>`);
  //                                             div.css(`display`, `flex`);
  //                                             div.css(`justify-content`, `center`);
  //                                             div.css(`align-items`, `center`);
  //                                             div.css(`user-select`, `none`);
  //                                             let contra = $(`body`).html(`h1`);
  //                                             contra.css(`color`, `#ff0000`);
  //                                             contra.css(`font-family`, `sans-serif`);
  //                                             contra.css(`text-align`, `center`);
  //                                             contra.css(`border`, `none`)
  //                                             contra;
  //                                             let video = $(`body`).html(`
  //                                             <div><h1>CONTRA</h1>
  //                                             <iframe width="560" height="315" style="border: none" src="https://www.youtube.com/embed/5UqXbEwqwF8?autoplay=1" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  //                                             </div>`);
  //                                             alert(`You have 30 lives!`);
  //                                             video;
  //                                           }
  //                                         });
  //                                       }
  //                                     });
  //                                   }
  //                                 });
  //                               }
  //                             });
  //                           }
  //                         });
  //                       }
  //                     });
  //                   }
  //                 });
  //               }
  //             });
  //           }
  //         });
  //       }
  //     });
  //   }
  // });

  const keys = {
    38: `up`,
    40: `down`,
    37: `left`,
    39: `right`,
    66: `b`,
    65: `a`,
    13: `enter`,
  };

  const konamiCode = [`up`, `up`, `down`, `down`, `left`, `right`, `left`, `right`, `b`, `a`, `enter`];
  let codePosition = 0;

  $(document).keydown((e) => {
    let key = keys[e.keyCode];
    let requiredKey = konamiCode[codePosition];
    if (requiredKey === key) {
      codePosition++;
      if (codePosition === konamiCode.length) {
        activateCheat();
        codePosition = 0;
      }
    } else {
      codePosition = 0;
    }
  });

  function activateCheat() {
    $(`body`).css(`background-color`, `#000000`);
    let div = $(`body`).html(`<div></div>`);
    div.css(`display`, `flex`);
    div.css(`justify-content`, `center`);
    div.css(`align-items`, `center`);
    div.css(`user-select`, `none`);
    let contra = $(`body`).html(`h1`);
    contra.css(`color`, `#ff0000`);
    contra.css(`font-family`, `sans-serif`);
    contra.css(`text-align`, `center`);
    contra.css(`border`, `none`);
    contra;
    let video = $(`body`).html(`
  <div><h1>Enjoy CONTRA with 30 LIVES!</h1>
  <iframe width="560" height="315" style="border: none" src="https://www.youtube.com/embed/7h-jsV2K6hA?autoplay=1" 
  title="YouTube video player" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen></iframe>
  </div>`);
    alert(`You have 30 lives!`);
    video;
  }
})();
