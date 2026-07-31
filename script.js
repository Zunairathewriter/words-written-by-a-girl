// Wait for the page to load completely
document.addEventListener('DOMContentLoaded', function() {
    
    // Get ALL highlight buttons
    const highlightButtons = document.querySelectorAll('.highlight-btn');
    
    // Get ALL reset buttons
    const resetButtons = document.querySelectorAll('.reset-btn');

    // Add click event to each highlight button
    highlightButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Find the parent story article
            const story = this.closest('.story');
            // Add the 'highlighted' class to it
            story.classList.add('highlighted');
        });
    });

    // Add click event to each reset button
    resetButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Find the parent story article
            const story = this.closest('.story');
            // Remove the 'highlighted' class from it
            story.classList.remove('highlighted');
        });
    });

});
