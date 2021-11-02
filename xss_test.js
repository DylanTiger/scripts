function prepareFrame() {
        var ifrm = document.createElement("iframe");
        ifrm.setAttribute("src", "https://store.steampowered.com/account/licenses/");
        ifrm.style.width = "640px";
        ifrm.style.height = "480px";
        document.body.appendChild(ifrm);
    }
prepareFrame()
alert ("finished");
