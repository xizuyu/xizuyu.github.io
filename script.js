const message = `Thank you for this chance, love. This time, I'll make everything right.\n\nThis time, instead of words, I'll put everything into actions.\n\nThis time, I'll never break your heart ever again.\n\nI'll fix everything, even if it takes my whole life for you to forgive me. I love you, always.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}



