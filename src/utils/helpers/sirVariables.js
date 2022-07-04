import apiHeaders from 'variables/apiHeaders'
import apiUrls from 'variables/apiUrls'
import appUrls from 'variables/appUrls'
import cookies from 'variables/cookies'
import urlParameters from 'variables/urlParameters'

import appConstants from 'constants/app'
import colorsConstants from 'constants/colors'

function getApiHeaders(name) {
  return apiHeaders[name] || undefined
}

function getApiUrl(name) {
  return apiUrls[name] || undefined
}

function getAppUrl(name) {
  return appUrls[name] || undefined
}

function getCookieName(name) {
  return cookies[name] || undefined
}

function getParameterName(name) {
  return urlParameters[name] || undefined
}

function getAppInformation(name) {
  return appConstants[name] || undefined
}

function getAppColors(name) {
  const split = name.split('.')
  return colorsConstants[split[0]][split[1]] || undefined
}

export {
  getApiHeaders,
  getApiUrl,
  getAppUrl,
  getCookieName,
  getParameterName,
  getAppInformation,
  getAppColors
}
