document.addEventListener('DOMContentLoaded', function() {
    
    const kirby = document.getElementById('kirby-chaser');

    let kirbyX = window.innerWidth / 2;
    let kirbyY = window.innerHeight / 2;

    let targetX = kirbyX;
    let targetY = kirbyY;

    let isFlipped = false;

    document.addEventListener('mousemove', (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
    });

    function animateChase() {
        const distX = targetX - kirbyX;
        const distY = targetY - kirbyY;

        kirbyX += distX * 0.1;
        kirbyY += distY * 0.1;
        
        if (distX > 0 && isFlipped) {
            isFlipped = false;
            kirby.style.transform = 'scale(2) scaleX(1)';
        } else if (distX < 0 && !isFlipped) {
            isFlipped = true;
            kirby.style.transform = 'scale(2) scaleX(-1)';
        }
        
        kirby.style.left = `${kirbyX - 36}px`;
        kirby.style.top = `${kirbyY - 36}px`;

        requestAnimationFrame(animateChase);
    }

    animateChase();
});