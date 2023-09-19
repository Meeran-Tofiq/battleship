const loadInitialPage = () => {
    const content = document.createElement('div');
    content.classList.add('content');

    // header
    const header = createHeader();

    // main game area
    const main = createMainGameArea();

    // footer
    const footer = createFooter();

    console.log('hello');
    content.append(header, main, footer);
    document.body.append(content);
};

const createHeader = () => {
    const header = document.createElement('header');

    const battleshipLogo = document.createElement('h1');
    battleshipLogo.innerText = 'Battleship';

    header.append(battleshipLogo);

    return header;
};

const createMainGameArea = () => {
    const main = document.createElement('main');

    return main;
};

const createFooter = () => {
    const footer = document.createElement('footer');

    const credits = document.createElement('span');
    credits.innerHTML =
        '<i class="fa-brands fa-github"></a> Made by <a href="https://github.com/Meeran-Tofiq">Meeran Tofiq';

    footer.append(credits);
    return footer;
};

export { loadInitialPage };
