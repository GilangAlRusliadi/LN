document.addEventListener("DOMContentLoaded", function () {
    fetch("data.json") // Pastikan file JSON bernama data.json dan ada di satu folder dengan script.js
        .then(response => response.json())
        .then(data => {
            // data.light_novels.sort((a, b) => a.title.localeCompare(b.title)); // Mengurutkan berdasarkan title
            
            const container = document.querySelector(".icons");
            container.innerHTML = "";

            data.light_novels.forEach(novel => {
                const novelElement = document.createElement("a");
                novelElement.href = novel.download;
                novelElement.target = "_blank";
                novelElement.classList.add("icon");

                novelElement.innerHTML = `
                    <img src="${novel.image}" alt="${novel.title}">
                    <span>${novel.short}</span>
                `;

                container.appendChild(novelElement);
            });
        })
        .catch(error => console.error("Error fetching JSON:", error));
});
