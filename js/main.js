const networksEIP1559 = ["bnb","opbnb","base"];

const monetizadoAbi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "usuario",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "creator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "sequenceId",
                "type": "uint256"
            }
        ],
        "name": "GrantedAccess",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "accessCost",
                "type": "uint256"
            }
        ],
        "name": "addProtectedContent",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "sequenceId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "newCost",
                "type": "uint256"
            }
        ],
        "name": "changeAccessCost",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "feePlatform",
                "type": "uint256"
            }
        ],
        "name": "changePlatformFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "creator",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "sequenceId",
                "type": "uint256"
            }
        ],
        "name": "currentUserHasAccess",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPlatformBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPlatformFee",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "creator",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "sequenceId",
                "type": "uint256"
            }
        ],
        "name": "getProtectedContentByAddressAndId",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "accessCost",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "isProtected",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "sequenceId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amountAvailable",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amountCollected",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct Monetizadov1.ProtectedContentInfo",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getProtectedContentsForCurrentUser",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "accessCost",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "isProtected",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "sequenceId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amountAvailable",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amountCollected",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct Monetizadov1.ProtectedContentInfo[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "hosting",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "creator",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "sequenceId",
                "type": "uint256"
            }
        ],
        "name": "payAccess",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "sequenceId",
                "type": "uint256"
            }
        ],
        "name": "protectContent",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "sequenceId",
                "type": "uint256"
            }
        ],
        "name": "unprotectContent",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "sequenceId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "withdrawMoneyFromContent",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "withdrawMoneyPlatform",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]



async function getContract(web3,contractNetwork, userAddress) {
    var contractPublic = await new web3.eth.Contract(monetizadoAbi,contractNetwork);
    if(userAddress != null && userAddress != undefined) {
    contractPublic.defaultAccount = userAddress;
    }
    return contractPublic;
}

var iface = new ethers.utils.Interface(monetizadoAbi);

const networksProperties = {
        "arbitrum:sepolia" : {urlRPC: "https://arbitrum-sepolia.blockpi.network/v1/rpc/public", chainId: 421614, chainName: "Arbitrum Sepolia", currencyName: "ETH", decimals: 18, currencySymbol: "ETH"},
        "base:testnet": {urlRPC: "https://sepolia.base.org", chainId: 84532, chainName: "Base Sepolia", currencyName: "ETH", decimals: 18, currencySymbol: "ETH"},
        "berachain:testnet" : {urlRPC: "https://artio.rpc.berachain.com/", chainId: 80085, chainName: "Berachain Testnet", currencyName: "BERA", decimals: 18, currencySymbol: "BERA"},
        "bittorrent:testnet": {urlRPC: "https://pre-rpc.bt.io/", chainId: 1029, chainName: "BitTorrent Chain Donau", currencyName: "BTT", decimals: 18, currencySymbol: "BTT"},
        "bnb:testnet": {urlRPC: "https://bsc-testnet-rpc.publicnode.com	", chainId: 97, chainName: "BNB Chain Testnet", currencyName: "BNB", decimals: 18, currencySymbol: "BNB"},
        "botanix:testnet" : {urlRPC: "https://node.botanixlabs.dev", chainId: 3636, chainName: "Botanix Testnet", currencyName: "BTC", decimals: 18, currencySymbol: "BTC"},
        "etherlink:testnet" : {urlRPC: "https://node.ghostnet.etherlink.com", chainId: 128123, chainName: "Etherlink Testnet", currencyName: "XTZ", decimals: 18, currencySymbol: "XTZ"},
        "filecoin:testnet" : {urlRPC: "https://filecoin-calibration.drpc.org", chainId: 314159, chainName: "Filecoin Calibration", currencyName: "tFIL", decimals: 18, currencySymbol: "tFIL"},
        "lisk:testnet" : {urlRPC: "https://rpc.sepolia-api.lisk.com", chainId: 4202, chainName: "Lisk Sepolia Testnet", currencyName: "ETH", decimals: 18, currencySymbol: "ETH"},
        "mode:testnet" : {urlRPC: "https://sepolia.mode.network", chainId: 919, chainName: "Mode Testnet", currencyName: "ETH", decimals: 18, currencySymbol: "ETH"},
        "morph:testnet": {urlRPC: "https://rpc-testnet.morphl2.io", chainId: 2710, chainName: "Morph Testnet", currencyName: "ETH", decimals: 18, currencySymbol: "ETH"},
        "opbnb:testnet": {urlRPC: "https://opbnb-testnet-rpc.bnbchain.org", chainId: 5611, chainName: "opBnB Testnet", currencyName: "BNB", decimals: 18, currencySymbol: "BNB"},
        "scroll:testnet": {urlRPC: "https://sepolia-rpc.scroll.io/", chainId: 534351, chainName: "Scroll Sepolia", currencyName: "ETH", decimals: 18, currencySymbol: "ETH"},
        "shardeum:testnet": {urlRPC: "https://sphinx.shardeum.org", chainId: 8082, chainName: "Shardeum Sphinx", currencyName: "SHM", decimals: 18, currencySymbol: "SHM"},
        "taraxa:testnet": {urlRPC: "https://rpc.testnet.taraxa.io/", chainId: 842, chainName: "Taraxa Testnet", currencyName: "TARA", decimals: 18, currencySymbol: "TARA"}
    };

