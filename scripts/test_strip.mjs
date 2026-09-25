import sharp from 'sharp';

async function testGrid() {
  // Let's crop a wide horizontal strip across the Sanish Bhandari row (y: 230 to 300, x: 0 to 450)
  await sharp('public/images/reviews/frame_130.png')
    .extract({ left: 0, top: 230, width: 450, height: 70 })
    .toFile('public/images/reviews/strip_sanish.png');
    
  console.log('Saved strip_sanish.png');
}

testGrid();
