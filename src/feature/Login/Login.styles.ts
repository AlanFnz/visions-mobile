import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  padding: 8px;
  background-color: #111111;
`;

export const FormContainer = styled.View`
  align-items: flex-start;
  width: 80%;
`;

export const Label = styled.Text`
  color: white;
  margin: 20px;
  margin-left: 0;
  margin-bottom: 5px;
`;

export const ErrorText = styled.Text`
  color: red;
`;

export const BottomText = styled.Text`
  color: white;
  margin-top: 15px;
`;

export const StyledButton = styled.View`
  margin-top: 40px;
  height: 40px;
  background-color: #fffffe;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;
