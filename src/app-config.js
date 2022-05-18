let backendHost;

const hostname = window && window.location && window.location.hostname;

if (hostname === "localhost") {
    // backendHost = "http://localhost:8080";
    backendHost = "https://api.bsjtodolist.com";
} else {
    backendHost = "https://api.bsjtodolist.com";
}
export const API_BASE_URL = `${backendHost}`;