const assistantVideo = document.getElementById('assistant-video');
const hoverIcon = document.getElementById('hover-icon');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

let explanationModeEnabled = false;

button1.addEventListener('click', () => {
    moveAssistantTo(button1);
    explain("This is Button 1. Click it to perform action 1.");
});

button2.addEventListener('click', () => {
    moveAssistantTo(button2);
    explain("This is Button 2. Click it to perform action 2.");
});

hoverIcon.addEventListener('click', () => {
    explanationModeEnabled = !explanationModeEnabled;

    if (explanationModeEnabled) {
        hoverIcon.classList.add('active');
    } else {
        hoverIcon.classList.remove('active');
    }
});

button1.addEventListener('mouseover', () => {
    if (explanationModeEnabled) {
        explain("Hovering over Button 1. It performs action 1.");
    }
});

button2.addEventListener('mouseover', () => {
    if (explanationModeEnabled) {
        explain("Hovering over Button 2. It performs action 2.");
    }
});

function moveAssistantTo(targetElement) {
    assistantVideo.style.opacity = 0.5;
    setTimeout(() => {
        assistantVideo.style.opacity = 1;
    }, 1000);
}

function explain(text) {
    alert(text);
}

const tooltip = document.getElementById('tooltip');

button1.addEventListener('mouseover', () => {
  tooltip.style.display = 'block';
  tooltip.style.left = button1.getBoundingClientRect().left + 'px';
  tooltip.style.top = button1.getBoundingClientRect().top + 'px';
});

button1.addEventListener('mouseout', () => {
  tooltip.style.display = 'none';
});

button2.addEventListener('mouseover', () => {
  tooltip.style.display = 'block';
  tooltip.style.left = button2.getBoundingClientRect().left + 'px';
  tooltip.style.top = button2.getBoundingClientRect().top + 'px';
});

button2.addEventListener('mouseout', () => {
  tooltip.style.display = 'none';
});
