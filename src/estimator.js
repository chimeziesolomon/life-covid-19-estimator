export const impactCases = (data) => {

  const {
    periodType,
    timeToElapse,
    reportedCases,
    totalHospitalBeds,
    region
  } = data;
  const currentlyInfected = reportedCases * 10;
  const timeInDays = convertToDays(periodType, timeToElapse);
  const infectionsByRequestedTime = currentlyInfected * 2 ** parseInt(timeInDays / 3, 10);
  const severeCasesByRequestedTime = parseInt(infectionsByRequestedTime * 0.15, 10);
  const hospitalBedsAvailable = parseInt(totalHospitalBeds * 0.35, 10);
  const hospitalBedsByRequestedTime = hospitalBedsAvailable - severeCasesByRequestedTime;
  const casesForICURequestedTime = parseInt(infectionsByRequestedTime * 0.05, 10);
  const casesForVentilatorsByRequestedTime = parseInt(infectionsByRequestedTime * 0.02, 10);
  const dollarOut = region.avgDailyIncomePopulation * region.avgDailyIncomeInUSD * timeInDays;
  const toTwodecimal = dollarOut.toFixed(2);
  const dollarsInFlight = (infectionsByRequestedTime * region.avgDailyIncomeInUSD) / elapsedTimeInDays;
  return {
    currentlyInfected,
    infectionsByRequestedTime,
    severeCasesByRequestedTime,
    hospitalBedsByRequestedTime,
    casesForICURequestedTime,
    casesForVentilatorsByRequestedTime,
    toTwodecimal,
    dollarsInFlight,
    elapsedTimeInDays
  };
};
export const severeImpactCases = (data) => {
  const {
    periodType,
    timeToElapse,
    reportedCases,
    totalHospitalBeds,
    region
  } = data;
  const currentlyInfected = reportedCases * 50;
  const timeInDays = convertToDays(periodType, timeToElapse);
  const infectionsByRequestedTime = currentlyInfected * 2 ** parseInt(timeInDays / 3, 10);
  const severeCasesByRequestedTime = parseInt(infectionsByRequestedTime * 0.15, 10);
  const hospitalBedsAvailable = parseInt(totalHospitalBeds * 0.35, 10);
  const hospitalBedsByRequestedTime = hospitalBedsAvailable - severeCasesByRequestedTime;
  const casesForICURequestedTime = parseInt(infectionsByRequestedTime * 0.05, 10);
  const casesForVentilatorsByRequestedTime = parseInt(infectionsByRequestedTime * 0.02, 10);
  const dollarOut = region.avgDailyIncomePopulation * region.avgDailyIncomeInUSD * timeInDays;
  const toTwodecimal = dollarOut.toFixed(2);
  const dollarsInFlight = (infectionsByRequestedTime * region.avgDailyIncomeInUSD) / elapsedTimeInDays;
  return {
    currentlyInfected,
    infectionsByRequestedTime,
    severeCasesByRequestedTime,
    hospitalBedsByRequestedTime,
    casesForICURequestedTime,
    casesForVentilatorsByRequestedTime,
    toTwodecimal,
    dollarsInFlight,
    elapsedTimeInDays
  };
};

const convertToDays = (timeToElapse, periodType) => {
  if (periodType === days) {
    Math.trunc(2 ** (timeToElapse )/ 3);
  } else if (periodType === weeks) {
    Math.trunc(2 ** (timeToElapse * 7 )/ 3);
  } else {
    periodType = months;
    Math.trunc(2 ** (timeToElapse * 30 )/ 3);
  }
};
const [
  days,
  weeks,
  months,
  elapsedTimeInDays
]
const covid19ImpactEstimator = (data) => ({
  data,
  impact: impactCases(data),
  severeImpact: severeImpactCases(data)
});

export default covid19ImpactEstimator;
