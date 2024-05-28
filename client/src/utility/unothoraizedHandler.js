export default function UnAuthorizedHandler(code) {
    if (code===401) {
        localStorage.clear();
        sessionStorage.clear();
        window.location.href = "/";
    }
}
