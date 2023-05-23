import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 24px;
  border-radius: 4px;
  background-color: #99CCFF;;
  border: none;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.62;
  text-align: center;
  letter-spacing: 0.03em;
  border: 1px solid #96AF8C;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    font-size: 18px;
    width: 75px;
    height: 27px;
   box-shadow: 0px 5.26027px 19.726px rgba(0, 0, 0, 0.25);
  }
`;

export const Item = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.62;
  text-align: center;
  letter-spacing: 0.03em;
`;
