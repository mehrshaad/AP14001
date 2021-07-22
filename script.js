window.addEventListener('load', function () {
    document.getElementById('per').addEventListener('click', function () {
        var a = document.getElementById('head')
        a.classList.add('persian')
        a.innerHTML = `برنامه سازی پیشرفته 1400-1401
                <br>
                <div class="credits">
                <h4 class="persian" style="font-size: calc(3px + 0.5vw + 0.5vh);">دانشگاه گیلان 1400</h4>
                </div>
            </h2>`
    })
    document.getElementById('en').addEventListener('click', function () {
        var a = document.getElementById('head')
        a.classList.remove('persian')
        a.innerHTML = `Advanced Programming 1400-1401
                <br>
                <div class="credits">
                <h4 style="font-size: calc(3px + 0.5vw + 0.5vh);">© 2021 Copyright Guilan University</h4>
                </div>
            </h2>`

    })
})