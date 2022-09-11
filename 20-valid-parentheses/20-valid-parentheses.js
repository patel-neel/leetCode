/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const open = ['(', '{', '['];
    const close = [')', '}', ']'];
    let valid = true;
    let charArray = s.split('');
    while(charArray.length > 0){
        let start, end = null;
        for(let i = 0; i <= charArray.length; i++){
            if(open.includes(charArray[i])) start = i;
            if(close.includes(charArray[i])){
                end = i;
                break;
            } 
        }
        if(open.findIndex((el)=>{if(el === charArray[start]) return true}) === 
		close.findIndex((el)=>{if(el === charArray[end]) return true})){
            charArray.splice(start, (end-start+1));
        } else {
            valid = false;
            break;
        }
    }
    
    return valid;
};