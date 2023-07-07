export const validate = data => {
    const errors = {}


    if(!data.name){
        errors.name = "Please Enter a Name"
    }
    else{
        delete errors.name
    }



    if(!data.email){
        errors.email = "Please Enter a Email"
    }
    else{
        delete errors.email
    }


    if(!data.password){
        errors.password = "Please Enter a Password"
    }
    else if(data.password.length < 6){
        errors.password = "Your Password Need to be 6 Character or More"
    }
    else{
        delete errors.password
    }



    if(!data.confirmPassword){
        errors.confirmPassword = "Please Enter a Confirm Password"
    }
    else if(data.confirmPassword !== data.password){
        errors.confirmPassword = "Password Do not match"
    }
    else{
        delete errors.confirmPassword
    }


    if(data.isAccepted){
        delete errors.isAccepted
    }
    else{
        errors.isAccepted = "Please check The Privacy Policy"
    }
    return errors
}