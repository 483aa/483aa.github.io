/*
 * ==========================================
 * HARDEST PUZOTRYAS LEVEL LIST
 * ==========================================
 */


/*
 * ==========================================
 * ОЧКИ ЗА СЛОЖНОСТЬ
 * ==========================================
 */

const difficultyPoints = {
    "Easy": 10,

    "Normal": 20,

    "Hard": 30,

    "Harder": 40,

    "Insane": 50,

    "Easy Demon": 100,

    "Medium Demon": 200,

    "Hard Demon": 300,

    "Insane Demon": 500,

    "Extreme Demon": 1000

};


/*
 * ==========================================
 * ИГРОКИ
 * ==========================================
 *
 * country — двухбуквенный код страны.
 *
 * RU = 🇷🇺
 * GB = 🇬🇧
 * US = 🇺🇸
 * DE = 🇩🇪
 * JP = 🇯🇵
 *
 */

const players = {

    "kenoqhobia": {

        country: "LI"

    },


    "dabbave": {

        country: "RS"

    },


    "fobiaTalasohob": {

        country: "ES"

    }

};


/*
 * ==========================================
 * УРОВНИ
 * ==========================================
 */

const puzotryasList = [

    {
        name: "Supersonic",
        creator: "ZenthicAlpha",
        verifier: "kenoqhobia",
        originalDifficulty: "Insane Demon",
        hpllDifficulty: "Insane Demon",
        category: "main-top",
        image: "images/supersonic.png",

        records: [
            {
                player: "kenoqhobia",
                percent: 100,
                attempts: 3000,
                date: "",
                video: ""
            }

        ]

    },

    {
        name: "Poltergeist",
        creator: "Andromeda GMD",
        verifier: "kenoqhobia",
        originalDifficulty: "Insane Demon",
        hpllDifficulty: "Insane Demon",
        category: "main-top",
        image: "images/poltergeist.jpg",

        records: [
            {
                player: "kenoqhobia",
                percent: 100,
                attempts: 2500,
                date: "",
                video: ""
            }

        ]

    },

    {
        name: "Fairydust",
        creator: "mkComic",
        verifier: "kenoqhobia",
        originalDifficulty: "Hard Demon",
        hpllDifficulty: "Hard Demon",
        category: "main-top",
        image: "images/fairydust.png",

        records: [
            {
                player: "kenoqhobia",
                percent: 100,
                attempts: 1400,
                date: "",
                video: ""
            }

        ]

    },

    {
        name: "Silhouette",
        creator: "Havok",
        verifier: "kenoqhobia",
        originalDifficulty: "Hard Demon",
        hpllDifficulty: "Hard Demon",
        category: "main-top",
        image: "images/silhouette.png",

        records: [
            {
                player: "kenoqhobia",
                percent: 100,
                attempts: 1000,
                date: "",
                video: ""
            }

        ]

    },

    {
        name: "Sharp Minor",
        creator: "Giron",
        verifier: "kenoqhobia",
        originalDifficulty: "Hard Demon",
        hpllDifficulty: "Hard Demon",
        category: "main-top",
        image: "images/sharp_minor.png",

        records: [
            {
                player: "kenoqhobia",
                percent: 100,
                attempts: 950,
                date: "",
                video: ""
            }

        ]

    },

    {
        name: "Nine Circles",
        creator: "Zobros",
        verifier: "kenoqhobia",
        originalDifficulty: "Hard Demon",
        hpllDifficulty: "Hard Demon",
        category: "main-top",
        image: "images/nine_circles.png",

        records: [
            {
                player: "kenoqhobia",
                percent: 100,
                attempts: 790,
                date: "",
                video: ""
            }

        ]

    },

    {
        name: "Jawbreaker",
        creator: "ZenthicAlpha",
        verifier: "kenoqhobia",
        originalDifficulty: "Hard Demon",
        hpllDifficulty: "Hard Demon",
        category: "main-top",
        image: "images/jawbreaker.png",

        records: [
            {
                player: "kenoqhobia",
                percent: 100,
                attempts: 750,
                date: "",
                video: ""
            }

        ]

    },

    {
        name: "CraZy",
        creator: "DavJT",
        verifier: "kenoqhobia",
        originalDifficulty: "Hard Demon",
        hpllDifficulty: "Hard Demon",
        category: "main-top",
        image: "images/crazy.png",

        records: [
            {
                player: "kenoqhobia",
                percent: 100,
                attempts: 400,
                date: "",
                video: ""
            }

        ]

    },

    {
        name: "The Realistic",
        creator: "softable",
        verifier: "kenoqhobia",
        originalDifficulty: "Medium Demon",
        hpllDifficulty: "Medium Demon",
        category: "main-top",
        image: "images/the_realistic.png",

        records: [
            {
                player: "kenoqhobia",
                percent: 100,
                attempts: 500,
                date: "",
                video: ""
            }

        ]

    },

    {
        name: "Clubstep",
        creator: "RobTopGames",
        verifier: "dabbave",
        originalDifficulty: "Easy Demon",
        hpllDifficulty: "Easy Demon",
        category: "main-top",
        image: "images/clubstep.png",

        records: [
            {
                player: "dabbave",
                percent: 100,
                attempts: 300,
                date: "",
                video: ""
            },
            {
                player: "kenoqhobia",
                percent: 100,
                attempts: 14,
                date: "",
                video: ""
            }

        ]

    },

    {
        name: "Speed Racer",
        creator: "ZenthicAlpha",
        verifier: "fobiaTalasohob",
        originalDifficulty: "Easy Demon",
        hpllDifficulty: "Easy Demon",
        category: "main-top",
        image: "images/speed_racer.png",

        records: [
            {
                player: "fobiaTalasohob",
                percent: 100,
                attempts: 200,
                date: "",
                video: ""
            },
            {
                player: "kenoqhobia",
                percent: 100,
                attempts: 30,
                date: "",
                video: ""
            }

        ]

    },

    {
        name: "Dash",
        creator: "RobTopGames",
        verifier: "fobiaTalasohob",
        originalDifficulty: "Insane",
        hpllDifficulty: "Insane",
        category: "main-top",
        image: "images/dash.png",

        records: [
            {
                player: "fobiaTalasohob",
                percent: 100,
                attempts: 40,
                date: "",
                video: ""
            },
            {
                player: "kenoqhobia",
                percent: 100,
                attempts: 5,
                date: "",
                video: ""
            },
            {
                player: "dabbave",
                percent: 100,
                attempts: 30,
                date: "",
                video: ""
            }

        ]

    },

    {
        name: "Hexagon Force",
        creator: "RobTopGames",
        verifier: "kenoqhobia",
        originalDifficulty: "Insane",
        hpllDifficulty: "Insane",
        category: "main-top",
        image: "images/hexagon_force.png",

        records: [
            {
                player: "kenoqhobia",
                percent: 100,
                attempts: 5,
                date: "",
                video: ""
            }

        ]

    },

    {
        name: "xStep",
        creator: "RobTopGames",
        verifier: "fobiaTalasohob",
        originalDifficulty: "Insane",
        hpllDifficulty: "Insane",
        category: "main-top",
        image: "images/xstep.png",

        records: [
            {
                player: "fobiaTalasohob",
                percent: 100,
                attempts: 20,
                date: "",
                video: ""
            },
            {
                player: "kenoqhobia",
                percent: 100,
                attempts: 40,
                date: "",
                video: ""
            }

        ]

    },

    {

        name: "Jumper",
        creator: "RobTopGames",
        verifier: "dabbave",
        originalDifficulty: "Harder",
        hpllDifficulty: "Harder",
        category: "main-top",
        image: "images/jumper.png",

        records: [
            {
                player: "dabbave",
                percent: 100,
                attempts: 150,
                date: "",
                video: ""
            },
            {

                player: "fobiaTalasohob",
                percent: 100,
                attempts: 32,
                date: "",
                video: ""
            },
            {

                player: "kenoqhobia",
                percent: 100,
                attempts: 4,
                date: "",
                video: ""
            }

        ]

    },

    {

        name: "Heavyweight Step",

        creator: "RobTop Pavel",

        verifier: "Puzotryas",

        originalDifficulty: "Hard Demon",

        hpllDifficulty: "Medium Demon",

        category: "future",

        image: "",


        records: []

    },


    {

        name: "Diet Destroyer",

        creator: "Kaloriy",

        verifier: "Brother 1",

        originalDifficulty: "Medium Demon",

        hpllDifficulty: "Easy Demon",

        category: "challenge",

        image: "",


        records: [

            {

                player: "Brother 1",

                percent: 100,

                attempts: 2301,

                date: "01.08.2026",

                video: ""

            }

        ]

    }

];


