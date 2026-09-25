import sharp from 'sharp';

async function findBestOffsets() {
  // Let's crop a 100x100 area around (x: 100 to 170, y: 230 to 320)
  await sharp('public/images/reviews/frame_130.png')
    .extract({ left: 100, top: 230, width: 80, height: 80 })
    .toFile('public/images/reviews/test_box_sanish.png');

  // Let's do the same for Nisha (y: 570 to 650)
  await sharp('public/images/reviews/frame_130.png')
    .extract({ left: 100, top: 575, width: 80, height: 80 })
    .toFile('public/images/reviews/test_box_nisha.png');

  // Let's do the same for Kesav (y: 890 to 970)
  await sharp('public/images/reviews/frame_130.png')
    .extract({ left: 100, top: 890, width: 80, height: 80 })
    .toFile('public/images/reviews/test_box_kesav.png');

  // Let's do BKC in frame_100 (y: 450 to 530)
  await sharp('public/images/reviews/frame_100.png')
    .extract({ left: 100, top: 450, width: 80, height: 80 })
    .toFile('public/images/reviews/test_box_bkc.png');
}

findBestOffsets();
