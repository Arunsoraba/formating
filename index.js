exports.formatName = function(firstName, lastname, isFirstnameLast) {
    console.log("This is a message from the demo package", firstName, lastname, isFirstnameLast);
    return isFirstnameLast ? lastname + ', ' + firstName : firstName + ' ' + lastname;
}