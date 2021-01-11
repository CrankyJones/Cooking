function galToLtr(){
  const galMeasurement = parseFloat(prompt("How many gallons?"));
  const result = galMeasurement * 3.785;
  return result;
}

function ltrToGal(){
  const ltrMeasurement = parseFloat(prompt("How many liters?"));
  const result = ltrMeasurement / 3.785;
  return result; 
}

function galToCup(){
  const galMeasurement = parseFloat(prompt("How many cups?"));
  const result = galMeasurement * 16;
  return result;
}

