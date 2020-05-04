import moment from 'moment'
import localization from 'moment/locale/th'
moment.updateLocale('th', localization)

export function convertTimestamptoDate(timestamp) {
    const moments = new moment(timestamp)
    if (moments.isSame(new Date(), 'day')) {
        return moments.fromNow()
    } else {
        return moments.format('lll')
    }
}