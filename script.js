
document.getElementById('adviceButton').addEventListener('click', fetchAdvice);

function fetchAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            const adviceContainer = document.getElementById('adviceContainer');
            adviceContainer.textContent = `"${data.slip.advice}"`;
        })
        .catch(error => {
            console.error('Error fetching advice:', error);
            document.getElementById('adviceContainer').textContent = 'Error al obtener el consejo. Inténtalo de nuevo.';
        });
}
