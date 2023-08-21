function isStrongPassword(pass){
    if(pass.length < 8 || pass.includes('password') || !pass.toUpperCase()) return false;
    else return true;

}

console.log(isStrongPassword("passQwerty"))