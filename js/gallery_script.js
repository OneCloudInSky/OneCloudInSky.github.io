window.onload = function () {
	let hiddenName = document.querySelector('.hidden__name');
	let hiddenDes = document.querySelector('.hidden__des');
	let img1 = document.querySelector('.gallery__img1');
	img1.style.transition = "all .2s";
	let img2 = document.querySelector('.gallery__img2');
	let img3 = document.querySelector('.gallery__img3');
	let img4 = document.querySelector('.gallery__img4');
	let img5 = document.querySelector('.gallery__img5');
	let img6 = document.querySelector('.gallery__img6');
	let img7 = document.querySelector('.gallery__img7');

	img1.onmouseenter = function (e) {
		img1.style.filter = "none";
		hiddenName.innerHTML = "Мачиг Лабдрон";
		hiddenDes.innerHTML = "Тибетская йогини, основательница школы чод — практики отсечения привязанностей, основанной на соединении традиций дзогчен и шаманских знаний бон. Мачиг Лабдрон считается дакини, инкарнацией Еше Цогьял и признаётся божеством."
	};

	img1.onmouseout = function (e) {
		img1.style.filter = "grayscale(100%)";
		hiddenName.innerHTML = "";
		hiddenDes.innerHTML = "";
	};

	img2.onmouseenter = function (f) {
		img2.style.filter = "none";
		hiddenName.innerHTML = "Марпа";
		hiddenDes.innerHTML = "Лама-мирянин, который принёс из Индии в Тибет многие элементы буддийского учения Ваджраяны, включая Махамудру, в дальнейшем сформировавшие линию кагью и вошедшие в школу гелуг."
	};

	img2.onmouseout = function (f) {
		hiddenName.innerHTML = "";
		hiddenDes.innerHTML = "";
		img2.style.filter = "grayscale(100%)";
	};

	img3.onmouseenter = function (r) {
		hiddenName.innerHTML = "Миларепа";
		img3.style.filter = "none";
		hiddenDes.innerHTML = "Учитель тибетского буддизма, знаменитый йог-практик, поэт, автор многих песен и баллад, до сих пор популярных на Тибете, один из основателей школы кагью. Его учителем был Марпа-переводчик.";
	};

	img3.onmouseout = function (r) {
		hiddenName.innerHTML = "";
		hiddenDes.innerHTML = "";
		img3.style.filter = "grayscale(100%)";
	};

	img4.onmouseenter = function (q) {
		hiddenName.innerHTML = "Наропа";
		img4.style.filter = "none";
		hiddenDes.innerHTML = "Учитель буддизма, монах, а впоследствии йогин, тантрийский учитель, ученик Тилопы и брат Нигумы, отец-основатель традиции Кагью. Одним из наиболее примечательных его учеников был Марпа.";
	};

	img4.onmouseout = function (q) {
		hiddenName.innerHTML = "";
		hiddenDes.innerHTML = "";
		img4.style.filter = "grayscale(100%)";
	};

	img5.onmouseenter = function (q) {
		hiddenName.innerHTML = "Падмасамбхава";
		img5.style.filter = "none";
		hiddenDes.innerHTML = "Индийский учитель буддийской тантры VIII века. Буддийская школа Ньингма почитает его как второго Будду. Об историческом Падмасамбхаве мало что известно кроме его помощи в строительстве первого буддийского монастыря в Тибете Самье.";
	};

	img5.onmouseout = function (q) {
		hiddenName.innerHTML = "";
		hiddenDes.innerHTML = "";
		img5.style.filter = "grayscale(100%)";
	};

	img6.onmouseenter = function (w) {
		hiddenName.innerHTML = "Шива";
		img6.style.filter = "none";
		hiddenDes.innerHTML = "Индуистское божество, верховный бог в шиваизме, вместе с Брахмой, Вишну входит в божественную триаду тримурти.Шива является одним из главных божеств в индуизме и известен как покровитель медитации и йоги.";
	};

	img6.onmouseout = function (w) {
		hiddenName.innerHTML = "";
		hiddenDes.innerHTML = "";
		img6.style.filter = "grayscale(100%)";
	};

	img7.onmouseenter = function (t) {
		hiddenName.innerHTML = "Тилопа";
		img7.style.filter = "none";
		hiddenDes.innerHTML = "Был индийским буддийским монахом в тантрической линии кагью тибетского буддизма.  Он практиковал Ануттарайога Тантру, набор духовных практик, предназначенных для ускорения процесса достижения состояния Будды.";
	};

	img7.onmouseout = function (t) {
		hiddenName.innerHTML = "";
		hiddenDes.innerHTML = "";
		img7.style.filter = "grayscale(100%)";
	};
}

