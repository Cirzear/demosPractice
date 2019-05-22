function list_show() {
    var trs = 10;
    var tds = 4;
    document.write("<table>")
    for (var i = 0; i<trs; i++){
        if(i % 2 ==0){
            document.write("<tr bgcolor='#00bfff'>");
        }
        else{
        document.write("<tr bgcolor='#a52a2a'>");
        }
        for (var j =0; j<tds; j++){
            document.write("<td>"+(i+1)+"</td>");
        } document.write("</tr>")
    } document.write("</table>")
}
function pjlist() {

    var tables = "<table>"
    var trs = 10;
    var tds = 4;
    for (var i = 0; i<trs; i++){
        tables += "<tr>"
        for (var j =0; j<tds; j++){
            tables += "<td>"+i+"</td>"
        }
        tables += "</tr>"
    }tables += "</table>"
    document.write(tables)
}