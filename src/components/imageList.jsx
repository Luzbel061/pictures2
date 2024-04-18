import ImageShow from './imageShow'
function ImageList({ images }){
    const renderImage = images.map((image) => {
       return<Imashow key={image.id} image={image}/>
    })
    return( 
    <div>
        <h1>Imagenes: </h1>
    </div>
    )
}
export default ImageList