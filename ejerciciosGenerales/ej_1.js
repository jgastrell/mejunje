// convertir amigosArray en amigosObject

const amigosArray = [['braian', 'm', '20/06/1985', 'boca'], ['julio', 'm', '30/11/1993', 'boca'], ['arturo', 'm', '02/02/1991', 'boca']];
// nombre, sexo, fecha nacimiento, club de futbol
const amigosObject = {
  'braian': {
    sexo: 'm',
    fecha_nacimiento: '20/06/1985',
    club: 'boca',
  },
  'julio': {
    sexo: 'm',
    fecha_nacimiento: '30/11/1993',
    club: 'boca',
  },
  'arturo': {
    sexo: 'm',
    fecha_nacimiento: '02/02/1991',
    club: 'boca',
  },
}

const res = amigosArray.reduce((acc,currentValue,index,arrayEntero) => {
  const nombre = currentValue[0];
  const sexo = currentValue[1];
  const fecha_nacimiento = currentValue[2];
  const club = currentValue[3];
  acc[nombre] = {
    sexo,
    fecha_nacimiento,
    club,
  };
  return acc;
}, {});


console.log(res)