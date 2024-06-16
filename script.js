// script.js
// Add hover effects to buttons and links
const buttons = document.querySelectorAll('button');
const links = document.querySelectorAll('a');

buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
    });
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});

links.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.textDecoration = 'underline';
    });
    link.addEventListener('mouseout', () => {
        link.style.textDecoration = 'none';
    });
});

// Add modal windows to display additional information
const modals = document.querySelectorAll('.modal');
const modalTriggers = document.querySelectorAll('.modal-trigger');

modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const modalId = trigger.getAttribute('data-modal-id');
        modals.forEach(modal => {
            if (modal.id === modalId) {
                modal.style.display = 'block';
            } else {
                modal.style.display = 'none';
            }
        });
    });
});

const closeButtons = document.querySelectorAll('.modal-close');

closeButtons.forEach(button =>
