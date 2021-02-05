import styled from 'styled-components';

const InputStyled= styled.input`
  box-sizing: border-box;
  padding-left: 10px;
  color: #000;
  width: 100%;
  max-width: 684px;
  height: 54px;
  font-size: ${props=> props.theme.fonts[1]};
  border: 1px solid ${props => props.disabled ? 'red' : props.theme.colors.blue};
  border-radius: 3px;
`;
function Input({placeholder, handleChange}){
    return(
        <InputStyled
            type='text'
            placeholder={placeholder}
            onChange={handleChange}
        />
    )
}
export default Input;