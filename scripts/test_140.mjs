import sharp from 'sharp';

async function check140() {
  // In frame_140.png, Kesav:
  await sharp('public/images/reviews/frame_140.png')
    .extract({ left: 100, top: 350, width: 80, height: 80 })
    .toFile('public/images/reviews/test_box_kesav_140.png');

  // In frame_140.png, kalpana:
  await sharp('public/images/reviews/frame_140.png')
    .extract({ left: 100, top: 600, width: 80, height: 80 })
    .toFile('public/images/reviews/test_box_kalpana_140.png');
}

check140();
