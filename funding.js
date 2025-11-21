const fundingFlows = [
  {
    source: "Charm.eth",
    destination: "Trio multisig",
    amount: "3.5 ETH",
    purpose: "Validator activation",
    ipfs: "ipfs://QmValidatorCapsule930187"
  },
  {
    source: "Contributor A",
    destination: "Validator Treasury",
    amount: "1.2 ETH",
    purpose: "Badge minting",
    ipfs: "ipfs://QmDiscothe5BadgeMint"
  }
];

const fundingList = document.getElementById("funding-list");
fundingFlows.forEach(flow => {
  const li = document.createElement("li");
  li.innerHTML = `
    <strong>${flow.source}</strong> → ${flow.destination}<br/>
    Amount: ${flow.amount} • Purpose: ${flow.purpose}<br/>
    <a href="${flow.ipfs}" target="_blank">IPFS Mirror</a>
  `;
  fundingList.appendChild(li);
});
