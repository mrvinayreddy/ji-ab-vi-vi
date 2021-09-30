function result() {

    var students= {

        JAGADEESH : {
            transform: "63",
            data: "44",
            analog: "67",
            computer: "86",
            software: "94",
            discrete: "11"
        },
        VINAY : {
            transform: "43",
            data: "48",
            analog: "66",
            computer: "76",
            software: "54",
            discrete: "61"
        },
        ABHIJIT : {
            transform: "23",
            data: "89",
            analog: "46",
            computer: "66",
            software: "54",
            discrete: "91"    
    }
}

var studentname=document.getElementById('studentname').value;
var input=studentname.toUpperCase();
var definition=students[input];
var output=document.getElementById("output");

if (definition==undefined) {
    output.innerHTML=`<hr> There is no Information about this Student. <hr>`;
} else {
    output.innerHTML=`<hr>  Transform Calculus, Fourier Series And Num Tech: ${definition.transform} <hr> Data Structures And Applications: ${definition.data} <hr> Analog And Digital Electronics: ${definition.analog} <hr> Computer Organization: ${definition.computer} <hr> Software Engineering: ${definition.software} <hr> Discrete Mathematical Structures: ${definition.discrete} <hr>`;
};
};