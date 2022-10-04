const getFormattedDate = (date) => {
    let yyyy = date.getFullYear()
    let mm = date.getMonth() + 1
    mm = mm < 10 ? `0${mm}` : mm 
    let dd = date.getDate()
    dd = dd < 10 ? `0${dd}` : dd 
    return `${yyyy}${mm}${dd}`
}

const getHumanReadableDate = (date) => {
    let month = date.slice(4, 6);
    switch (month) {
        case '01': month = 'Jan'; break;
        case '02': month = 'Feb'; break;
        case '03': month = 'Mar'; break;
        case '04': month = 'Apr'; break;
        case '05': month = 'May'; break;
        case '06': month = 'Jun'; break;
        case '07': month = 'Jul'; break;
        case '08': month = 'Aug'; break;
        case '09': month = 'Sep'; break;
        case '10': month = 'Oct'; break;
        case '11': month = 'Nov'; break;
        case '12': month = 'Dec'; break;
        default: break;
    }
    return `${month} ${date.slice(6, 8)}`
}

const getHumanReadableTime = (time) => {
    let hour = parseInt(time.slice(0, 2))
    let min = time.slice(2)
    let ampm
    if (hour < 13) {
        ampm = 'AM'
        if (hour === 0) hour = 12
    }
    else {
        ampm = 'PM'
        hour -= 12
    }
    return `${hour}:${min} ${ampm}`
}

const getSymbol = (nature) => {
    switch (nature) {
      case 'credit':
        return '+'
      case 'debit':
        return '-'
      case 'nuetral':
        return ''
      default:
        return ''
    }
  }

export {
    getFormattedDate,
    getHumanReadableDate,
    getHumanReadableTime,
    getSymbol
}