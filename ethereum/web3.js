import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    
    "https://goerli.infura.io/v3/50ff7ac12ad646f3b6fc10aee826909e"
  );
  web3 = new Web3(provider);
}

export default web3;

// "https://rinkeby.infura.io/v3/d1b1626451d04b8c80ec7f61d072f201"