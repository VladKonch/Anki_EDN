function copyText(block) {
  const codeElement = block.querySelector("code");
  const feedback = block.querySelector(".copy-feedback");

  navigator.clipboard.writeText(codeElement.innerText).then(() => {
    feedback.classList.add("visible");
    setTimeout(() => feedback.classList.remove("visible"), 1500);
  }).catch((err) => {
    console.error("Erreur lors de la copie : ", err);
  });
}
