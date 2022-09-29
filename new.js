function print24(str)
{
    var h1 = Number(str[1] - '0');
    var h2 = Number(str[0] - '0');
    var hh = (h2 * 10 + h1 % 10);
    if (str[8] == 'A')
    {
        if (hh == 12)
        {
           console.log("00");
            for (var i = 2; i <= 7; i++)
            console.log(str[i]);
        }
        else
        {
            for (var i = 0; i <= 7; i++)
                console.log(str[i]);
        }
    }
    else
    {
        if (hh == 12)
        {
            console.log("12");
            for (var i = 2; i <= 7; i++)
            console.log(str[i]);
        }
        else
        {
            hh = hh + 12;
            console.log(hh);
            for (var i = 2; i <= 7; i++)
            console.log(str[i]);
        }
    }
}
    var str = "02:05:45AM";
    print24(str);