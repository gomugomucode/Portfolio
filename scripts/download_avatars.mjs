import fs from 'fs';
import path from 'path';
import https from 'https';

const outDir = path.resolve('public/images/reviews');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const avatars = [
  {
    name: 'listing_cover.jpg',
    url: 'https://lh3.googleusercontent.com/p/AF1QipN38jK9-zPqX034lC1mXb-w9gT0yTqE_p027R20=s600-w600'
  },
  {
    name: 'bkc.jpg',
    url: 'https://lh3.googleusercontent.com/a/default-user=s120-c-rp-mo-br100'
  },
  {
    name: 'sanish_bhandari.jpg',
    url: 'https://lh3.googleusercontent.com/a/ACg8ocL81j9oU5v2zM6b9q7xX_s120-c-rp-mo-br100'
  },
  {
    name: 'nisha_kafle.jpg',
    url: 'https://lh3.googleusercontent.com/a/ACg8ocJ9zM6b9q7xX_s120-c-rp-mo-br100'
  },
  {
    name: 'kesav_rayamajhi.jpg',
    url: 'https://lh3.googleusercontent.com/a/ACg8ocK7xX_s120-c-rp-mo-br100'
  }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve());
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  for (const item of avatars) {
    const target = path.join(outDir, item.name);
    console.log(`Downloading ${item.name}...`);
    try {
      await download(item.url, target);
      console.log(`Saved ${item.name} (${fs.statSync(target).size} bytes)`);
    } catch (err) {
      console.error(`Failed ${item.name}:`, err.message);
    }
  }
}

run();
