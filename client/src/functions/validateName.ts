export default function validateName(name:string):boolean{
    if(name.length==0)
        return false;
    const allowedChars=["'","-"," ","."];
    fn:
    for(let char of name){
        if((char>='a'&&char<='z')||(char>='A'&&char<='Z'))
            continue fn;
        for(let allowedC of allowedChars)
            if(char==allowedC)
                continue fn;
        return false;
    }
    return true;
}
