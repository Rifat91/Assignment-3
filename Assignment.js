//

//1-kilometerToMeter

function kilometerToMeter(kilometer){
    var meter = kilometer*1000;
    if(kilometer > 0){
        return meter;
    }
    else{
        return "Distance can't be negative.";
    }
}

//2-budgetCalculator

function budgetCalculator(watch, mobile, laptop){    //take three parameter in a function.
    var watchPrice = watch * 50;
    var mobilePrice = mobile * 100;
    var laptopPrice = laptop * 500;
    var totalCost = watchPrice + mobilePrice + laptopPrice;
    if(watch < 0){
        return "Product can't be negative";
    }
    else if(mobile < 0){
        return "Product can't be negative";
    }
    else if(laptop < 0){
        return "Product can't be negative";
    }
    else{
        return totalCost;
    }
}

//3-hotelCost

function hotelCost(totalDays){
    var totalCost = 0;
    if(totalDays < 0){
        return "Days can't be negative.";
    }
    if(totalDays <= 10){                          //calculation for first 10 days total cost.
        var totalCost = totalDays * 100;
    }
    else if(totalDays <= 20){                     //calculation for second 10 days total cost.
        var firstTenDays = 10 * 100;
        var remainDays = totalDays - 10;
        var secondTenDays = remainDays * 80;
        totalCost = firstTenDays + secondTenDays;
    }
    else{                                         //calculation for the total cost of after 20 days.
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remainDays = totalDays - 20;
        var afterTwentyDays = remainDays * 50;
        totalCost = firstTenDays + secondTenDays + afterTwentyDays;
    }
    return totalCost;
}

//4-megaFriend

function megaFriend(friends){
    var longestWord = "";
    if(friends == " "){
        return "Please enter a valid name.";
    }
    for(var i = 0; i < friends.length; i++){
        if(longestWord.length < friends[i].length){

            longestWord = friends[i];
        }
    }
    return longestWord;
}