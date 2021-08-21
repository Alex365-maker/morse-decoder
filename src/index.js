const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    expr.split(' ');
    let arr = "";
    let kol = 0;
    let fin = '';
    let mas = [];
    for(let i = 0; i < expr.length; i++){
        mas[kol]=expr[i];
        kol++;   
        
    if(kol == 10){
    kol = 0
    arr = "";
    for(let j = 0; j < 10; j++){
    if(mas[j] == '1' && mas[j+1] == '0'){
        arr += "."
        
    }else if(mas[j] == '1' && mas[j+1] == '1'){
        arr += '-'
    }
    else if(mas[j]=='*'){
    arr += "**";}
    j++;
    }
    if(arr == "**********"){
        fin += " ";
    }else{fin += arr.split(' ').map(  a => a .split(' ').map(b => MORSE_TABLE[b]).join('')).join(' ')}
    }
    }
    return fin;
    }


module.exports = {
    decode
}