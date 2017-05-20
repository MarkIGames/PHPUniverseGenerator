var speedState = 1;

var colorObject = {};
	colorObject.o = '0x9db4ff';
	colorObject.b = '0xafc3ff';
	colorObject.a = '0xcad8ff';
	colorObject.f = '0xffffff';
	colorObject.g = '0xfff4e8';
	colorObject.k = '0xffd7ae';
	colorObject.m = '0xffbb7b';

var sunGeo  = null;
var sunMesh = null;

function buildPlanets( jsonObject ) {

	$.each( jsonObject, function( key, value ) {

		var colorString = colorObject[value.star];

		sunGeo = new THREE.SphereGeometry( (radius * .0002), 10, 10 );
		sunMesh = new THREE.Mesh( sunGeo, new THREE.MeshLambertMaterial( colorString ) );

		sunMesh.position.x = value.X;
		sunMesh.position.y = value.Y;
		sunMesh.position.z = value.Z;

		sunMesh.material.color.setHex( colorObject[value.star.toLowerCase()] );

		//sunMesh.geometry.computeBoundingSphere();

		sunMesh.name = value.name;

		// Add to our world object lists to iterate over
		addWorldObject(sunMesh.name, sunMesh);

		scene.add( sunMesh );

		$.each( value.planets, function( key, planetvalue ) {

			var colorString = colorObject[value.star];

			planetGeo = new THREE.SphereGeometry( (radius * .00005), 10, 10 );
			planetMesh = new THREE.Mesh( planetGeo, new THREE.MeshLambertMaterial( colorString ) );

			planetMesh.position.x = value.X; //+ (planetvalue.orbit * 100);
			//var valueX = value.X; // + (planetvalue.orbit * 100)
			planetMesh.position.y = value.Y;
			planetMesh.position.z = value.Z;

			planetMesh.material.color.setHex( colorObject[value.star.toLowerCase()] );

			//sunMesh.geometry.computeBoundingSphere();

			planetMesh.name = planetvalue.name;

			// Add to our world object lists to iterate over
			addWorldObject(planetMesh.name, planetMesh);

			scene.add( planetMesh );

			$.each( planetvalue.moons, function( key, moonvalue ) {

				var colorString = colorObject[value.star];

				moonGeo = new THREE.SphereGeometry( (radius * .00001), 10, 10 );
				moonMesh = new THREE.Mesh( moonGeo, new THREE.MeshLambertMaterial( colorString ) );

				moonMesh.position.x = value.X; // + (planetvalue.orbit * 100) + 100;
				moonMesh.position.y = value.Y;
				moonMesh.position.z = value.Z;

				moonMesh.material.color.setHex( colorObject[value.star.toLowerCase()] );

				//sunMesh.geometry.computeBoundingSphere();

				moonMesh.name = moonvalue.name;

				// Add to our world object lists to iterate over
				addWorldObject(moonMesh.name, moonMesh);

				scene.add( moonMesh );

			});

		});

	});
}

function rotatePlanets( delta ) {
	/*
	mercuryMesh.rotation.y += (rotationSpeed + 0.01) * delta;

	venusMesh.rotation.y += (rotationSpeed + 0) * delta;
	venusCloudMesh.rotation.y += 1.30 * rotationSpeed * delta;

	earthMesh.rotation.y += (rotationSpeed- 0.005) * delta;
	earthCloudMesh.rotation.y += 1.25 * rotationSpeed * delta;

	marsMesh.rotation.y += (rotationSpeed + 0) * delta;
	marsCloudMesh.rotation.y += 1.30 * rotationSpeed * delta;

	jupiterMesh.rotation.y += (rotationSpeed + 0) * delta;

	saturnMesh.rotation.y += (rotationSpeed + 0) * delta;

	uranusMesh.rotation.y += (rotationSpeed + 0) * delta;

	neptuneMesh.rotation.y += (rotationSpeed + 0) * delta;

	plutoMesh.rotation.y += (rotationSpeed + 0) * delta;
	*/
}
