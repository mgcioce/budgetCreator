/**
 * file: sheetsInterface.js
 * Date: 2/28/21
 * Author: Mike Cioce
 * Purpose: This script provides abstraction methods for reading and writing to a google sheet
 */

import parser from parse.js

var BASE_URL = 'https://sheets.googleapis.com/v4/spreadsheets/';
var FUNCTIONS = {
  'spreadsheets.values.get':'{spreadsheetId}/values/{range}'
};
var SHEET_ID = '{spreadsheetId}';
var RANGE = '{range}';

function readValues(sheetId,cellRange) {
  var url = BASE_URL + FUNCTIONS['spreadsheets.values.get'];
  parser.replace(url,SHEET_ID,sheetId);
  parser.replace(url,RANGE,cellRange);
  fetch(url).then(success => {
    console.log(success.json());
  },failure => {
    console.error('error reading from' + url);
  });
}

readValues('1HUkJs5FKe_Lwv3zHf_lZyrZtjx4RT0JrdWFpDb8EdR4','H2');