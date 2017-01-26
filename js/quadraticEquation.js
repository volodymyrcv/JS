function writeOnPage()
{
    var frm = document.getElementsByTagName('form')[0];
    var a = Number(frm.a.value);
    var b = Number(frm.b.value);
    var c = Number(frm.c.value);
    var ftr = document.getElementsByTagName('footer')[0];
    if (ftr === undefined)
        document.body.insertAdjacentHTML('beforeend', calculate(a,b,c));
    else
    {
        document.body.removeChild(ftr);
        document.body.insertAdjacentHTML('beforeend', calculate(a,b,c))
    }
}
function calculate(a, b, c)
{
    var answer = '<footer>';
    var abcValues = '<ul><li><strong>a='+a+', b='+b+', c='+c+'</strong></li>';
    if (a !== 0)
    {
        if (b !== 0)
        {
            if (c !== 0)
            {
                var fullQE = '<h4>Повне квадратне рівняння</h4>';
                var d = Math.pow(b, 2)-4*a*c;
                if (d > 0)
                    answer += fullQE+abcValues+'<li><em>Дискримінант якого='+d+'</em></li><li>x<sub>1</sub>='+((-b+Math.sqrt(d))/(2*a))+' | x<sub>2</sub>='+((-b-Math.sqrt(d))/(2*a)) + '</li></ul></footer>';
                else if (d === 0)    
                    answer += fullQE+abcValues+'<li><em>Дискримінант якого=0</em></li><li>x='+(-b/(2*a)) + '</li></ul></footer>';
                else
                    answer += fullQE+abcValues+'<li><em>Дискримінант якого='+d+'</em></li><li>Рівняння не має дійсних коренів</li></ul></footer>';
            }
            else
            {
                answer += '<h4>Неповне квадратне рівняння</h4>'+abcValues+'</li><li>x<sub>1</sub>=0 | x<sub>2</sub>='+(-b/a)+'</li></ul></footer>';
            }
        }
        else
        {
            if (c !== 0)
            {
                answer += '<h4>Неповне квадратне рівняння</h4>'+abcValues;
                var ca = -c/a;
                if (ca < 0)
                {
                    answer += '<li>Рівняння не має жодного дійсного розв\'язку</li></ul></footer>';
                }
                else
                {
                   answer +='<h4>Неповне квадратне рівняння</h4>'+abcValues+'<li>x<sub>1</sub>='+Math.sqrt(ca)+' | x<sub>2</sub>='+-Math.sqrt(ca)+'</li></ul></footer>';
                }
            }
            else
            {
                answer += '<h4>Просте рівняння</h4>'+abcValues+'<li>x=0</li></ul></footer>';
            }
        }
    }
    else
    {
        if (b !== 0)
        {
            if (c !== 0)
            {
                answer += '<h4>Просте рівняння</h4>'+abcValues+'<li>x='+(-c/b)+'</li></ul></footer>';
            }
            else
            {
                answer += '<h4>Просте рівняння</h4>'+abcValues+'<li>x = 0</li></ul></footer>';
            }
        }
        else
        {
            answer += abcValues+'<li><em>не є рівнням!</em></li></ul></footer>';
        }
    }
    return answer;
}