/*btn.onclick = function() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("ajax").innerHTML = xhr.responseText;
        }
    };
    xhr.open("GET", "anh.html", true);
    xhr.send();
};*/

$('#btn').click(function() {
    $.get('anh.html', function (data) {
        $('#ajax').html(data);
    });
});



function confirmEnding(str, target) {
        if(str.substr(-target.length)==target.substring(0,target.length+1))
        {return true;}
        else {return false;}
}
confirmEnding("Bastian", "n");
