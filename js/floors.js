var restroom = 'Restrooom';
var pLaboratory = 'Physics Laboratory';
var cLaboratory = 'Cisco and LabView Laboratories';
var gym = 'Sports Gym';
var garden = 'Garden';
var sauna = 'Sauna';
var library = 'Library<br><a href="http://www.metropolia.fi/en/services/library/" target="_blank">Information</a>';
var cafeteria = 'Lunch<br>Mon - Thu: 10:30 - 18:00<br>Fri: 10:30 - 14:00<br><a href="http://www.hyyravintolat.fi/#/9/2" target="_blank">Unicafe</a>';
var pLaboratory = 'Print Laboratory';
var auditoriumA = 'Harju Auditorium';
var auditoriumB = 'Vaara Auditorium';
var tParking = 'Teacher Parking';
var sParking = 'Student Parking';
var nurse = "Nurse";

function getFloor(floor) {
	if(floor == 0) {
		// locations
		var locations = [
			[restroom, 60.2210293, 24.8043345, 'images/toilet.png'],
			[restroom, 60.2210293, 24.8050426, 'images/toilet.png'],
			[restroom, 60.220686, 24.804461, 'images/toilet.png'], // bottom left
			[restroom, 60.220656, 24.8050992, 'images/toilet.png'], // bottom right
			[pLaboratory, 60.220974, 24.805252, 'images/laboratory.png'],
			[cLaboratory, 60.220766, 24.804232, 'images/laboratory.png'],
			[gym, 60.2214023, 24.8053967, 'images/gym.png'],
			[garden, 60.220768, 24.804734, 'images/garden.png'],
			[sauna, 60.221272, 24.805048, 'images/sauna.png']
		];

		// polygons
		var gymCoords = [
			new google.maps.LatLng(60.221417, 24.805133),
			new google.maps.LatLng(60.221337, 24.805648),
			new google.maps.LatLng(60.221523, 24.805723),
			new google.maps.LatLng(60.221555, 24.805167),
			new google.maps.LatLng(60.221417, 24.805133)
		];

		var gardenCoords = [
			new google.maps.LatLng(60.220669, 24.804547),
			new google.maps.LatLng(60.220672, 24.804983),
			new google.maps.LatLng(60.220975, 24.804993),
			new google.maps.LatLng(60.220977, 24.804560),
			new google.maps.LatLng(60.220669, 24.804547)
		];

		var pLaboratoryCoords = [
			new google.maps.LatLng(60.220993, 24.805318),
			new google.maps.LatLng(60.220903, 24.805302),
			new google.maps.LatLng(60.220904, 24.805171),
			new google.maps.LatLng(60.221000, 24.805160),
			new google.maps.LatLng(60.220993, 24.805318)
		];

		var cLaboratoryCoords = [
			new google.maps.LatLng(60.220474, 24.804162),
			new google.maps.LatLng(60.220475, 24.804411),
			new google.maps.LatLng(60.221021, 24.804373),
			new google.maps.LatLng(60.221015, 24.804100),
			new google.maps.LatLng(60.220474, 24.804162)
		];

		var saunaCoords = [
			new google.maps.LatLng(60.221353, 24.805294),
			new google.maps.LatLng(60.221369, 24.805134),
			new google.maps.LatLng(60.221342, 24.805122),
			new google.maps.LatLng(60.221331, 24.805275),
			new google.maps.LatLng(60.221353, 24.805294)
		];
		var polygons = [
			[gymCoords, '#3399FF'],
			[gardenCoords, '#006600'],
			[pLaboratoryCoords, '#FFFF00'],
			[cLaboratoryCoords, '#FFFF00'],
			[saunaCoords, '#FFFF00'],
		];
	} else if(floor == 1) {
		// locations
		var locations = [
			[library, 60.2215492, 24.8039905, 'images/library.png'],
			[cafeteria, 60.2211103, 24.8039932, 'images/cafeteria.png'],
			[pLaboratory, 60.221306, 24.804241, 'images/laboratory.png'],
			[restroom, 60.221639, 24.804192, 'images/toilet.png'], // outside library
			[restroom, 60.2214263, 24.8039138, 'images/toilet.png'], // in library
			[restroom, 60.2210187, 24.8047433, 'images/toilet.png'], // in main entrance
			[restroom, 60.220686, 24.804461, 'images/toilet.png'], // bottom left
			[restroom, 60.220656, 24.8050992, "images/toilet.png"], // bottom right
			[auditoriumA, 60.2211942, 24.805464, 'images/auditorium.png'], // building a
			[auditoriumB, 60.221722, 24.804224, 'images/auditorium.png'], // building b
			[garden, 60.220768, 24.804734, 'images/garden.png'],
			[tParking, 60.220697, 24.805788, 'images/parking.png'],
			[sParking, 60.221815, 24.804998, 'images/parking.png']
		];

		// polygons
		var parkingCoords = [
			new google.maps.LatLng(60.220358, 24.806169),
			new google.maps.LatLng(60.220852, 24.806177),
			new google.maps.LatLng(60.221461, 24.806356),
			new google.maps.LatLng(60.222111, 24.804890),
			new google.maps.LatLng(60.221999, 24.804697),
			new google.maps.LatLng(60.221903, 24.804912),
			new google.maps.LatLng(60.221727, 24.804696),
			new google.maps.LatLng(60.221634, 24.804919),
			new google.maps.LatLng(60.221820, 24.805243),
			new google.maps.LatLng(60.221762, 24.805364),
			new google.maps.LatLng(60.221684, 24.805228),
			new google.maps.LatLng(60.221593, 24.805443),
			new google.maps.LatLng(60.221635, 24.805515),
			new google.maps.LatLng(60.221577, 24.805659),
			new google.maps.LatLng(60.221614, 24.805738),
			new google.maps.LatLng(60.221418, 24.806129),
			new google.maps.LatLng(60.221434, 24.805898),
			new google.maps.LatLng(60.220972, 24.805730),
			new google.maps.LatLng(60.220947, 24.806074),
			new google.maps.LatLng(60.220868, 24.806070),
			new google.maps.LatLng(60.220870, 24.805475),
			new google.maps.LatLng(60.220362, 24.805470),
			new google.maps.LatLng(60.220358, 24.806169)
		];

		var gardenCoords = [
			new google.maps.LatLng(60.220669, 24.804547),
			new google.maps.LatLng(60.220672, 24.804983),
			new google.maps.LatLng(60.220975, 24.804993),
			new google.maps.LatLng(60.220977, 24.804560),
			new google.maps.LatLng(60.220669, 24.804547)
		];

		var libraryCoords = [
			new google.maps.LatLng(60.221474, 24.803681),
			new google.maps.LatLng(60.221463, 24.804156),
			new google.maps.LatLng(60.221640, 24.804153),
			new google.maps.LatLng(60.221643, 24.803665),
			new google.maps.LatLng(60.221474, 24.803681)
		];

		var cafeteriaCoords = [
			new google.maps.LatLng(60.221204, 24.803718),
			new google.maps.LatLng(60.221215, 24.804151),
			new google.maps.LatLng(60.221089, 24.804153),
			new google.maps.LatLng(60.221082, 24.803785),
			new google.maps.LatLng(60.221080, 24.803740),
			new google.maps.LatLng(60.221204, 24.803718)
		];

		var pLaboratoryCoords = [
			new google.maps.LatLng(60.221215, 24.804151),
			new google.maps.LatLng(60.221218, 24.804365),
			new google.maps.LatLng(60.221432, 24.804343),
			new google.maps.LatLng(60.221431, 24.804159),
			new google.maps.LatLng(60.221215, 24.804151)
		];

		var auditoriumACoords = [
			new google.maps.LatLng(60.221708, 24.804153),
			new google.maps.LatLng(60.221707, 24.804307),
			new google.maps.LatLng(60.221799, 24.804303),
			new google.maps.LatLng(60.221798, 24.804154),
			new google.maps.LatLng(60.221708, 24.804153)
		];

		var auditoriumBCoords = [
			new google.maps.LatLng(60.221172, 24.805551),
			new google.maps.LatLng(60.221284, 24.805627),
			new google.maps.LatLng(60.221321, 24.805348),
			new google.maps.LatLng(60.221193, 24.805284),
			new google.maps.LatLng(60.221172, 24.805551)
		];

		var polygons = [
			[parkingCoords, '#575752'],
			[gardenCoords, '#006600'],
			[libraryCoords, '#FF0000'],
			[cafeteriaCoords, '#660066'],
			[pLaboratoryCoords, '#FFFF00'],
			[auditoriumACoords, '#990000'],
			[auditoriumBCoords, '#990000'],
		];

	} else if(floor == 2) {
		// locations
		var locations = [
			[restroom, 60.221938, 24.804321, "images/toilet.png"],
			[restroom, 60.2214353,24.8039911, "images/toilet.png"],
			[restroom, 60.2210517, 24.804018, "images/toilet.png"],
			[auditoriumA, 60.221728, 24.804238,"images/auditorium.png"],
		];

		// polygons
		var auditoriumACoords = [
			new google.maps.LatLng(60.221843, 24.804156),
			new google.maps.LatLng(60.221848, 24.804312),
			new google.maps.LatLng(60.221715, 24.804309),
			new google.maps.LatLng(60.221712, 24.804154),
			new google.maps.LatLng(60.221843, 24.804156)
		];

		var polygons = [
			[auditoriumACoords, '#99000']
		];


	} else if(floor == 3) {
		// locations
		var locations = [
			[restroom, 60.2218509, 24.8042862, "images/toilet.png"],
			[restroom, 60.2214353,24.8039911, "images/toilet.png"],
			[nurse,60.221035, 24.803916, "images/nurse.png"]
		];

		// polygons
		var nurseCoords = [
			new google.maps.LatLng(60.221085, 24.803792),
			new google.maps.LatLng(60.221073, 24.804085),
			new google.maps.LatLng(60.221022, 24.804090),
			new google.maps.LatLng(60.221037, 24.803787),
			new google.maps.LatLng(60.221085, 24.803792)
		];

		var polygons = [
			[nurseCoords, '#663300']
		];
	}

	return {'locations':locations, 'polygons':polygons};
}
	