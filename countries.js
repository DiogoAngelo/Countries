export default class Countries {
  constructor() {
    this.totalCountries = document.querySelector(".total-countries");
    this.mostLanguages = document.querySelector(".most-lang");
    this.totalLanguages = document.querySelector(".total-languages");
  }

  getCountries() {
    fetch("./country-list.json")
      .then((response) => response.json())
      .then((list) => {
        this.totalCountries.innerText = list.length;
      });
  }

  listLangagues() {
    fetch("./country-list.json")
      .then((response) => response.json())
      .then((list) => {
        this.languages = [];
        list.forEach((item) => {
          this.languages.push(item.languages);
        });
        this.totalLanguagesArray = [];
        this.languages.forEach((item) => {
          item.forEach((i) => {
            this.totalLanguagesArray.push(i);
          });
        });

        const noRepeatItems = new Set();

        this.totalLanguagesArray.forEach((item) => {
          noRepeatItems.add(item);
        });

        this.noRepeatArray = [...noRepeatItems];
        this.totalLanguages.innerText = this.noRepeatArray.length;

        let longest = -1;
        for (let i = 0; i < this.languages.length; i++) {
          if (
            longest === -1 ||
            this.languages[i].length > this.languages[longest].length
          ) {
            longest = i;
            if (this.languages[i].includes("de")) {
              this.mostLanguages.innerText = list[i].country;
            }
          }
        }
      });
  }

  init() {
    this.getCountries();
    this.listLangagues();
  }
}
