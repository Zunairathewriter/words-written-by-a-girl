// ============================================
// TEXT SELECTION HIGHLIGHTING
// Highlight what you SELECT with your mouse!
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    const highlightBtn = document.getElementById('highlightBtn');
    const removeBtn = document.getElementById('removeHighlightsBtn');
    const storyContent = document.getElementById('storyContent');
    
    // HIGHLIGHT SELECTED TEXT
    highlightBtn.addEventListener('click', function() {
        const selection = window.getSelection();
        
        if (!selection.toString().trim()) {
            alert('Select some text first!');
            return;
        }
        
        // Get the selected range
        const range = selection.getRangeAt(0);
        
        // Check if selection is inside the story content
        if (!storyContent.contains(range.commonAncestorContainer)) {
            alert('Please select text from the story only.');
            return;
        }
        
        // Create a span to wrap the selected text
        const span = document.createElement('span');
        span.className = 'highlighted-text';
        
        // Wrap the selected text
        try {
            range.surroundContents(span);
        } catch (e) {
            alert('Please select text within a single paragraph.');
            return;
        }
        
        // Clear the selection
        selection.removeAllRanges();
    });
    
    // REMOVE ALL HIGHLIGHTS
    removeBtn.addEventListener('click', function() {
        const highlights = storyContent.querySelectorAll('.highlighted-text');
        
        if (highlights.length === 0) {
            alert('No highlights to remove.');
            return;
        }
        
        highlights.forEach(function(span) {
            // Replace the span with its text content
            const text = document.createTextNode(span.textContent);
            span.parentNode.replaceChild(text, span);
        });
    });
    
});
