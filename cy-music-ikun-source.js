async function getMusicUrl(songname, artist, songmid, quality) {
    const targetUrl = `http://api.ikunshare.com/url?source=tx&songId=${songmid}&quality=${quality}`;
    try {
        const response = await fetch(targetUrl, {
            method: 'GET',
            headers: {
                'User-Agent': 'cy-music-ikun-source/v22',
                'X-Request-Key': '{key}'
            },
        });
        const responseJson = await response.json();
        return responseJson.url
    } catch (e) {
        console.error(e);
        return null;
    }
}

module.exports = {
    id: "ikun",
    author: "ikun0014",
    name: "ikun音源[赞助版][永久]",
    version: "v22",
    srcUrl: "http://api.ikunshare.com/script/cymusic?key=KAWANG_b8a6fc01-P1WGLUV5EGUZVTTU",
    getMusicUrl
};