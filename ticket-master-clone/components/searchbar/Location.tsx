import { searchBarType } from '@/types';
import Select from "react-select";
import styles from "@/app/utils.module.css"
import useGlobalContext from '@/lib/useGlobalContext';

export default function Location(
  { setSearchData }:
    { setSearchData: React.Dispatch<React.SetStateAction<searchBarType>> }
) {

  const { selectCountry } = useGlobalContext();
  const countryOptions = selectCountry.map((country: any) => ({
    label: country.name,
    options: country.states.map((state: any) => ({
      value: state.code,
      label: `${state.name}, ${state.code}`,
    })),
  }));

  return (
    <>
      {/* <select title="location" name="location" defaultValue={"New York"} className={styles.cursor_pointer}
          onChange={(e) => setSearchData((prev) => ({ ...prev, location: e.target.value }))}>
          {selectCountry.map(country => (
            <optgroup key={country.code} label={country.name}
              className='mt-2'>
              {country.states.map((state: any) => (
                <option key={state.code} value={state.code}>{state.name}, {state.code}</option>
              ))}
            </optgroup>
          ))}
        </select> */}

      <Select
        name="location"
        defaultValue={{ value: "NY", label: "New York, NY" }}
        className={`${styles.cursor_pointer} ${styles.width_200} ${styles.select_input} text-start `}
        options={countryOptions}
        onChange={(selectedOption) => setSearchData((prev) => ({ ...prev, location: selectedOption?.value || prev.location }))}
        isSearchable
      />
    </>
  )
}
