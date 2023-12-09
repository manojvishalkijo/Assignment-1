document.addEventListener('DOMContentLoaded', function () {
    // Function to change the text of the paragraph
    function changeText() {
      const demoParagraph = document.getElementById('demoParagraph');
      demoParagraph.textContent = 'Text changed! 🚀';
    }

    const changeTextButton = document.getElementById('changeTextButton');
  changeTextButton.addEventListener('click', changeText);
});