const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
export default function dateToString(data:Date){
    return `${months[data.getMonth()]} ${data.getDate()}, ${data.getFullYear()}`;
}
