createNewShape();
let start_time = (new Date()).getTime();

document.getElementById('shape').onclick = function() {
    document.getElementById('timeTaken').textContent = String(((new Date()).getTime() - start_time)/1000) + 's';
    this.style.display = 'none';
    
    createNewShape();
    start_time = (new Date()).getTime();
}

function createNewShape() {
    const MIN_SIZE = 100;
    const MAX_SIZE = 300;
    
    let shape = document.getElementById('shape');
    let location = getRandomLocation();
    let color = getRandomColor();

    shape.style.display = 'initial';
    shape.style.top = String(location.top) + 'px';
    shape.style.left = String(location.left) + 'px';
    shape.style.width = String(MIN_SIZE + Math.random() * (MAX_SIZE - MIN_SIZE)) + 'px';
    shape.style.height = shape.style.width;
    shape.style.backgroundColor = 'rgb(' + String(color.red) + ',' + String(color.green) + ',' + String(color.blue) + ')';

    setRandomCircleStyle(shape);
}

function getRandomLocation() {
    const MIN_TOP = 200;
    const MAX_TOP = 700;
    const MIN_LEFT = 50;
    const MAX_LEFT = 1200;

    return {
        'top': MIN_TOP + Math.random() * (MAX_TOP - MIN_TOP),
        'left': MIN_LEFT + Math.random() * (MAX_LEFT - MIN_LEFT)
    };
}

function getRandomColor() {
    return {
        'red': Math.floor(Math.random() * 255),
        'green': Math.floor(Math.random() * 255),
        'blue': Math.floor(Math.random() * 255)
    }
}

function setRandomCircleStyle(shape) {
    if (Math.random() <= 0.5) {
        shape.style.borderRadius = '50%';
    } else {
        shape.style.borderRadius = 'initial';
    }
}