/*
 * ==========================================
 * НАЗВАНИЯ ВКЛАДОК
 * ==========================================
 */

const tabInfo = {

    "main-top":
        "Лошковый левеллист для одаренных людей",

    "future":
        "Будущие уровни",

    "challenge":
        "Челленджи"

};


let currentTab = "main-top";


/*
 * ==========================================
 * ПОЛУЧЕНИЕ ФЛАГА
 * ==========================================
 *
 * Преобразует:
 *
 * RU -> 🇷🇺
 * US -> 🇺🇸
 * GB -> 🇬🇧
 *
 */

function getCountryFlag(countryCode) {

    if (!countryCode) {
        return "";
    }

    const code = countryCode.toUpperCase();

    return `
        <img
            class="country-flag"
            src="flags/${code}.png"
            alt="${code}"
            title="${code}"
        >
    `;
}

/*
 * ==========================================
 * ПОЛУЧИТЬ ДАННЫЕ ИГРОКА
 * ==========================================
 */

function getPlayer(playerName) {

    return players[playerName] || {

        country: ""

    };

}


/*
 * ==========================================
 * ПОЛУЧИТЬ ФЛАГ ИГРОКА
 * ==========================================
 */

function getPlayerFlag(playerName) {

    const player =
        getPlayer(playerName);


    return getCountryFlag(
        player.country
    );

}