const networksContracts = {

    "arbitrum:sepolia" : "0x3258814758AC48fE9c0869d43Df8F13aD0cB2A25",
    "base:testnet":"0x4dA05ddA2F0586327E956548fd3E88a508ba2168",
    "berachain:testnet" : "0x4FCA17c99Cd6eA508AD64D75Daa6a5BeBfdd5916",
    "bittorrent:testnet":"0x4dA05ddA2F0586327E956548fd3E88a508ba2168",
    "bnb:testnet":"0x13cbEaAaBcC8a126dF2f7b1aA955251574191231",
    "botanix:testnet" : "0xd0876600e82CCAa4aA0ab0Cd8bEa9c74F5b46De3",
    "etherlink:testnet" : "0x4dA05ddA2F0586327E956548fd3E88a508ba2168",
    "filecoin:testnet" : "0x6388418CfEa921C323b91B173E10D7f8f1193680",
    "mode:testnet" : "0xf0F90a236c860FB79DbBA4Ad9Dd62b714268BD21",
    "morph:testnet":"0x86f5304600627e7897AaAfAD39853e3D18E71B43",
    "opbnb:testnet":"0x0702B45d590372b5456BeC39e13a46c00Fc8F733",
    "scroll:testnet":"0x4dA05ddA2F0586327E956548fd3E88a508ba2168",
    "shardeum:testnet":"0x4dA05ddA2F0586327E956548fd3E88a508ba2168"
}

async function loginWithMetamask() {
    const ethereum = MMSDK.getProvider() // You can also access via window.ethereum
    try {
        var accounts = await ethereum.request({method: 'eth_requestAccounts'});
        account = accounts[0];
        $('.current_account_text').text(account);
        await changeNetwork();

    } catch {
        location.href = "login.html";
    }
}

async function changeNetwork() {
    
    var networkSelected = $('#networkSelector').val();
    networkSelected = networkSelected != null? networkSelected : "arbitrum:sepolia";

    var networkSelectedProperties = networksProperties[networkSelected];

    if (window.ethereum.networkVersion !== networkSelectedProperties.chainId) {
        try {
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: Web3.utils.toHex(networkSelectedProperties.chainId) }]
            });
            await getContentList();
        } catch (err) {
            // This error code indicates that the chain has not been added to MetaMask
            if (err.code === 4902) {
                await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                    {
                    chainName: networkSelectedProperties.chainName,
                    chainId: Web3.utils.toHex(networkSelectedProperties.chainId),
                    nativeCurrency: { name: networkSelectedProperties.currencyName, decimals: networkSelectedProperties.decimals, symbol: networkSelectedProperties.currencySymbol },
                    rpcUrls: [networkSelectedProperties.urlRPC]
                    }
                ]
                });
                await getContentList();
            }

            if (err.code === 4001) {
                location.href = "login.html";
            }
        }
    }
}

