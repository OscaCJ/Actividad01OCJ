const Productos = [
	{
		"id": 1,
		"nombre": "Baguette",
		"descripcion": "Es una variedad de pan originaria de Francia que se caracteriza por una forma alargada. Es uno de los formatos de pan más conocidos, producidos y consumidos a nivel internacional. Contiene harina de trigo, agua, levadura y sal. ",
		"precioUnitario": 50.0,
		"calificacion": 4.5,
		"disponibles": 200,
		"categoria": "Pan salado",
		"imagen": require("../Assets/Baguette.jpg")
	},
	{
		"id": 2,
		"nombre": "Ciabatta",
		"descripcion": "Es un pan italiano clásico con un alto contenido líquido, al menos el 70% del peso total de la harina, generalmente sin lípidos pero se le puede añadir aceite de oliva, reconocible por el gran panal de la miga y la corteza generalmente crujiente. Este es uno de los panes más duros y crujientes debido a su corteza. ",
		"precioUnitario": 10.0,
		"calificacion": 4.5,
		"disponibles": 200,
		"categoria": "Pan salado",
		"imagen": require("../Assets/Ciabatta.jpg")
	},
	{
		"id": 3,
		"nombre": "Bolillo",
		"descripcion": "El bolillo es un pan blanco, salado, económico y popular en México y Centroamérica. Se elabora con harina de trigo, levadura, agua y sal. El bolillo es crujiente por fuera y suave y esponjoso por dentro. Se consume principalmente en el desayuno. ",
		"precioUnitario": 5.0,
		"calificacion": 4.5,
		"disponibles": 200,
		"categoria": "Pan salado",
		"imagen": require("../Assets/bolillos.jpg")
	},
	{
		"id": 4,
		"nombre": "Telera",
		"descripcion": "La telera es un pan de sal y blanco elaborado con harina de trigo, levadura, agua y sal. Es uno de los panes arquetípicos de la gastronomía mexicana, y se usa en diversos antojitos populares. Sus principales características son su color, suavidad, tamaño y su forma. Su migajón es suave y esponjoso, su corteza levemente bronceada gracias al uso ligero de azúcar en la masa." ,
		"precioUnitario": 5.0,
		"calificacion": 4.5,
		"disponibles": 200,
		"categoria": "Pan salado",
		"imagen": require("../Assets/Telera.jpg")
	},
	{
		"id": 5,
		"nombre": "Cemita",
		"descripcion": "Es un pan blanco típico en el estado de Puebla, México. Contiene harina de trigo, agua, leche, huevos, levadura, mantequilla y sal. Son panes redondos, de tamaño mediano, un poco aplastados. Su corteza es crujiente y decorada con ajonjolí. ",
		"precioUnitario": 10.0,
		"calificacion": 4.5,
		"disponibles": 200,
		"categoria": "Pan salado",
		"imagen": require("../Assets/cemita.jpg")
	},
	{
		"id": 6,
		"nombre": "Pan de caja",
		"descripcion": "El pan de caja es un producto de panificación que se elabora con harina, levadura, sal, y otros ingredientes. Se hornea en un molde rectangular y se puede encontrar en diferentes variedades, como blanco, integral, multigrano o multicereales. El pan de caja es un alimento básico y versátil que se puede utilizar para hacer sándwiches, toasts, canapés y picatostes.",
		"precioUnitario": 50.0,
		"calificacion": 4.5,
		"disponibles": 200,
		"categoria": "Pan salado",
		"imagen": require("../Assets/panDeCaja.jpg")
	},
	{
		"id": 7,
		"nombre": "Croissant",
		"descripcion": "Es una pieza de panadería de origen francés. El croissant se elabora con una pasta de hojaldre que contiene levadura de panadería. Este pan dulce es ideal para el desayuno o la merienda, y a menudo se sirve solo o con rellenos como chocolate, jamón y queso, o crema de almendra. Su nombre proviene del francés y significa “creciente”, en referencia a su forma.",
		"precioUnitario": 15.0,
		"calificacion": 4.5,
		"disponibles": 200,
		"categoria": "Pan dulce",
		"imagen": require("../Assets/croissant.jpg")
	},
	{
		"id": 8,
		"nombre": "Concha vainilla",
		"descripcion": "Es un pan dulce mexicano que tiene sabor a vainilla y una capa de azúcar en la parte superior. Es uno de los panes más populares en México y se puede encontrar en diferentes tamaños, formas y colores. Las conchas de vainilla se elaboran con harina, manteca y azúcar, y se inspiran en la forma de las conchas de mar. ",
		"precioUnitario": 15.0,
		"calificacion": 4.5,
		"disponibles": 200,
		"categoria": "Pan dulce",
		"imagen": require("../Assets/conchas1.jpg")
	},
	{
		"id": 9,
		"nombre": "Concha chocolate",
		"descripcion": "Es un pan dulce mexicano que tiene una cubierta de chocolate. Se caracteriza por su textura esponjosa y su forma similar a una concha de mar. La concha de chocolate se elabora con una pasta de harina, azúcar y manteca con sabor a chocolate. Puede ser artesanal y tener un buen sabor.",
		"precioUnitario": 15.0,
		"calificacion": 4.5,
		"disponibles": 200,
		"categoria": "Pan dulce",
		"imagen": require("../Assets/conchas2.jpg")
	},
	{
		"id": 10,
		"nombre": "Cuernitos",
		"descripcion": "Los cuernitos son un pan pequeño y hojaldrado con dos puntas que se asemejan a cuernos. Se elaboran con grasa y pueden comerse solos o con rellenos. ",
		"precioUnitario": 10.0,
		"calificacion": 4.5,
		"disponibles": 200,
		"categoria": "Pan dulce",
		"imagen": require("../Assets/Cuernitos.jpg")
	},
	{
		"id": 11,
		"nombre": "Orejitas",
		"descripcion": "Las orejitas son un postre mexicano tradicional que se prepara con masa de hojaldre enrollada en forma de oreja y rellena con dulce.",
		"precioUnitario": 10.0,
		"calificacion": 4.5,
		"disponibles": 200,
		"categoria": "Pan dulce",
		"imagen": require("../Assets/Orejas.jpg")
	},
	{
		"id": 12,
		"nombre": "Besos",
		"descripcion": "Pan de dulce hecho a partir de dos medias esferas de masa tipo bizcocho, unidas con mermelada y cubiertas de mantequilla y azúcar glass. Su nombre se debe a la simulación de un beso entre panes.",
		"precioUnitario": 15.0,
		"calificacion": 4.5,
		"disponibles": 200,
		"categoria": "Pan dulce",
		"imagen": require("../Assets/besos.jpg")
	},
	{
		"id": 13,
		"nombre": "Bisquet",
		"descripcion": "Es un pan tradicional mexicano que se elabora con mantequilla y harina. Se caracteriza por su textura suave y su sabor a mantequilla. El bisquet es un bollo versátil que se puede acompañar de rellenos dulces o salados. La palabra bisquet es una adaptación gráfica de la palabra inglesa biscuit.",
		"precioUnitario": 10.0,
		"calificacion": 4.5,
		"disponibles": 200,
		"categoria": "Pan dulce",
		"imagen": require("../Assets/bisquets.jpg")
	},
	{
		"id": 14,
		"nombre": "Rol de canela",
		"descripcion": "Es un tipo de pan dulce creado en la década de 1920 en Suecia y Dinamarca. Consiste en un rollo de masa abriochada con canela y mezcla de azúcar (y pasas en algunos casos), rociado sobre una delgada capa de mantequilla. La masa es enrollada, cortada en porciones individuales y horneada. A los rollos de canela se les glasea con azúcar o una crema de queso",
		"precioUnitario": 20.0,
		"calificacion": 4.5,
		"disponibles": 200,
		"categoria": "Pan dulce",
		"imagen": require("../Assets/RolesCanela.jpg")
	},
	{
		"id": 15,
		"nombre": "Panqué de elote",
		"descripcion": "Pan dulce esponjoso y suave horneado en molde, hecho de harina, elote blanco, huevos, leche, azúcar, canela y otros ingredientes y horneado en molde",
		"precioUnitario": 50.0,
		"calificacion": 4.5,
		"disponibles": 200,
		"categoria": "Repostería",
		"imagen": require("../Assets/panqueElote.jpg")
	},
	{
		"id": 16,
		"nombre": "Panqué de chocolate",
		"descripcion": "Pan dulce esponjoso y suave horneado en molde, hecho de harina, cocoa , huevos, leche, azúcar, canela y otros ingredientes.",
		"precioUnitario": 60.0,
		"calificacion": 4.5,
		"disponibles": 200,
		"categoria": "Repostería",
		"imagen": require("../Assets/panqueChocolate.jpg")
	},
	{
		"id": 17,
		"nombre": "Panqué de nuez",
		"descripcion": "Pan dulce esponjoso y suave horneado en molde, hecho de harina, trozos de nuez, huevos, leche, azúcar, canela y otros ingredientes.",
		"precioUnitario": 50.0,
		"calificacion": 4.5,
		"disponibles": 200,
		"categoria": "Repostería",
		"imagen": require("../Assets/panqueNuez.jpg")
	},
	{
		"id": 18,
		"nombre": "Panqué de vainilla",
		"descripcion": "Pan dulce esponjoso y suave horneado en molde, hecho de harina, vainilla, huevos, leche, azúcar, canela y otros ingredientes.",
		"precioUnitario": 50.0,
		"calificacion": 4.5,
		"disponibles": 200,
		"categoria": "Repostería",
		"imagen": require("../Assets/panqueVainilla.jpg")
	},
	{
		"id": 19,
		"nombre": "Panque de naranja",
		"descripcion": "Pan dulce esponjoso y suave horneado en molde, hecho de jugo y ralladura de naranja, huevos, leche, azúcar, canela y otros ingredientes.",
		"precioUnitario": 50.0,
		"calificacion": 4.5,
		"disponibles": 200,
		"categoria": "Repostería",
		"imagen": require("../Assets/panqueNaranja.jpg")
	},
	{
		"id": 20,
		"nombre": "Strudel de Manzana",
		"descripcion": "Postre típico tradicional de la cocina austriaca y del sur de Alemania. Es un rollo muy fino de masa, a veces también de hojaldre, relleno de compota de manzana, azúcar, canela, pasas y pan rallado que una vez preparado se cocina en el horno. ",
		"precioUnitario": 70.0,
		"calificacion": 4.5,
		"disponibles": 200,
		"categoria": "Repostería",
		"imagen": require("../Assets/StrudelManzana.jpg")
	}
]

export default Productos;