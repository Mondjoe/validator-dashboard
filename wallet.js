const wallets = [
  {
    address: "5BPiE9Ek9XCUcHnJSoG1C1G66QVWdpGsJDyQrqWBFCxs",
    contributor: "basedbrett / penguin",
    snapshot: "930187",
    badgeTier: "Discothe 5",
    chain: "Solana",
    reaction: "🔥"
  },
  {
    address: "0xA1b2C3d4E5f6G7h8I9j0K1L2M3N4O5P6Q7R8S9T0",
    contributor: "Trio",
    snapshot: "930187",
    badgeTier: "Discothe 5",
    chain: "Ethereum",
    reaction: "💎"
  }
];

const walletList = document.getElementById("wallet-list");
wallets.forEach(wallet => {
  const li = document.createElement("li");
  li.innerHTML = `
    <strong>${wallet.contributor}</strong> (${wallet.chain})<br/>
    <code>${wallet.address}</code><br/>
    Snapshot: ${wallet.snapshot} • Badge: ${wallet.badgeTier} ${wallet.reaction}
  `;
  walletList.appendChild(li);
});
