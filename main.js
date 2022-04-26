let map = L.map('map').setView([-39.42296, -66.54489],4)

L.tileLayer(
    'http://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png',{
        attribution: '&copy; <a href="htttp://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors contributors © <a href= "https://carto.com/about-carto/">CARTO</a>'
    }
).addTo(map);
var sudOeste = L.latLng(-62.39938755431225, -96.10323233259005),
    norEste = L.latLng(-8.60056519647862, -24.96553614959004),
    bounds = L.latLngBounds(sudOeste, norEste);
map.options.maxZoom = 12;
map.options.minZoom = 4;
map.options.maxBounds= bounds;
map.options.maxBoundsViscosity= 1.0;


var myStyle = {
    "color": "#000",
    "opacity": 0.3
};
L.geoJson(paisesLimitrofes,{style:myStyle}).addTo(map);



//buenos aires
const marker1=L.marker([-34.91906, -57.95533]).addTo(map);
const marker2=L.marker([-34.90492, -57.95846]).addTo(map);
const marker3=L.marker([-38.05006185537432, -57.539491080303705]).addTo(map);
const marker4=L.marker([-38.729666122540664, -62.276098500498854]).addTo(map);
const marker5=L.marker([-34.865585847881185, -61.5273510196972]).addTo(map);
const marker6=L.marker([-34.295454554519345, -60.23749809468]).addTo(map);
const marker7=L.marker([-37.32552063788896, -59.12983175029855]).addTo(map);
const marker8=L.marker([-38.7879649609868, -62.27523747172139]).addTo(map);
const marker9=L.marker([-38.726076056500915, -62.26231976255509]).addTo(map);
const marker10=L.marker([-38.72893127329645, -62.27956586373609]).addTo(map);
const marker11=L.marker([-35.123584729816926, -60.49150023317886]).addTo(map);
const marker12=L.marker([-35.58038433589116, -58.013156687125715]).addTo(map);
const marker13=L.marker([-34.1751440569061, -58.86387265645015]).addTo(map);
const marker14=L.marker([-35.80566058708036, -61.89927806991713]).addTo(map);
const marker15=L.marker([-37.32937876819067, -59.13490105637013]).addTo(map);
const marker16=L.marker([-36.75249389875923, -62.95660475824634]).addTo(map);
const marker17=L.marker([-37.606332278281194, -62.40912569194154]).addTo(map);
const marker18=L.marker([-34.579384983743935, -60.946356239943526]).addTo(map);
const marker19=L.marker([-36.994837410893204, -57.13784274660141]).addTo(map);
const marker20=L.marker([-38.370889129426864, -60.2777013938615]).addTo(map);
const marker21=L.marker([-35.433831347059126, -60.16284234480374]).addTo(map);
const marker22=L.marker([-36.23307493735399, -61.11691494106521]).addTo(map);
const marker23=L.marker([-34.86831810711063, -61.527503473084536]).addTo(map);
const marker24=L.marker([-37.329413955183355, -59.13486961404294]).addTo(map);


marker1.bindPopup('<h1>Secretaría de Agricultura Familiar, Campesina e Indígena</h1> <ul><li>Calle 12 N° 850, Torre 1 Piso 6, La Plata (CP 1900)</li><li>(0221) 429 5349 / (0221) 15 3501 399</li><li>Ssafbuenosaires@gmail.com/ renafbuenosaires@gmail.com / safbuenosaires@magyp.gob.ar</li></ul>');
marker2.bindPopup('<h1>Dirección de Cultivos Extensivos</h1> <ul><li>Calle 5 N° 366</li><li>(0221) 15-626-1683</li><li>dellaplata@magyp.gob.ar</li></ul>');
marker3.bindPopup('<h1>Dirección Nacional de Coordinación y Fiscalización Pesquera</h1> <ul><li>B/P Mariluz II 743, Muelle de Ultramar, Terminales 2 y 3, PUERTO DE MAR DEL PLATA</li><li>(0223) 480-4108 / (0223) 480-4650 / (0223) 480-4312 / (0223) 489-0080</li><li>delmardelplata@magyp.gob.ar</li></ul>');
marker4.bindPopup('<h1>Dirección Nacional de Control Comercial Agropecuario</h1> <ul><li>Donado 1020, Bahia Blanca</li><li>(0291) 15-427-7099</li><li>agenciabahia@magyp.gob.ar</li></ul>');
marker5.bindPopup('<h1>Dirección Nacional de Control Comercial Agropecuario</h1><ul><li>Avenida Massey 776 (CP 6070), Lincoln</li><li>(02355) 15-415-651</li><li>agencialincoln@magyp.gob.ar</li></ul>');

marker6.bindPopup('<h1>Dirección Nacional de Control Comercial Agropecuario</h1><ul><li>Hipólito Irigoyen y San Luis (CP 2741), Salto</li><li>(02474)15-684-879 /(02474)15-674-413 /(02474)684-879</li><li>agenciasalto@magyp.gob.ar</li></ul>');
marker7.bindPopup('<h1>Dirección Nacional de Control Comercial Agropecuario</h1><ul><li>Av. Santamarina 479 (Reciben el bolsín en el correo), Tandil</li><li>(0249) 442-0051 / (0249) 442-3113 / (02494) 622-862</li><li>agenciatandil@magyp.gob.ar</li></ul>');
marker8.bindPopup('<h1>Dirección Nacional de Coordinación y Fiscalización Pesquera</h1><ul><li> Puerto Ing. White,  Calle T. Salustio Edificio de Fruticultura–Of. 16–, Bahia Blanca</li><li>(0291) 457-1620</li><li>dtobahiablanca@hotmail.com</li></ul>');
marker9.bindPopup('<h1>Dirección de Cultivos Extensivos</h1><ul><li>Saavedra 636 - 2º piso, Bahia Blanca</li><li>(0291) 456-2811 / (0291) 15-572-0283</li><li>delbahiablanca@magyp.gob.ar</li></ul>');
marker10.bindPopup('<h1>Dirección de Cultivos Extensivos</h1><ul><li>Colón 1124, Pergamino</li><li>(02477) 440-840 /(02273) 443-428 (José Luis García González -Delegado)</li><li>delpergamino@magyp.gob.ar</li></ul>');

