/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(_name, _price, _owners, _publishingyear) {
    const NFT = {
        "name": _name,
        "price": _price,
        "owners": _owners,
        "publishingyear": _publishingyear
    }
    NFTs.push(NFT);
    console.log("Minted: " + _name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    console.log("Listing All NFTs:");
    
    for (let i = 0; i < NFTs.length; i++) {
        console.log("\nID: " + (i +1) );
        console.log("Name: " + NFTs[i].name);
        console.log("Price: " + NFTs[i].price);
        console.log("Owners: " + NFTs[i].owners);
        console.log("Publishing Year: " + NFTs[i].publishingyear);
    
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total number of NFTs: " + NFTs.length);
}

// call your functions below this line
mintNFT("Ayush", "6000", "Raj", "08/03/2008");
mintNFT("Aman", "8000", "Ankur", "09/12/2019");
mintNFT("Nikhil", "4000", "Arun", "19/08/2009");
mintNFT("Suraj", "1000", "Vicky", "19/12/2013");

listNFTs();
getTotalSupply();
