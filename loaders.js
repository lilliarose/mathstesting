function setRandomLoader() {
    let loaderSource = ['runningMuppet.gif',
                        'minions.gif',
                        'catMusic.gif', 
                        'giraffe.gif', 
                        'MrBeanTime.gif', 
                        'chimp_swing.gif', 
                        'sloth.gif', 
                        'dogFromUp.gif', 
                        'socks.gif']
    //loaderSource = ['socks.gif'] // Uncomment to test a single GIF.
    let currentLoader = randomChoices(loaderSource, 1);
    console.log(currentLoader[0])
    let loaderImage = document.getElementById("loaderImage");
    loaderImage.src = 'Gifs/'+currentLoader[0];
    //loaderImage.src = 'https://media1.giphy.com/media/W7Je6BJvv5CkoRqB9Y/giphy.gif?cid=ecf05e47a91af53226112fbf28fac21baad2444c9057e0f8&rid=giphy.gif&ct=g'
}

function showLoader() {
    let loader = document.getElementById("loader");
    let overlay = document.getElementById("overlay");
    let loaderImage = document.getElementById("loaderImage");
    //loaderImage.src = 'runningMuppet.gif'
    overlay.style.display = "inline";
    loader.style.display = "inline";
}

function hideLoader() {
    let loader = document.getElementById("loader");
    let overlay = document.getElementById("overlay");
    loader.style.display = "none";
    overlay.style.display = "none";
}

