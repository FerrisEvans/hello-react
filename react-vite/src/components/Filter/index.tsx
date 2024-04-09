import './index.css'
import {BaseSyntheticEvent} from "react";

interface FilterProps {
  year: number
  changeYear: (year: number) => void
}
const Filter = ({year, changeYear} : FilterProps) => {
  const change = (event: BaseSyntheticEvent) => {
    changeYear(event.target.value)
  }
  return (
    <div className='logFilter'>
      Year:
      <select onChange={change} value={year}>
        <option value={2024}>2024</option>
        <option value={2023}>2023</option>
        <option value={2022}>2022</option>
        <option value={2021}>2021</option>
      </select>
    </div>
  );
};

export default Filter;