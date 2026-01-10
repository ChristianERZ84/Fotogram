
const gallery = [
    'cocktail-drinks-6950673_1280.jpg',
    'coconut-5596391_1280.jpg',
    'drink-84533_1280.jpg',
    'flic-en-flac-beach-7273767_1280.jpg',
    'new-zealand-133_1280.jpg',
    'ocean-829715_1280.jpg',
    'oranges-2166207_1280.jpg',
    'pepper-1914117_1280.jpg',
    'pomegranate-3383814_1280.jpg',
    'raspberries-5163781_1280.jpg',
];

const titles = [
    'Delicious Cocktails',
    'Tasty Coconut',
    'Cocktail on the Beach',
    'Flic en Flac-Beach on Mauritius',
    'Landscape in New Zealand',
    'Beach with palms and a boat',
    'Fresh oranges and a pinapple',
    'A mix of white, red and black pepper',
    'Pomegranate - Fruit of Aphrodite',
    'Raspberries'
];

const dialogRef = document.getElementById('myDialog');

function renderGallery() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = '';
    for (let index = 0; index < gallery.length; index++) {
        contentRef.innerHTML += getImgTemplate(index);
    }
}

function getImgTemplate(index) {
    return `<button class="single-gallery-img-btn" onclick='openDialog(), renderDialog(${index})' role="button" tabindex='0'>
               <img src="./img/${gallery[index]}" alt="${titles[index]}">
            </button>`
}

function renderDialogTemplate(index) {
    return `<div class='dialog-main-container' onclick='event.stopPropagation()'>
                <header class='dialog-header'>
                    <h2 id="dialogTitle">${titles[index]}</h2>
                    <button class='close-btn' onclick="closeDialog()" aria-label="close dialog"><img src="./img/close.png"></button>
                </header>

                <section class='dialog-big-img' id='dialog-single-img'>
                    <img src="./img/${gallery[index]}" alt="${titles[index]}">    
                </section>

                <footer class='dialog-footer'>
                    <div class='box-df-btn-left'><button class='nav-btn' onclick='prevImg(${index})'><img src="./img/Arrow-Left.png"></button></div>
                    <div class='box-df-counter'><span class='counter' id='counter'>${index + 1}/${gallery.length}</span></div>
                    <div class='box-df-btn-right'><button class='nav-btn' onclick='nextImg(${index})'><img src="./img/Arrow-Right.png"></button></div>
                </footer>
            </div>`
}

function renderDialog(index) {
    dialogRef.innerHTML = renderDialogTemplate(index);
}

function nextImg(index) {
    index++;
    if (index == gallery.length) {
        index = 0;
    }
    // dialogRef.innerHTML = renderDialogTemplate(index);
    renderDialog(index);
}

function prevImg(index) {
    index--;
    if (index < 0) {
        index = gallery.length - 1;
    }
    // dialogRef.innerHTML = renderDialogTemplate(index);
    renderDialog(index);
}

function openDialog() {
    dialogRef.showModal();
}

function closeDialog() {
    dialogRef.close();
}
