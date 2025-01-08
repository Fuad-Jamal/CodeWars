function feast(beast, dish) {
    if (beast[0]==dish[0]&&dish[dish.length-1]==beast[beast.length-1]){
        return true
    }else{
        return false
    }
    }
    console.log(feast('dog','drizzle'))