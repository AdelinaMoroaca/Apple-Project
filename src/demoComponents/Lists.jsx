const DRIVERS = [
    {
        driverId: "alonso",
        givenName: "Fernando",
        familyName: "Alonso",
        dateOfBirth: "1981-07-29",
    },
    {
        driverId: "hamilton",
        givenName: "Lewis",
        familyName: "Hamilton",
        dateOfBirth: "1985-01-07",
    },
    {
        driverId: "vettel",
        givenName: "Sebastian",
        familyName: "Vettel",
        dateOfBirth: "1987-07-03",
    },
]

function DriverCard(props) {
    const { driver } = props;
  
    return (
      <div className="driver-card">
        <h3>
          {driver.givenName} {driver.familyName}
        </h3>
        <p>{driver.dateOfBirth}</p>
      </div>
    );
}

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


export default function Lists(){
    return(
        <ol>
            {/* Conditional Rendering Solution */}

            {DRIVERS.map((driver) => (
                <DriverCard
                driver = {driver}
                // denumire din backend
                key = {driver.driverId} 
                />

                // <PhoneCard
            
                // key = {iPhone.id} 
                // />
            ))}

        
        </ol>
    )
}