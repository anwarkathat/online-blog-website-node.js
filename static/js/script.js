const NavActive = () => {
    const navlink = document.querySelector('.nav-links');
    navlink.classList.toggle('nav-active');
    const lists = document.querySelector('ul');
    lists.addEventListener('click', () => {
        navlink.classList.remove('nav-active');
    })
}