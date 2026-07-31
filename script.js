// ============================================
// LINE-BY-LINE HIGHLIGHTING - Click any line!
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Get ALL the lines (paragraphs with class "line")
    const lines = document.querySelectorAll('.line');
    
    // For each line, add a click event
    lines.forEach(line => {
        line.addEventListener('click', function() {
            // Toggle the highlight class on this specific line
            this.classList.toggle('highlighted-line');
        });
    });
    
    // Get ALL "Remove All Highlights" buttons
    const resetButtons = document.querySelectorAll('.reset-story-btn');
    
    resetButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Find the story this button belongs to
            const story = this.closest('.story');
            // Find all lines in THIS story
            const linesInStory = story.querySelectorAll('.line');
            // Remove highlight from all lines in this story
            linesInStory.forEach(line => {
                line.classList.remove('highlighted-line');
            });
        });
    });
    
});
