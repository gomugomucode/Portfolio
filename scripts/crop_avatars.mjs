import sharp from 'sharp';

async function cropAvatars() {
  // In frame_130.png:
  // Sanish Bhandari:
  // x is around 60 to 75, width ~40
  // y is around 245 to 290
  
  // Let's test a crop:
  await sharp('public/images/reviews/frame_130.png')
    .extract({ left: 55, top: 240, width: 45, height: 45 })
    .resize(120, 120, { kernel: 'lanczos3' })
    .toFile('public/images/reviews/crop_sanish.png');

  // Nisha Kafle in frame_130.png:
  await sharp('public/images/reviews/frame_130.png')
    .extract({ left: 55, top: 585, width: 45, height: 45 })
    .resize(120, 120, { kernel: 'lanczos3' })
    .toFile('public/images/reviews/crop_nisha.png');

  // KESAV Rayamajhi in frame_130.png:
  await sharp('public/images/reviews/frame_130.png')
    .extract({ left: 55, top: 905, width: 45, height: 45 })
    .resize(120, 120, { kernel: 'lanczos3' })
    .toFile('public/images/reviews/crop_kesav.png');

  // BKC in frame_100.png:
  await sharp('public/images/reviews/frame_100.png')
    .extract({ left: 60, top: 468, width: 45, height: 45 })
    .resize(120, 120, { kernel: 'lanczos3' })
    .toFile('public/images/reviews/crop_bkc.png');

  // kalpana Baral in frame_140.png:
  await sharp('public/images/reviews/frame_140.png')
    .extract({ left: 58, top: 615, width: 45, height: 45 })
    .resize(120, 120, { kernel: 'lanczos3' })
    .toFile('public/images/reviews/crop_kalpana.png');

  console.log('Crops generated!');
}

cropAvatars();
