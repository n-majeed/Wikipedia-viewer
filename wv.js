var search_val;
function randomlink(){
  window.open("https://en.wikipedia.org/wiki/Special:Random");
}

function display(){
  search_val=$("#search").val();
var url="https://en.wikipedia.org/w/api.php?action=opensearch&search="+search_val+"&format=json&callback=?"   ;
$.ajax({
 type:"GET",
url:url,
async:false,
  dataType:"json",
  success:function(url){
    $("#demo").html('');
        for(var i=0;i<url[1].length;i++){
        $("#demo").prepend("<li><a href="+url[3][i]+" >"+url[1][i]+"</a><p>"+url[2][i]+"</p></li>");
     }
    $("#search").val('');
    }
});
}
$("#search").keypress(function(e){
  if(e.which==13){
    display();  }
});

$("#random").click(randomlink);
