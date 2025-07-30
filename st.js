
let jwPlayerInstance = null;
function initPlayer() {
    jwPlayerInstance = jwplayer("player").setup({
        width: "100%",
        height: "100%",
        autostart: false,
        stretching: "exactfit",
        aspectratio: "16:9",
        primary: "html5",
        hlshtml: true,
        displaytitle: false,
        logo: { hide: true }
    });
    if (window.channels && channels.length) {
        const firstChannel = channels[0];
        jwPlayerInstance.setup({
            file: firstChannel.url,
            title: firstChannel.name,
            autostart: true,
            drm: firstChannel.drm || undefined
        });
    }
}
window.addEventListener('load', initPlayer);
