const clientId = '5ffe005416d7486fbd92056ce7c78461';
const redirectUri = 'http://localhost:3000';
let accesToken;

const Spotify = {
    getAccesToken() {
        if (accesToken) {
            return accesToken;
        }
        const accesTokenMatch = window.location.href.match(/acces_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if (accesTokenMatch && expiresInMatch) {
            accesToken = accesTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);

            window.setTimeout(() => accesToken = '', expiresIn * 1000);
            window.history.pushState('Acces Token', null, '/ ');
            return accesToken
        } else {
            const accesUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location = accesUrl;
        }
    },
    search(term) {
        const accesToken = Spotify.getAccesToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,
            {
                headers: {
                    Authorization: `Bearer ${accesToken}`
                }
            }).then(response => {
                return response.json();
            }).then(jsonResponse => {
                if (!jsonResponse.tracks) {
                    return [];
                }
                return jsonResponse.tracks.items.map(track => ({
                    id: track.id,
                    name: track.name,
                    artist: track.artist[0].name,
                    album: track.album.name,
                    uri: track.uri

                }))
            })
    }
}
export default Spotify;
