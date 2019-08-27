function checkValidateEmail(str) {
    let patt = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    if (patt.test(str)) {
        return true;
    } else {
        return false;
    }
}