const subtitles = ['Florian.', 'Web Entwickler.', 'C# Entwickler.', 'C++, Java, Python und PHP Anfänger.', '...'];
const colors = [
        "#84BBAA",
        "#84BBAA",
        "#84BBAA",
        "#84BBAA",
        "#84BBAA"
    ];
let index = 0;

function typeWriter(subtitle, color) {
    if (index < subtitle.length) {
        document.getElementById('subtitle').innerHTML += subtitle.charAt(index);
        document.getElementById('subtitle').style.color = color;
        document.getElementById('title').style.color = color;
        index++;
        setTimeout(() => {
            typeWriter(subtitle, color);
        }, 50);
    } else {
        index = 0;
        setTimeout(() => {
            document.getElementById('subtitle').innerHTML = '';
            let nextIndex = (subtitles.indexOf(subtitle) + 1) % subtitles.length;
            typeWriter(subtitles[nextIndex], colors[nextIndex]);
        }, 1000);
    }
}

typeWriter(subtitles[0], colors[0]);