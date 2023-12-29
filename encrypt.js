function encryptAccountNumber(accountNumber) {
    // Set your encryption key
    var encryptionKey = 'YourEncryptionKey';
  
    // Convert the account number to a string
    var accountString = accountNumber.toString();
  
    // Define the encrypted account number variable
    var encryptedAccountNumber = '';
  
    // Loop through each digit of the account number
    for (var i = 0; i < accountString.length; i++) {
      // Get the current digit
      var digit = parseInt(accountString[i], 10);
  
      // Encrypt the digit by adding the encryption key
      var encryptedDigit = (digit + encryptionKey.charCodeAt(i % encryptionKey.length)).toString(36);
  
      // Append the encrypted digit to the result
      encryptedAccountNumber += encryptedDigit;
    }
  
    // Return the encrypted account number
    return encryptedAccountNumber;
  }
  var accountNumber = 1234567890;
var encryptedNumber = encryptAccountNumber(accountNumber);
console.log(encryptedNumber);