document.addEventListener("DOMContentLoaded", () => {
    const panes = document.querySelectorAll('.split-pane');

    panes.forEach(pane => {
        const bgImage = pane.querySelector('.bg-image');

        pane.addEventListener('mousemove', (e) => {
            // Земање на димензиите на контејнерот
            const rect = pane.getBoundingClientRect();
            
            // Пресметување на позицијата на маусот релативно на центарот на контејнерот
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            // Движење на сликата (подели со поголем број за посуптилен ефект)
            const moveX = (x / rect.width) * 20; 
            const moveY = (y / rect.height) * 20;

            // Примена на scale (од hover) и translate (од маусот)
            bgImage.style.transform = `scale(1.05) translate(${moveX}px, ${moveY}px)`;
        });

        pane.addEventListener('mouseleave', () => {
            // Ресетирање на позицијата кога маусот ќе излезе
            bgImage.style.transform = `scale(1) translate(0px, 0px)`;
        });
    });
});