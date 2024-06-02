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
function mintNFT(_name, _age, _height, _bodyweight) {
    const NFT = {
        "name": _name,
        "age": _age,
        "height": _height,
        "bodyweight": _bodyweight
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
        console.log("age: " + NFTs[i].age);
        console.log("height: " + NFTs[i].height);
        console.log("bodyweight: " + NFTs[i].bodyweight);
    
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total number of NFTs: " + NFTs.length);
}

// call your functions below this line
mintNFT("gursahib", "20", "6feet'", "78");
mintNFT("suraj", "22", "5feet'", "60");
mintNFT("abhinav", "20", "4feet'", "50");
mintNFT("arushi", "21", "6feet", "72");

listNFTs();
getTotalSupply();
