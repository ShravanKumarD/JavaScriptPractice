function timeConversion(s) {

    if(s[8] === 'A'){
        if (s.slice(0,2) === '12') {
            return "00" + s.slice(2,8)
        }
        return s.slice(0,8)
    } else {
        let hour = Number(s.split(":")[0])
        hour = hour + (hour < 12 ? 12 : 0)
        return hour + s.slice(2,8)
    }
}
s1 = '12:00:00 AM';
timeConversion(s1)