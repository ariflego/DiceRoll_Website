function rollDice(){

    const diceNum = Number(document.getElementById("diceNum").value);
    const diceResult = document.getElementById("diceResult");
    const diceSum = document.getElementById("diceSum");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < diceNum; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="images/face${value}.png" alt="Dice ${value}">`);
        console.log(value);
    }

    function sum(...values){
        let result = 0;
        for(let value of values){
            result += value;
        }
        return result;
    }

    diceResult.textContent = `You rolled: ${values.join(', ')}`;
    diceSum.textContent = `Sum of number of dice: ${sum(...values)}`
    diceImages.innerHTML = images.join('');
}