function media(){
    var car1 = document.getElementById('car1').value
    var car2 = document.getElementById('car2').value
    var car3 = document.getElementById('car3').value
    var car4 = document.getElementById('car4').value
    var result = parseInt(parseInt(car1) + parseInt(car2) + parseInt(car3) + parseInt(car4)) / 4
    alert(result);
}

function ld(){
    document.getElementById('car1').value=("");
    document.getElementById('car2').value=("");
    document.getElementById('car3').value=("");
    document.getElementById('car4').value=("");
}
