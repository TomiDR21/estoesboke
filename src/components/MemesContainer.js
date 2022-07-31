import images from "./imagenes";
import TagButton from "./TagButton";
import { useEffect, useState } from "react";


function MemesContainer() {
    
    const [tag, setTag] = useState('');
    const [filteredImages, setFilteredImages] = useState([]);
    useEffect( () =>{
      tag == 'todos' ? setFilteredImages(images) : setFilteredImages(images.filter (image=>image.tag == tag))
    }, [tag])

    return (
      <div>
        
      <div className="App" handleSetTag={setTag}>
        

        <div className="tags">
            <TagButton name="inicio" handleSetTag={setTag} tagActive={ tag == 'inicio' ? true : false}/>
            <TagButton name="todos" handleSetTag={setTag} tagActive={ tag == 'todos' ? true : false}/>
            <TagButton name="de series / peliculas / tv" id="serie" handleSetTag={setTag} tagActive={ tag == 'de series / peliculas / tv' ? true : false} />
            <TagButton name="de otros memes" handleSetTag={setTag} tagActive={ tag == 'de otros memes' ? true : false} />
            <TagButton name="simios" handleSetTag={setTag} tagActive={ tag == 'simios' ? true : false} />
            <TagButton name="boke religioso / artístico" handleSetTag={setTag} tagActive={ tag == 'boke religioso / artístico' ? true : false} />
            <TagButton name="hoy juega boca (pure boke)" handleSetTag={setTag} tagActive={ tag == 'hoy juega boca (pure boke)' ? true : false} />
            <TagButton name="otros" handleSetTag={setTag} tagActive={ tag == 'otros' ? true : false} />
        </div>

        <div className="container-img">
        {
          filteredImages.map(image => 
            <div key={image.id} className="image-card">
              <img className="image"src={`/imagenes/${image.imageName}`} alt=""/>
            </div>
          )
        }
        </div>
      </div>
      </div>)
}

export default MemesContainer