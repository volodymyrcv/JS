function writeOnPage(){
    var frm = document.getElementsByTagName('form')[0];
    var fibNumbers = [1, 1];
    if(frm.growthDecrease.value == 'Growth')
        growthLoop(frm.n.value, fibNumbers);
    else
        decreaseRecurent(frm.n.value, fibNumbers);
    var answer = "<footer><h2>Числа Фібоначі і їх властивості</h2><p><ul><li>";
    for(var i=0; i<fibNumbers.length;i++)
        answer +=fibNumbers[i] + '; ';
    if(frm.growthDecrease.value == 'Growth')
        answer = properties(fibNumbers, answer);
    answer += '</li></ul><hr><a href="https://validator.w3.org/nu/?doc=https%3A%2F%2Fvolodymyrcv.github.io%2FJS%2Ffibonacci.html">Валідатор</a></footer>';
    var ftr = document.getElementsByTagName('footer')[0];
    if (ftr === undefined)
        document.body.insertAdjacentHTML('beforeend', answer);
    else
    {
        document.body.removeChild(ftr);
        document.body.insertAdjacentHTML('beforeend', answer);
    }
}
function growthLoop (n, fibNumbers){
    //Зростання: Фн-1 + Фн-2
    for (var i=2; i<=n;i++)
    {
        fibNumbers.push(fibNumbers[fibNumbers.length-1]+fibNumbers[fibNumbers.length-2]);
    }
}
function decreaseRecurent (n, fibNumbers){
    //Спадання: Фн+2 - Фн+1
    if (fibNumbers.length < n)
    {
        fibNumbers.push(fibNumbers[fibNumbers.length-2]-fibNumbers[fibNumbers.length-1])
        decreaseRecurent(n, fibNumbers);
    }
}
function properties (fibNumbers, answer){
    /* Властивості
    1. Фм ділиться на Фн, тільки тоді коли м ділиться на н
    2. Кожне 3 число парне
    3. Кожне 4 ділиться на 3
    4. Кожне 15 закінчується нулем.
    */
    var i = 2;
    answer += '</li><li><em>Парні:</em>';
    while(i<fibNumbers.length)
    {
        answer += fibNumbers[i]+ '; ';
        i+= 3;
    }
    i = 3;
    answer +='</li><li><em>Діляться на 3:</em>'
    do{
        answer += fibNumbers[i]+'; ';
        i += 4;
    }
    while(i<fibNumbers.length)
    if (fibNumbers.length >= 15)
    {
        i=14;
        answer +='</li><li><em>Закінчується на 0:</em>'
        while(i<=fibNumbers.length)
        {
            answer += fibNumbers[i]+'; ';
            i+=15;
        }
    }
    return answer;
}