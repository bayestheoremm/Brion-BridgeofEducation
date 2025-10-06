document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("main section");

  function showSection(id) {
  const sections = document.querySelectorAll("main section");
  sections.forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}



  // tombol start dari home
 document.querySelector(".startBtn").addEventListener("click", () => {
  showSection("materiSection");
});


  // klik salah satu materi → ke pretest
  document.querySelectorAll(".materi").forEach(item => {
    item.addEventListener("click", () => {
      const materiId = item.dataset.id;
      document.getElementById("preTestSection").dataset.materiId = materiId;

      // render soal pre-test
      renderQuestions(materiId, "pre");

      showSection("preTestSection");
    });
  });

  // selesai materi → masuk ke post-test
  document.getElementById("finishMateri").addEventListener("click", () => {
    const materiId = document.getElementById("materiContentSection").dataset.materiId;
    document.getElementById("postTestSection").dataset.materiId = materiId;

    // render soal post-test
    renderQuestions(materiId, "post");

    showSection("postTestSection");
  });

  // balik ke home
  document.getElementById("backToHome").addEventListener("click", () => {
    showSection("homeSection");
  });

  // ===================
  // BANK SOAL
  // ===================
  const questions = {
    pre: {
      1: [
        { q: "Tidak rutin menggosok gigi setiap hari akan membuat serpihan sisa makanan tertinggal di mulut. Bakteri akan tumbuh pada serpihan tersebut, lalu mengeluarkan senyawa berbau tidak sedap penyebab bau mulut. Untuk mengatasi bau mulut, kita harus rajin menggosok gigi dan menggunakan benang gigi guna membersihkan sisa-sisa makanan penyebab bau mulut. Selain itu, karena bau mulut juga bisa disebabkan oleh mulut kering, maka sangat dianjurkan untuk meminum air putih. Berdasarkan paragraf tersebut, manakah simpulan yang tepat …", options: ["A. Air memiliki banyak manfaat untuk tubuh manusia", "B. Banyak minum air putih dan rutin gosok gigi akan terhindar dari bau mulut", "C. Senyawa berbau tidak sedap disebabkan oleh jenis makanan yang masuk ke mulut", "D. Orang yang rutin minum air putih pasti akan terhindar dari bau mulut"], answer: "B" },
        { q: "Desa Sukamiksu terletak di pesisir Pulau Maju, sejak kecil setiap anak di Desa Sukamiksu diajarkan cara untuk berenang dan cara mencari ikan di laut. Jika sebagian masyarakat Desa Sukamiksu bekerja sebagai nelayan, manakah simpulan yang benar?", options: ["A. Semua orang menjadi nelayan dan belum tentu bisa berenang", "B. Semua orang menjadi nelayan dan mungkin bisa berenang", "C. Sebagian orang menjadi nelayan dan tidak bisa berenang ", "D. Sebagian orang menjadi nelayan dan bisa berenang "], answer: "D" },
        { q: "Setelah lulus sekolah menengah Ali akan melanjutkan pendidikan sarjana, setelah menyelesaikan pendidikan sarjana Ali akan membangun usaha properti. Kemudian, keutungan yang didapat dari usaha property akan Ali tabung untuk menikah, pendidikan anak kelak, dan Ali akan Bahagia. Saat ini, Ali sedang menempuh pendidikan sarjana. Simpulan berdasarkan informasi dalam teks tersebut adalah Ali belum menikah dan sudah bahagia. Manakah pernyataan berikut yang menggambarkan kualitas tersebut?", options: ["A.Simpulan tersebut pasti benar", "B. Simpulan tersebut mungkin benar", "C. Simpulan tersebut pasti salah", "D. Simpulan tidak relevan dengan informasi yang diberikan"], answer: "C"},
        { q: "Negara X adalah negara yang sebagian besarnya adalah perairan dengan jumlah pulau yang banyak, hal itu menyebabkan tingginya biaya logistik. Pakar logistik menjelaskan hal ini disebabkan belum meratanya infrastruktur di Negara X sehingga sebagian besar wilayah tidak dapat dijangkau dengan mudah. Manakah pernyataan yang MEMPERLEMAH pendapat Pakar Logistik tersebut?", options: ["A. Semakin jauh jarak antar pulau biaya logistic yang dikeluarkan akan semakin besar", "B. Jarak dan lokasi tiap pulau tidak mempengaruhi biaya logistic yang di keluarkan di Negara X", "C. Pembangunan infrastruktur sulit dilakukan karena jumlah pulau di Negara X terlalu banyak", "D. Pembangunan infrastruktur akan lebih mudah dilakukan jika terjalinnya kerjasama banyak pihak "], answer: "B"},
        { q: "Negara A adalah negara yang selalu mengandalkan beras impor untuk memenuhi kebutuhan pangan dalam negeri. Menurut Menteri Sumber Daya di Negara A, hal itu disebabkan karena kondisi tanah yang sebagian besar adalah tanah gambut yang kurang cocok untuk tanaman pertanian. Manakah pernyataan yang MEMPERKUAT pernyataan Menteri Sumber Daya tersebut?", options: ["A. Banyak wilayah negara A yang mengalami kekurangan bahan pangan karena banyaknya tanah gambut", "B. Menteri Sumber Daya Negara A telah mengupayakan program intensifikasi pertanian dengan baik", "C. Negara A sudah berupaya maksimal dalam mewujudkan pemenuhan pangan dalam negeri", "D. Gambut sangat penting bagi keseimbangan ekosistem di tiap wilayah bagi keberlangsungan banyak biota"], answer: "A"}
      ],
      2: [
        { q: "Contoh soal pre-test materi 2?", options: ["A. X", "B. Y", "C. Z", "D. W"], answer: "B" }
      ],
      3: [
        { q: "Contoh soal pre-test materi 3?", options: ["A. Satu", "B. Dua", "C. Tiga", "D. Empat"], answer: "C" }
      ]
    },
    post: {
      1: [
        { q: "Tidak rutin menggosok gigi setiap hari akan membuat serpihan sisa makanan tertinggal di mulut. Bakteri akan tumbuh pada serpihan tersebut, lalu mengeluarkan senyawa berbau tidak sedap penyebab bau mulut. Untuk mengatasi bau mulut, kita harus rajin menggosok gigi dan menggunakan benang gigi guna membersihkan sisa-sisa makanan penyebab bau mulut. Selain itu, karena bau mulut juga bisa disebabkan oleh mulut kering, maka sangat dianjurkan untuk meminum air putih. Berdasarkan paragraf tersebut, manakah simpulan yang tepat …", options: ["A. Air memiliki banyak manfaat untuk tubuh manusia", "B. Banyak minum air putih dan rutin gosok gigi akan terhindar dari bau mulut", "C. Senyawa berbau tidak sedap disebabkan oleh jenis makanan yang masuk ke mulut", "D. Orang yang rutin minum air putih pasti akan terhindar dari bau mulut"], answer: "B" },
        { q: "Desa Sukamiksu terletak di pesisir Pulau Maju, sejak kecil setiap anak di Desa Sukamiksu diajarkan cara untuk berenang dan cara mencari ikan di laut. Jika sebagian masyarakat Desa Sukamiksu bekerja sebagai nelayan, manakah simpulan yang benar?", options: ["A. Semua orang menjadi nelayan dan belum tentu bisa berenang", "B. Semua orang menjadi nelayan dan mungkin bisa berenang", "C. Sebagian orang menjadi nelayan dan tidak bisa berenang ", "D. Sebagian orang menjadi nelayan dan bisa berenang "], answer: "D" },
        { q: "Setelah lulus sekolah menengah Ali akan melanjutkan pendidikan sarjana, setelah menyelesaikan pendidikan sarjana Ali akan membangun usaha properti. Kemudian, keutungan yang didapat dari usaha property akan Ali tabung untuk menikah, pendidikan anak kelak, dan Ali akan Bahagia. Saat ini, Ali sedang menempuh pendidikan sarjana. Simpulan berdasarkan informasi dalam teks tersebut adalah Ali belum menikah dan sudah bahagia. Manakah pernyataan berikut yang menggambarkan kualitas tersebut?", options: ["A.Simpulan tersebut pasti benar", "B. Simpulan tersebut mungkin benar", "C. Simpulan tersebut pasti salah", "D. Simpulan tidak relevan dengan informasi yang diberikan"], answer: "C"},
        { q: "Negara X adalah negara yang sebagian besarnya adalah perairan dengan jumlah pulau yang banyak, hal itu menyebabkan tingginya biaya logistik. Pakar logistik menjelaskan hal ini disebabkan belum meratanya infrastruktur di Negara X sehingga sebagian besar wilayah tidak dapat dijangkau dengan mudah. Manakah pernyataan yang MEMPERLEMAH pendapat Pakar Logistik tersebut?", options: ["A. Semakin jauh jarak antar pulau biaya logistic yang dikeluarkan akan semakin besar", "B. Jarak dan lokasi tiap pulau tidak mempengaruhi biaya logistic yang di keluarkan di Negara X", "C. Pembangunan infrastruktur sulit dilakukan karena jumlah pulau di Negara X terlalu banyak", "D. Pembangunan infrastruktur akan lebih mudah dilakukan jika terjalinnya kerjasama banyak pihak "], answer: "B"},
        { q: "Negara A adalah negara yang selalu mengandalkan beras impor untuk memenuhi kebutuhan pangan dalam negeri. Menurut Menteri Sumber Daya di Negara A, hal itu disebabkan karena kondisi tanah yang sebagian besar adalah tanah gambut yang kurang cocok untuk tanaman pertanian. Manakah pernyataan yang MEMPERKUAT pernyataan Menteri Sumber Daya tersebut?", options: ["A. Banyak wilayah negara A yang mengalami kekurangan bahan pangan karena banyaknya tanah gambut", "B. Menteri Sumber Daya Negara A telah mengupayakan program intensifikasi pertanian dengan baik", "C. Negara A sudah berupaya maksimal dalam mewujudkan pemenuhan pangan dalam negeri", "D. Gambut sangat penting bagi keseimbangan ekosistem di tiap wilayah bagi keberlangsungan banyak biota"], answer: "A"}
      ],
      2: [
        { q: "Contoh soal post-test materi 2?", options: ["A. Kucing", "B. Anjing", "C. Ayam", "D. Ikan"], answer: "A" }
      ],
      3: [
        { q: "Contoh soal post-test materi 3?", options: ["A. Merah", "B. Kuning", "C. Hijau", "D. Biru"], answer: "D" }
      ]
    }
  };

  // ===================
  // RENDER SOAL
  // ===================
    // ===================
  // RENDER SOAL (versi dengan justify + wrapper class)
  // ===================
  function renderQuestions(materiId, type) {
    const container = document.getElementById(type === "pre" ? "preTestSection" : "postTestSection");
    container.innerHTML = `<h2>${type === "pre" ? "Pre" : "Post"}-Test Materi ${materiId}</h2>`;
    
    questions[type][materiId].forEach((q, i) => {
      const opts = q.options.map(opt => 
        `<label class="test-option"><input type="radio" name="q${i}" value="${opt[0]}"> ${opt}</label>`
      ).join("");
      container.innerHTML += `
        <div class="test-question">
          <p>${q.q}</p>
          <div class="options">${opts}</div>
        </div>
      `;
    });

    const btnId = `submit${type === "pre" ? "Pre" : "Post"}Test`;
    container.innerHTML += `<button id="${btnId}">Kumpulkan</button>`;

    // pasang event listener tombol baru
    document.getElementById(btnId).addEventListener("click", () => {
      const score = calculateScore(materiId, type);

      if (type === "pre") {
        alert(`Nilai Pre-Test kamu: ${score}`);
        // lanjut ke materi
        const videoLinks = {
          1: "https://www.youtube.com/watch?v=-jYbkayP-Pc",
          2: "https://www.youtube.com/watch?v=tgbNymZ7vqY",
          3: "https://www.youtube.com/watch?v=ScMzIvxBSi4",
        };
        const videoUrl = videoLinks[materiId];
        document.getElementById("materiId").textContent = materiId;
        document.getElementById("materiVideo").href = videoUrl;
        document.getElementById("materiThumb").src = `https://img.youtube.com/vi/${videoUrl.split("v=")[1]}/0.jpg`;
        document.getElementById("materiContentSection").dataset.materiId = materiId;
        showSection("materiContentSection");
      } else {
        // kasih tanda centang di materi
        document.querySelector(`.materi[data-id="${materiId}"]`).classList.add("done");
        document.getElementById("affirmationText").textContent =
          `Nilai kamu: ${score}. Selamat, kamu sudah menyelesaikan Materi ${materiId}! 🎉`;
        showSection("resultSection");
      }
    });
  }


  // ===================
  // HITUNG NILAI
  // ===================
  function calculateScore(materiId, type) {
    const qs = questions[type][materiId];
    let score = 0;
    qs.forEach((q, i) => {
      const chosen = document.querySelector(`input[name="q${i}"]:checked`);
      if (chosen && chosen.value === q.answer) score++;
    });
    return (score / qs.length) * 100;
  }
});