marker11.bindPopup('<h1>Dirección de Cultivos Extensivos</h1> <ul><li>Barrera 595(CP 6640),esquina Urquiza 1390, Bragado</li><li>(02342)430-174 /(02324)15-589-115 (celular Fernando Pescio -Delegado)</li><li>bragado03@yahoo.com.ar / fpescio@magyp.gob.ar / delbragado@magyp.gob.ar</li></ul>');
marker12.bindPopup('<h1>Información Agropecuaria y Forestal</h1><ul><li>AER INTA Chascomús, Cuenca del Salado</li><li>11-2256-4528 /(0221)15-536-3958 (Ing. Raúl Villaverde)</li><li>rvillav@magyp.gob.ar</li></ul>');
marker13.bindPopup('<h1>Información Agropecuaria y Forestal</h1><ul><li>EEA INTA Delta, Delta del Paraná</li><li>11-2256-4528 /(0221)15-536-3958 (Ing. Raúl Villaverde)</li><li>rvillav@magyp.gob.ar</li></ul>');
marker14.bindPopup('<h1>Dirección de Cultivos Extensivos</h1><ul><li>Hilario Ascasubi 245 (CP 6450), Pehuajó; los agentes trabajan desde sus domicilios particulares.</li><li>-</li><li>pehuacer@hotmail.com / orlandologullo@gmail.com / delpehuajo@magyp.gob.ar</li></ul>');
marker15.bindPopup('<h1>Información Agropecuaria y Forestal</h1><ul><li>AER INTA Tandil</li><li>11-6197-9014 /(0249)15-446-4263 (Ing. Diego Domínguez Daguer)</li><li>dagdom@magyp.gob.ar</li></ul>');

marker16.bindPopup('<h1>Dirección de Cultivos Extensivos</h1><ul><li>Saturnino Unzue 130, Salliqueló</li><li>(02394)480-090 /(02392)15-502-694 (celular Mariano Muscato -Delegado)</li><li>delsalliquelo@magyp.gob.ar</li></ul>');
marker17.bindPopup('<h1>Dirección de Cultivos Extensivos</h1><ul><li>San Martín 397, Pigüé</li><li>(02923)472-197 / (02923)15-484-753 (celular Gabriel Domper -Delegado)</li><li>delpigue@magyp.gob.ar</li></ul>');
marker18.bindPopup('<h1>Dirección de Cultivos Extensivos</h1><ul><li>Jean Jaures 347, Junin</li><li>(0236)442-4288</li><li>deljunin@magyp.gob.ar</li></ul>');
marker19.bindPopup('<h1>Dirección de Cultivos Extensivos</h1><ul><li>Urrutia 295, General Madariaga</li><li>(02267)420-467 / 15-6307-7577 (celular Cecilia Salerno -Delegada)</li><li>delmadariaga@magyp.gob.ar</li></ul>');
marker20.bindPopup('<h1>Dirección de Cultivos Extensivos</h1><ul><li>Sgto. Juan Bautista Cabral 497, Tres Arroyos</li><li>(02983)431-194 /(02983)15-575-070 (Verónica Goldman -Delegada)</li><li>deltresarroyos@magyp.gob.ar</li></ul>');

marker21.bindPopup('<h1>Dirección de Cultivos Extensivos</h1> <ul><li>Calle 27 Nº 112 (27 y 2), 25 de Mayo</li><li>(02345)465-033 / 11-6656-8861 (celular Luciana Suparo -Delegada)</li><li>-</li></ul>');
marker22.bindPopup('<h1>Dirección de Cultivos Extensivos</h1> <ul><li>Gral Paz Nº 329, Bolívar</li><li>(02314)427-564 / 11-6424-8085 (celular Gonzalo Solari -Delegado)</li><li>-</li></ul>');
marker23.bindPopup('<h1>Dirección de Cultivos Extensivos</h1> <ul><li>Sarmiento 788 (deleg. vieja) / Av. Mitre Nº 134 (deleg. Nueva, edif. INTA), Lincoln</li><li>(02355)422-162 /(02355)15-466-754 (celular Diego Mizuno -Delegado)</li><li>-</li></ul>');
marker24.bindPopup('<h1>Dirección de Cultivos Extensivos</h1> <ul><li>General Martín Rodriguez 370, Tandil</li><li>(0249)444-0048 /(02293)15-550-362 (celular Patricia Vimo -Delegada)</li><li>minagritandil@gmail.com / deltandil@magyp.gob.ar</li></ul>');

//catamarca
const marker25=L.marker([-28.46268827853179, -65.78161913525415]).addTo(map);
marker25.bindPopup('<h1>Secretaría de Agricultura Familiar, Campesina e Indígena</h1> <ul><li>Maipú 160 / Maipú 316 P.B. (CP 4700) San Fernando del Valle de Catamarca</li><li>(0383)474-5111 /(0383)15-435-4741 (cel referente Ing. Pablo Guzmán)</li><li>safcatamarca@magyp.gob.ar / pguzman@magyp.gob.ar</li></ul>');

//chaco
const marker26=L.marker([-27.45696330798841, -58.9834391064479]).addTo(map);
marker26.bindPopup('<h1>Secretaría de Agricultura Familiar, Campesina e Indígena</h1><ul><li>Av. Arturo Illia 549, 1° piso, Oficina SENASA (C. P 3500), Resistencia</li><li>(0362)442-5835 /(0362)444-8716 /(0379)154-592-712</li><li>safchaco@magyp.gob.ar / msaenz@magyp.gob.ar / rrhhssaf_chaco@yahoo.com.ar</li></ul>');
const marker27=L.marker([-26.793598744869943, -60.428931046939674]).addTo(map);
marker27.bindPopup('<h1>Dirección de Cultivos Extensivos</h1><ul><li>Av. J.F. Kennedy 556 (C.P 3700), Roque Saenz Peña</li><li>(0364)443-6884 /(0364)15-468-1666</li><li>delroquesaenzpena@magyp.gob.ar</li></ul>');
const marker28=L.marker([-27.221143497841517, -61.18179461809089]).addTo(map);
marker28.bindPopup('<h1>Dirección de Cultivos Extensivos</h1><ul><li>Rivadavia 900, Charata</li><li>(0379)15-488-5999</li><li>delcharata@magyp.gob.ar</li></ul>');
const marker29=L.marker([-26.791309051429643, -60.43866392533056]).addTo(map);
marker29.bindPopup('<h1>Información Agropecuaria y Forestal</h1><ul><li>AER INTA Sáenz Peña, Parque chaqueño</li><li>11-5061-9651 (Téc. Lucas Sebastián Vera)</li><li>lvera@magyp.gob.ar</li></ul>');

