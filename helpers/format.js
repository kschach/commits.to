import _ from 'lodash'
import moment from 'moment-timezone'
import Handlebars from 'handlebars'

Handlebars.registerHelper('prettyDate', function(date) {
  if (!date) return ''
  const pDate = moment(date).format('YYYY-MM-DD HH:mm:ss ddd (UTCZZ)')
  // console.log('prettyDate', date, pDate)
  return pDate
})

Handlebars.registerHelper('relativeDate', function(date) {
  if (!date) return ''
  const pDate = moment(date).fromNow()
  // console.log('relativeDate', date, pDate)
  return pDate
})

Handlebars.registerHelper('prettyPercent', function(number, digits) {
  if (!number) {
    return ''
  } else if (number === 1) {
    return '100%'
  }

  const places = Number.isInteger(digits) ? digits : 3
  // console.log('prettyPercent', number, digits)
  return `${_.floor(number * 100, places)}%`
})

Handlebars.registerHelper('prettyCredit', function(credit) {
  if (!credit) return '' // '∞' is cooler!
  return Handlebars.helpers.prettyPercent(credit)
})

Handlebars.registerHelper('completeCredit', function(credit) {
  if (!credit) return '100%'
  return Handlebars.helpers.prettyPercent(credit, 1)
})
