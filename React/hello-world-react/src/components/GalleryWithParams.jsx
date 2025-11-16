//vamos a importar el elemento de Profile 
//no pasa nada que tenga el JSX o no 
import {Profile} from "./ProfileWithParams.jsx";

const Datos = [
    {
        URL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres.cloudinary.com%2Fdk-find-out%2Fimage%2Fupload%2Fq_80%2Cw_1920%2Cf_auto%2FA-Getty-148277064_oysal9.jpg&f=1&nofb=1&ipt=4997d444ee1ff7d74cb6f5919b60ad6831e5bcb3b66ec5f8a850aebd659d062c",
        ALT: "Leonardo Da Vinci"
    }
]


//generamos el componente galleria con la H1 y además hace uso del perfil 
const Gallery = () => {
    return(
        <section>
            <h1>Científicos importantes</h1>
            <Profile
            url={
                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres.cloudinary.com%2Fdk-find-out%2Fimage%2Fupload%2Fq_80%2Cw_1920%2Cf_auto%2FA-Getty-148277064_oysal9.jpg&f=1&nofb=1&ipt=4997d444ee1ff7d74cb6f5919b60ad6831e5bcb3b66ec5f8a850aebd659d062c"
            }
            textoAlternativo={"Leonardo Da Vinci"}
            />
            <hr />
            {Datos.map((dato) => (
                <Profile
                    key={dato.URL}
                    url={dato.URL}
                    textoAlternativo={dato.ALT}
                />
            ))}
        </section>
    );
};
//Cuando nosotros hacemos un mapeo a una lista de componentes hay que pasarle una propiedad que se llama key para poder hacer la diferencia más rapidamente
//each child has to have a "key" propierty
//al final lo exportamos para ya usarlo en la app 
export default Gallery;
