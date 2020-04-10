
export const impactCases = (data) => {
  const {
    periodType,
    timeToElapse,
    reportedCases,
    totalHospitalBeds,
    region
  } = data;
  const currentlyInfected = reportedCases * 10;
  // eslint-disable-next-line no-undef
  const timeInDays = convertToDays(periodType, timeToElapse);
  const infectionsByRequestedTime = currentlyInfected * 2 ** parseInt(timeInDays / 3, 10);
  const severeCasesByRequestedTime = parseInt(infectionsByRequestedTime * 0.15, 10);
  const hospitalBedsAvailable = parseInt(totalHospitalBeds * 0.35, 10);
  const hospitalBedsByRequestedTime = hospitalBedsAvailable - severeCasesByRequestedTime;
  const casesForICURequestedTime = parseInt(infectionsByRequestedTime * 0.05, 10);
  const casesForVentilatorsByRequestedTime = parseInt(infectionsByRequestedTime * 0.02, 10);
  const dollarOut = region.avgDailyIncomePopulation * region.avgDailyIncomeInUSD * timeInDays;
  const toTwodecimal = dollarOut.toFixed(2);
  const dollarsInFlight = Number(toTwodecimal);

  return {
    currentlyInfected,
    infectionsByRequestedTime,
    severeCasesByRequestedTime,
    hospitalBedsByRequestedTime,
    casesForICURequestedTime,
    casesForVentilatorsByRequestedTime,
    dollarsInFlight
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

  // eslint-disable-next-line no-undef
  const timeInDays = convertToDays(periodType, timeToElapse);
  const infectionsByRequestedTime = currentlyInfected * 2 ** parseInt(timeInDays / 3, 10);
  const severeCasesByRequestedTime = parseInt(infectionsByRequestedTime * 0.15, 10);
  const hospitalBedsAvailable = parseInt(totalHospitalBeds * 0.35, 10);
  const hospitalBedsByRequestedTime = hospitalBedsAvailable - severeCasesByRequestedTime;
  const casesForICURequestedTime = parseInt(infectionsByRequestedTime * 0.05, 10);
  const casesForVentilatorsByRequestedTime = parseInt(infectionsByRequestedTime * 0.02, 10);
  const dollarOut = region.avgDailyIncomePopulation * region.avgDailyIncomeInUSD * timeInDays;
  const toTwodecimal = dollarOut.toFixed(2);
  const dollarsInFlight = Number(toTwodecimal);


  return {
    currentlyInfected,
    infectionsByRequestedTime,
    severeCasesByRequestedTime,
    hospitalBedsByRequestedTime,
    casesForICURequestedTime,
    casesForVentilatorsByRequestedTime,
    dollarsInFlight
  };
};


const covid19ImpactEstimator = (data) => ({
  data,
  impact: impactCases(data),
  severeImpact: severeImpactCases(data)
});

export default covid19ImpactEstimator;
