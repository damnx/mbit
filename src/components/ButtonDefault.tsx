import { Button } from 'antd';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  .ant-btn-default {
    background: rgba(34, 35, 41, 1);
    padding: 14px 10px !important ;
    border-radius:8px !important;
    font-size: 16px !important;
    line-height: 19px !important;
    font-weight: 500 !important;
    height: auto !important;
    font-family: inter !important;
    color: rgba(75, 159, 221, 1) !important;
    box-shadow: none !important;
    border: 1px solid rgba(75, 160, 221, 1);
    width: 100%;
  },
  .ant-btn-default:hover {
    background: rgba(34, 35, 41, 1) !important;
    color: rgba(75, 159, 221, 1) !important;
    border-radius: 8px !important;
  }
  .ant-btn-default:focus {
    background: rgba(34, 35, 41, 1) !important;
    color: rgba(75, 159, 221, 1) !important;
    outline: none !important;
    border-radius: 8px !important;
  }
`;
interface Iprops {
  label?: string;
  width?: string;
}

function ButtonDefault(props: Iprops) {
  return (
    <ButtonContainer>
      <Button style={{ width: props.width }}>{props.label}</Button>
    </ButtonContainer>
  )
}

export default ButtonDefault



