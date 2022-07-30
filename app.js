// https://calculator.swiftutors.com/degree-of-operating-leverage-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const degreeofOperatingLeverageRadio = document.getElementById('degreeofOperatingLeverageRadio');
const percentChangeinEBITRadio = document.getElementById('percentChangeinEBITRadio');
const percentChangeinSalesRadio = document.getElementById('percentChangeinSalesRadio');

let degreeofOperatingLeverage;
let percentChangeinEBIT = v1;
let percentChangeinSales = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

degreeofOperatingLeverageRadio.addEventListener('click', function() {
  variable1.textContent = 'Percent Change in EBIT';
  variable2.textContent = 'Percent Change in Sales';
  percentChangeinEBIT = v1;
  percentChangeinSales = v2;
  result.textContent = '';
});

percentChangeinEBITRadio.addEventListener('click', function() {
  variable1.textContent = 'Degree of Operating Leverage';
  variable2.textContent = 'Percent Change in Sales';
  degreeofOperatingLeverage = v1;
  percentChangeinSales = v2;
  result.textContent = '';
});

percentChangeinSalesRadio.addEventListener('click', function() {
  variable1.textContent = 'Degree of Operating Leverage';
  variable2.textContent = 'Percent Change in EBIT';
  degreeofOperatingLeverage = v1;
  percentChangeinEBIT = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(degreeofOperatingLeverageRadio.checked)
    result.textContent = `Degree of Operating Leverage = ${computeDegreeofOperatingLeverage().toFixed(2)} %`;

  else if(percentChangeinEBITRadio.checked)
    result.textContent = `Percent Change in EBIT = ${computePercentChangeinEBIT().toFixed(2)}`;

  else if(percentChangeinSalesRadio.checked)
    result.textContent = `Percent Change in Sales = ${computePercentChangeinSales().toFixed(2)}`;
})

// calculation

function computeDegreeofOperatingLeverage() {
  return (Number(percentChangeinEBIT.value) / Number(percentChangeinSales.value)) * 100;
}

function computePercentChangeinEBIT() {
  return (Number(degreeofOperatingLeverage.value) / 100) * Number(percentChangeinSales.value);
}

function computePercentChangeinSales() {
  return Number(percentChangeinEBIT.value) / (Number(degreeofOperatingLeverage.value) / 100);
}