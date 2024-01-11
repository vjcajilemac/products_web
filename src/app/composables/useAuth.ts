import {  ApiPost } from '../helpers/apiHelpers';


const useAuth = () => {
    const signupUser = async (registerUserDto:any) => {
        const respTasks = await ApiPost(`auth/register`, registerUserDto);
        const loginUserDto: any = {
            email: registerUserDto.email,
            password: registerUserDto.password

        }
        signinUser(loginUserDto)  
        return respTasks;
    };
    const signinUser = async (loginUserDto:any) => {
        
        const respTasks = await ApiPost(`auth/login`, loginUserDto);
        alert(respTasks.token)
        if(respTasks&&respTasks.token){
            alert('Sesion iniciada')
            localStorage.setItem('token', respTasks.token)
            window.location.href="/"
        }
        return respTasks;
    };

    return {
        signupUser,
        signinUser
    };
}
export {useAuth}