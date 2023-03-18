// pug swing: https://media3.giphy.com/media/Kuw5gir5rTnaw/giphy.gif?cid=ecf05e47xen7u6crwn82xcam74il7kmocjcjg22187iys592&rid=giphy.gif&ct=g
// giphy embed: <iframe src="https://giphy.com/embed/Kuw5gir5rTnaw" width="359" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/dog-swing-Kuw5gir5rTnaw">via GIPHY</a></p>

// dorry:  https://media4.giphy.com/media/dIW4s2cR6cvtu/giphy.gif?cid=ecf05e47nmxw4x521czru3utwz93nm447ssf4s0irm020nbq&rid=giphy.gif&ct=g
// giphy embed: <iframe src="https://giphy.com/embed/UYbMnQghsqFr2" width="480" height="269" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/disneypixar-disney-pixar-dory-UYbMnQghsqFr2">via GIPHY</a></p>

// dog fetch from UP: https://media2.giphy.com/media/IJZGS8c78XGU0/giphy.gif?cid=ecf05e47lrx5awxm6onblh3rx48o8xrgfldl913kr0ei8ouz&rid=giphy.gif&ct=g
// giphy embed: <iframe src="https://giphy.com/embed/IJZGS8c78XGU0" width="480" height="271" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/disneypixar-disney-pixar-IJZGS8c78XGU0">via GIPHY</a></p>

// running muppet: https://media1.giphy.com/media/7kn27lnYSAE9O/giphy.gif?cid=ecf05e475zbxm8ay1x9q48xxh2m6c297ae9skjllv08z2m29&rid=giphy.gif&ct=g
// giphy embed:  <iframe src="https://giphy.com/embed/7kn27lnYSAE9O" width="480" height="373" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/running-muppets-7kn27lnYSAE9O">via GIPHY</a></p>

// sloth: https://media1.giphy.com/media/VTjMuV5o8r4eA/giphy.gif?cid=ecf05e47yfrq7sj4a79mebf4k7w17s1hgp88s14ajot1lrg9&rid=giphy.gif&ct=g
// giphy embed:  <iframe src="https://giphy.com/embed/VTjMuV5o8r4eA" width="480" height="258" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/sloth-VTjMuV5o8r4eA">via GIPHY</a></p>

// monstersInc: https://media0.giphy.com/media/MB5cRgSVDW4F2/giphy.gif?cid=ecf05e47yggg3y265z02afqa6gfl3re1x5klp3m76x75a8jl&rid=giphy.gif&ct=g
// giphy embed: <iframe src="https://giphy.com/embed/MB5cRgSVDW4F2" width="480" height="345" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/thegoodfilms-cinemagraph-art-film-MB5cRgSVDW4F2">via GIPHY</a></p>

// minions Gru: https://media0.giphy.com/media/lHJztSHlaX4NG/giphy.gif?cid=ecf05e47yggg3y265z02afqa6gfl3re1x5klp3m76x75a8jl&rid=giphy.gif&ct=g
// giphy enbed: <iframe src="https://giphy.com/embed/lHJztSHlaX4NG" width="480" height="258" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/despicable-me-movie-lHJztSHlaX4NG">via GIPHY</a></p>

// snow whie: https://media3.giphy.com/media/bCcxY1ADkAqfS/giphy.gif?cid=ecf05e47zg0tsmbrn41w6exrdr6u4dldtscu3pgeprycgnmn&rid=giphy.gif&ct=g
// giphy embed: <iframe src="https://giphy.com/embed/bCcxY1ADkAqfS" width="480" height="359" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/disney-snow-white-and-the-seven-dwarfs-walt-disney-pictures-bCcxY1ADkAqfS">via GIPHY</a></p>

// dancing orange: https://media4.giphy.com/media/l2JJHEW1lToNnJzxe/giphy.gif?cid=ecf05e476i3vtxwwzlu6h6bk5ebli8gwzpt5phw78ay9bd04&rid=giphy.gif&ct=g
// giphy embed: <iframe src="https://giphy.com/embed/l2JJHEW1lToNnJzxe" width="460" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/playkids-children-junior-junioronthejob-l2JJHEW1lToNnJzxe">via GIPHY</a></p>


const loaderSource = ['pupswing.gif',
'MrBeanTime.gif',
'mouseSwing.gif',
'dancingOrange.gif',
'dogFromUpFetch.gif',
'runningMuppet.gif',
'Sloth.gif',
'snowWhite.gif',
'monstersInc.gif',
'giraffe.gif',
'dory.gif',
'dogFromUp.gif',
'minionsGru.gif',
'minions.gif',
'molang.gif',
'catMusic.gif', 
'socks.gif'];

let loaderLength = loaderSource.length
let loaderOrder = [];
let loaderCount = 0;
let randomOrderSet = false;

function setLoaderOrder() {
    for (let i = 0; i < loaderLength; i++) {
        loaderOrder.push(i);
    }

    loaderOrder = randomShuffle(loaderOrder);

}

function setRandomLoader() {

    if (!randomOrderSet){
        setLoaderOrder()
        randomOrderSet = true;
    }
    let currentLoader = loaderSource[loaderOrder[loaderCount%loaderLength]];
    //console.log(currentLoader)
    let loaderImage = document.getElementById("loaderImage");
    loaderImage.src = 'Gifs/'+currentLoader;
    loaderCount++;
}

function showLoader() {
    let loader = document.getElementById("loader");
    let overlay = document.getElementById("overlay");
    let loaderImage = document.getElementById("loaderImage");
    overlay.style.display = "inline";
    loader.style.display = "inline";
}

function hideLoader() {
    let loader = document.getElementById("loader");
    let overlay = document.getElementById("overlay");
    loader.style.display = "none";
    overlay.style.display = "none";
}

//function to perform a random shuffle of an array. See https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
function randomShuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array
}

