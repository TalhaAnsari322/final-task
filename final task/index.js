function gruopsAnagrams(word) {
    const anagrameMap = new Map();


    word.forEach(word =>{
        const sortedWord = word.split('').sort().join('');
        if(anagrameMap.has(sortedWord)) {
            anagrameMap.get(sortedWord).pus(word);
        }else{
            anagrameMap.set(sortedWord,[word])
        }
    });
    return Array.form(anagrameMap.values()).filter(gruop=> gruop.length > 1);
}
const word =["bat" ,"tab" ,"cat", "tab", "part"];
console.log(gruopsAnagrams(words));
