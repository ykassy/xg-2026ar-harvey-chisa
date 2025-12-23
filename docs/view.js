function adjustCanvasSize() {
    const canvas = document.getElementById('canvas');
    const isLandscape = window.matchMedia("(orientation: landscape)").matches;
    const cameraSwitBtnWrapper = document.querySelector(".camera-switcher-btn-wrapper");
    const captureBtn = document.getElementById("capture-btn");
    const stopBtn = document.getElementById("stop-btn");
    const picPreviewShareBtn = document.getElementById("pic-preview-share-btn");
    const moviePreviewShareBtn = document.getElementById("movie-preview-share-btn");
    const movieRecordCnt = document.querySelector(".movie-record-cnt");

    if (isLandscape) {
        // canvas.style.width = "100%";
        // canvas.style.height = "auto";
        canvas.style.aspectRatio = "initial";
        cameraSwitBtnWrapper.style.transform="scale(0.6)";
        captureBtn.style.width = "100px";
        captureBtn.style.height = "100px";
        stopBtn.style.width = "100px";
        stopBtn.style.height = "100px";
        picPreviewShareBtn.style.fontSize = "24px";
        picPreviewShareBtn.style.padding = "15px 40px";
        moviePreviewShareBtn.style.fontSize = "24px";
        moviePreviewShareBtn.style.padding = "15px 40px";
        movieRecordCnt.style.fontSize = "14px";
    } else {
        canvas.style.width = "auto";
        canvas.style.height = "95vh";
        cameraSwitBtnWrapper.style.transform="scale(1.25)";
        captureBtn.style.width = "220px";
        captureBtn.style.height = "220px";
        stopBtn.style.width = "220px";
        stopBtn.style.height = "220px";
        picPreviewShareBtn.style.fontSize = "48px";
        picPreviewShareBtn.style.padding = "35px 60px";
        moviePreviewShareBtn.style.fontSize = "48px";
        moviePreviewShareBtn.style.padding = "35px 60px";
        movieRecordCnt.style.fontSize = "36px";
        // canvas.style.aspectRatio = "9 / 16";
    }
}

// 初回適用
adjustCanvasSize();

// 向きが変わるたびに調整
window.addEventListener("resize", adjustCanvasSize);
window.addEventListener("orientationchange", adjustCanvasSize);