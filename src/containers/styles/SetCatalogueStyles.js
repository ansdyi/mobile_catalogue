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

export const CatalogueTitle = styled.Text`
    font-size: 15px;
    font-weight: bold;
    font-family: 'Lato-Regular';
    align-self: center;
    padding: 15px
`;

export const CatalogueImage = styled.Image`
    width: 100%;
    height: 250px;
`;

export const CatalogueDescription = styled.Text`
    font-size: 15px;
    font-family: 'Lato-Regular';
    padding-top: 15px;
    padding-horizontal: 10px;
`;

export const Divider = styled.Text`
    border-bottom-color: #ddd;
    border-bottom-width: 1px;
    width: 95%;
    align-self: center;
`;

export const Options = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 15px;
`;

export const PublishTime = styled.Text`
    font-size: 12px;
    font-family: 'Lato-Regular';
    align-self: flex-end;
    padding-bottom: 7px
`;

export const DeleteCatalogue = styled.TouchableOpacity`
    justify-content: center;
`;

