const Togglemenu = (e) =>{
    let nav_links = document.getElementById("nav_links");
    e.name === 'menu' ? (e.name = 'close', nav_links.style.width = "60%")
    : (e.name = 'menu', nav_links.style.width = "0%")
};
