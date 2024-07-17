import { Button } from 'antd';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  .ant-btn-primary {
    background: linear-gradient(90deg, #43BAFD 0%, #6129FF 100%);
    padding: 14px 10px !important ;
    border-radius:8px !important;
    font-size: 16px !important;
    line-height: 19px !important;
    font-weight: 500 !important;
    height: auto !important;
    font-family: inter !important;
    color: rgba(255, 255, 255, 1) !important;
    box-shadow: none !important;
    border: none  !important;
    width: 100%;
  },
  .ant-btn-primary:hover {
    background: linear-gradient(90deg, #43BAFD 0%, #6129FF 100%) !important;
    color: rgba(255, 255, 255, 1) !important;
    border-radius: 8px !important;
  }
  .ant-btn-primary:focus {
    background: linear-gradient(90deg, #43BAFD 0%, #6129FF 100%) !important;
    color: rgba(255, 255, 255, 1) !important;
    outline: none !important;
    border-radius: 8px !important;
  }
`;
interface Iprops {
  label?: string;
  width?: string;
}

function ButtonPrimary(props: Iprops) {
  return (
    <ButtonContainer>
      <Button style={{ width: props.width }} type='primary'>{props.label}</Button>
    </ButtonContainer>
  )
}

export default ButtonPrimary



