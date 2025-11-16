//vamos a importar el elemento de Profile 
import {Profile} from "./Profile";


//generamos el componente galleria con la H1 y además hace uso del perfil 
const Gallery = () => {
    return(
        <section>
            <h1>Científicos importantes</h1>
            <Profile />
        </section>
    );
};

//al final lo exportamos para ya usarlo en la app 
export default Gallery;