$(document).ready(function(){
    $("button").click(function(){
        $("#short").load("table.html");
        $("button").hide(1000);
    });
});