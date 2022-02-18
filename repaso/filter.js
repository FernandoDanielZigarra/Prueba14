const usuarios = [
    {
        id : 1,
        nombre : 'Alfonso',
        activo : true
    },
    {
        id : 2,
        nombre : 'Ricardo',
        activo : false
    },
    {
        id : 3,
        nombre : 'Priscila',
        activo : true
    },
    {
        id : 4,
        nombre : 'Mariela',
        activo : false
    },
    {
        id : 5,
        nombre : 'Osvaldo',
        activo : true
    },
]

usuarios.forEach(usuario => {
    return console.log(usuario.nombre, usuario.activo);
})

/*let inactivos = usuarios.filter(x => x.activo == false);

console.log(inactivos);*/