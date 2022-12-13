import CityItem from "./CityItem";

const CityList = (props) => {
  const arr = props.cities;
  const cities = arr.map((item, index) => {
    return (
      // 반복문은 key 가 필요하며, unique 값이어야 한다.
      <CityItem item={item} key={item.id} />
    );
  });
  return <ul className="list-group">{cities}</ul>;
};

export default CityList;
