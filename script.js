// ============================================
// WORD-LEVEL HIGHLIGHTING - Click ANY word!
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Get ALL individual words
    const words = document.querySelectorAll('.word');
    
    // Click any word to highlight it
    words.forEach(word => {
        word.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent weird behavior
            this.classList.toggle('highlighted');
        });
    });
    
    // "Remove All" buttons - clears highlights in that story
    const resetButtons = document.querySelectorAll('.reset-story-btn');
    
    resetButtons.forEach(button => {
        button.addEventListener('click', function() {
            const story = this.closest('.story');
            const wordsInStory = story.querySelectorAll('.word');
            wordsInStory.forEach(word => {
                word.classList.remove('highlighted');
            });
        });
    });
    
});