//chubut
const marker30=L.marker([-45.8626117514401, -67.47154840145176]).addTo(map);
marker30.bindPopup('<h1>Dirección Nacional de Coordinación y Fiscalización Pesquera</h1><ul><li>Las Toninas N° 280(CP 9000), Comodoro Rivadavia</li><li>0297-446-2200 / 15-2351-5954</li><li>dtocomodoro@gmail.com / delcdorivadavia@magyp.gob.ar</li></ul>');
const marker31=L.marker([-45.86538185319413, -67.49069806344309]).addTo(map);
marker31.bindPopup('<h1>Secretaría de Agricultura Familiar, Campesina e Indígena</h1><ul><li>Chacabuco 513 - INTA (CP 9200), Esquel(Central)</li><li>(02945)450-240 /(02945)453-370 / Fax:(02945)450-435</li><li>safchubut@magyp.gob.ar / admssafchubut@hotmail.com / ssolves@magyp.gob.ar</li></ul>');
const marker32=L.marker([-43.30091840684278, -65.50279312729691]).addTo(map);
marker32.bindPopup('<h1>Secretaría de Agricultura Familiar, Campesina e Indígena</h1><ul><li>Av. Fontana s/n (CP 9105), Gaiman</li><li>(0280)426-4041</li><li>dgrffiths@magyp.gob.ar</li></ul>');
const marker33=L.marker([-42.764479411556266, -65.03732309725727]).addTo(map);
marker33.bindPopup('<h1>Dirección Nacional de Coordinación y Fiscalización Pesquera</h1><ul><li>Hipólito Yrigoyen N° 195, Puerto Madryn</li><li>0280-447-4429</li><li>delpuertomadryn@magyp.gob.ar</li></ul>');

//cordoba
const marker34=L.marker([-31.432508085228964, -64.19369055843231]).addTo(map);
marker34.bindPopup('<h1>Secretaría de Agricultura Familiar, Campesina e Indígena</h1><ul><li>Ambrosio Olmos 1142 (CP 5000), Córdoba capital</li><li>(03541)581-423 / 11-6764-0473</li><li>hemolina@magyp.gob.ar / safcordoba@magyp.gob.ar</li></ul>');
const marker112=L.marker([-33.12237448281628, -64.34905854422628]).addTo(map);
marker112.bindPopup('<h1>Dirección Nacional de Control Comercial Agropecuario</h1><ul><li>Sin oficina (recibe bolsines en el Correo), Rio Cuarto</li><li>(0358)15-415-4937 /(0358)507-8233 </li><li>agenciariocuarto@magyp.gob.ar</li></ul>');
const marker35=L.marker([-33.121977814115965, -64.35232297890622]).addTo(map);
marker35.bindPopup('<h1>Información Agropecuaria y Forestal</h1><ul><li>Mitre 656 (CP 5800), Rio Cuarto</li><li>15-5575-0515 (Ing. Esteban Zupan)</li><li>ezupan@magyp.gob.ar</li></ul>');
const marker113=L.marker([-31.433510592655452, -64.18549299749591]).addTo(map);
marker113.bindPopup('<h1>Dirección Nacional de Control Comercial Agropecuario</h1><ul><li>Sin oficina (recibe bolsines en el Correo)</li><li>-</li><li>agenciacordoba@magyp.gob.ar</li></ul>');
//const marker36=L.marker([-34.12917464270038, -63.38938119088687]).addTo(map);
//marker36.bindPopup('<h1>Secretaría de Agricultura Familiar, Campesina e Indígena</h1><ul><li>Av. Fontana s/n (CP 9105), Gaiman</li><li>(0280)426-4041</li><li>dgrffiths@magyp.gob.ar</li></ul>');

const marker37=L.marker([-32.711772463084735, -62.10902083698146]).addTo(map);
marker37.bindPopup('<h1>Dirección de Cultivos Extensivos</h1><ul><li>Alte. Guillermo Brown 34, Laboulaye</li><li>(03385)426-747</li><li>dellaboulaye@magyp.gob.ar</li></ul>');
const marker38=L.marker([-33.10396162739791, -64.33523836171008]).addTo(map);
marker38.bindPopup('<h1>Dirección de Cultivos Extensivos</h1><ul><li>Ruta Provincial Nº 12, Km. 3 - Edificio INTA, Marcos Juárez</li><li>(03472)425-263</li><li>delmarcosjuarez@magyp.gob.ar</li></ul>');
const marker39=L.marker([-32.41302386783276, -63.23722050072698]).addTo(map);
marker39.bindPopup('<h1>Dirección de Cultivos Extensivos</h1><ul><li>Av. Marcelo T. de Alvear 965 - Edificio SENASA, Rio Cuarto</li><li>(0358)463-2942</li><li>delriocuarto@magyp.gob.ar</li></ul>');
const marker40=L.marker([-43.30091840684278, -65.50279312729691]).addTo(map);
marker40.bindPopup('<h1>Dirección de Cultivos Extensivos</h1><ul><li>Tucumán 1367 - Edificio INTA (CP 5900), Villa Maria</li><li>(03534)520-652</li><li>delvillamaria@magyp.gob.ar</li></ul>');
const marker41=L.marker([-31.42842744751835, -62.07684307192332]).addTo(map);
marker41.bindPopup('<h1>Dirección de Cultivos Extensivos</h1><ul><li>Tucumán 255 Oficina 15 Bis, Edificio Sociedad Rural Jesús María, San Francisco</li><li>15-5001-5999</li><li>delvillamaria@magyp.gob.ar</li></ul>');

const marker114=L.marker([-32.41786839957171, -63.23737511776716]).addTo(map);
marker114.bindPopup('<h1>Dirección Nacional de Control Comercial Agropecuario</h1><ul><li>Sin Oficina</li><li>(0353)510-1470</li><li>agenciavillamaria@magyp.gob.ar</li></ul>');    

//corrientes
const marker42=L.marker([-28.520139682456044, -59.04103469107039]).addTo(map);
marker42.bindPopup('<h1>Secretaría de Agricultura Familiar, Campesina e Indígena</h1><ul><li>Sucre 1420, Bella Vista</li><li>(03777)15-624-574 (referente: Jorge Altamirano)</li><li>jaltamirano@magyp.gob.ar</li></ul>');  
const marker43=L.marker([-29.78996209331008, -58.06525512905828]).addTo(map);
marker43.bindPopup('<h1>Secretaría de Agricultura Familiar, Campesina e Indígena</h1><ul><li>Berón de Astrada 1555, Curuzú Cuatiá</li><li>(03774)15-430-999 (referente: Roxana Karina  Muzachiodi)</li><li>rmuzachiodi@magyp.gob.ar</li></ul>');  
const marker44=L.marker([-27.750146119956373, -57.62007242482062]).addTo(map);
marker44.bindPopup('<h1>Secretaría de Agricultura Familiar, Campesina e Indígena</h1><ul><li>Itati s/n°, Caa Cati</li><li>(0379)15-493-7358 (referente: Jose Oscar Casanova)</li><li>jcasanova@magyp.gob.ar</li></ul>');  
const marker45=L.marker([-30.012841398047186, -59.52507999774882]).addTo(map);
marker45.bindPopup('<h1>Secretaría de Agricultura Familiar, Campesina e Indígena</h1><ul><li>Moreno 565, Esquina</li><li>(03777)15-571-508 (referente: Sergio Hernan Borda)</li><li>sborda@magyp.gob.ar</li></ul>');  
const marker46=L.marker([-27.471360538933368, -58.821943116228766]).addTo(map);
marker46.bindPopup('<h1>Secretaría de Agricultura Familiar, Campesina e Indígena</h1><ul><li>Perú 1110, Corrientes</li><li>(0379)423-0761 (referente: Manuel Roque Tutuy)</li><li>mtutuy@magyp.gob.ar</li></ul>'); 
 
