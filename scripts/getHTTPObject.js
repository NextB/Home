function getHTTPObject() {
    if (typeof XMLHttpRequest == "undefined") {
        return false;
    }
    return new XMLHttpRequest();
}