# URL Downloader
Download image by URL

## How does it work ?:
1. Run the script from command line: ```node app.js```
2. Open in your browser link: http://127.0.0.1:3000/save?url=[img-url]
where [img-url] is full image url

## Example:
Download all images on the page
```js
function getImages() {
    const urls = new Set();
    const domImages = document.querySelectorAll('img[src]');
    domImages.forEach(el => {
        const src = el.getAttribute('src');
        if (src) {
            urls.add(src);
        }
    });
    return urls;
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

const pageImages = getImages();
pageImages.forEach(url => downloadImage(url));
```
