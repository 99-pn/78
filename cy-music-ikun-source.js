async function getMusicUrl(songname, artist, songmid, quality) {
    const targetUrl = `http://music.ikun0014.top/url?source=tx&songId=${songmid}&quality=${quality}`;
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
    name: "ikun音源(赞助版)(过期时间2099-12-31 23:59:59)",
    version: "v22",
    srcUrl: "http://music.ikun0014.top/script/lxmusic?key=KAWANG_b8a6fc01-P1WGLUV5EGUZVTTU",
    getMusicUrl
};