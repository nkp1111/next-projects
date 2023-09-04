
export default async function getCountryData() {
  const countryDataUrl = "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates.json"
  const res = await fetch(countryDataUrl);
  const data = await res.json();
  const formattedData = data.map((country: any) => ({
    name: country.name,
    code: country.iso2,
    states: country.states.map((state: any) => ({
      name: state.name,
      code: state.state_code
    }))
  }));
  return formattedData;
}
