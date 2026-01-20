const submitBtn = document.getElementById('submitBtn');
if (submitBtn) {
    submitBtn.addEventListener('click', function() {
        const user = document.getElementById('username').value;
        if (user !== "") {
            alert("ยินดีต้อนรับคุณ " + user + " เข้าสู่ ORD RAPTER!");
            // ส่งผู้ใช้ไปยังหน้าหลักของเว็บ
            window.location.href = "index.html"; 
        } else {
            alert("กรุณากรอกชื่อผู้ใช้ก่อนครับ");
        }
    });
}
