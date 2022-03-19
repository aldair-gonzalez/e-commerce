/*
Incorporar Arrays
*/

class Producto {
    constructor(producto,id,precio,imagen,categoria,subCategoria,ventas,info){
        this.producto = producto;
        this.id =parseInt(id);
        this.precio = parseFloat(precio);
        this.imagen = imagen;
        this.categoria = categoria.toLowerCase();
        this.subCategoria = subCategoria.toLowerCase();
        this.ventas = parseInt(ventas);
        this.info = info;
        this.cantidad = 1;
    }
    addCantidad(){
        return this.cantidad++;
    }
}

arrProductos.push(new Producto(
    'American Professional II Telecaster®',
    3252956,
    16039,
    'img/productos/fenderTelecasterIIjpg.webp',
    'guitarras',
    'telecaster',
    5,
    "La American Professional II Telecaster® se basa en más de setenta años de innovación, inspiración y evolución para satisfacer las demandas del músico actual. Nuestro popular mástil Deep  C  ahora tiene bordes de diapasón redondeados, un acabado satinado Super-Natural y un talón de mástil recién esculpido para una sensación sumamente cómoda y de fácil acceso al registro superior. Las nuevas pastillas de bobina simple V-Mod II Telecaster son más articuladas que nunca y brindan el sonido vibrante, chasquido y gruñido que hizo famosa a la Tele. El nuevo puente de carga superior / cuerdas a través con selletas de bala compensadas, es nuestro puente Tele más cómodo y flexible hasta el momento: conserva el tono clásico de la montura de latón y proporciona una entonación excelente y opciones de configuración flexibles, lo que permite adaptar la tensión y el tono de las cuerdas a tu gusto. La American Pro II Telecaster ofrece una familiaridad instantánea y una versatilidad sónica que sentirás y escuchará de inmediato, con amplias mejoras marcarán un nuevo estándar para los instrumentos profesionales ."
))
arrProductos.push(new Producto(
    'American Professional II Telecaster® Deluxe',
    2487645,
    25240,
    'img/productos/ericanProfessionalIITelecasterDeluxe.webp',
    'guitarras',
    'telecaster',
    12,
    "La American Professional II Telecaster® Deluxe se basa en más de setenta años de innovación, inspiración y evolución para satisfacer las demandas del músico actual. Nuestro popular mástil Deep  C  ahora tiene bordes de diapasón redondeados, un acabado satinado Super-Natural y un talón de mástil recién esculpido para una sensación sumamente cómoda y de fácil acceso al registro superior. Las nuevas pastillas de bobina simple V-Mod II DoubleTap ™ son más articuladas que nunca, brindan tonos humbucking completos y contundentes sonidos robustos de bobina simple . El puente Tele cut de 3 selletas de carga superior / cuerdas a través brinda un tono y una sensación de Tele clásica con una silueta elegante que permite adaptar la tensión y el tono de cada cuerda a tu gusto. La American Pro II Telecaster ofrece una familiaridad instantánea y una versatilidad sónica que sentirás y escuchará de inmediato, con amplias mejoras marcarán un nuevo estándar para los instrumentos profesionales ."
))
arrProductos.push(new Producto(
    'George Harrison Telecaster®',
    6874266,
    72000,
    'img/productos/GeorgeHarrisonTelecaster.webp',
    'guitarras',
    'telecaster',
    3,
    "Admirado por su capacidad creativa para escribir canciones y su forma de tocar inspiradora, George Harrison es considerado como uno de los principales iconos de la historia en la música. Para honrar la admirable carrera de Harrison, hemos creado la George Harrison Rosewood Telecaster, una conmemoración de edición limitada que reproduce el estilo y el sonido de George de una manera muy elegante."
))
arrProductos.push(new Producto(
    '60th Anniversary Jaguar®',
    76346,
    65250,
    'img/productos/60thAnniversaryJaguar.webp',
    'guitarras',
    'jaguar',
    7,
    "Los modelos Jaguar del 60º aniversario celebran la introducción del instrumento offset de gama alta de Fender de 1962. La Jaguar se presentó como la oferta premium de Fender y se promocionó como una guitarra más rápida y cómoda. La Jaguar del 60º aniversario es instantáneamente reconocible con su icónico cuerpo de cintura descentrada, escala corta de 24 ”, elegante diapasón de palisandro ribeteado con incrustaciones de posición de bloques perlados y pala pintada a juego. Otros detalles correctos de la época incluyen un cuerpo de aliso con acabado de laca de nitrocelulosa, circuito de lead / ritmo, clavijero F y sistema de trémolo Jaguar con sordina ajustable. Un par de pastillas Jaguar del 60º aniversario proporcionan una variedad de tonos inspiradores, que van desde sonidos rítmicos cortantes hasta tonos solistas cálidos y redondos. La guitarra cuenta con un mástil grabado con el logotipo del 60 aniversario, que también está bordado en el interior del estuche rígido incluido. Ofrecida en dos colores de inspiración vintage, Mystic Dakota Red y Mystic Lake Placid Blue, este modelo estará disponible en cantidades muy limitadas."
))
arrProductos.push(new Producto(
    '60th Anniversary Ultra Luxe Jaguar®',
    7824675,
    65250,
    'img/productos/60thAnniversaryUltraLuxeJaguar.webp',
    'guitarras',
    'jaguar',
    3,
    "Para los músicos que exigen lo último en rendimiento y tono, la American Ultra es nuestra serie más avanzada de guitarras y bajos. Celebrando la introducción del instrumento compensado de primera línea de Fender del '62, la 60th Anniversary American Ultra Luxe Jaguar® es una impresionante versión moderna de uno de los modelos de gama alta más exclusivos de Fender.Esta Jaguar presenta un mástil en D aumentado Ultra Luxe con una escala de 25.5 para una prestación moderna. El talón del mástil cónico permite un fácil acceso al registro más alto y los bordes del diapasón ultra redondeados permiten una comodidad infinita al tocar. Un veloz diapasón de radio compuesto de 10-14 con 22 trastes medium-jumbo de acero inoxidable significa solos precisos y sin esfuerzo, mientras que las pastillas humbucking Custom Double Tap™ y las opciones de cableado avanzadas brindan infinitas posibilidades tonales.Los contornos esculpidos de la parte trasera del cuerpo son tan hermosos como funcionales, lo que aumenta la accesibilidad y la comodidad. Otras características incluyen clavijero con bloqueo sellado, herrajes cromados y una cejilla TUSQ™. Este instrumento de última generación y edición limitada te inspirará a llevar tu forma de tocar a nuevas alturas. Incluye estuche rígido moldeado de primera calidad."
))
arrProductos.push(new Producto(
    'Johnny Marr Jaguar®',
    35753709,
    65250,
    'img/productos/JohnnyMarrJaguar.webp',
    'guitarras',
    'jaguar',
    5,
    "Johnny Marr es conocido por su talento como guitarrista dinámico e influyente, y como el arreglista musical detrás del cuarteto de Manchester los Smiths, Marr contribuyó a definir y liderar virtualmente el pop británico durante los 80. Un maestro de la melodía, y la superposición de texturas, Marr siempre ha aportado su inconfundible sonido con The The, Electronic, los Pretenders y Johnny Marr And The Healers, y en la actualidad con Modest Mouse, o The Cribs, en un sinfín de actuaciones como artista invitado. La Johnny Marr Jaguar es un fantástico modelo no estándar tan distintivo como los sonidos que Marr obtiene con él, y que reúne una amalgama única de características especiales, ideal para un guitarrista no convencional, de marcada personalidad."
))
arrProductos.push(new Producto(
    'American Ultra Stratocaster®',
    346973980,
    47000,
    'img/productos/AmericanUltraStratocaster.webp',
    'guitarras',
    'stratocaster',
    11,
    "La serie American Ultra de guitarras y bajos es la más avanzada para músicos exigentes que exigen lo último en precisión, rendimiento y tono. La American Ultra Stratocaster presenta un exclusivo perfil de mástil de  D moderna con bordes de diapasón redondeados para horas de comodidad, y la forma del talón del mástil permite un fácil acceso al registro más alto. Un veloz diapasón de radio compuesto de 10 a 14 con 22 trastes medium jumbo para solos precisos y sin esfuerzo, mientras que las pastillas Ultra Noiseless ™ y las opciones avanzadas de cableado brindan infinitas posibilidades de sonido sin zumbidos. Este versátil instrumento de última generación te inspirará a llevar tu interpretación a nuevas alturas. Otras características incluyen clavijeros de bloqueo sellados, herrajes cromados y cejilla de hueso. Incluye estuche rígido moldeado de primera calidad."
))
arrProductos.push(new Producto(
    'JV Modified 60s Stratocaster®',
    34630754,
    32616,
    'img/productos/JVModified60sStratocaster.webp',
    'guitarras',
    'stratocaster',
    12,
    "La serie JV Modified combina la estética clásica con una interpretación moderna para adaptarse a las necesidades del guitarrista actual. Tomando como referencia las reediciones Japanese Vintage, ahora muy buscadas, de principios de los años 80, las guitarras JV Modified son una versión refinada de un clásico moderno.La 60 Stratocaster tiene un cuerpo de tilo resonante y está cargada con un conjunto de tres pastillas de bobina simple de estilo vintage para un tono Fender inconfundible. Un potenciómetro push-pull en el tono 2 agrega la pastilla del mástil a las posiciones 1 y 2 del interruptor para obtener aún más posibilidades tonales. El mástil de arce suave en forma de V tiene un acabado satinado suave como la seda y el diapasón de arce de 9,5 de radio y los trastes médium jumbo brindan una comodidad extra. Para el músico que busca instrumentos Fender clásicos con un toque especial, la serie JV Modified ofrece una combinación única de estilo Fender clásico y toque moderno."
))
arrProductos.push(new Producto(
    'Live Custom Hybrid Oak',
    3597530,
    125000,
    'img/productos/LiveCustomHybridOak.webp',
    'baterias',
    'hybrid',
    2,
    "Yamaha ha mejorado el rango dinámico de las nuevas baterías Live Custom acentuando su ataque y proyección. La nueva batería híbrida dede 7 capas de roble/ resinafenólica y el peso para el realce de graves ofrecen una gran potencia y articulación especialmente para tocar en vivo. También la nueva técnica de acabado basada en el proceso tradicional japonés «UZUKURI» destaca la belleza natural del grano del roble."
))
arrProductos.push(new Producto(
    'PHX',
    294602,
    130000,
    'img/productos/PHX.webp',
    'baterias',
    'hybrid',
    2,
    "Las baterías prototipo, que son la base de lo que posteriormente serán las baterías de Yamaha, se crean en el laboratorio de percusión en donde YAMAHA busca la esencia de las baterías. Con un concepto completamente nuevo, la serie PHX (conocida también como Phoenix) representa la cumbre de la excelencia en este proceso de creación de prototipos. Fabricados a mano por técnicos expertos, los modelos de la serie PHX se basan en 40 años de historia y experiencia, y representan la búsqueda acérrima de Yamaha de lo más avanzado en baterías y una fuente de inspiración para los próximos 40 años."
))
arrProductos.push(new Producto(
    'Recording Custom',
    87346064,
    18430,
    'img/productos/RecordingCustom.webp',
    'baterias',
    'compacta',
    3,
    "En colaboración con el legendario artista Steve Gadd, Yamaha ha elevado la icónica serie Recording Custom con nuevos elementos de diseño, consiguiendo un sonido más definido y un timbre aun más redondo y profundo. Todos los vasos construidos con 6 capas de abedul norteamericano con ángulo de corte de 30 grados que se complementan con lugs de alta tensión de nuevo diseño con un peso calculado para realzar las frecuencias graves. El resultado es un kit de batería muy fácil de utilizar y de afinar que redefine su ya clásico sonido. Idóneo para todos los estilos de tocar la batería y en todos los entornos."
))
arrProductos.push(new Producto(
    'Stage Custom Birch',
    73460360,
    18950,
    'img/productos/StageCustomBirch.webp',
    'baterias',
    'compacta',
    7,
    "Al igual que ocurrió con la introducción de la Stage Custom en 1995, Yamaha vuelve a marcar las pautas de referencia en calidad y sonido. La nueva Stage Custom, fiel a su herencia, se construye en madera de abedul 100% e introduce mejoras en los herrajes."
))
arrProductos.push(new Producto(
    'Serie DTX8',
    38673560,
    64354,
    'img/productos/SerieDTX8.webp',
    'baterias',
    'electrica',
    7,
    "La serie DTX8 viene equipada con el módulo DTX-PRO y nuevos pads de tambores que son tan hermosos como los tambores acústicos reales."
))
arrProductos.push(new Producto(
    'Serie DTX6',
    76353400,
    22600,
    'img/productos/SerieDTX6.webp',
    'baterias',
    'electrica',
    7,
    "La serie DTX6 ofrece una brillante creatividad y un desempeño excelente en una configuración compacta."
))
arrProductos.push(new Producto(
    'Serie DTX402',
    783460346,
    9900,
    'img/productos/SerieDTX402.webp',
    'baterias',
    'electrica',
    13,
    "La serie DTX402 es la culminación del compromiso de Yamaha como fabricante de baterías con excelente diseño y calidad de sonido."
))
arrProductos.push(new Producto(
    'La serie YC: YC61, YC73 y YC88',
    84765200,
    58999,
    'img/productos/La-serieYCYC61,YC73yYC88.webp',
    'teclados',
    'escenario',
    11,
    "YC61: Para los tecladistas centrados en órganos que necesitan un gran sonido y control de órganos, además de una variedad de sonidos de teclado en un paquete extremadamente compacto. YC73: Para los tecladistas que necesitan una variedad de sonidos centrados en el teclado con acción ponderada y movilidad. YC88: Para pianistas que necesitan la mejor sensación de acción de piano y una variedad de sonidos centrados en el teclado."
))
arrProductos.push(new Producto(
    'Serie CP88/73',
    67246859,
    49120,
    'img/productos/SerieCP8873.webp',
    'teclados',
    'escenario',
    15,
    "Innovación impulsada por la tradición"
))
arrProductos.push(new Producto(
    'PSR-EW425',
    3242590,
    10850,
    'img/productos/PSR-EW425.webp',
    'teclados',
    'portatiles',
    4,
    "Innovación impulsada por la tradición"
))
arrProductos.push(new Producto(
    'PSR-E473',
    46359031,
    10830,
    'img/productos/PSR-E473.webp',
    'teclados',
    'portatiles',
    7,
    "La serie PSR-E400 es un excelente teclado completo de 61 teclas que es ideal como instrumento de iniciación, pero también representa una alternativa sólida para los músicos experimentados. El último PSR-E473 cuenta con un generador de tonos recientemente desarrollado que ofrece impresionantes mejoras en la calidad del sonido, así como efectos de alta calidad, como delays."
))
arrProductos.push(new Producto(
    'EZ-300',
    24564452,
    5500,
    'img/productos/EZ-300.webp',
    'teclados',
    'portatiles',
    6,
    "El EZ-300 es un teclado de 61 teclas sensible al tacto, especialmente equipado con teclas iluminadas y diseñado como un modelo de teclado portátil inicial para los instrumentistas principiantes. Con estilo y completo, te permite ensayar, tocar e interpretar con una variedad de funciones de lecciones y sonido de instrumentos auténticos."
))
arrProductos.push(new Producto(
    'KSM313/NE',
    24564452,
    32880,
    'img/productos/KSM313NE.webp',
    'microfonos',
    'cinta',
    4,
    "Micrófono de cinta dual, resistente a niveles SPL extremos y de gran durabilidad; consta de un adaptador giratorio y de un maletín de protección."
))
arrProductos.push(new Producto(
    'KSM353/ED',
    7824626,
    62420,
    'img/productos/KSM353ED.webp',
    'microfonos',
    'cinta',
    9,
    "Micrófono de cinta bidireccional de gama alta que proporciona un sonido simétrico y de máxima categoría, con rechazo del sonido fuera del eje y que incluye un sistema antigolpes y un maletín. De gran durabilidad y con un transformador de doble blindaje para minimizar las pérdidas de señal y las interferencias de RF."
))
arrProductos.push(new Producto(
    'KSM9',
    42654003,
    13950,
    'img/productos/KSM9.webp',
    'microfonos',
    'condensador',
    3,
    "Micrófono cardioide de condensador vocal con un diafragma dual y patrones polares conmutables que consigue una reproducción vocal precisa. Dispone de un diafragma dual de Mylar, un sistema antigolpes, conectores chapados en oro y un maletín de aluminio."
))
arrProductos.push(new Producto(
    'BETA 87A',
    1239850990,
    7641,
    'img/productos/BETA87A.webp',
    'microfonos',
    'condensador',
    17,
    "Micrófono vocal que ofrece una respuesta suave y precisa gracias al patrón polar supercardioide."
))
arrProductos.push(new Producto(
    'KSM9HS',
    913501970,
    13950,
    'img/productos/KSM9HS.webp',
    'microfonos',
    'condensador',
    3,
    "Micrófono de condensador que captura la voz con un extraordinario nivel de detalle gracias a sus patrones polares conmutables hipercardioide y subcardioide. Ofrece unas características excepcionalmente constantes en todas las frecuencias. Dispone de un diafragma dual de Mylar, un sistema antigolpes y varios colores."
))
arrProductos.push(new Producto(
    'BETA 87C',
    793506334,
    7640,
    'img/productos/BETA87C.webp',
    'microfonos',
    'condensador',
    19,
    "Este micro vocal tiene una respuesta uniforme y personalizada para un sonido cálido y natural."
))
arrProductos.push(new Producto(
    'KSM32',
    87640200,
    13270,
    'img/productos/KSM32.webp',
    'microfonos',
    'condensador',
    5,
    "Micrófono de condensador cardioide que ofrece un sonido suave y neutral con gran carácter y que consta de un micrófono, una funda acolchada de transporte con cremallera y un adaptador giratorio."
))
arrProductos.push(new Producto(
    'KSM44A',
    3623500024,
    22970,
    'img/productos/KSM44A.webp',
    'microfonos',
    'condensador',
    4,
    "Micrófono de condensador cardioide que ofrece un sonido suave y neutral con gran carácter y que consta de un micrófono, una funda acolchada de transporte con cremallera y un adaptador giratorio."
))
arrProductos.push(new Producto(
    'BOSS GX-100',
    93467834500,
    15190,
    'img/productos/gsx-100.webp',
    'pedales',
    'digitales',
    7,
    "Micrófono de condensador cardioide que ofrece un sonido suave y neutral con gran carácter y que consta de un micrófono, una funda acolchada de transporte con cremallera y un adaptador giratorio."
))