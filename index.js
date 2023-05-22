

let rand = Math.floor(Math.random() * 16) + 1
console.log(rand)
let count = 4;
$(`button`).click(
    function () {
        let num = $(`input`).val();
        if (num == rand)
            $(`#out`).text(`Ура! Ты победил!`);
        else if (num > rand)
            $(`#out`).text(`Многовато!`);
        else if (num < rand)
            $(`#out`).text(`Маловато!`);
        count--
        if (count == 0)
            $(`#out`).text(`Все по новой`) + $(input).hide();
    }
    
)  


