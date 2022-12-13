const CityItem = (props) => {
  const item = props.item;
  return (
    <li className={item.visited ? "list-group-item active" : "list-group-item"}>
      {item.city}
    </li>
  );
};

export default CityItem;