const marker47=L.marker([-27.47555076417588, -58.83899396960121]).addTo(map);
marker47.bindPopup('<h1>Secretaría de Agricultura Familiar, Campesina e Indígena</h1><ul><li>Av. 3 de Abril 998, Planta Alta (Edificio SENASA), Corrientes</li><li>(0379)423-0729 (referente: Jose Oscar Benitez)</li><li>jbenitez@magyp.gob.ar</li></ul>');  
const marker48=L.marker([-28.25939580741234, -58.62458861435045]).addTo(map);
marker48.bindPopup('<h1>Secretaría de Agricultura Familiar, Campesina e Indígena</h1><ul><li>Sargento Cabral 966, Saladas</li><li>(0379)15-423-5004 (referente: Ramon Martin Escobar)</li><li>rescobar@magyp.gob.ar</li></ul>');  
const marker49=L.marker([-28.57616527189481, -58.708884281836475]).addTo(map);
marker49.bindPopup('<h1>Secretaría de Agricultura Familiar, Campesina e Indígena</h1><ul><li>Islas Malvinas 830, San Roque</li><li>(03777)15-490-027 (referente: Maria Del Carmen Robledo)</li><li>mrobledo@magyp.gob.ar</li></ul>');  
const marker50=L.marker([-27.99289982442662, -57.58983588552201]).addTo(map);
marker50.bindPopup('<h1>Secretaría de Agricultura Familiar, Campesina e Indígena</h1><ul><li>Salta s/n, San Miguel</li><li>(0379)15-481-4040 (referente: Hector Gabriel Solari)</li><li>hsolari@magyp.gob.ar</li></ul>');  
const marker51=L.marker([-28.263791921643453, -58.12156715170914]).addTo(map);
marker51.bindPopup('<h1>Secretaría de Agricultura Familiar, Campesina e Indígena</h1><ul><li>Salta 297, Santa Rosa</li><li>(03782)15-415-759 (referente: Maria Gabriela Torres)</li><li>mgtorres@magyp.gob.ar</li></ul>');  

const marker52=L.marker([-28.55886938244073, -56.050510843177804]).addTo(map);
marker52.bindPopup('<h1>Secretaría de Agricultura Familiar, Campesina e Indígena</h1><ul><li>Av. Artigas s/n, Santo Tomé</li><li>(03756)15-513-762 (referente: Solange Etchegaray Centeno)</li><li>setchegaray@magyp.gob.ar</li></ul>');  
const marker53=L.marker([-31.728606281023144, -61.093164504939104]).addTo(map);
marker53.bindPopup('<h1>Secretaría de Agricultura Familiar, Campesina e Indígena</h1><ul><li>25 de Mayo y San Martin, San Carlos</li><li>(03758)499-495 (referente: Daniel Velozo)</li><li>dvelozo@magyp.gob.ar</li></ul>');  
const marker54=L.marker([-28.98639906628257, -59.09712806896517]).addTo(map);
marker54.bindPopup('<h1>Secretaría de Agricultura Familiar, Campesina e Indígena</h1><ul><li>Republica del Libano esq. San Luis, Santa Lucía</li><li>(03777) 15-411-981 (referente: Julia Susana Bitonto)</li><li>jbitonto@magyp.gob.ar</li></ul>');  
const marker55=L.marker([-27.58317931323646, -56.6774931229708]).addTo(map);
marker55.bindPopup('<h1>Secretaría de Agricultura Familiar, Campesina e Indígena</h1><ul><li>9 de Julio s/n, Ituzaingó</li><li>(0370)15-425-9901 (referente: José Martín Valdez)</li><li>jvaldez@magyp.gob.ar</li></ul>');  
const marker56=L.marker([-29.14758269531663, -59.276670479774936]).addTo(map);
marker56.bindPopup('<h1>Secretaría de Agricultura Familiar, Campesina e Indígena</h1><ul><li>Venezuela 1443, Goya</li><li>(03777)432-132 (referente: Maria Angelica Salazar)</li><li>masalazar@magyp.gob.ar</li></ul>');  
const marker57=L.marker([-27.47560787640153, -58.83909321133786]).addTo(map);
marker57.bindPopup('<h1>Dirección de Cultivos Extensivos</h1><ul><li>Av. 3 de Abril 998, Planta Alta (Edificio SENASA), Corrientes</li><li>(0379)442-9748 /(0379)15-482-7259 (celular Danilo Sager -Delegado)</li><li>delcorrientes@magyp.gob.ar</li></ul>');  

//entre rios
const marker115=L.marker([-31.74263739485536, -60.50953750918761]).addTo(map);
marker115.bindPopup('<h1>Secretaría de Agricultura Familiar, Campesina e Indígena</h1><ul><li>San Juan 388, Entre rios</li><li>(0343)431-7720 /(011)15-3690-4795 (0343)425-6855</li><li>rhsafentrerios@gmail.com / mariasoledadsolanas@gmail.com</li></ul>');  
const marker58=L.marker([-32.47808303773991, -58.22158339097372]).addTo(map);
marker58.bindPopup('<h1>Dirección Nacional de Control Comercial Agropecuario</h1><ul><li>Av. Paysandú N° 274, Concepción del Uruguay</li><li>(03442)15-455-300</li><li>agenciaconcepcion@magyp.gob.ar</li></ul>');  
const marker59=L.marker([-31.732747756238968, -60.53200698359093]).addTo(map);
marker59.bindPopup('<h1>Dirección Nacional de Control Comercial Agropecuario / Dirección de Cultivos Extensivos</h1><ul><li>España 102, 1° piso (CP 3100), Paraná</li><li>DNCCA:(0343)15-438-2077 •DCE:(0343)423-0320 /(0342) 15-535-0695 (celular Francisco Bellabarba -Delegado)</li><li>DNCCA: agenciaparana@magyp.gob.ar •DCE:delparana@magyp.gob.ar</li></ul>');  
const marker60=L.marker([-32.297333484528195, -59.14148961118581]).addTo(map);
marker60.bindPopup('<h1>Dirección de Cultivos Extensivos</h1> <ul><li>Dirección de Cultivos Extensivos, Rosario del Tala</li><li>(03445)421-688 /(03445)15-415-478 (celular Juan Carlos Ibarra -Delegado)</li><li>delrosariodeltala@magyp.gob.ar</li></ul>');  
const marker61=L.marker([-31.366599662322013, -58.09694564332969]).addTo(map);
marker61.bindPopup('<h1>Información Agropecuaria y Forestal</h1> <ul><li>AER INTA Concordia, NEA Entre Ríos</li><li>11-6152-5092</li><li>mflorespalenzona@magyp.gob.ar</li></ul>');  

