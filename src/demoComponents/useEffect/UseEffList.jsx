import { useEffect, useState } from "react";
import { getInfo } from "./api";
import { getAllDrivers } from "./api copy";
import DriverCard  from "../Lists";


function PhoneCard(props) {
  const { iPhone } = props;

  return (
    <div >
      <h3>
        {iPhone.category} {iPhone.model}
      </h3>
      <p>{iPhone.finishesColor}</p>
    </div>
  );
}

function DriversList() {
  const [drivers, setDrivers] = useState([]);
  const [iPhone, setPosts] = useState([]);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    getAllDrivers().then((data) => setDrivers(data.MRData.DriverTable.Drivers));    // console.log(data);
  }, []);

  useEffect(() => {
    getInfo().then((data) => setPosts(data));
    // console.log(data);
  }, []);

  useEffect(() => {
    setSeconds(seconds + 1);
  }, [seconds]);

  const style2 = {
    // backgroundColor: 'blue',
    border: '2px solid blue'
  }

  return (
    <div style={{style2}}>
      <h1>Drivers</h1>

      <span>{seconds}</span>

      <ul>
        {drivers.map((driver) => (
          <li key={driver.driverId}>
            <DriverCard driver={driver} />
          </li>
        ))}
      </ul>

      <h1>Phones</h1>
      <ul>
        {iPhone.map((iPhone) => (
          <li key={iPhone.id}>
            <PhoneCard iPhone={iPhone} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DriversList;