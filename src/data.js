export const API_KEY = 'AIzaSyDbGmM0xph8j3JYvNkIU8E_OR9oVgie9fE';

export const value_converter = (value) => {
    if(value > 1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value >= 1000){
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}