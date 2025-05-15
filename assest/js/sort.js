// Sort the list in alphabetical order
function sortList() {
  const ul = document.getElementById("nameList");
  const items = Array.from(ul.getElementsByTagName("li"));
  const sorted = items.sort((a, b) =>
    a.textContent.localeCompare(b.textContent)
  );
  ul.innerHTML = "";
  sorted.forEach((item) => ul.appendChild(item));
}
// Sort the list in reverse alphabetical order
function sortListReverse() {
  const ul = document.getElementById("nameListReverse");
  const items = Array.from(ul.getElementsByTagName("li"));
  const sorted = items.sort((a, b) =>
    b.textContent.localeCompare(a.textContent)
  );
  ul.innerHTML = "";
  sorted.forEach((item) => ul.appendChild(item));
}
