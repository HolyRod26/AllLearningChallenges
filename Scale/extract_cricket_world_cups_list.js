import * as cheerio from "cheerio";
import axios from "axios";

/*
axios.get("https://buttercms.com/docs/api/").then((response) => {
  // Load the web page source code into a cheerio instance
  const $ = cheerio.load(response.data);

  // The pre.highlight.shell CSS selector matches all `pre` elements
  // that have both the `highlight` and `shell` class
  const urlElems = $("pre.highlight.shell");

  // We now loop through all the elements found
  for (let i = 0; i < urlElems.length; i++) {
    // Since the URL is within the span element, we can use the find method
    // To get all span elements with the `s1` class that are contained inside the
    // pre element. We select the first such element we find (since we have seen that the first span
    // element contains the URL)
    const urlSpan = $(urlElems[i]).find("span.s1")[0];

    // We proceed, only if the element exists
    if (urlSpan) {
      // We wrap the span in `$` to create another cheerio instance of only the span
      // and use the `text` method to get only the text (ignoring the HTML)
      // of the span element
      const urlText = $(urlSpan).text();

      // We then print the text on to the console
      console.log(urlText);
    }
  }
});
*/

const url = "https://en.m.wikipedia.org/wiki/ISO_3166-1_alpha-3";
const dataLoader = async () => {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const listItems = $(".plainlist ul li");
    const countries = [];
    listItems.each((idx, el) => {
      const country = { name: "", iso3: "" };
      country.name = $(el).children("a").text();
      country.iso3 = $(el).children("span").text();
      countries.push(country);
    });
    console.log(countries);
  } catch (err) {
    console.error(err);
  }
};
dataLoader();
