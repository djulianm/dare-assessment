'use strict'

const BaseExceptionHandler = use('BaseExceptionHandler')

class ExceptionHandler extends BaseExceptionHandler {
  async handle (error, { request, response }) {

    if (error.name === 'HttpException') {
      return response.status(error.status).send({error: 'Invalid route.'})

    } else if (error.name === 'PasswordMisMatchException') {
      return response.status(error.status).send({error: 'Invalid credentials.'})

    } else if (error.name === 'InvalidJwtToken') {
      return response.status(error.status).send({error: 'Invalid token.'})
    }

    return response.status(error.status).send({error: `${error.message}`})
  }

  async report (error, { request }) {
  }
}

module.exports = ExceptionHandler