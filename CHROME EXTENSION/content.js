function createButton() {
  const button = document.createElement("button");
  button.innerText = "Generate AI Email";
  button.style.margin = "10px";

  button.onclick = async () => {
    const prompt = prompt("Enter email context:");

    const res = await fetch("http://localhost:8080/api/email/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt, tone: "formal" })
    });

    const data = await res.json();

    const emailBox = document.querySelector("[aria-label='Message Body']");
    if (emailBox) {
      emailBox.innerText = data.email;
    }
  };

  document.body.appendChild(button);
}

setTimeout(createButton, 5000);
