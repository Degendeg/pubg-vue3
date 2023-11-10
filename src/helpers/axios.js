import axios from 'axios'
import config from '../../conf/index.js'

const HTTP = axios.create({
  baseURL: config.BASE_URL,
  apiKey: config.API_KEY,
  headers: {
    'accept': 'application/json'
  }
})

HTTP.interceptors.request.use(function (config) {
  if (config && config.url.includes('pubg')) {
    config.headers['Authorization'] = 'Bearer ' + config.apiKey
    return config
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

export default {
  /* GET */
  _get (_url) {
    return HTTP.get(_url)
  },
  /* POST */
  _post (_url) {
    return HTTP.post(_url, {})
  },
  postLogin (_url, _pnr, _cb) {
    return HTTP.post(_url, {
      personalId: _pnr,
      callbackUrl: _cb
    })
  },
  postRegistration (_url, _registrationData) {
    return HTTP.post(_url, {
      ssn: _registrationData.ssn,
      invitationLink: _registrationData.invitationLink
    })
  },
  postConsent (_url, _consent) {
    return HTTP.post(_url, {
      consent: _consent
    })
  },
  postToken (_url, _sessionId) {
    return HTTP.post(_url, {
      sessionID: _sessionId
    })
  },
  postTokenTest (_url, _temp) {
    return HTTP.post(_url, {
      ssn: _temp.ssn,
      givenName: _temp.givenName,
      surname: _temp.surName
    })
  },
  postInvite (_url, _accept, _invitationLink) {
    return HTTP.post(_url, {
      accept: _accept,
      invitationLink: _invitationLink
    })
  },
  postScreeningAnswer (_url, _answer, _fieldId) {
    return HTTP.post(_url, {
      'answer': _answer,
      'fieldId': _fieldId
    })
  },
  postVerify (_url, _phone, _code) {
    return HTTP.post(_url, {
      phone: _phone,
      code: _code
    })
  },
  postRelative (_url, _invites, _invmsg) {
    return HTTP.post(_url, {
      invites: _invites,
      invitationMessage: _invmsg
    })
  },
  postReferral (_url, _referral) {
    return HTTP.post(_url, {
      labId: _referral.labId,
      paperReferral: _referral.paperReferral,
      street: _referral.street,
      streetNumber: _referral.streetNumber,
      zipCode: _referral.zipCode,
      city: _referral.city
    })
  }
}
