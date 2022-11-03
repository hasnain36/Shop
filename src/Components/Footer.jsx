import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { BsFillPhoneFill} from "react-icons/bs";

 function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                Useful links
              </h6>
              <p>
                <a href='#!' className='text-reset'>
                  Contact us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help & About us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Shipping & Returns
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Refund Policy
                </a>
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Customer service</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Oders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Downloads
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Addresses
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Account Details
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 Logout
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 Lost password 
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Delivery</h6>
              <p>
                <a href='#!' className='text-reset'>
                  How it Works
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Free Delivery
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  FAQ
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Payment methods
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Delivery areas
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact Us</h6>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /><BsFillPhoneFill/>  +61 (0) 383 766 284
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> noreply@envato.com
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;