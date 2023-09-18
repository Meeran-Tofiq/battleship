const loadInitialPage = () => {
    const content = document.createElement();

    // header
    const header = createHeader();

    // main game area
    const main = createMainGameArea();

    // footer
    const footer = createFooter();

    content.append(header, main, footer);
    document.body.append(content);
};

const createHeader = () => {
    const header = document.createElement('header');

    return header;
};

const createMainGameArea = () => {
    const main = document.createElement('main');

    return main;
};

const createFooter = () => {
    const footer = document.createElement('footer');

    const credits = document.createElement('p');

    footer.append(credits);
    return footer;
};

export { loadInitialPage };
