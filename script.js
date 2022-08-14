const table = document.getElementsByClassName("min-w-full")[0];
const rows = table.getElementsByClassName("odd:bg-overlay-3");

for (let i = rows.length - 1; i >= 0; --i) {
    if (rows[i].getElementsByClassName("text-brand-orange").length > 0) {
        rows[i].parentNode.removeChild(rows[i]);
    }
}