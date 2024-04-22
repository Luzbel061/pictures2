import ImageShow from './ImageShow'
import './ImageList.css'

function ImageList({ images }){
    const renderImage = images.map((image) => {
       return<Imageshow key={image.id} image={image}/>
    })
    return( 
    <div className= 'image-List'>
        {renderImage}
    </div>
    )
}
export default ImageList