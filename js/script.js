let redCount = 0;
let blueCount = 0;

document.getElementById('redButton').addEventListener('click', function() {
    redCount++;
    document.getElementById('redCounter').textContent = redCount;
});

document.getElementById('blueButton').addEventListener('click', function() {
    blueCount++;
    document.getElementById('blueCounter').textContent = blueCount;
});
