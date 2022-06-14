import styled from 'styled-components'

export const Container = styled.ScrollView`
    flex: 1;
    background-color: #2e64e515
`;

export const InputWrapper = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const InputInformation = styled.TextInput`
    justify-content: center;
    align-items: center;
    font-size: 20px;
    text-align: center;
    width: 90%;
    margin-bottom: 20px;
`;

export const SubmitButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    background-color: #2e64e515;
    border-radius: 5px;
    padding: 10px 25px;
    margin-bottom: 20px
`;

export const SubmitButtonText = styled.Text`
    font-size: 18px;
    font-family: 'Lato-Bold';
    font-weight: bold;
    color: #2e64e5;
`;