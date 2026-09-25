import https from 'https';

const placeId = '0x85dbafd39ae92f89:0x13b3b1f0138c19d0';
// Standard Google Maps RPC to list UGC posts (reviews & photos)
const url = `https://www.google.com/maps/rpc/listugcposts?authuser=0&hl=en&gl=us&pb=!1m7!1s${placeId}!2sAnupam+Baral+-+AI%2FML+%26+Full-Stack+Developer!3m1!5e1!6m1!1e1`;

https.get(url, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept-Language': 'en-US,en;q=0.9',
  }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Status code:', res.statusCode);
    console.log('Response length:', data.length);
    
    // Look for googleusercontent URLs
    const matches = data.match(/https:\/\/[^"'\s\\]*googleusercontent\.com\/[^"'\s\\]*/g) || [];
    console.log('Found', matches.length, 'googleusercontent URLs');
    const unique = [...new Set(matches)];
    unique.forEach(u => console.log(u));

    // Check if BKC or Sanish is in data
    console.log('Has BKC:', data.includes('BKC'));
    console.log('Has Sanish:', data.includes('Sanish'));
    console.log('Has Nisha:', data.includes('Nisha'));
  });
}).on('error', err => {
  console.error('Error:', err.message);
});
