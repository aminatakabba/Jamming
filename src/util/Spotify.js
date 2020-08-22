const clientId = '6106c1dfc0e448019434cc9de090b0ad';
const redirectUri = 'http://localhost:3000/';
let accessToken;

const Spotify = {
    getAccessToken() {
        if (accessToken){
            return;
        }
        //check for an acces token match
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            // This clear the parameters
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        } else {
            const accesUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location = accesUrl;
        }
    }
}

export default Spotify;