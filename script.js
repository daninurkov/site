// Данни за историята
const storyStarters = [
    "Събуждаш се в мистериозна гора, без спомени как си се озовал там.",
    "Космическият ти кораб се е разбил на непозната планета. Ти си единственият оцелял.",
    "Ти си детектив, разследващ поредица от изчезвания в малък град.",
    "Средновековното кралство е в хаос, а ти си единственият, който може да възстанови мира."
];

const choices1 = [
    ["Разгледай гората", "Последвай далечната светлина"],
    ["Претърси останките на кораба", "Навлез в извънземната джунгла"],
    ["Говори с местните", "Разследвай местопрестъплението"],
    ["Присъедини се към кралската армия", "Потърси помощ от стар магьосник"]
];

const outcomesRound1 = [
    ["Откриваш древни руини с мистериозни надписи.", "Светлината те води до скрито село."],
    ["Намираш сигнален маяк за бедствия.", "Странно същество те напада в джунглата."],
    ["Местен жител ти разказва за таен подземен тунел.", "Намираш странен символ на местопрестъплението."],
    ["Армията се готви за битка, а ти трябва да се биеш.", "Магьосникът ти дава магическо оръжие."]
];

const choicesRound2 = [
    ["Изследвай руините", "Опитай се да разчетеш надписите"],
    ["Активирай маяка", "Опитай се да намериш други оцелели"],
    ["Последвай тунела", "Разпитай още хора за символа"],
    ["Води войниците в битка", "Използвай магическото оръжие"]
];

const outcomesRound2 = [
    ["Откриваш скрит вход в земята.", "Разбираш, че надписите говорят за изгубено съкровище."],
    ["Изпращаш сигнал за помощ.", "Откриваш още един оцелял, който знае нещо важно."],
    ["Тунелът води до тайна стая с доказателства.", "Местен мъдрец ти разказва за древен култ."],
    ["Войниците печелят битката, но кралят е ранен.", "Магическото оръжие разкрива тайна врата."]
];

const choicesRound3 = [
    ["Влез в скрития вход", "Последвай картата към съкровището"],
    ["Изчакай помощ", "Опитай да поправиш кораба"],
    ["Влез в тайната стая", "Изправи се срещу лидера на култа"],
    ["Опитай да спасиш краля", "Влез в тайната врата"]
];

const finalOutcomes = [
    ["Откриваш древно проклятие и трябва да го развалиш.", "Намираш легендарното съкровище."],
    ["Спасителен екип те намира и те отвежда у дома.", "Поправяш кораба и избягваш от планетата."],
    ["Разкриваш огромна конспирация и арестуваш виновниците.", "Сблъсъкът с лидера на култа завършва драматично."],
    ["Кралят оцелява и те награждава с титла.", "Откриваш забравена магия, която променя съдбата ти."]
];

let index, round = 0;

// Стартиране на играта
function startGame() {
    index = Math.floor(Math.random() * storyStarters.length);
    round = 0;
    document.getElementById("story-text").textContent = storyStarters[index];
    updateChoices(choices1[index]);
    document.getElementById("restart-btn").style.display = "none";
}

// Актуализиране на бутоните за избор
function updateChoices(options) {
    document.querySelectorAll(".choice-btn").forEach((btn, i) => {
        btn.textContent = options[i];
        btn.style.display = "block";
    });
}

// Обработване на избора
function makeChoice(choice) {
    if (round === 0) {
        document.getElementById("story-text").textContent = outcomesRound1[index][choice - 1];
        updateChoices(choicesRound2[index]);
    } else if (round === 1) {
        document.getElementById("story-text").textContent = outcomesRound2[index][choice - 1];
        updateChoices(choicesRound3[index]);
    } else {
        document.getElementById("story-text").textContent = finalOutcomes[index][choice - 1];
        endGame();
        return;
    }
    round++;
}

// Край на играта
function endGame() {
    document.querySelectorAll(".choice-btn").forEach(btn => btn.style.display = "none");
    document.getElementById("restart-btn").style.display = "block";
}

// Изход от играта
function exitGame() {
    document.getElementById("story-text").textContent = "Играта приключи. Довиждане!";
    document.querySelectorAll(".choice-btn").forEach(btn => btn.style.display = "none");
    document.getElementById("restart-btn").style.display = "block";
}

// Стартиране при зареждане
startGame();
