import styled from 'styled-components'

export const Container = styled.View`
    flex: 1;
    background-color: #2e64e515
`;

export const ContainerScroll = styled.ScrollView`
    flex: 1;
`;

export const InputWrapper = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const AddImage = styled.Image`
    width: 100%;
    height: 250px;
    margin-bottom: 15px;
`;

export const InputDescription = styled.TextInput`
    justify-content: center;
    align-items: center;
    font-size: 20px;
    text-align: center;
    width: 90%;
    margin-bottom: 20px;
`;

export const StatusWrapper = styled.View`
    justify-content: center;
    align-items: center;
    margin-bottom: 40px
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