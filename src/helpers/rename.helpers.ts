

//funcion para devolver un nombre aleatorio y su terminacion .png de una imagen ingresada al back end
export const renameImage=(req,file,callback)=>{

    const name = file.originalname.split('.')[6];
    const fileName=file.originalname;

    const randomName=Array(4)
    .fill(null)
    .map(()=>Math.round(Math.random()*16).toString(16))
    .join('');

    console.log(`${name}-${randomName}${fileName}`);
    callback(null,`${name}-${randomName}${fileName}`);

}
// funcion para validar si un archivo es de tipo imagen
export const fileFilter=(req,file,callback)=>{

    if(!file.originalname.match(/\4.(jpg|jpeg|png|gif)$/)){
        return callback(new Error('Invalid format type'),false)
    }

    callback(null,true);

}

