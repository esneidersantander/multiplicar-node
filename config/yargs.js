const opts = {
    base:{
        demand:true,
        alias:'b'
    },
    limite:{
        alis:'l',
        default:10
    }
}

const argv = require('yargs')
                    .command('listar', 'Inprime en consola la tabla de multiplicar',opts)
                    .command('crear', 'Genera un archivo con la tabla de multiplicar',opts)
                    .help()
                    .argv;

module.exports = {
    argv
}