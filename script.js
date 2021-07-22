window.addEventListener('load', function () {
    function changeCSS(id, html = null, css = 'persian') {
        var element = document.getElementById(id);
        if (html) {
            element.innerHTML = html
        }
        element.classList.add(css);
        console.log(element);
    }
    // changeCSS('header',
    //     `برنامه سازی پیشرفته
    //             <br>
    //             <div class="credits">
    //             <h4 id="header2" style="font-size: calc(3px + 0.5vw + 0.5vh);"></h4>
    //             </div>
    //         </h2>`);
})