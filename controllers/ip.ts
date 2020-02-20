import { APIGatewayProxyHandler } from 'aws-lambda'
import { run } from '../utils'

export const ip : APIGatewayProxyHandler = run(async (event, _context) => { // eslint-disable-line @typescript-eslint/require-await
  return {
    statusCode: 200,
    body: event.requestContext.identity.sourceIp
  }
})
