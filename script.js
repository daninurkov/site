function getChoice(options) {
    let choice;
    while (true) {
        choice = prompt(`Какво ще направиш?\n1. ${options[0]}\n2. ${options[1]}\n3. Изход`);
        if (choice === "1" || choice === "2") {
            return parseInt(choice);
        } else if (choice === "3") {
            alert("Играта приключи. Довиждане!");
            return 3; // Код за изход
        }
        alert("Невалиден избор. Опитай отново.");
    }
}

function playGame() {
    // Данни за историята
    const storyStarters = [
        "Събуждаш се в мистериозна гора, без спомени как си се озовал там.",
        "Космическият ти кораб се е разбил на непозната планета. Ти си единственият оцелял.",
        "Ти си детектив, разследващ поредица от изчезвания в малък град.",
        "Средновековното кралство е в хаос, а ти си единственият, който може да възстанови мира."
    ];

    const choices = [
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

    // Генериране на случайна история
    const index = Math.floor(Math.random() * storyStarters.length);
    alert(`История: ${storyStarters[index]}`);

    // Кръг 1
    let choice1 = getChoice(choices[index]);
    if (choice1 === 3) return; // Изход
    alert(outcomesRound1[index][choice1 - 1]);

    // Кръг 2
    let choice2 = getChoice(choicesRound2[index]);
    if (choice2 === 3) return; // Изход
    alert(outcomesRound2[index][choice2 - 1]);

    // Кръг 3 (финален)
    let choice3 = getChoice(choicesRound3[index]);
    if (choice3 === 3) return; // Изход
    alert(finalOutcomes[index][choice3 - 1]);

    alert("Край на историята!");

    // Опция за повторна игра
    if (confirm("Искаш ли да играеш отново?")) {
        playGame();
    } else {
        alert("Благодаря, че игра! Довиждане!");
    }
}

// Стартиране на играта
playGame();