//formosa
const marker62=L.marker([-26.196837937033568, -58.210797348837794]).addTo(map);
marker62.bindPopup('<h1>Secretaría de Agricultura Familiar, Campesina e Indígena</h1> <ul><li>Av. Gutnisky 4618, Formosa</li><li>(0370)445-4244</li><li>loguerra@magyp.gob.ar / safformosa@magyp.gob.ar / renafformosa@gmail.com</li></ul>');  
const marker63=L.marker([-26.20078802461248, -58.21837938259586]).addTo(map);
marker63.bindPopup('<h1>Dirección de Cultivos Extensivos</h1> <ul><li>J. M. Uriburu 1505, Formosa</li><li>(0370)15-472-2404 / (0370)464-3583 (Antonio Carlos-Delegado)</li><li>delformosa@magyp.gob.ar</li></ul>');  
const marker64=L.marker([-26.1932130937671, -58.20578765676503]).addTo(map);
marker64.bindPopup('<h1>Dirección Nacional de Control Comercial Agropecuario</h1> <ul><li>Parcela 10 Mza 77 Barrio La Alborada (CP 3600)</li><li>(0370)483-7295</li><li>agenciaformosa@magyp.gob.ar</li></ul>');  


//jujuy
const marker65=L.marker([-24.178671971997215, -64.8431098451576]).addTo(map);
marker65.bindPopup('<h1>Secretaría de Agricultura Familiar, Campesina e Indígena</h1><ul><li>Centro Forestoindustrial Arrayanal- Dirección de Desarrollo Agrícola y Forestal de Jujuy</li><li>(0388)423-6728</li><li>safjujuy@magyp.gob.ar/ renafjujuy@yahoo.com.ar / saf_jujuy@hotmail.com</li></ul>');  
const marker66=L.marker([-24.184461274133156, -65.31371810653984]).addTo(map);
marker66.bindPopup('<h1>Información Agropecuaria y Forestal</h1> <ul><li>Av. España 1470, San Salvador de Jujuy</li><li>11-6182-8955 (Ing. Luis Cosimi)</li><li>lcosimi@magyp.gob.ar</li></ul>');  
const marker67=L.marker([-24.18708201090715, -65.29916388769665]).addTo(map);
marker67.bindPopup('<h1>Información Agropecuaria y Forestal</h1> <ul><li>Av. Gato y Mancha 1460 (SALTA)</li><li>(0387)431-1340 / (0387)429-1080 (Alfredo Aybar-Delegado)</li><li>deljujuy@magyp.gob.ar</li></ul>');  

//la pampa
const marker68=L.marker([-36.61973762477619, -64.28049186381567]).addTo(map);
marker68.bindPopup('<h1>Secretaría de Agricultura Familiar, Campesina e Indígena / Dirección Nacional de Control Comercial Agropecuario</h1> <ul><li>Corrientes 80 (CP 6300), Santa Rosa</li><li>SAF:(02954)454-550/51,(02954)15-449-474 •DNCCA:(02954)15-569-458/(02954)15-233-219/(02954)233-217</li><li>SAF:saflapampa@magyp.gob.ar / renaflapampa@hotmail.com / mtorroba@magyp.gob.ar •DNCCA: agenciasantarosa@magyp.gob.ar</li></ul>');  
const marker116=L.marker([-36.62095128166414, -64.29029479557148]).addTo(map);
marker116.bindPopup('<h1>Dirección de Cultivos Extensivos</h1><ul><li>Centro Cívico 222, Santa Rosa</li><li>(02954)15-569-458 /(02954)15-233-219 /(02954)233-217</li><li>delsantarosa@magyp.gob.ar</li></ul>');  
const marker69=L.marker([-35.65805839410269, -63.753613955841125]).addTo(map);
marker69.bindPopup('<h1>Dirección de Cultivos Extensivos</h1><ul><li>Calle 13 N° 1088, Gral Pico</li><li>(02954)15-569-458 /(02954)15-233-219 /(02954)233-217</li><li>delgeneralpico@magyp.gob.ar</li></ul>');  

//la rioja
const marker70=L.marker([-29.414107933372357, -66.86154169348536]).addTo(map);
marker70.bindPopup('<h1>Secretaría de Agricultura Familiar, Campesina e Indígena</h1> <ul><li>San Nicolas de Bari Oeste 956 1º Piso(CP 5300)</li><li>(0380)443-4822 /(0380)15-466-0373</li><li>svarga@magyp.gob.ar / saflarioja@magyp.gob.ar</li></ul>');  
const marker71=L.marker([-29.409873324210043, -66.840831632106]).addTo(map);
marker71.bindPopup('<h1>Dirección Nacional de Control Comercial Agropecuario</h1> <ul><li>Gaspar Gómez N° 150 - B° Matadero(CP 5300)</li><li>(0380)448-4787 / (0380)427-7149</li><li>agencialarioja@magyp.gob.ar</li></ul>');  


//mendoza
const marker72=L.marker([-32.89875955612424, -68.84283055779278]).addTo(map);
marker72.bindPopup('<h1>Secretaría de Agricultura Familiar, Campesina e Indígena</h1><ul><li>9 de Julio 435 (CP 5500), Ciudad de Mendoza</li><li>(0261)423-9922/0585</li><li>safmendoza@magyp.gob.ar/ renafmendoza@yahoo.com.ar / rrhhssaf@gmail.com</li></ul>');
const marker73=L.marker([-34.613878658087515, -68.33158272215152]).addTo(map);
marker73.bindPopup('<h1>Secretaría de Agricultura Familiar, Campesina e Indígena</h1><ul><li>Comandante Salas 150 1º piso Dpto. B, San Rafael</li><li>-</li><li>-</li></ul>');
const marker74=L.marker([-32.898826770189544, -68.84168220990128]).addTo(map);
marker74.bindPopup('<h1>Dirección de Cultivos Extensivos</h1><ul><li>Av. San Martín N° 430, Mendoza</li><li>(0261)425-5287 /(0261)496-3561 (Gerardo Von Thulen -Delegado)</li><li>delmendoza@magyp.gob.ar</li></ul>');
const marker75=L.marker([-33.00664468793797, -68.86998318599879]).addTo(map);
marker75.bindPopup('<h1>Información Agropecuaria y Forestal</h1><ul><li>Almirante Brown 500,Chacras de Coria, Lujan de Cuyo, Mendoza</li><li>(0261)6880-148 (cel) /11-2245-6836</li><li>nnaves@magyp.gob.ar / natinaves@gmail.com</li></ul>');


