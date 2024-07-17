
import { Card } from 'antd';
import styled from 'styled-components';

const CardCustomContainer = styled.div`
    display: flex;
    justify-content: center;
    .ant-card{
        width: 540px;
        background: rgba(34, 35, 41, 1);
        border: none;
      }
    .ant-card .ant-card-body{
        border-radius: 8px;
        padding:0px
    }
`;
interface Iprops {
  children?: React.ReactNode;
  width?: string;
}

function CardCustom(props: Iprops) {
  return (
    <CardCustomContainer>
      <Card>
        {props.children}
      </Card>
    </CardCustomContainer>
  )
}

export default CardCustom



