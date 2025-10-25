async function obtenArtista() {
    const URL= "https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb";
    
    const args = {
        method: "GET",
        headers: {
            Authorization: "Bearer BQBrkpYyOwBVUf2M4BT3-ZSd0eSACJejFG3QPBpymUkibpcEdTtRpL0_L_SyZ_YryaiGDkIhsn5vSIjO35spNykuQgkaFRY1BUu43mqON16UYeaf6DcYmb-sVsdH30cEduc9UjrvXwU",
        },
    };

    //Le ponemos await y marca error entonces tenemos que hacer nuestra funcion una asincrona con ASYNC
    const response = await fetch(URL,args);
    console.log(response);
    const data = await response.json();
    console.log(data);
}