




//  Global Counters 
let heartCount = 0;
let copyCount = 0;
let coinCount = 100;

//  Navbar 
const heartCountEl = document.getElementById("heart-count");
const coinCountEl = document.getElementById("coin-count");
const copyCountBtn = document.getElementById("copy-count-btn");

// Call history 
const callHistoryList = document.getElementById("call-history-list");
const clearHistoryBtn = document.getElementById("clear-history");

// Heart Buttons 
for (let i = 1; i <= 9; i++) {
    const heartBtn = document.getElementById(`heart${i}`);
    heartBtn.addEventListener("click", () => {
        heartCount++;
        heartCountEl.textContent = heartCount;
        heartBtn.querySelector("i").classList.toggle("fa-solid");
        heartBtn.querySelector("i").classList.toggle("fa-regular");
    });
}

// Copy Buttons
for (let i = 1; i <= 9; i++) {
    const copyBtn = document.getElementById(`copy${i}`);
    copyBtn.addEventListener("click", () => {
        const numberEl = document.getElementById(`number${i}`);
        navigator.clipboard.writeText(numberEl.textContent).then(() => {
            alert(`Hotline number ${numberEl.textContent} copied!`);
            copyCount++;
            copyCountBtn.textContent = `${copyCount} Copy`;
        });
    });
}

//Call Buttons
for (let i = 1; i <= 9; i++) {
    const callBtn = document.getElementById(`call${i}`);
    callBtn.addEventListener("click", () => {
        if (coinCount < 20) {
            alert("Not enough coins to make a call!");
            return;
        }

        const serviceName = document.querySelector(`#card${i} h1`).textContent;
        const serviceNumber = document.getElementById(`number${i}`).textContent;

        alert(`Calling ${serviceName} at ${serviceNumber}...`);

        coinCount -= 20;
        coinCountEl.textContent = coinCount;

        // Add to Call History
        const now = new Date();
        const time = now.toLocaleTimeString();
        const historyItem = document.createElement("div");
        historyItem.className = "flex justify-between border-b py-1 text-sm";
        historyItem.innerHTML = `
            <span>${serviceName} - ${serviceNumber}</span>
            <span>${time}</span>
        `;
        callHistoryList.prepend(historyItem);
    });
}

// Clear History 
clearHistoryBtn.addEventListener("click", () => {
    callHistoryList.innerHTML = "";
});
