$('.chart').segbar([
    {/*Formulario 1*/
        data: [
            { title: '16_Evacuate', value: 1 },
            { title: '17_Evacuate_fast', value: 217 },
            { title: 'N.A', value: 13 }
        ]
    },
    {
        data: [
            { title: '27_Geo_point', value: 123},
            { title: '06_Assembly_family', value: 51},
            { title: '05_Assembly_group', value: 52 },
            { title: 'N.A', value: 13 }
        ]
    },
    {
        data: [
            { title: 'Triangulo-amarillo', value: 104 },
            { title: 'Octagono-rojo', value: 116 },
            { title: 'N.A', value: 15 }
        ]
    },
    {/*Formulario 2*/
        data: [/*Refugio*/
            { title: '39_Shelter', value: 154 },
            { title: '38_House', value: 40},
            { title: 'Assembly_Group_+_Hexagon', value: 11},
            { title: 'N.A', value: 12 }
        ]
    },
    {
        data: [/*Información por teléfono movil*/
            { title: '36_Mobile_message', value: 26 },
            { title: '37_Mobile_call', value: 14 },
            { title: '35_Mobile_info', value: 162 },
            { title: 'N.A', value: 11 },
        ]
    },
    {
        data: [/*Salir fuera*/
            { title: '18_Evacuate_way_out', value: 155 },
            { title: '32_Orientation', value: 27 },
            { title: '19_Move_to_shelter', value: 8 },
            { title: 'N.A', value: 15 },
        ]
    },
    {/*Formulario 3*/
        data: [ /*Ubicación*/
            { title: 'Hexagon+dot', value: 0 },
            { title: '27_Geo_point', value: 198 },
            { title: '60_Flagged_point', value: 13 },
            { title: 'N.A', value: 6 },
        ]
    },
    {
        data: [/*Deslizamiento de Tierra*/
            { title: '48_Alluvium', value: 198 },
            { title: '45_Tsunami', value: 1 },
            { title: '49_Avalanche', value: 4 },
            { title: 'N.A', value: 6 },
        ]
    },
    {
        data: [ /*Autoridad Local*/
            { title: '29_School', value: 22 },
            { title: '60_Flagged_point', value: 10 },
            { title: '31_Local-authority_bldg', value: 165 },
            { title: 'N.A', value: 13 },
        ]
    },
    {/*Formulario 4*/
        data: [ /*Encuentro*/
            { title: '03_Assembly_couple', value: 31 },
            { title: 'Hexagon+dot', value: 63 },
            { title: '05_Assembly_group', value: 118 },
            { title: 'N.A', value: 12 },
        ]
    },
    {
        data: [/*Tsunami Hazard*/
            { title: '20_Warning_tsunami_risk', value: 149 },
            { title: '45_Tsunami', value: 66 },
            { title: '51_Flood', value: 4 },
            { title: 'N.A', value: 6 },
        ]
    },
    {/*Formulario 5*/
        data: [ /*Niña*/
            { title: '02_Woman', value: 153 },
            { title: '07_Girl', value: 11 },
            { title: 'N.A', value: 12 },
        ]
    },
    {
        data: [/*Enviar/recibir Mensajes*/
            { title: '67_Contain_message', value: 12 },
            { title: '55_Messaging_oneway', value: 17 },
            { title: '56_Messaging_twoways', value: 147 },
            { title: 'N.A', value: 10 },
        ]
    }
]).addClass('mb-5');

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
