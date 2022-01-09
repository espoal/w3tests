// pnp:/home/mamluk/Projects/w3tests/pkgs/geth/index.ts
import { default as Web3 } from "web3";
var web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
console.log({ web3 });
