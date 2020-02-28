const subBtn = document.getElementById('subBtn');

subBtn.addEventListener('click', function(){
    formToJson()
});

function formToJson(){
    let valueArray = []
    var x = $("form").serializeArray();
        $.each(x, function(i, field){
            valueArray.push(field.value)
            calc = parseFloat(valueArray[9] * 100)

            //console.log(calc)
        });
        let orderltem = {
            reference: valueArray[0],
            name: valueArray[1],
            type: valueArray[2],
            class: valueArray[3],
            description: valueArray[4],
            discountDescription: valueArray[5],
            quantity: parseFloat(valueArray[6]),
            quantityllnit : valueArray[7],
            unitPrice: parseFloat(valueArray[8]* 100),
            discountPrice: parseFloat(valueArray[9]* 100),
            vatPercent: parseFloat(valueArray[10] * 100),
            amount: parseFloat(valueArray[6] * (valueArray[8] * 100) - (calc) ),
            vatAmount: parseFloat(valueArray[11] *100)
        }
            document.getElementById("outputBox").value = JSON.stringify(orderltem);
        };