/*
 * ==========================================
 * ПОЛУЧИТЬ ОЧКИ УРОВНЯ
 * ==========================================
 *
 * ВАЖНО:
 *
 * Используется HPLL Difficulty,
 * а не Original Difficulty.
 *
 */

function getPoints(level) {

    return (
        difficultyPoints[
            level.hpllDifficulty
        ] ?? 0
    );

}


/*
 * ==========================================
 * ИЗОБРАЖЕНИЕ
 * ==========================================
 */

function getImage(level) {

    if (
        level.image &&
        level.image.trim() !== ""
    ) {

        return level.image;

    }


    return (
        "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(`

            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="450"
                height="252"
                viewBox="0 0 450 252"
            >

                <rect
                    width="450"
                    height="252"
                    fill="#101923"
                />

                <text
                    x="225"
                    y="126"
                    text-anchor="middle"
                    dominant-baseline="middle"
                    fill="#667589"
                    font-family="Arial"
                    font-size="22"
                >
                    NO IMAGE
                </text>

            </svg>

        `)
    );

}


/*
 * ==========================================
 * ПОЛУЧИТЬ УРОВНИ ТЕКУЩЕЙ ВКЛАДКИ
 * ==========================================
 */

function getCurrentLevels() {

    return puzotryasList.filter(

        level =>
            level.category === currentTab

    );

}


/*
 * ==========================================
 * ОТРИСОВКА СПИСКА
 * ==========================================
 */

function renderList() {

    const listContainer =
        document.getElementById(
            "demon-list"
        );


    const subtitle =
        document.getElementById(
            "list-subtitle"
        );


    listContainer.innerHTML = "";


    subtitle.textContent =
        tabInfo[currentTab];


    const levels =
        getCurrentLevels();


    if (levels.length === 0) {

        listContainer.innerHTML = `

            <div class="empty-message">

                В этой категории
                пока нет уровней.

            </div>

        `;

        return;

    }


    levels.forEach(

        (level, index) => {

            const position =
                index + 1;


            const points =
                getPoints(level);


            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "level-card";


            card.innerHTML = `

                <img

                    class="level-image"

                    src="${getImage(level)}"

                    alt="${level.name}"

                >


                <div class="level-info">


                    <div class="level-title">

                        <span class="position">

                            #${position}

                        </span>


                        <span class="name">

                            ${level.name}

                        </span>

                    </div>


                    <div class="meta">

                        <span>

                            ${level.creator}

                        </span>


                        <span class="separator">

                            |

                        </span>


                        <span class="verifier">

                            ${getPlayerFlag(level.verifier)}

                            ${level.verifier}

                        </span>

                    </div>


                    <div class="points">

                        <span class="difficulty">

                            ${level.hpllDifficulty}

                        </span>


                        <span class="separator">

                            ·

                        </span>


                        <span class="points-value">

                            ${points}

                        </span>


                        <span>

                            баллов

                        </span>

                    </div>


                </div>

            `;


            /*
             * Открываем информацию
             * при клике на карточку.
             */

            card.addEventListener(

                "click",

                () => {

                    openLevelDetails(
                        level,
                        position
                    );

                }

            );


            listContainer.appendChild(
                card
            );

        }

    );

}


/*
 * ==========================================
 * ПОДРОБНАЯ ИНФОРМАЦИЯ
 * ==========================================
 */

function openLevelDetails(
    level,
    position
) {

    const modal =
        document.getElementById(
            "level-modal"
        );


    const content =
        document.getElementById(
            "level-modal-content"
        );


    const points =
        getPoints(level);


    /*
     * ======================================
     * РЕКОРДЫ
     * ======================================
     */

    let recordsHTML = "";


    if (
        !level.records ||
        level.records.length === 0
    ) {

        recordsHTML = `

            <div class="no-records">

                Рекордов пока нет.

            </div>

        `;

    }

    else {

        recordsHTML =

            level.records

                .map(

                    (record, index) => {

                        const flag =
                            getPlayerFlag(
                                record.player
                            );


                        return `

                            <div class="record">


                                <div
                                    class="record-position"
                                >

                                    #${index + 1}

                                </div>


                                <div
                                    class="record-player"
                                >

                                    ${flag}

                                    ${record.player}

                                </div>


                                <div
                                    class="record-percent"
                                >

                                    ${record.percent}%

                                </div>


                                <div
                                    class="record-attempts"
                                >

                                    ${Number(
                                        record.attempts
                                    ).toLocaleString(
                                        "ru-RU"
                                    )}

                                    attempts

                                </div>


                                <div
                                    class="record-date"
                                >

                                    ${record.date}

                                </div>


                                ${
                                    record.video
                                    ?

                                    `

                                        <a

                                            class="record-video"

                                            href="${record.video}"

                                            target="_blank"

                                            rel="noopener noreferrer"

                                            onclick="
                                                event.stopPropagation()
                                            "

                                        >

                                            Видео

                                        </a>

                                    `

                                    :

                                    ""

                                }

                            </div>

                        `;

                    }

                )

                .join("");

    }


    /*
     * ======================================
     * СОДЕРЖИМОЕ ОКНА
     * ======================================
     */

    content.innerHTML = `

        <button

            class="modal-close"

            id="close-level-modal"

        >

            ×

        </button>


        <img

            class="modal-image"

            src="${getImage(level)}"

            alt="${level.name}"

        >


        <div class="modal-title">


            <span class="modal-position">

                #${position}

            </span>


            <h2>

                ${level.name}

            </h2>


        </div>


        <div class="modal-info-grid">


            <div class="info-item">

                <span class="info-label">

                    Создатель

                </span>


                <span class="info-value">

                    ${level.creator}

                </span>

            </div>


            <div class="info-item">

                <span class="info-label">

                    Верификатор

                </span>


                <span class="info-value verifier">

                    ${getPlayerFlag(level.verifier)}

                    ${level.verifier}

                </span>

            </div>


            <div class="info-item">

                <span class="info-label">

                    Оригинальная сложность

                </span>


                <span class="info-value">

                    ${level.originalDifficulty}

                </span>

            </div>


            <div class="info-item">

                <span class="info-label">

                    HPLL сложность

                </span>


                <span class="info-value">

                    ${level.hpllDifficulty}

                </span>

            </div>


            <div class="info-item">

                <span class="info-label">

                    HPLL очки

                </span>


                <span class="info-value points-value">

                    ${points}

                </span>

            </div>


            <div class="info-item">

                <span class="info-label">

                    Категория

                </span>


                <span class="info-value">

                    ${tabInfo[level.category]}

                </span>

            </div>


        </div>


        <div class="records-title">

            РЕКОРДЫ

        </div>


        <div class="records-list">

            ${recordsHTML}

        </div>

    `;


    /*
     * Показываем окно.
     */

    modal.classList.add(
        "visible"
    );


    document.body.classList.add(
        "modal-open"
    );


    /*
     * Кнопка закрытия.
     */

    document
        .getElementById(
            "close-level-modal"
        )
        .addEventListener(

            "click",

            closeLevelDetails

        );

}


/*
 * ==========================================
 * ЗАКРЫТИЕ ОКНА
 * ==========================================
 */

function closeLevelDetails() {

    const modal =
        document.getElementById(
            "level-modal"
        );


    modal.classList.remove(
        "visible"
    );


    document.body.classList.remove(
        "modal-open"
    );

}


/*
 * ==========================================
 * ПЕРЕКЛЮЧЕНИЕ ВКЛАДКИ
 * ==========================================
 */

function switchTab(tab) {

    if (!tabInfo[tab]) {

        return;

    }


    currentTab =
        tab;


    document
        .querySelectorAll(
            ".tab-btn"
        )
        .forEach(

            button => {

                button.classList.toggle(

                    "active",

                    button.dataset.tab ===
                    tab

                );

            }

        );


    renderList();

}


/*
 * ==========================================
 * ЗАПУСК
 * ==========================================
 */

document.addEventListener(

    "DOMContentLoaded",

    () => {


        /*
         * Вкладки.
         */

        document
            .querySelectorAll(
                ".tab-btn"
            )
            .forEach(

                button => {

                    button.addEventListener(

                        "click",

                        () => {

                            switchTab(
                                button.dataset.tab
                            );

                        }

                    );

                }

            );


        /*
         * Модальное окно.
         */

        const modal =
            document.getElementById(
                "level-modal"
            );


        /*
         * Клик по затемнению.
         */

        modal.addEventListener(

            "click",

            event => {

                if (
                    event.target === modal
                ) {

                    closeLevelDetails();

                }

            }

        );


        /*
         * Escape.
         */

        document.addEventListener(

            "keydown",

            event => {

                if (

                    event.key === "Escape" &&

                    modal.classList.contains(
                        "visible"
                    )

                ) {

                    closeLevelDetails();

                }

            }

        );


        /*
         * Первый список.
         */

        renderList();

    }

);