const isLandspaces = (weight, height) => weight > height;

const landspaces = isLandspaces(1920, 1080);

if (landspaces)return console.log('The image is a landscape');
return console.log('The image is a portrait');

