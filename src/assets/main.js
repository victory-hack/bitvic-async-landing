
const channelId = "UC3aj05GEEyzdOqYM5FLSFeg";
const API = `https://youtube-v31.p.rapidapi.com/search?channelId=${channelId}&part=snippet%2Cid&order=date&maxResults=50`;

const content = null || document.getElementById('content');

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'b1bbaf7f99msh79566ffb7d851f6p1f882cjsn538f2770a710',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  console.log('🚀 > fetchData > data:', data)
  return data;
}

(async () => {
  try {
    const videos = await fetchData(API);
    console.log('🚀 > videos:', videos[0])
    let view = `
      ${videos.items.map(video =>
        `<div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${video.snippet.title}
            </h3>
          </div>
        </div>`
      ).slice(0, 4).join('')};
    `;
    content.innerHTML = view;
  } catch (error) {
    console.log('🚀 > error:', error)
  }
})()

// fetchData(API).then(data => {
//   console.log(data);
// }).catch(error => {
//   console.log(error);
// });