async function getContentList(){
    var accounts = await ethereum.request({method: 'eth_requestAccounts'});
    var account = accounts[0];
    
    var networkSelected = $('#networkSelector').val();
    networkSelected = networkSelected != null? networkSelected : "arbitrum:sepolia";

    const contractNetwork = networksContracts[networkSelected];
    var networkSelectedProperties = networksProperties[networkSelected];

    var web3 = new Web3(new Web3.providers.HttpProvider(networkSelectedProperties.urlRPC));

    var contractPublic = await getContract(web3,contractNetwork,account);

    if(contractPublic != undefined) {
        var contentInfo = await ethereum
        .request({
            method: 'eth_call',
            params: [
            {
                from: account, // The user's active address.
                data: contractPublic.methods.getProtectedContentsForCurrentUser().encodeABI(),
                to: contractNetwork
            },
            ],
        });
        contentInfo = iface.decodeFunctionResult("getProtectedContentsForCurrentUser", contentInfo);
        if(contentInfo[0].length > 0) {
            $('#my_contents').html('');
            var list = document.querySelector('#my_contents');
              var table = document.createElement('table');
              var thead = document.createElement('thead');
              var tbody = document.createElement('tbody');
      
              var theadTr = document.createElement('tr');
              var balanceHeader = document.createElement('th');
              balanceHeader.innerHTML = 'ID';
              theadTr.appendChild(balanceHeader);
              var contractNameHeader = document.createElement('th');
              contractNameHeader.innerHTML = 'Name';
              theadTr.appendChild(contractNameHeader);
              var contractTickerHeader = document.createElement('th');
              contractTickerHeader.innerHTML = 'Access cost';
              theadTr.appendChild(contractTickerHeader);
              
              var usdHeader = document.createElement('th');
              usdHeader.innerHTML = 'Is Protected?';
              theadTr.appendChild(usdHeader);

              var usdHeader2 = document.createElement('th');
              usdHeader2.innerHTML = 'Available amount';
              theadTr.appendChild(usdHeader2);

              var usdHeader3 = document.createElement('th');
              usdHeader3.innerHTML = 'Collected amount';
              theadTr.appendChild(usdHeader3);

              var usdHeaderOptions = document.createElement('th');
              usdHeaderOptions.innerHTML = 'Options';
              theadTr.appendChild(usdHeaderOptions);
      
              thead.appendChild(theadTr)
      
              table.className = 'table';
              table.appendChild(thead);
      
              contentInfo[0].forEach((valor, clave) => {
                var tbodyTr = document.createElement('tr');
                var contractTd = document.createElement('td');
                contractTd.innerHTML = "<b>"+valor.sequenceId+"</b>";
                tbodyTr.appendChild(contractTd);
                var contractTickerTd = document.createElement('td');
                contractTickerTd.innerHTML = '<b>' + valor.name + '</b>';
                tbodyTr.appendChild(contractTickerTd);
                var balanceTd = document.createElement('td');
                balanceTd.innerHTML = '<b>' + Web3.utils.fromWei(valor.accessCost,"ether") + '</b>';
                tbodyTr.appendChild(balanceTd);
                var balanceUSDTd = document.createElement('td');
                balanceUSDTd.innerHTML = '<b>' + valor.isProtected + '</b>';
                tbodyTr.appendChild(balanceUSDTd);
                var balanceUSDTd2 = document.createElement('td');
                balanceUSDTd2.innerHTML = '<b>' + Web3.utils.fromWei(valor.amountAvailable,"ether") + '</b>';
                tbodyTr.appendChild(balanceUSDTd2);
                var balanceUSDTd3 = document.createElement('td');
                balanceUSDTd3.innerHTML = '<b>' + Web3.utils.fromWei(valor.amountCollected,"ether") + '</b>';
                tbodyTr.appendChild(balanceUSDTd3);
                var balanceUSDTdOption2 = document.createElement('td');
                balanceUSDTdOption2.innerHTML = '<input type="button" id="copyMonetizadoTagButton" onclick="getMonetizadoTag('+valor.sequenceId+')" value="Copy Monetizado tag to clipboard" class="btn btn-secondary btn-block" />';
                tbodyTr.appendChild(balanceUSDTdOption2);
                var balanceUSDTdOption3 = document.createElement('td');
                balanceUSDTdOption3.innerHTML = '<input type="button" id="collectMoneyButton" onclick="collectMoney('+valor.sequenceId+')" value="Collect money" class="btn btn-secondary btn-block" />';
                tbodyTr.appendChild(balanceUSDTdOption3);
                var balanceUSDTdOption1 = document.createElement('td');
                balanceUSDTdOption1.innerHTML = '<input type="button" id="releaseContentButton" onclick="releaseContent('+valor.sequenceId+')" value="Release/Protect content" class="btn btn-secondary btn-block" />';
                tbodyTr.appendChild(balanceUSDTdOption1);
                tbody.appendChild(tbodyTr);
            });
      
            table.appendChild(tbody);
      
              list.appendChild(table);
          }
          //$('.loading_message').css('display','none');
        }
        //return contentInfo;
    
}

