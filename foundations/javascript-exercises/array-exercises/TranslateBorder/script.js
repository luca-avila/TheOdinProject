function testCamelize() {
    return camelize('the-odin-project') === 'TheOdinProject'; 
}

function camelize(arr) {
    return arr
    .split('-')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join('');
}