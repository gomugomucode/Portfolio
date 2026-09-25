import sharp from 'sharp';

async function cropExact() {
  // 1. Sanish Bhandari in frame_130.png:
  // In strip_sanish (top=230): the circle top is around y=15, height=36, left=118, width=36
  await sharp('public/images/reviews/frame_130.png')
    .extract({ left: 117, top: 244, width: 38, height: 38 })
    .resize(128, 128, { kernel: 'lanczos3' })
    .toFile('public/images/reviews/sanish_bhandari.png');

  // 2. Strip for Nisha Kafle in frame_130.png:
  await sharp('public/images/reviews/frame_130.png')
    .extract({ left: 117, top: 588, width: 38, height: 38 })
    .resize(128, 128, { kernel: 'lanczos3' })
    .toFile('public/images/reviews/nisha_kafle.png');

  // 3. Strip for KESAV Rayamajhi in frame_130.png:
  await sharp('public/images/reviews/frame_130.png')
    .extract({ left: 117, top: 906, width: 38, height: 38 })
    .resize(128, 128, { kernel: 'lanczos3' })
    .toFile('public/images/reviews/kesav_rayamajhi.png');

  // 4. Strip for kalpana Baral in frame_140.png:
  await sharp('public/images/reviews/frame_140.png')
    .extract({ left: 117, top: 614, width: 38, height: 38 })
    .resize(128, 128, { kernel: 'lanczos3' })
    .toFile('public/images/reviews/kalpana_baral.png');

  // 5. BKC purple avatar in frame_100.png:
  await sharp('public/images/reviews/frame_100.png')
    .extract({ left: 117, top: 468, width: 38, height: 38 })
    .resize(128, 128, { kernel: 'lanczos3' })
    .toFile('public/images/reviews/bkc.png');

  // 6. Photo of Anupam working attached to BKC's review in frame_120.png:
  // In frame_120.png, the first thumbnail photo is at left: ~90, top: ~400, width: ~110, height: ~150
  await sharp('public/images/reviews/frame_120.png')
    .extract({ left: 93, top: 400, width: 112, height: 150 })
    .resize(300, 400, { kernel: 'lanczos3' })
    .toFile('public/images/reviews/bkc_attached_photo_1.png');

  // Also let's extract the Google Maps place listing thumbnail in frame_100.png:
  await sharp('public/images/reviews/frame_100.png')
    .extract({ left: 20, top: 292, width: 44, height: 44 })
    .resize(128, 128, { kernel: 'lanczos3' })
    .toFile('public/images/reviews/listing_thumbnail.png');

  console.log('All crops generated!');
}

cropExact();
