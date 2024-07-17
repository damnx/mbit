

import styled from 'styled-components';

const TextFooterContainer = styled.div`
.text-footer{
    width: 297px;
    color: rgba(160, 160, 160, 1);
    display: inline-block;
    line-height: 18px;
    font-size: 12px;
    font-weight: 400;
  }
    .text-footer a{
     color: rgba(255, 255, 255, 1);
    }
`;

function TextFooter() {
  return (
    <TextFooterContainer>
      <p className='text-footer'>By clicking "<a target="_blank" rel="noopener noreferrer">Create</a>” or “<a target="_blank" rel="noopener noreferrer">Import</a>”, you agree to our <a target="_blank" rel="noopener noreferrer">Terms of Service</a> and <a target="_blank" rel="noopener noreferrer">Privacy Policy</a>.</p>
    </TextFooterContainer>
  )
}

export default TextFooter

