//  Capitalizes the first letter of a given string and returns the modified string
export function capitalize(s){
    return String(s[0]).toUpperCase() + String(s).slice(1);
}