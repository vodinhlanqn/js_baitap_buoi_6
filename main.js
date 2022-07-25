// BÀI TẬP 1: TÌM SỐ NGUYÊN DƯƠNG NHỎ NHẤT

document.getElementById('btnCheckNumber').onclick = function () {
    // input:
    var sum = 0;
    var count = 0;
    while (sum < 10000) {
        count++;
        sum += count;
    }
    var result = "";
    result += `<p>Số nguyên dương nhỏ nhất: ${count}`;
    result += `<p>Tổng các số từ 1 đến ${count}: ${sum}`;
    // OUTPUT:
    document.getElementById('showSoNguyenDuongNN').innerHTML = result;
}

/**
 * ----------------------------------------------------------------------------------------------
 */

// BÀI TẬP 2: TÍNH TỔNG - LŨY THỪA SỐ

document.getElementById('btnSum').onclick = function () {

    var soX = document.getElementById('soX').value;
    var soLuyThua = document.getElementById('soLuyThua').value;

    var tongLT = tongLuyThua(soX, soLuyThua);

    document.getElementById('showTongLuyThua').innerHTML = `Tổng: ${tongLT}`;
}

var tongLuyThua = function (x, n) {
    var result = 0;
    while (n > 0) {
        result += Math.pow(x, n);
        n--;
    }
    return result;
}

/**
 * ----------------------------------------------------------------------------------------------
 */

// BÀI TẬP 3: TÍNH GIAI THỪA

document.getElementById('btnTinhGT').onclick = function () {
    var numberGT = document.getElementById('numberGT').value;
    var resultGT = tinhGT(numberGT);
    document.getElementById('showKQGiaiThua').innerHTML = `Giai thừa: ${resultGT}`;
}

var tinhGT = function (number) {
    var result = 1;
    for (var i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}

/**
 * ----------------------------------------------------------------------------------------------
 */

// BÀI TẬP 4: TẠO 10 THẺ DIV - THEO CHẴN LẼ

document.getElementById('btnTaoDIV').onclick = function () {

    var taoTheDiv = '';
    for (var i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            taoTheDiv += `<div class="red">Div chẵn</div>`;
            // taoTheDiv += `<div style="background:red; color: white; padding: 10px;">Div chẵn</div>`;
        } else {
            taoTheDiv += `<div class="blue">Div lẽ </div>`;
        }
    }
    document.getElementById('ketQuaTheDiv').innerHTML = taoTheDiv;
}
