document.addEventListener("DOMContentLoaded", function () {
    const subjects = [
        { name: "اللغة العربية", coefficient: 5 },
        { name: "الرياضيات", coefficient: 4 },
        { name: "الإنجليزية", coefficient: 2 },
        { name: "الفرنسية", coefficient: 2 },
        { name: "التربية الإسلامية", coefficient: 2 },
        { name: "العلوم الطبيعية", coefficient: 2 },
        { name: "الفيزياء", coefficient: 2 },
        { name: "التربية المدنية", coefficient: 1 },
        { name: "التاريخ", coefficient: 2 },
        { name: "الجغرافيا", coefficient: 2 },
        { name: "الإعلام الآلي", coefficient: 1 },
        { name: "الفن", coefficient: 1 },
        { name: "الرياضة", coefficient: 1 },
        { name: "اللغة الأمازيغية", coefficient: 1 }
    ];

    const tableBody = document.getElementById("subjectsTable");

    subjects.forEach(subject => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${subject.name}</td>
            <td><input type="number" min="0" max="20"></td>
            <td><input type="number" min="0" max="20"></td>
            <td><input type="number" min="0" max="20"></td>
            <td><input type="number" min="0" max="20"></td>
            <td>${subject.coefficient}</td>
        `;
        tableBody.appendChild(row);
    });

    document.getElementById("clearInputs").addEventListener("click", () => {
        document.querySelectorAll("input").forEach(input => input.value = "");
    });
});
