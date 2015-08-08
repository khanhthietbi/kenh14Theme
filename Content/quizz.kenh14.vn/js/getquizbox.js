//var hostQuizz = "http://b12.channelvn.net";
var hostQuizz = "http://quizz.kenh14.vn";
var Quizz = null;
var obj = new JSONscriptRequest(hostQuizz + '/services/NewBoxQuizK14.ashx');
obj.buildScriptTag(); // Build the script tag     
obj.addScriptTag(); // Execute (add) the script tag

Quizz = function (data) {
    if (data != null) {
        $("#box-quiz").html(data.Result);
    }
    else {
        alert("err");
    }
}