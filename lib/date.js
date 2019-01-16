const HOUR_DURATION = 60 * 60

export const timestamp = (date = Date.now()) => Math.floor(date / 1000)

export const timeSlice = ts => {
  const interval = Math.floor((timestamp() - ts) / HOUR_DURATION)

  if (interval < 1) {
    return 'less than an hour ago'
  } else if (interval === 1) {
    return 'an hour ago'
  } else {
    return `${interval} hours ago`
  }
}