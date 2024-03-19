//FUNCTION ANIMASI KETIK
document.addEventListener('DOMContentLoaded', function () {
    const title = document.getElementById('typing');
    const text = "Selamat Datang Coder's";

    function typingEffect(text, i, callback) {
        if (i < text.length) {
            title.innerHTML += text.charAt(i);
            i++;
            setTimeout(function () {
                typingEffect(text, i, callback);
            }, 100); 
        } else {
            setTimeout(function () {
                deleteText(text.length, function () {
                    
                    typingEffect(text, 0, callback);
                });
            }, 700); 
        }
    }

    function deleteText(i, callback) {
        setTimeout(function () {
            if (i >= 0) {
                title.innerHTML = text.substring(0, i);
                i--;
                deleteText(i, callback);
            } else {
                setTimeout(function () {
                    title.innerHTML = "";
                    callback(); 
                }, 700); 
            }
        }, 100); 
    }

    // Pemanggilan awal untuk memulai animasi
    typingEffect(text, 0, function () {});
});
