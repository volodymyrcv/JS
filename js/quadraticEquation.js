function calculate()
{
    var frm = document.getElementsByTagName('form')[0];
    var a = Number(frm.a.value);
    var b = Number(frm.b.value);
    var c = Number(frm.c.value);
    var answer = "Задано ";
    if (a !== 0)
    {
        if (b !== 0)
        {
            if (c !== 0)
            {
                var d = Math.pow(b, 2)-4*a*c;
                if (d > 0)
                    answer += "повне квадратне рівняння. a="+a+", b="+b+", c="+c+". Дискримінант якого="+d+". x1="+((-b+Math.sqrt(d))/(2*a))+". x2="+((-b-Math.sqrt(d))/(2*a));
                else if (d === 0)    
                    answer += "повне квадратне рівняння. a="+a+", b="+b+", c="+c+". Дискримінант якого=0. x="+(-b/(2*a));
                else
                    answer += "повне квадратне рівняння. a="+a+", b="+b+", c="+c+". Дискримінант якого="+d+". Рівняння не має дійсних коренів";
            }
            else
            {
                answer += "неповне квадратне рівняння: a="+a+", b="+b+", c=0. x1=0, x2="+(-b/a);
            }
        }
        else
        {
            if (c !== 0)
            {
                answer += "неповне квадратне рівняння: a="+a+", b=0, c="+c+". ";
                var ca = -c/a;
                if (ca < 0)
                {
                    answer += "Рівняння не має жодного дійсного розв'язку";
                }
                else
                {
                   answer +="неповне квадратне рівняння. a="+a+", b=0, c="+c+". x1="+Math.sqrt(ca)+". x2="+-Math.sqrt(ca);
                }
            }
            else
            {
                answer += "просте рівняння: a "+a+", b=0, c=0. x = 0";
            }
        }
    }
    else
    {
        if (b !== 0)
        {
            if (c !== 0)
            {
                answer += "просте рівняння. a=0, b="+b+", c="+c+". x="+(-c/b);
            }
            else
            {
                answer += "просте рівняння: a=0, b="+b+", c=0. x = 0";
            }
        }
        else
        {
            answer = "a = "+a+", b = "+b+", c = "+c+" - не є рівнням!";
        }
    }
    window.alert(answer);
}