const textArea = document.querySelector("textarea");
const insertTabCharacter = () => {
    const { value, selectionStart, selectionEnd } = textArea;

    // Insert tab character
    textArea.value = `${value.substring(0, selectionEnd)}\t${value.substring(selectionEnd)}`;

    // Move cursor to new position
    textArea.selectionStart = textArea.selectionEnd = selectionEnd + 1;
};

textArea.addEventListener('keydown', (e) => {

    if (e.key === 'Tab') {
        e.preventDefault();
        insertTabCharacter();
    }
});

textArea.addEventListener('input', calculateWords);

function calculateWords(e) {
    const splitArr = e.target.value.split(' ');
    const newSplitArr = splitArr.filter((value) => {
      return value; // returning values with content
    });
    console.log(newSplitArr);
    document.getElementById("wordCount").innerHTML = "Words: " + newSplitArr.length;
    document.getElementById("enemyHP").innerHTML = "Enemy HP: " + (500-(newSplitArr.length)) + "/500";
  }
