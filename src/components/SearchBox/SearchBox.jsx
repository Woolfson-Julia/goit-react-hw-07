import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";


export default function SearchBox() {

  const dispatch = useDispatch();

  const filter = useSelector(selectNameFilter);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.container}>
      <p className={css.text}>Find contacts by name</p>
      <input type="text" value={filter} onChange={handleChange} />
    </div>
  );
}