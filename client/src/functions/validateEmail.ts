export default function validateEmail(email:string):boolean{
    if(email.length==0)
        return false;
    if(email.indexOf('@')<1||email.indexOf('.')<1||email.indexOf(' ')!=-1||email.indexOf('@')!==email.lastIndexOf('@'))
        return false;
    if(email.charAt(email.indexOf('@')-1)=='.'||email.length-email.lastIndexOf('.')<3)
        return false;
    if(email.lastIndexOf('.')<email.indexOf('@')||email.substring(0,email.indexOf('@')).length==0)
        return false;
    for(let i=1;i<email.length;i++)
        if(email.charAt(i)=='.'&&email.charAt(i-1)=='.')
            return false;
    const domain=email.substring(email.indexOf('@')+1,email.lastIndexOf('.'));
    const localPart=email.substring(0,email.indexOf('@'));
    for(let char of localPart)
        if((char<'a'||char>'z')&&char!='.'&&char!='+'&&char!='_')
            return false;
    if(localPart.length>64||email.length>254||domain.length>63||domain.length==0||domain.charAt(0)=='.')
        return false;
    let countOfChars=0;
    for(let i=email.lastIndexOf('.')+1;i<email.length;i++)
        if(email.charAt(i)>='a'&&email.charAt(i)<='z')
            countOfChars++;
    if(countOfChars==0)
        return false;
    for(let char of domain)
        if((char<'a'||char>'z')&&char!='.')
            return false;
    return true;
}
