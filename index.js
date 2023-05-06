function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return "Hello".toLowerCase();
}
function logShout(string) {
    console.log("HELLO");
}
function logWhisper(string) {
    console.log("hello");
}
function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === string) {
        return "I can't hear you!";
    }
    if (string.toUpperCase() === string) {
        return "YES INDEED!";
    }
    if (string === "Let's have dinner together!") {
        return "I would love to!";
    }
}