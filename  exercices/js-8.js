
 function rev(str) {
     if (str.length === 0) {
         return ''
     }
     return str[str.length-1] + rev(str.substring(0, str.length-1))
 }

 console.log(rev('abcd'))
//تابعی است که کارکترهای یک استیرینگ را معکوس می کند
