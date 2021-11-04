function prepareFrame() {
        var ifrm = document.createElement("iframe");
        ifrm.setAttribute("src", "https://store.steampowered.com/apphover/1517290?review_score_preference=0&u=1256760961&pagev6=true");
        ifrm.style.width = "640px";
        ifrm.style.height = "480px";
        document.body.appendChild(ifrm);
    }
prepareFrame()
alert ("finished");
