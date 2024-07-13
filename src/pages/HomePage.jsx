// import Geolocation from '../demoComponents/Geolocation';
import { Banner } from '../demoComponents/Banner';
// import { Counter } from '../demoComponents/Counter';


function Homepage(){
    const newStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        width: '100%'
    }


    const bannerContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '0.75rem',
        width: '100%',
        marginBottom: '0.75rem'
    }

    return(
        <div style={newStyle}>
            
            <section style={bannerContainerStyle}>
                {/* iPad Pro  merge la ultumul iPad*/}
                <Banner/>

                {/* shop/back-to-school*/}
                <Banner/>

                {/* iPhone ~ merge la pagina de iphone/ */}
                <Banner/>
            </section>


  
        </div>
    )

}

export default Homepage;