//misiones
const marker76=L.marker([-26.410340094694906, -54.60806484509594]).addTo(map);
marker76.bindPopup('<h1>Información Agropecuaria y Forestal</h1><ul><li>Casa del Colono - Calle Cuyo 250 (CP 3380), Eldorado (central)</li><li>(03751)421-360 /(03751)424-343</li><li>mlopez@magyp.gob.ar / rfalconierdiez@magyp.gob.ar / mdangelo@magyp.gob.ar</li></ul>');
const marker77=L.marker([-27.366532948399936, -55.90872180274105]).addTo(map);
marker77.bindPopup('<h1>Información Agropecuaria y Forestal</h1><ul><li>Av Centenario 3268, Posadas</li><li>(03764)432-689</li><li>mlopez@magyp.gob.ar / rfalconierdiez@magyp.gob.ar / mdangelo@magyp.gob.ar</li></ul>');
const marker78=L.marker([-26.927411286240666, -55.06157819111778]).addTo(map);
marker78.bindPopup('<h1>Información Agropecuaria y Forestal</h1><ul><li>Calle Martin Fierro 250, Capiovi</li><li>(03751)15-678-992</li><li>mlopez@magyp.gob.ar / rfalconierdiez@magyp.gob.ar / mdangelo@magyp.gob.ar</li></ul>');
const marker79=L.marker([-26.625190240993717, -54.11096651325994]).addTo(map);
marker79.bindPopup('<h1>Información Agropecuaria y Forestal</h1><ul><li>Av. San Martín 926, San Pedro</li><li>-</li><li>mlopez@magyp.gob.ar / rfalconierdiez@magyp.gob.ar / mdangelo@magyp.gob.ar</li></ul>');
const marker117=L.marker([-27.300190146964823, -54.19915147027266]).addTo(map);
marker117.bindPopup('<h1>Información Agropecuaria y Forestal</h1><ul><li>El soberbio</li><li>(03755)15-609-918</li><li>mlopez@magyp.gob.ar / rfalconierdiez@magyp.gob.ar / mdangelo@magyp.gob.ar</li></ul>');
const marker80=L.marker([-27.47399055248994, -54.51861735670108]).addTo(map);
marker80.bindPopup('<h1>Información Agropecuaria y Forestal</h1><ul><li>Av. San Martín esquina Hauschild, Colonia Aurora</li><li>-</li><li>mlopez@magyp.gob.ar / rfalconierdiez@magyp.gob.ar / mdangelo@magyp.gob.ar</li></ul>');

const marker81=L.marker([-25.67182852326046, -54.046802962317265]).addTo(map);
marker81.bindPopup('<h1>Información Agropecuaria y Forestal</h1><ul><li>Estados Unidos s/n, Comandante Andresito</li><li>(03751)15-407-644</li><li>mlopez@magyp.gob.ar / rfalconierdiez@magyp.gob.ar / mdangelo@magyp.gob.ar</li></ul>');
const marker82=L.marker([-27.603634520926033, -55.32520990458879]).addTo(map);
marker82.bindPopup('<h1>Información Agropecuaria y Forestal</h1><ul><li>Sarmiento 249, L.N.Alem</li><li>-</li><li>mlopez@magyp.gob.ar / rfalconierdiez@magyp.gob.ar / mdangelo@magyp.gob.ar</li></ul>');
const marker83=L.marker([-26.995646485684745, -54.48399146227941]).addTo(map);
marker83.bindPopup('<h1>Información Agropecuaria y Forestal</h1><ul><li> Av. del Libertador 984 (CP 3364/56), San Vicente</li><li>(03755)461-186</li><li>mlopez@magyp.gob.ar / rfalconierdiez@magyp.gob.ar / mdangelo@magyp.gob.ar</li></ul>');
const marker84=L.marker([-27.0965579711142, -54.89522361261332]).addTo(map);
marker84.bindPopup('<h1>Información Agropecuaria y Forestal</h1><ul><li> Av. de las Americas 1335, Aristobulo del Valle</li><li>(03755)15-609-918</li><li>mlopez@magyp.gob.ar / rfalconierdiez@magyp.gob.ar / mdangelo@magyp.gob.ar</li></ul>');//ACA
const marker85=L.marker([-27.485199523941734, -55.11113935670079]).addTo(map);
marker85.bindPopup('<h1>Información Agropecuaria y Forestal</h1><ul><li> Juan Manuel de Rosas 325 (esq. Tinogasta)</li><li>(03755)425-772</li><li>mlopez@magyp.gob.ar / rfalconierdiez@magyp.gob.ar / mdangelo@magyp.gob.ar</li></ul>');

const marker86=L.marker([-27.019409035423124, -54.68511575856917]).addTo(map);
marker86.bindPopup('<h1>Información Agropecuaria y Forestal</h1><ul><li>Adolfo J. Pomar y Pedro Núñez s/n, 2 de Mayo</li><li>-</li><li>mlopez@magyp.gob.ar / rfalconierdiez@magyp.gob.ar / mdangelo@magyp.gob.ar</li></ul>');
const marker87=L.marker([-27.909782515189576, -55.751143308568345]).addTo(map);
marker87.bindPopup("<h1>Información Agropecuaria y Forestal</h1><ul><li>Ministerio del Agro y la Producción de Misiones / OIT Santa Rita / Belgrano y Suipacha - INTA Apóstoles</li><li>11-2249-6708 (Ing. Martín López)/  11-6155-7305 (Ing. Marcelo Falconier)/ 11-2262-9998 (Ing. Marina D'Angelo)</li><li>mlopez@magyp.gob.ar / rfalconierdiez@magyp.gob.ar / mdangelo@magyp.gob.ar</li></ul>");
const marker88=L.marker([-27.428869955115907, -55.891579570227236]).addTo(map);
marker88.bindPopup('<h1>Dirección de Cultivos Extensivos</h1><ul><li>Ruta 12 Km. 7,5 - Centro Regional El Zaiman (INTA), Posadas</li><li>(0376)443-2502 /(03761)15-456-0363 (celular Alberto Re -Delegado)</li><li>delmisiones@magyp.gob.ar</li></ul>');
const marker89=L.marker([-27.367160343354968, -55.8945819739046]).addTo(map);
marker89.bindPopup('<h1>Dirección Nacional de Control Comercial Agropecuario</h1><ul><li>Colón 1815  4to. Piso, Posadas</li><li>(03764)309-580 /(03764)606-392</li><li>agenciaposadas@magyp.gob.ar</li></ul>');

