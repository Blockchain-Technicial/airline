import Web3 from "web3";

const getWeb3 = () => {
    return new Promise((resolve, reject) => {
        window.addEventListener("load", function() {
            
            let web3 = window.web3;
            
            if (typeof web3 !== "undefined") {
                web3 = new Web3(web3.currentProvider);
                resolve(web3);
            } else {
                console.log("No web3? You should consider trying MetaMask!");
                reject();
            }
        });
              
    });
};

export default getWeb3;