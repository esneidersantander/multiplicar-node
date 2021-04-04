const {argv} = require('./config/yargs')
const colors = require('colors');
                    
const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => {
                console.log(`Archivo creardo: ${archivo.green}`);
            })
        break;
        
    default:
        console.log('comando no reconocido');
        
}
/* let parametro = argv[2];
let base = parametro.split('=')[1]; */

