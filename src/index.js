const hamburger = document.getElementById('hamburger');

function openMenu(){
    hamburger.classList.remove('w-0', 'h-0', 'opacity-0');
    hamburger.classList.add('w-full', 'h-full', 'opacity-75');
}

function closeMenu(){
    hamburger.classList.remove('w-full', 'h-full', 'opacity-75');
    hamburger.classList.add('w-0', 'h-0', 'opacity-0',);
}