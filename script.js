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
document.addEventListener("DOMContentLoaded", function () {
    let canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    let ctx = canvas.getContext("2d");

    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.zIndex = "-1";

    let particles = [];
    let numParticles = 100;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createParticles() {
        particles = [];
        for (let i = 0; i < numParticles; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 3 + 1,
                dx: (Math.random() - 0.5) * 2,
                dy: (Math.random() - 0.5) * 2
            });
        }
    }

    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgba(0, 102, 204, 0.7)";
        
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fill();
        });

        moveParticles();
    }

    function moveParticles() {
        particles.forEach(p => {
            p.x += p.dx;
            p.y += p.dy;

            if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
        });
    }

    function animate() {
        drawParticles();
        requestAnimationFrame(animate);
    }

    window.addEventListener("resize", resizeCanvas);

    resizeCanvas();
    createParticles();
    animate();
});
<script>
    document.addEventListener("DOMContentLoaded", function () {
        let inputs = document.querySelectorAll("input[type='number']");

        inputs.forEach(input => {
            input.addEventListener("change", function () {
                let value = parseFloat(this.value);
                if (value < 0 || value > 20) {
                    alert("الرجاء إدخال قيمة بين 0 و 20 فقط!");
                    this.value = "";
                }
            });
        });
    });

    function calculateAverages() {
        let totalScore = 0, totalCoeff = 0;

        subjects.forEach(sub => {
            let evalScore = parseFloat(document.getElementById(`${sub.id}_eval`).value) || 0;
            let testScore = parseFloat(document.getElementById(`${sub.id}_test`).value) || 0;
            let examScore = parseFloat(document.getElementById(`${sub.id}_exam`).value) || 0;

            let subjectAverage = (evalScore + testScore + (examScore * 2)) / 4;
            document.getElementById(`${sub.id}_avg`).innerText = subjectAverage.toFixed(2);

            totalScore += subjectAverage * sub.coeff;
            totalCoeff += sub.coeff;
        });

        let finalAverage = (totalScore / totalCoeff).toFixed(2);
        document.getElementById("finalResult").innerText = `المعدل الفصلي: ${finalAverage}`;
    }
</script>

    document.getElementById("clearInputs").addEventListener("click", () => {
        document.querySelectorAll("input").forEach(input => input.value = "");
    });
});
