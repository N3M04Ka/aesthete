interface Response{
    isOk:boolean;
    message?:string;
}
export default function validatePassword(password:string):Response{
    if(password.length<8)
        return {isOk:false,message:"Password is to short"};
    if(password.length>64)
         return {isOk:false,message:"Password is to long"};
    let digits=0,letters=0;
    for(let c of password){
        if(c>='0'&&c<='9')
            digits++;
        else if((c>='a'&&c<='z')||(c>='A'||c<='Z'))
            letters++;
    }
    if(digits==0)
        return {isOk:false,message:"Use digits"};
    if(letters==0)
        return {isOk:false,message:"Use letters"};
    return {isOk:true};
}
