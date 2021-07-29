const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    const randomColor = "#" + colorRandom();
    document.body.style.backgroundColor = randomColor;
    color.textContent = randomColor;
});
function colorRandom() {
    return Math.floor(Math.random() * 16777215).toString(16);
};