const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payLoad: newMenu
    };
};

const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED'
    };
};

export {
    menuLoaded,
    menuRequested
};