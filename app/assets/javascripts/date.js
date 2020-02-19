var moment = require('moment');

var monthNamesThai = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
    "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤษจิกายน", "ธันวาคม"];

var dayNames = ["วันอาทิตย์ที่", "วันจันทร์ที่", "วันอังคารที่", "วันพุทธที่", "วันพฤหัสบดีที่", "วันศุกร์ที่", "วันเสาร์ที่"];

export function convertTimestamptoDate(timestamp) {
    const date = new Date(timestamp)
    const moments = new moment(timestamp)
    if(moments.isSame(new Date(),'day')){
        return moments.startOf('hour').fromNow()
    } else {
        return moments.calendar(null, {
            lastDay: '[เมื่อวาน] HH:mm',
            sameElse: 'DD MMMM YYYY HH:mm'
        })
    }
}