'use strict';
let orderItemArray = [];

function formToJson() {
    document.getElementById("outputBox").innerHTML = "";
    let valueArray = [];
    let x = $("form").serializeArray();
    $.each(x, function (i, field) {
        valueArray.push(field.value)
    });

    let orderItem = {
        reference: valueArray[0],
        name: valueArray[1],
        type: valueArray[2],
        class: valueArray[3],
        description: valueArray[4],
        discountDescription: valueArray[5],
        quantity: parseFloat(valueArray[6]),
        quantityUnit: valueArray[7],
        unitPrice: parseFloat(valueArray[8] * 100),
        discountPrice: parseFloat(valueArray[9] * 100),
        vatPercent: parseFloat(valueArray[10] * 100),
        amount: parseFloat(valueArray[6] * (valueArray[8] * 100)),
        vatAmount: parseFloat(valueArray[11] * 100)
    }

    orderItemArray.push(orderItem);

    orderItemArray.forEach(item => {
        document.getElementById("outputBox").innerHTML += JSON.stringify(item, undefined, 2);
        document.getElementById("outputBox").innerHTML += ',';
    })

}


function resetForm() {
    document.getElementById("outputBox").innerHTML = "";
    orderItemArray.length = 0;
    console.log("Data is rested")
}

function calcTotalAmount() {
    let total = 0;

    orderItemArray.forEach(item => {
        total += item.amount;
    })
        
    return total

}

function copyToClipboard() {

    let aux = document.createElement("input");
    let y = document.getElementById("outputBox").innerHTML;

    aux.setAttribute("value", y);

    document.body.appendChild(aux);

    aux.select();

    document.execCommand("copy");

    document.body.removeChild(aux);
    console.log("This is copied: " + y)

}

function completeJson(){
    let orderitems = {
        paymentorder: {
            operation: "Purchase",
            currency: "{{currency}}",
            amount: parseFloat(calcTotalAmount()),
            vatAmount: 0,
            description: "{{description}}",
            orderitem: orderItemArray,
            userAgent: "Mozilla/5.0",
            language: "{{language}}",
            disablePaymentMenu: false,
            urls: {
                hostUrls: ["https://xillians.github.io/dummyShop/"],
                completeUrl: "{{completeUrl}}",
                cancelUrl: "{{cancelUrl}}",
                callbackUrl: "{{callbackUrl}}",
                termsOfServiceUrl: "{{ToSUrl}}",
                logoUrl: "{{logoUrl}}"
            },
            payeeInfo: {
                payeeId: "{{merchantId}}",
                payeeReference: "{{payeeReference}}",
                payeeName: "{{merchantName}}",
                productCategory: "A1"
            },
            items: [{
                    creditCard: {
                        rejectCreditCards: false,
                        rejectDebitCards: false,
                        rejectConsumerCards: false,
                        rejectCorporateCards: false
                    }
                },
                {
                    invoice: {
                        feeAmount: 1900
                    }
                },
                {
                    swish: {
                        EnableEcomOnly: false
                    }
                }

            ]
        }
    }

    document.getElementById("outputBox").innerHTML = JSON.stringify(orderitems, undefined, 2); 
    // console.log(JSON.stringify(orderitems['paymentorder'],['amount']));
    console.log("Complete is completed")
}