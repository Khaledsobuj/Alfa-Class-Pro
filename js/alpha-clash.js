// function play() {
//     // 1. hide the home screen


//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');


//     // console.log(homeSection.classList);
//     // 2. show the playground

//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection.classList);
// }

function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
}
