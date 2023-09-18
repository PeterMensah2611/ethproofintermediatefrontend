import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import {ethers} from 'ethers';
import contractABI from "./contracts/abi.json"

function App() {
  const [wallet, setwallet]= usestate(null);
  const [account, setAccount]= usestate(null);

  const contractAddress = "";
  const [contract,setContract] = usestate(null);

function getWallet(){
  if (window.ethereum){
    setwallet(window.ethereum);
    alert("connected to wallet");
  }else {
    alert("please install the wallet");
  }

}

function connectAccount(){
  const accounts = Wallet.request({ method: 'eth_requestAccounts'});
  try {
    if (Array.isArray(accounts)== true){
      handleAccount(accounts[0]);
    }else {
      handleAccount(account);
    }
  }catch (error){
    alert("account connection failed because of :" +error);
  }
}

function handleAccount(account){
  setAccount(account);
  getContract();
  alert("account has been connected successfully, the account adress is :" +account);
}

function getContract(){
  let provider = new ethers.providers.Web3Provider(window.ethereum);
  let signer = Provider.getSigner();

  let thecontract = new ethers.contract(contractAddress,contractAddress,signer);
  setContract(thecontract);
}
const [newName, setNewName] = usestate("");
function storeNameinterface(){
  return(

  );
}

  return (
    <div className="App">
    </div>
  );
}

export default App;
