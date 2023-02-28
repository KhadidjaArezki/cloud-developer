const AWS = require('aws-sdk')
const axios = require('axios')

// Name of a service, any string
const serviceName = process.env.SERVICE_NAME
// URL of a service to test
const url = process.env.URL

// CloudWatch client
const cloudwatch = new AWS.CloudWatch();

exports.handler = async (event) => {
  let endTime
  let requestWasSuccessful

  const startTime = timeInMs()
  try {
    await axios.get(url)
    requestWasSuccessful = true
  } catch (e) {
    requestWasSuccessful = false
  } finally {
    endTime = timeInMs()
  }
  
  const totalTime = endTime - startTime

  // Example of how to write a single data point
  await cloudwatch.putMetricData({
     MetricData: [
       {
         MetricName: 'Latency',
         Dimensions: [
           {
             Name: 'ServiceName',
             Value: serviceName
           }
         ],
         Unit: 'Milliseconds',
         Value: totalTime
       },
       {
         MetricName: 'Successful',
         Dimensions: [
           {
             Name: 'ServiceName',
             Value: serviceName
           }
         ],
         Unit: 'Count',
         Value: requestWasSuccessful ? 1 : 0
       }
     ],
     Namespace: 'hadhad/Serveless'
   }).promise()
}

function timeInMs() {
  return new Date().getTime()
}
