const fs = require('fs');

const amount = 30;

function randomNumberInRangeInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function writeJsonFile(filename, data) {
  fs.writeFileSync(filename, JSON.stringify(data, null, 2));
}

function main() {
  const seeds = [];

  for (var i = 0; i < amount; i++) {
    const number = randomNumberInRangeInclusive(1, 3);
    console.log('Seed number: ', number);

    let type = '';
    let img = '';
    switch (number) {
      case 1:
        type = 'Alice Mysterious Seed';
        img =
          'https://public.nftstatic.com/static/nft/res/ebdeb90dd0e14244ba451479e7001e9f.png';
        break;
      case 2:
        type = 'Chromia Mysterious Seed';
        img =
          'https://public.nftstatic.com/static/nft/res/69bf3db6f0934dc6a2c36b0329474071.png';
        break;
      case 3:
        type = 'Autumn Mysterious Seed';
        img =
          'https://public.nftstatic.com/static/nft/res/663904ac732c440a89540e3d7a7d23e7.png';
        break;
    }

    seeds.push({
      id: i,
      name: type,
      image: img,
    });
  }

  const json = {
    seeds,
    profile: {
      name: 'typicode',
    },
  };

  writeJsonFile('../db.json', json);
}

main();
