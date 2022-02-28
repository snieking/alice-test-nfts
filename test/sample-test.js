const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('MysteriousSeeds', function () {
  let erc721;

  this.beforeEach(async function () {
    const ERC721 = await ethers.getContractFactory('NFTs');
    erc721 = await ERC721.deploy('Midsummer with Alice', 'MWA');
    await erc721.deployed();
  });

  it('Should return correct name and symbol', async function () {
    expect(await erc721.name()).to.equal('Alice Mysterious Seed');
    expect(await erc721.symbol()).to.equal('AMS');
  });

  it('URL of NFT incremented successfully', async function () {
    await erc721.mint();
    await erc721.mint();

    expect(await erc721.tokenURI(0)).to.equal(
      'https://my-json-server.typicode.com/snieking/alice-test-nfts/seeds/0'
    );
    expect(await erc721.tokenURI(1)).to.equal(
      'https://my-json-server.typicode.com/snieking/alice-test-nfts/seeds/1'
    );
  });
});
