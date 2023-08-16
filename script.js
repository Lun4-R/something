document.getElementById('submit-button').addEventListener('click', function() {
    var enteredCode = document.getElementById('code-input').value.toUpperCase();
    var generatedCodes = ['START', 'GPI']; // Replace with your generated codes
    
    var clueSelector = document.getElementById('clue-selector');
    var selectedClueIndex = clueSelector.options[clueSelector.selectedIndex].value - 1;
    
    // Check if enteredCode matches any generated code
    if (generatedCodes.includes(enteredCode)) {
        // Display the selected clue
        var clues = [
            `You wake up in a room... This room is cold and colored in white. This room is not clean but not abandoned aswell. There are stains everywhere, so whatever was going here happened recently...`,
            `You realize that you aren't tied to a chair you were sitting on. You stumble around trying to hold on to everything near you that seems to be stable enough to hold onto...`
            // Add more clues as needed
        ];
        document.getElementById('clue-container').textContent = clues[selectedClueIndex];
        // Clear the error message
        document.getElementById('error-message').textContent = '';
    } else {
        // Display an error message for incorrect code
        document.getElementById('error-message').textContent = 'Incorrect code. Try again.';
        // Clear the clue container
        document.getElementById('clue-container').textContent = '';
    }
});
