// Истории, избори и последствия
const stories = [
    {
        text: "Събуждаш се в мистериозна гора, без спомени как си се озовал там.",
        choices: ["Разгледай гората", "Последвай далечната светлина"],
        outcomes: [
            { text: "Откриваш древни руини с мистериозни надписи.", next: 1 },
            { text: "Светлината те води до скрито село.", next: 2 }
        ]
    },
    {
        text: "Руините изглеждат стари. Входът е затрупан с камъни.",
        choices: ["Опитай се да влезеш", "Търси друг път"],
        outcomes: [
            { text: "Намираш таен тунел под земята.", next: 3 },
            { text: "Попадаш на мистериозен странник.", next: 4 }
        ]
    },
    {
        text: "Селяните изглеждат приятелски, но нещо крият.",
        choices: ["Разпитай ги", "Потърси улики"],
        outcomes: [
            { text: "Откриваш древна карта.", next: 3 },
            { text: "Намираш мистериозен символ.", next: 4 }
        ]
    },
    {
        text: "Историята завършва! Открил си тайна, която ще промени съдбата ти.",
        choices: ["Играй отново", "Излез"],
        outcomes: [
            { text: "Рестартирай играта.", next: 0 },
            { text: "Край на играта.", next: null }
        ]
    }
];

let currentStep = 0;

// Функция за започване на играта
function startGame() {
    showStory(currentStep);
}

// Функция за показване на историята
function showStory(step) {
    let story = stories[step];
    document.getElementById("story-text").innerText = story.text;
    document.getElementById("choice1").innerText = story.choices[0];
    document.getElementById("choice2").innerText = story.choices[1];

    document.getElementById("choice1").onclick = () => makeChoice(1);
    document.getElementById("choice2").onclick = () => makeChoice(2);
}

// Функция за обработка на избора на играча
function makeChoice(choice) {
    let nextStep = stories[currentStep].outcomes[choice - 1].next;

    if (nextStep !== null) {
        currentStep = nextStep;
        showStory(currentStep);
    } else {
        document.getElementById("story-text").innerText = "Край на историята.";
        document.getElementById("choice1").style.display = "none";
        document.getElementById("choice2").style.display = "none";
    }
}

// Стартиране на играта
startGame();
