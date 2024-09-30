 //10.1
 var a = Number(prompt("nhập a "))
document.writeln("số "+a+" là ");
switch (true) {
    case (a > 0):
        document.writeln(" số nguyên dương<br />");
        break;
    case (a < 0):
        document.writeln(" số nguyên âm<br />");
        break;
    case (a === 0):
        document.writeln("Số nhập vào là số 0<br />");
        break;
    default:
        document.writeln("Đây không phải là một số hợp lệ<br />");
}
//10.2
var n = Number(prompt("nhập n "))
document.writeln("số "+n);
switch (true) {
    case (n % 3 === 0 && n % 5 === 0):
        document.write(" chia hết cho cả 3 và 5.");
        break;
    case (n % 3 === 0):
        document.write(" chia hết cho 3.");
            break;
    case (n % 5 === 0):
        document.write(" chia hết cho 5.");
            break;
    default:
        document.write(" không chia hết cho 3 hoặc 5.");
}
//10.3
var thang = Number(prompt("nhập tháng từ 1 => 12 "))
if(thang < 1 || thang > 12) {
    document.write("Tháng không hợp lệ. Vui lòng nhập giá trị từ 1 đến 12.")
}else {
    document.write("tháng "+thang+" có ");
    switch (thang) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            document.write("31 ngày<br />");
            break;
        case 4: case 6: case 9: case 11:
            document.write("30 ngày<br />");
            break;
        case 2: document.write("28 hoặc 29 ngày<br />")
}
}
//10.4
var soa = Number(prompt("Nhập hệ số a:"));
var sob = Number(prompt("Nhập hệ số b:"));
var soc = Number(prompt("Nhập hệ số c:"));
document.write("Phương trình bậc 2 là: " + soa + "X² + " + sob + "X + " + soc + " = 0 <br />");

switch (true) {
    case (soa === 0 && sob !== 0):
        document.write("Phương trình có nghiệm duy nhất x = " + (-soc / sob) + "<br />");
        break;
    case (soa === 0 && sob === 0):
        document.write("Phương trình vô nghiệm.<br />");
        break;
    default:
        var delta = sob * sob - 4 * soa * soc;
        switch (true) {
            case (delta > 0):
                var x1 = (-sob + Math.sqrt(delta)) / (2 * soa);
                var x2 = (-sob - Math.sqrt(delta)) / (2 * soa);
                document.write("Phương trình có 2 nghiệm phân biệt:");
                document.write(" x1 = " + x1 + ", x2 = " + x2 + "<br />");
                break;
            case (delta === 0):
                var x = -sob / (2 * soa);
                document.write("Phương trình có nghiệm kép x = " + x + "<br />");
                break;
            case (delta < 0):
                document.write("Phương trình vô nghiệm.<br />");
                break;
        }
}

//10.5
var sa = parseFloat(prompt("Nhập cạnh a:"));
var sb = parseFloat(prompt("Nhập cạnh b:"));
var sc = parseFloat(prompt("Nhập cạnh c:"));

switch (true) {
    case (sa <= 0 || sb <= 0 || sc <= 0):
        document.write(sa + ", " + sb + ", " + sc + " không phải là ba cạnh tam giác (cạnh không hợp lệ).");
        break;
    case (sa + sb > sc && sa + sc > sb && sb + sc > sa):
        document.write(sa + ", " + sb + ", " + sc + " là ba cạnh tam giác.");
        break;
    default:
        document.write(sa + ", " + sb + ", " + sc + " không phải là ba cạnh tam giác.");
}