async function getMonetizadoTag(sequenceId) {
    var accounts = await ethereum.request({method: 'eth_requestAccounts'});
    var account = accounts[0];
    
    var networkSelected = $('#networkSelector').val();
    networkSelected = networkSelected != null? networkSelected : "arbitrum:sepolia";

    var tag = networkSelected+"://"+account+"/"+sequenceId;
    navigator.clipboard.writeText(tag);
}

async function createContent() {
    await loginWithMetamask();
    var contractPublic = await getContract(web3,contractNetwork,account);
    if(contractPublic != null) {
      var contentName = $('#content_name').val();
      if(contentName == '') {
        $('#errorCreateClub').css("display","block");
        $('#errorCreateClub').text("Content name is invalid");
        return;
      }
      var contentAmount = $('#content_amount').val();
      if(contentAmount == '' || contentAmount < 0) {
        $('#errorCreateClub').css("display","block");
        $('#errorCreateClub').text("The amount to pay is not valid.");
        return;
      }
      try
      {
        $('.loading_message_creating').css("display","block");
        contentAmount = web3.utils.toWei(contentAmount,"ether");
        const query = contractPublic.methods.addProtectedContent(contentName, contentAmount);
        const encodedABI = query.encodeABI();
        const gasPrice = web3.utils.toHex(await web3.eth.getGasPrice());
        var contentId = await ethereum
                .request({
                  method: 'eth_sendTransaction',
                  params: [
                    {
                      from: account, 
                      to: investmentContractAddress,
                      data: encodedABI,
                      gasLimit: '0x5208', // Customizable by the user during MetaMask confirmation.
                      maxPriorityFeePerGas: gasPrice, // Customizable by the user during MetaMask confirmation.
                      maxFeePerGas: gasPrice, // Customizable by the user during MetaMask confirmation.
                    },
                  ],
                });
        await sleep(10000);
        
        var contentCreated = await web3.eth.getTransactionReceipt(contentId);
        if(contentCreated == null) {
          $('#successCreateContent').css("display","none");
          $('.invalid-feedback').css("display","block");
          $('.invalid-feedback').text("Error creating the content");
          return;
        }
        
        $('#content_name').val('');
        $('#amount_name').val('');
        $('#errorCreateContent').css("display","none");
        $('.loading_message_creating').css("display","none");
        $('#successCreateContent').css("display","block");
        $('#successCreateContent').text("Content created successfully with the name: " + clubName);
      } catch(e) {
        $('.valid-feedback').css('display','none');
          $('.invalid-feedback').css('display','block');
          $('.loading_message_creating').css("display","none");
          $('.invalid-feedback').text(e.message);
      }
      
      
    }
  }
