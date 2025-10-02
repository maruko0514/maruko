function showRabbit() {
    const container = document.getElementById("rabbit-container");

    // 如果已經有兔子，就不要再新增（只顯示一隻）
    if (container.querySelector("img")) {
        return;
    }

    const img = document.createElement("img");
    img.src = "/static/rabbit.jpg";
    img.alt = "兔子";
    img.style.width = "200px";
    img.style.marginTop = "20px";

    container.appendChild(img);
}
