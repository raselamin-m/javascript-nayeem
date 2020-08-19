function name(firstName,lastName,gender){
    var output;
    if(gender=='male'){
        output='Mr.'+ firstName + ' ' + lastName;
    }else if(gender=='female'){
        output='Mrs.'+ firstName + ' ' + lastName;
    }
    return output;
}
var fullname=name('Rasel','Amin','male');
console.log(fullname);