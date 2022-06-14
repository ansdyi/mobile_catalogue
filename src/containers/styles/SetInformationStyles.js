import styled from 'styled-components'

export const Container = styled.View`
    flex: 1;
    background-color: #2e64e515
`;

export const CardWrapper = styled.View`
    padding-horizontal: 10px;
`;

export const Card = styled.View`
    background-color: #fff; 
    width: 100%;
    border-radius: 10px;
    margin-top: 10px
`;
export const Options = styled.View`
    align-self: flex-end;
    padding: 15px;
`;

export const Delete = styled.TouchableOpacity`
    justify-content: center;
`;

export const Information = styled.Text`
    font-size: 15px;
    font-family: 'Lato-Regular';
    padding-bottom: 20px;
    padding-horizontal: 10px;
`;

export const NoData = styled.Text`
    font-size: 15px;
    font-family: 'Lato-Regular';
    padding-bottom: 20px;
    padding-horizontal: 10px;
    align-self: center;
`;