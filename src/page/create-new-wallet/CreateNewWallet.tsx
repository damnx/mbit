
import styled, { keyframes } from 'styled-components';
import CardCustom from '../../components/CardCustom';
import ButtonPrimary from '../../components/ButtonPrimary';
import ButtonDefault from '../../components/ButtonDefault';
import TextFooter from './components/TextFooter';
import { Carousel, Image } from 'antd';
import image37 from '../../assets/37.png'
import image38 from '../../assets/38.png'
import image40 from '../../assets/40.png'
import image49 from '../../assets/49.png'
// import { LazyLoadImage } from 'react-lazy-load-image-component';

// Tạo animation bằng keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const CreateNewWalletContainer = styled.div`
     animation: ${fadeIn} 1s ease-in-out;

   .slick-slider{
    margin-bottom:50px;
    }
  
   .ant-carousel .slick-dots-bottom{
    bottom: -35px;
   }
   .slick-dots .slick-active button {
    width: 30px;
    height: 6px;
    border-radius: 3px;
    background: linear-gradient(95.38deg, #019CFF 4.13%, #01C5FF 99.6%) !important;
    }
    .slick-dots li button {
      width: 6px;
      height: 6px;
      background: rgba(255, 255, 255, 1);
    }
    .slick-dots li {
        width: auto !important;
        height: auto !important;
      }
    .carousel-div-text{
      font-size: 24px;
      font-weight: 400;
      line-height: 28px;
      text-align: center;
      color: rgba(255, 255, 255, 1);
      width: 335px;
      display:inline-block;
      margin-top: 20px;
      font-family: Karla;
    }
      .ant-image{
        width: 309px;
        height: 309px;
        display: inline-flex !important;
        justify-content: center;
        align-items: center;
        }
`;

function CreateNewWallet() {
  return (
    <CreateNewWalletContainer>
      <CardCustom
        children={<div style={{ padding: '37px 0px' }}>
          <Carousel autoplaySpeed={2000} draggable={true} waitForAnimate={true} className=''>
            <div className='carousel-div'>
              <Image
                src={image37} // use normal <img> attributes as props
                preview={false}
              />
              <div className='carousel-div-text'>Keep a track of your money and explore the world of Web3.</div>
            </div>
            <div className='carousel-div'>
              <Image
                src={image38} // use normal <img> attributes as props
                preview={false}
              />
              <div className='carousel-div-text'>Enjoy a smooth mobile app and desktop experience.</div>
            </div>
            <div className='carousel-div'>
              <Image
                src={image40} // use normal <img> attributes as props
                preview={false}
              />
              <div style={{ width: "471px" }} className='carousel-div-text'>Consensus protocol delivers unparalleled speed, security, and reliability. </div>
            </div>
            <div className='carousel-div'>
              <Image
                src={image49} // use normal <img> attributes as props
                preview={false}
              />
              <div style={{ width: "385px" }} className='carousel-div-text'>Enjoy almost instant transactions and extremely low fees.</div>

            </div>
          </Carousel>
          <ButtonPrimary
            label='Create New Wallet'
            width='310px'
          />
          <br />
          <ButtonDefault
            label='Import Wallet'
            width='310px'
          />
          <TextFooter />
        </div>}
      />
    </CreateNewWalletContainer>
  )
}

export default CreateNewWallet



