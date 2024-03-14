function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', gradientMove)
    gradient.addEventListener('mouseout', gradientOut)

    function gradientMove(event) {
        const x = event.offsetX;
        const percentage = Math.floor(x / 300 * 100);
        document.getElementById('result').textContent = percentage + '%';
    }

    function gradientOut(event) {
        document.getElementById('result').textContent = '';
    }
}
