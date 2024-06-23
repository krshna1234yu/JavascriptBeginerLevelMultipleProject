// Get all color elements
const colorElements = document.querySelectorAll('.color');

// Function to handle color click
function handleColorClick(event) {
    // Get the selected color (background-color)
    const selectedColor = event.target.style.backgroundColor;

    // Update the displayed hex code
    document.getElementById('selected-color-display').textContent = rgbToHex(selectedColor);
}

// Convert RGB color string to HEX format
function rgbToHex(rgb) {
    // Split RGB string to get individual values
    const [r, g, b] = rgb.match(/\d+/g);

    // Convert each value to hexadecimal and combine
    return `#${(+r).toString(16).padStart(2, '0')}${(+g).toString(16).padStart(2, '0')}${(+b).toString(16).padStart(2, '0')}`;
}

// Attach click event listener to each color element
colorElements.forEach(color => {
    color.addEventListener('click', handleColorClick);
});
