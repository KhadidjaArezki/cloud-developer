// DONE: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = '3n723o68sh'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // DONE: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'fs-webdev.eu.auth0.com',            // Auth0 domain
  clientId: 'a3ob59CtHCIW3MVJsmTaGRCREwSKWcGa',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
