var placeID = '20021'
var deviceID = 'C21283M571'
var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODkxNTQ1NjE3MDIwODg4MzQiLCJlbWFpbCI6ImluZm9AZ2R2aWV0bmFtLmNvbSIsImNsaWVudF9pZCI6IjdhYTllMDYzMDg0NmI4OWJhNzI3MGFjZWY5NWZkMmVhIiwidHlwZSI6ImF1dGhvcml6YXRpb25fY29kZSIsImlhdCI6MTcwNDQzMDIwNCwiZXhwIjoxNzM1OTY2MjA0fQ.9lSVPnPKrQUm4jnCAmKsGGHyUbI1UrubAfGDITZOvEM'

var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://partner.hanet.ai/person/getCheckinByPlaceIdInDay',
  'headers': {
  },
  form: {
    'token': token,
    'placeID': placeID,
    'date': '2024-01-04',
    'exType': '2,1',
    'devices': deviceID,
    'type': '0',
    'personID': '2587529458168627200',
    'page': '1',
    'size': '10'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
