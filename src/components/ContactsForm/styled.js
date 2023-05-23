import styled from 'styled-components';

export const Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 52px;
  line-height: 1.62;
  text-align: center;
`;

export const Form = styled.form`
height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: flex;
  align-items: flex-start;
  justify-content: center;
   flex-direction: column;
`;

export const Text = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.62;
  text-align: center;
  letter-spacing: 0.03em;
`;

export const Input = styled.input`
  width: 250px;
  height: 30px;
  margin-bottom: 15px;
  border: 1px solid #96AF8C;
  border-radius: 6px;
  box-shadow: 0px 5.26027px 19.726px rgba(0, 0, 0, 0.25);
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 30px;
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
    width: 151px;
    height: 31px;
   box-shadow: 0px 5.26027px 19.726px rgba(0, 0, 0, 0.25);
  }
`;