//neuquen
const marker90=L.marker([-38.950469525495066, -68.05080460968118]).addTo(map);
marker90.bindPopup('<h1>Secretaría de Agricultura Familiar, Campesina e Indígena</h1> <ul><li>Entre Ríos 410 (CP 8300) - Neuquén capital</li><li>(0299) 15-4199-609</li><li>safneuquen@magyp.gob.ar / mponti@magyp.gob.ar</li></ul>');
const marker91=L.marker([-38.95454365115102, -68.06513912199334]).addTo(map);
marker91.bindPopup('<h1>Información Agropecuaria y Forestal</h1> <ul><li>INTA San Martín de los Andes /Municipio de Junín de los Andes, Patagonia Norte, Neuquen</li><li>11-6152-7649 (Ing. Gabriel Zalazar)/ 11-2248-7449 (Ing. Nahuel Trípodi)</li><li>gzalazar@magyp.gob.ar / ntripo@magyp.gob.ar</li></ul>');

//rio negro
const marker92=L.marker([-40.80901965732103, -62.99396813540852]).addTo(map);
marker92.bindPopup('<h1>Secretaría de Agricultura Familiar, Campesina e Indígena</h1><ul><li>Sin oficina (referente Ángel Guttman presta servicios en Belgrano 544 5° piso, Viedma, CP 8500)</li><li>(02920)427-618 / (02920)15-696-483 (referente Ángel Guttmann)</li><li>rrhh-rng-ssaf@hotmail.com / aguttmann@magyp.gob.ar</li></ul>');
const marker93=L.marker([-40.808129838081456, -62.99563408625772]).addTo(map);
marker93.bindPopup('<h1>Información Agropecuaria y Forestal</h1><ul><li>Delegación El Bolsón de la Subsecretaría de Bosques y Servicio Forestal Andino, Patagonia Andina Sur(Río Negro y Chubut)</li><li>11-6171-6073 (Ing. Guillermo Melzner)</li><li>gmelzner@magyp.gob.ar</li></ul>');
const marker94=L.marker([-39.02974985138062, -67.55783524652402]).addTo(map);
marker94.bindPopup('<h1>Información Agropecuaria y Forestal</h1><ul><li>Centro Regional Patagonia Norte, SENASA, Patagonia Valles Irrigados (Gral. Roca)</li><li>11-2289-6809 (Ing. Julio García)</li><li>jugarcia@magyp.gob.ar</li></ul>');

//salta
const marker95=L.marker([-24.893394176328172, -65.47412800837539]).addTo(map);
marker95.bindPopup('<h1>Secretaría de Agricultura Familiar, Campesina e Indígena</h1><ul><li>Ruta Nacional 68 - Km 172 - INTA</li><li>(0387)422-1117 / (0387)490-2098</li><li>bsanz@magyp.gob.ar / safsalta@magyp.gob.ar</li></ul>');
const marker96=L.marker([-24.891997696277397, -65.46924066713437]).addTo(map);
marker96.bindPopup('<h1>Información Agropecuaria y Forestal</h1><ul><li>EEA INTA Salta</li><li>11-6185-4131 (Ing. Andrea Giacobbi)</li><li>agiacobbi@magyp.gob.ar</li></ul>');
const marker97=L.marker([-24.81464947813648, -65.42957569792273]).addTo(map);
marker97.bindPopup('<h1>Dirección de Cultivos Extensivos</h1><ul><li>Av. Gato y Mancha 1460</li><li>(0387)431-1340</li><li>delsalta@magyp.gob.ar</li></ul>');
const marker98=L.marker([-24.789553204732076, -65.4054200647869]).addTo(map);
marker98.bindPopup('<h1>Secretaría de Agricultura Familiar, Campesina e Indígena</h1><ul><li>Vicente Lopez 50 (CP 4400)</li><li>-</li><li>agenciasalta@magyp.gob.ar</li></ul>');

//san juan
const marker99=L.marker([-31.5359449053074, -68.54385307202689]).addTo(map);
marker99.bindPopup('<h1>Secretaría de Agricultura Familiar, Campesina e Indígena</h1> <ul><li>Rivadavia 665 2° Piso (CP 5400)</li><li>(0264)421-3220 / (0264)504-5935</li><li>safsanjuan@magyp.gob.ar / srodriguez@magyp.gob.ar</li></ul>');
const marker100=L.marker([-31.610335290479178, -68.54652466925292]).addTo(map);
marker100.bindPopup('<h1>Información Agropecuaria y Forestal</h1> <ul><li>EEA INTA San Juan, Cuyo</li><li>11-2249-6894 (Ing. María Julia Nosetti)</li><li>mnosetti@magyp.gob.ar</li></ul>');

//san luis
const marker101=L.marker([-33.29741815954665, -66.34055557557006]).addTo(map);
marker101.bindPopup('<h1>Secretaría de Agricultura Familiar, Campesina e Indígena</h1> <ul><li>Chacabuco 1132, San Luis Capital </li><li>(0266) 442-4732 / (0266) 443-1771</li><li>safsanluis@gmail.com / safsanluis@magyp.gob.ar</li></ul>');
const marker102=L.marker([-33.65092644292477, -65.42066101192071]).addTo(map);
marker102.bindPopup('<h1>Secretaría de Agricultura Familiar, Campesina e Indígena</h1> <ul><li>Intersección Ruta Nacional 7 y Ruta Nacional 8, Villa Mercedes(interior EEA INTA San Luis)</li><li>(02657) 440-799</li><li>safsanluis@gmail.com / safsanluis@magyp.gob.ar</li></ul>');

//santa cruz
const marker103=L.marker([-47.75032303819035, -65.90022936395052]).addTo(map);
marker103.bindPopup('<h1>Dirección Nacional de Coordinación y Fiscalización Pesquera</h1> <ul><li>Don Bosco N° 1431, Puerto Deseado</li><li>(0297)487-0640</li><li>pescapuertodeseado@yahoo.com.ar</li></ul>');
const marker104=L.marker([-46.47442247618488, -67.49771600625117]).addTo(map);
marker104.bindPopup('<h1>Dirección Nacional de Coordinación y Fiscalización Pesquera</h1> <ul><li>Puerto Caleta Paula - OF 13 Pesca Nación</li><li>(0297)483-6008</li><li>pescacaletapaula@yahoo.com.ar</li></ul>');

