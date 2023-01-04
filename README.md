# URL Downloader
Download image by URL

## How does it work ?:
1. Run the script from command line: ```node app.js```
2. Open in your browser link: http://127.0.0.1:3000/save?url=[img-url]
where [img-url] is full image url

## Example (Shopify solution)
```js
const urls = [];
function getImages() {
    const domImages = document.querySelectorAll('img[src]');
    domImages.forEach(el => {
        urls.push(el.getAttribute('src'));
    });
}
function downloadImage(imgUrl) {
    const downloaderUrl = 'http://127.0.0.1:3000/save?url=' + imgUrl;
    fetch(downloaderUrl)
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        });
}

getImages();
urls.forEach(url => downloadImage(url));
```
