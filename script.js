document.addEventListener('DOMContentLoaded', () => {
    // Parallax wrapper reference
    const wrapper = document.querySelector('.parallax-wrapper');
    const nav = document.querySelector('.glass-nav');

    // Add scroll listener for Navbar effects
    wrapper.addEventListener('scroll', () => {
        const scrollTop = wrapper.scrollTop;
        if (scrollTop > 50) {
            nav.style.background = 'rgba(0, 12, 24, 0.9)';
            nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
        } else {
            nav.style.background = 'rgba(0, 12, 24, 0.7)';
            nav.style.boxShadow = 'none';
        }
    });

    console.log('Nano Banana System Online.');
});
