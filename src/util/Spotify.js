let accessToken = '';
const clientID = '8eed0b3dd55741a489dae977a9f634ee';
const redirectURI =  "http://localhost:3000/";
const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        } else if (window.location.href.match(/access_token=([^&]*)/) && window.location.href.match(/expires_in=([^&]*)/)) {
           accessToken = window.location.href.match(/access_token=([^&]*)/);
           let expiresIn = window.location.href.match(/expires_in=([^&]*)/);
           window.setTimeout(() => accessToken = '', expiresIn * 1000);
           window.history.pushState('Access Token', null, '/');
        } else {
            window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
        }
    },
    search(term) {
        fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {headers: {Authorization: `Bearer ${accessToken}`}})
        .then(response => response.json())
        .then(jsonResponse.map(track => {
            return {
            id: track.id,
            name: track.name,
            artist: track.artist,
            album: track.album,
            uri: track.uri
            }
        }));
    }
};

export default Spotify;