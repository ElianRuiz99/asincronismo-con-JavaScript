//promesa normal
const somethingWillHappen = () => {
    return new Promise((resolve, reject) =>{
        if(true){ //false or true
            resolve('Hey!');
        }else{
            reject('Whooops!');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

//manejo de un error de manera mas adecuada
const somethingWillHappen2 = ()=>{
    return new Promise((resolve, reject) =>{
        if(true){ //false 
            setTimeout(()=>{
                resolve('True');
            }, 2000);
        }else{
            const error = new Error('Whops!'); //nos ayuda a solucionar un error
            reject(error);
        }
    });
};

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err=> console.error(err));

//ejecutar varias promesas
Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Array of results ', response)
    })
    .catch(err =>{
        console.error(err)
    });
