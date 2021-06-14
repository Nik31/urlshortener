const base64chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_';
const reverseMap = {};
base64chars.split('').forEach((char,index) => reverseMap[char] = index )


const inttoradix64 = int => {
    let chars = [];
    let base64charsArray = base64chars.split('');
    while(int > 64) {
        remainder = (int%64);
        
        chars.push(base64charsArray[remainder]);
        int = Math.floor(int/64);
    }
    chars.push(base64chars[int]);

    return chars.reverse().join('');

}


const radix64toint = (radix64str) => {
    chars = radix64str.split('').reverse();
    
    return chars.reduce((total, char, index) => {
        return Math.pow(64, index)*reverseMap[char] + total
    }, 0);
}

module.exports = {
    inttoradix64,
    radix64toint
}
// console.log("here is the value", radix64toint('_______'));
// console.log("here is the reverse", inttoradix64(4498046511104));