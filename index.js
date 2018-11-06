class Driver {
  constructor(name, string) {
    this.name = name;
    this.startDate = new Date(string);
  };

  yearsExperienceFromBeginningOf(year) {
    let endDate = new Date(year, 0, 1);
    let totalYears = (endDate - this.startDate) / (365 * 24 * 60 * 60 * 1000);
    return parseInt(totalYears);
  }
}
