let backendHost;

const hostname = window && window.location && window.location.hostname;

if (hostname === "localhost") {
    // backendHost = "http://localhost:8080";
    backendHost = "http://api.bsjtodolist.com";
} else {
    backendHost = "http://api.bsjtodolist.com";
}
export const API_BASE_URL = `${backendHost}`;