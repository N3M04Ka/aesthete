import { isValidPhoneNumber } from "libphonenumber-js";

export default function validatePhone(phone:string):boolean{
    return isValidPhoneNumber(phone);
}
