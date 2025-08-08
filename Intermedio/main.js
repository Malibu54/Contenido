// Funcionalidad de expansión
document.addEventListener('DOMContentLoaded', function () {
    const conceptItems = document.querySelectorAll('.concept-item');

    conceptItems.forEach(item => {
        const header = item.querySelector('.concept-header');

        header.addEventListener('click', function () {
            const isExpanded = item.classList.contains('expanded');

            // Cerrar todos los demás items de la misma tarjeta
            const parentCard = item.closest('.concept-card');
            const siblingItems = parentCard.querySelectorAll('.concept-item');
            siblingItems.forEach(sibling => {
                if (sibling !== item) {
                    sibling.classList.remove('expanded');
                }
            });

            // Toggle del item actual
            if (isExpanded) {
                item.classList.remove('expanded');
            } else {
                item.classList.add('expanded');
            }
        });
    });
});
