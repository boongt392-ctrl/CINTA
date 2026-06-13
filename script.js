// Tombol No kabur
const noBtn = document.getElementById("noBtn");

if (noBtn) {
  noBtn.addEventListener("mouseover", () => {
    const maxX = window.innerWidth - 200;
    const maxY = window.innerHeight - 100;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  });
}

// Halaman 1 -> 2
function page2() {
  document.getElementById("page1").classList.add("hidden");
  document.getElementById("page2").classList.remove("hidden");
}

// Halaman 2 -> 3
function page3() {
  document.getElementById("page2").classList.add("hidden");
  document.getElementById("page3").classList.remove("hidden");
}

// Webhook Discord
const WEBHOOK_URL =
  "https://discord.com/api/webhooks/1515243748693508096/8BcFrZ1EaHVJ7DYv3W591-5T1jpN5wT6umqueASWeOQk3s33PwQXkRELQqX7drwDp7CE";

async function sendReason() {
  const reason = document.getElementById("reason").value;

  if (reason.trim() === "") {
    alert("Tulis alasan dulu 💙");
    return;
  }

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: "💙 Ada alasan baru!\n\n" + reason,
      }),
    });

    console.log("Status:", response.status);
  } catch (error) {
    console.error("Error:", error);
  }

  document.getElementById("page3").classList.add("hidden");
  document.getElementById("page4").classList.remove("hidden");
}
