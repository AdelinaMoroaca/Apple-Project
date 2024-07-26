import React from 'react';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';


function StoreCard(props) {
  const { src, giftValue, title, fullPrice, monthlyPrice } = props;

  return (
    // <Card style={{ width: '25rem' }}>
    //   {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
    //   <Card.Body>
    //     <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    //         <Card.Text>GET A $150 GIFT CARD</Card.Text>
    //         <Spinner animation="grow" variant="warning" />
    //     </div>
    //     <Card.Title>MacBook Air</Card.Title>
    //     <Card.Text>
    //     From $899 or $74.91/mo.per month for 12 mo.monthsFootnote† with education savings
    //     </Card.Text>
    //     <Card.Img variant="top" src="images/StorePage/store-card.JPG" />
    //   </Card.Body>
    // </Card>

    <Card style={{ 
        width: '25rem',
        minWidth: '19rem',
        position: 'relative', 
        overflow: 'hidden', 
        padding: '0rem',
        }}>
      <Card.Img 
        // variant="top" 
        src={src} 
        style={{ 
            height: '500px', 
            width: '400px', 
            objectFit: 'cover',
            // margin: '0px', 
          }}
      />
      <Card.Body style={{ padding:'0rem' }}>
        <div style={{ 
            position: 'absolute', 
            top: '20px', 
            left: '20px', 
            // backgroundColor: 'rgba(299, 299, 0, 0.1)', 
            color: '#b64400',
            padding: '10px', 
            borderRadius: '5px',
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '90%',
            // height: 'auto',
          }}

        >
          <h3 style={{fontSize:'12px', margin: '0',paddingRight: '10px' }}>GET A {giftValue} GIFT CARD</h3>

          <Spinner style={{ width: '1rem', height: '1rem' }} animation="grow" variant="success" />
        </div>

        <Card.Title style={{ paddingTop: '0px',
            fontSize:'28px',
            position: 'absolute', 
            top: '55px', 
            left: '20px',
            textAlign: 'left', 
            // color: 'black', 
            // backgroundColor: 'rgba(0, 0, 0, 0.1)', 
            padding: '6px 0px 0px 10px', 
            borderRadius: '5px',
            // display: 'flex', 
            // justifyContent: 'flex-start',
            width: '90%'
         }}>{title}</Card.Title>


        <Card.Text style={{ paddingTop: '50px',
            position: 'absolute', 
            fontSize:'16px',
            textAlign: 'left', 
            top: '100px', 
            left: '20px', 
            // color: 'black', 
            // backgroundColor: 'rgba(0, 0, 0, 0.1)', 
            padding: '10px', 
            borderRadius: '5px',
            display: 'flex', 
            // justifyContent: 'space-between',
            width: '90%'
        }}>
          From {fullPrice} or {monthlyPrice} for 12 months with education savings
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default StoreCard;