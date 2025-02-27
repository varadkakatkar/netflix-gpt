export const checkValidData = (email,password) =>{
    const emailRegex = /\b[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,}\b/i;
    const passwordRegex =  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  
    // Test the email against the regex
    const isEmailValid = emailRegex.test(email);
    const isPasswordNotValid = passwordRegex.test(password);

    if(!isEmailValid) {return "Email ID is not valid"}
    if(!isPasswordNotValid) {return "Password is not valid"}

    return null;
    
}