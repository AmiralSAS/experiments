function main(){
	/***************************
	LA SCENE
	***************************/
	//
	// Visuel
	//
	// Variables pour définir la scène
	var scene = new THREE.Scene();
	// La caméra
	var LARGEUR = window.innerWidth,
		HAUTEUR = window.innerHeight,
		ANGLE_DE_VUE = 45,
		ASPECT = LARGEUR / HAUTEUR,
		NEAR = 0.1,
		FAR = 10000;
	var camera = new THREE.PerspectiveCamera(
		ANGLE_DE_VUE,
		ASPECT,
		NEAR,
		FAR);
	camera.position.z = 10;
	scene.add( camera );

	// Renderer (kézako?)
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(LARGEUR, HAUTEUR);
	document.body.appendChild(renderer.domElement);
	
	//
	// Lumières
	//
	// Lumière ambiante
	var light = new THREE.AmbientLight( 0x000050 );
	// Projecteur
	var pointLight = new THREE.PointLight( 0x0000ff );
	pointLight.position.x = 1;
	pointLight.position.y = 5;
	pointLight.position.z = 13;
	// Ajout
	scene.add(light);
	scene.add( pointLight );

	/***************************
	OBJETS
	***************************/
	//
	// Le sol
	//
	var sol_1_matiere = new THREE.MeshBasicMaterial({color: 0x0000ff});
	var sol_1_largeur = 5,
		sol_1_hauteur = 5;
	var sol_1_geometrie = new THREE.PlaneGeometry(
		sol_1_largeur,
		sol_1_hauteur);
	// Création
	var sol_1 = new THREE.Mesh(
		sol_1_geometrie,
		sol_1_matiere);
	// Position
	sol_1.rotation.x -= 1;
	sol_1.position.y = -3;
	
	//
	// Le cube
	//
	// La forme en soit
	var cube_1_matiere = new THREE.MeshBasicMaterial({color: 0xaaaaff});
	var cube_1_largeur = 1,
		cube_1_hauteur = 1,
		cube_1_profondeur = 1;
	var cube_1_geometrie = new THREE.CubeGeometry(
		cube_1_largeur,
		cube_1_hauteur,
		cube_1_profondeur);
	// Création
	var cube_1 = new THREE.Mesh(
		cube_1_geometrie,
		cube_1_matiere);

	//
	// La Sphere 1 (au dessus)
	//
	// Forme en soit
	var sphere1_matiere = new THREE.MeshLambertMaterial({color: 0xffffff});
	var sphere1_rayon = 0.7,
		sphere1_segments = 16,
		sphere1_anneaux = 16;
	var sphere1_geometrie = new THREE.SphereGeometry(
		sphere1_rayon, 
		sphere1_segments, 
		sphere1_anneaux);
	// Création
	var sphere_1 = new THREE.Mesh(
		sphere1_geometrie,
		sphere1_matiere);
	// Position
	sphere_1.position.y = 2;

	//
	// La Sphere 2 (en dessous)
	//
	// Forme en soit
	var sphere_2_rayon = 0.7,
		sphere_2_segments = 16,
		sphere_2_anneaux = 16;
	var sphere_2_geometrie = new THREE.SphereGeometry(
		sphere_2_rayon, 
		sphere_2_segments, 
		sphere_2_anneaux);
	// Texture
	// var sphere_2_texture = THREE.ImageUtils.loadTexture('sphere.png', {}, function() {
		// renderer.render(scene);
	// });
	var sphere_2_matiere = new THREE.MeshBasicMaterial({
		map: sphere_2_texture,
		overdraw: true});
	var sphere_2_texture = new THREE.ImageUtils.loadTexture("sphere.jpg")
	// var loader = new THREE.ImageLoader();
	// loader.load( 'sphere.jpg' );
	// loader.addEventListener( 'load', function ( event ) {
		// sphere_2_texture.image = event.content;
		// sphere_2_texture.needsUpdate = true;
	// });
	
	// Création
	var sphere_2 = new THREE.Mesh(
		sphere_2_geometrie,
		sphere_2_matiere);



	// Position
	sphere_2.position.y = -2;
	
	//
	// Ajout
	//
	scene.add( sol_1 );
	scene.add( cube_1 );
	scene.add( sphere_1 );
	scene.add( sphere_2 );

	/***************************
	FONCTIONS
	***************************/
	function render() {
		requestAnimationFrame(render); 
		
		sphere_1.rotation.x += 0.01;
		//sphere_1.rotation.y += 0.01;
		//sphere_2.rotation.x += 0.01;
		sphere_2.rotation.y += 0.01;
		cube_1.rotation.x += 0.01;
		cube_1.rotation.y += 0.01;
		
		renderer.render(scene, camera);
	}
	render();
}
main();