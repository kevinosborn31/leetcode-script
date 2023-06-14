const table = document.querySelector(".min-w-full");
const rows = table.querySelectorAll(".odd:bg-overlay-3");

for (let i = rows.length - 1; i >= 0; i--) {
    const row = rows[i];
    if (row.querySelector(".text-brand-orange")) {
        row.parentNode.removeChild(row);
    }
}
