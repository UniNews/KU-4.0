var moment = require('moment');

var monthNamesThai = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.',
    'ก.ค.', 'ส.ค.', ' ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.']

export function convertTimestamptoDate(timestamp) {
    const moments = new moment(timestamp)
    if (moments.isSame(new Date(), 'day')) {
        return moments.startOf('hour').fromNow()
    } else {
        return moments.calendar(null, {
            lastDay: '[เมื่อวาน] HH:mm น.',
            sameElse: 'DD ' + monthNamesThai[moments.month()] + ' YYYY | HH:mm น.'
        })
    }
}