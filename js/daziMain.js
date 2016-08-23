function strToImg(strElement, imgElement, canvasElement, fontColor, callback){
    var str = document.getElementById(strElement).value.replaceAll("\r\n", "").replaceAll("\n", "")
    var strList = []
    var basicFont = "px Courier New"
    var fontIndex = 0
    var lineNum = 4
    if (str.length > lineFont[2][0]) {
        str = str.substr(0, 39)
    }
    if (str.length <= lineFont[0][0]) {
        strList.push(str)
        fontIndex = 0
    }
    if (str.length > lineFont[0][0] && str.length <= lineFont[1][0]) {
        lineNum = lineFont[1][0] / 2
        var strLength = str.length
        for (var i = 0; i < 2 && strLength > 0; i++) {
            strLength -= lineNum
            strList.push(str.substr(lineNum * i, lineNum))
        }
        fontIndex = 1
    }
    if (str.length > lineFont[1][0] && str.length <= lineFont[2][0]) {
        lineNum = lineFont[2][0] / 3
        var strLength = str.length
        for (var i = 0; i < 3 && strLength > 0; i++) {
            strLength -= lineNum
            strList.push(str.substr(lineNum * i, lineNum))
        }
        fontIndex = 2
    }
    var canvas = document.getElementById(canvasElement)
    var context = canvas.getContext("2d")
    // context.textAlign='center';
    context.save()
    context.fillStyle='#FFFFFF';
    context.fillRect(0,0,canvas.width,canvas.height);
    context.restore()
    context.drawImage(document.getElementById("QRCode"), 0, 818, 170, 170)
    context.fillStyle = fontColor;
    context.font = lineFont[fontIndex][1] + "px Courier New"
    for (var i = 0; i < strList.length; i++) {
        context.fillText(strList[i], 0, (i + 1) * lineFont[fontIndex][1]);
    }
    var save_img = document.getElementById(imgElement)
    save_img.src = canvas.toDataURL("image/jpeg")
    // save_img.onload = function(){
    // } // 出了个问题，不知道为啥不执行了
    callback()
    context.clearRect(0, 0, canvas.width, canvas.height);
}