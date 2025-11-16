export const Profile = ({url, textoAlternativo}) => {
    //esto es para que no se muestre en el web tools un "img" vacio sino que no se muestre nada
    if (!url){
        return null;
    }
    return <img src={url} alt={textoAlternativo} />;
};