//santa fe
const marker105=L.marker([-29.25847933958658, -59.7428022743548]).addTo(map);
marker105.bindPopup('<h1>Secretaría de Agricultura Familiar, Campesina e Indígena</h1><ul><li>Ruta Nac. 11, Km. 773, Reconquista(CP 3567), Santa Fe</li><li>(03482)420-117 / 427-021 (int. 131) / 11-3695-3537</li><li>safsantafe@magyp.gob.ar / dtomadin@magyp.gob.ar</li></ul>');
const marker106=L.marker([-29.1195223461345, -59.65929787874237]).addTo(map);
marker106.bindPopup('<h1>Dirección de Cultivos Extensivos</h1><ul><li>Calle 15 Nº 465, Avellaneda</li><li>(03482)481-472 /(03482)487-172 (Juan Carlos Rimoldi -Delegado)</li><li>delavellaneda@magyp.gob.ar</li></ul>');
const marker107=L.marker([-31.251476897654396, -61.47299810877512]).addTo(map);
marker107.bindPopup('<h1>Dirección de Cultivos Extensivos</h1><ul><li>Francia 459, Rafaela</li><li>(03492)425-195 /(03492)455-195 (Alejandro Mergen -Delegado)</li><li>delrafaela@magyp.gob.ar</li></ul>');
const marker108=L.marker([-32.81915317731282, -61.40301627373173]).addTo(map);
marker108.bindPopup('<h1>Dirección de Cultivos Extensivos</h1><ul><li>Lavalle 1466 - INTA, Cañada de Gómez</li><li>(03492)422-051 /(0351)15-306-5346 (celular Martín Oitana -Delegado)</li><li>delcañadadegomez@magyp.gob.ar</li></ul>');
const marker109=L.marker([-33.04431039401404, -61.17116729092441]).addTo(map);
marker109.bindPopup('<h1>Dirección de Cultivos Extensivos</h1><ul><li>Fray Luis Beltrán 2438, Casilda</li><li>(03464)422-949 /(03464)421-566 (Eduardo Molina -Delegado)</li><li>delcasilda@magyp.gob.ar</li></ul>');
const marker110=L.marker([-33.73957198515072, -61.967509897644774]).addTo(map);
marker110.bindPopup('<h1>Dirección de Cultivos Extensivos / Dirección Nacional de Control Comercial Agropecuario</h1><ul><li>Saavedra 1321, Venado Tuerto</li><li>DCE:(03462)421-015 /(03462)425-691 (Sergio Leguizamón - Delegado) •DNCCA:(03462)313-840 /(03462)15-303-750</li><li>DCE:agenciarosario@magyp.gob.ar •DNCCA:agenciarosario@magyp.gob.ar</li></ul>');
const marker111=L.marker([-32.948006497215154, -60.629105583001035]).addTo(map);
marker111.bindPopup('<h1>Dirección Nacional de Control Comercial Agropecuario</h1><ul><li>Av. Belgrano 836, Rosario</li><li>(0341)421-3845</li><li>agenciarosario@magyp.gob.ar</li></ul>');

//santiago del estero
const marker124=L.marker([-27.78427025459129, -64.2571887585502]).addTo(map);
marker124.bindPopup('<h1>Secretaría de Agricultura Familiar, Campesina e Indígena</h1><ul><li>Av. Roca Sur 527 (C.P 4200)</li><li>(0385)421-7017</li><li>earce@magyp.gob.ar / safsantiagodelestero@magyp.gob.ar</li></ul>');
const marker125=L.marker([-27.791444056568224, -64.25534551436452]).addTo(map);
marker125.bindPopup('<h1>Información Agropecuaria y Forestal</h1><ul><li>Dirección General de Bosques y Fauna de Santiago del Estero, Parque Chaqueño</li><li>11-2262-6183 (Téc. Leandro Arce)/ 11-3690-5406 (Téc. José Alberto Mitre)</li><li>larce@magyp.gob.ar / jmitre@magyp.gob.ar</li></ul>');
const marker126=L.marker([-27.78663845756993, -64.2562267566919]).addTo(map);
marker126.bindPopup('<h1>Información Agropecuaria y Forestal</h1><ul><li>25 de Mayo 137 - Oficina 1, Quimili</li><li>(0385)15-486-3874 /(03843)421-330 (Rodolfo Lobos - Delegado)</li><li>delquimili@magyp.gob.ar</li></ul>');
const marker127=L.marker([-27.790071562306927, -64.26358220829269]).addTo(map);
marker127.bindPopup('<h1>Dirección Nacional de Control Comercial Agropecuario</h1><ul><li>Garibaldi 44 - 1° piso</li><li>DCE:(0385)421-6752 /(0381)15-640-3821 (celular Juan Rojas - Delegado) •DNCCA:(0385)422-1406 /15-3196-4771</li><li>DCE: delsantiagodelestero@magyp.gob.ar •DNCCA: agenciasantiago@magyp.gob.ar</li></ul>');

//tierra del fuego
const marker128=L.marker([-54.809537843068156, -68.31713089490235]).addTo(map);
marker128.bindPopup('<h1>Dirección Nacional de Coordinación y Fiscalización Pesquera</h1><ul><li>Av. San Martín N° 1401, 3° piso - Edificio Subsecretaria de Recursos Naturales, Ushuaia</li><li>(02901)4530-566 / (02901)15-412-283</li><li>pescanacion@hotmail.com.ar / pescanacionushuaia@gmail.com / delushuaia@magyp.gob.ar</li></ul>');

//tucuman
const marker129=L.marker([-26.825734072713267, -65.19364938311107]).addTo(map);
marker129.bindPopup('<h1>Secretaría de Agricultura Familiar, Campesina e Indígena / Dirección de Cultivos Extensivos</h1><ul><li>Haití 117, San Miguel de Tucuman</li><li>SAF:(0381)455-1147 /(0381)431-8387 •DCE:(0381)455-1433 /(0381)425-0849 (Gustavo Frías Silva-Delegado)</li><li>SAF: saftucuman@magyp.gob.ar •DCE: deltucuman@magyp.gob.ar</li></ul>');
const marker130=L.marker([-27.017594483076223, -65.37952070089645]).addTo(map);
marker130.bindPopup('<h1>Información Agropecuaria y Forestal</h1><ul><li>EEA INTA Famaillá</li><li>11-6749-8790 (Ing. Mario Hernán Feyling Montero)</li><li>mfeylingmontero@magyp.gob.ar</li></ul>');

/*
const marker=L.marker([]).addTo(map);
marker.bindPopup('Test text');
*/

