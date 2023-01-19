const olle = document.querySelector(".olle");
const more = document.querySelector(".content button");
const rules = document.querySelectorAll(".rule");
const modal = document.querySelector(".modal");

more.addEventListener("click", () => {
    olle.classList.remove("hidden");
    olle.scrollIntoView();
});

function showModal(id) {

}

for (let i = 0; i < rules.length; i++) {
    const element = rules[i];
}
