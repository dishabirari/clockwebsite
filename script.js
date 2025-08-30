document.addEventListener('DOMContentLoaded', () => {
    const thumbsUpBtn = document.getElementById('thumbsUp');
    const thumbsDownBtn = document.getElementById('thumbsDown');
    const feedbackModal = document.getElementById('feedback-modal');
    const closeBtn = document.querySelector('.close-btn');
    const feedbackForm = document.getElementById('feedback-form');

    // Thumbs Up Action
    thumbsUpBtn.addEventListener('click', () => {
        alert("Thank you for your positive feedback! We're glad you enjoyed your experience.");
        // In a real application, you'd send this to a server
        console.log("Thumbs up clicked");
    });

    // Thumbs Down Action - Show Modal
    thumbsDownBtn.addEventListener('click', () => {
        feedbackModal.style.display = 'flex';
    });

    // Close Modal on click of 'x'
    closeBtn.addEventListener('click', () => {
        feedbackModal.style.display = 'none';
    });

    // Close Modal if user clicks outside of it
    window.addEventListener('click', (event) => {
        if (event.target === feedbackModal) {
            feedbackModal.style.display = 'none';
        }
    });

    // Handle form submission
    feedbackForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevents the form from submitting and refreshing the page
        const feedbackText = document.getElementById('feedback-text').value;
        if (feedbackText.trim() !== '') {
            alert("Thank you for your valuable feedback! We'll use it to improve.");
            // In a real application, you'd send feedbackText to a server here.
            console.log("Feedback submitted:", feedbackText);
            
            // Hide the modal and clear the form
            feedbackModal.style.display = 'none';
            feedbackForm.reset();
        }
    });
});