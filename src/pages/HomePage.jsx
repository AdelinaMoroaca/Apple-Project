// import Geolocation from '../demoComponents/Geolocation';
import { Banner } from '../demoComponents/Banner';
// import { Counter } from '../demoComponents/Counter';
import LayoutBlack from '../components/LayoutBlack';

function Homepage(){
    const newStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // gap: '12px',
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

    const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(700px, 1fr))',
        gap: '0.75rem',
        width: '100%',
    }

    return(
        <LayoutBlack>
            <div style={newStyle}>
                
                     <section style={bannerContainerStyle}>
                       {/* iPad Pro  merge la ultumul iPad*/}
                      <Banner/>
    
                       {/* shop/back-to-school*/}
                       <Banner/>
    
                    {/* iPhone ~ merge la pagina de iphone/ */}
                     <Banner/>
                </section>
    
                     <section style={gridContainerStyle}>
                       <Banner/>
                       <Banner/>
                    <Banner/>
                      <Banner/>
                        <Banner/>
                      <Banner/>
                  </section>
    
    
        
                 </div>            
        </LayoutBlack>
        
    )

}

export default Homepage;