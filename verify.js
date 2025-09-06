// Certificate database
const certificates = {
  "BM1-2025-694645": {
    name: "MARIAM ADEL",
    course: "Introduction to Penetration Testing",
    date: "August 1, 2025",
    image: "BM1-2025-694645.png"
  },
  "BM1-2025-459281": {
    name: "AMR ABDELBASED",
    course: "Cybersecurity Fundamentals",
    date: "August 1, 2025",
    image: "BM1-2025-459281.png"
  },
  "BM1-2025-436040": {
    name: "Nourhan Mohamed Nasrat",
    course: "Certificate in Computer Fundamentals",
    date: "June 22, 2025",
    image: "BM1-2025-436040.png"
  }
};

function verifyCertificate() {
  const input = document.getElementById("certID").value.trim();
  const result = document.getElementById("result");

  if (certificates[input]) {
    const cert = certificates[input];
    result.style.color = "#c5f8d6ff";
    result.innerHTML = `✅ Certificate No. <strong>${input}</strong> is valid and registered with BM1 Academy.<br>
      👤 Name: <strong>${cert.name}</strong><br>
      📘 Course: <strong>${cert.course}</strong><br>
      📅 Date: <strong>${cert.date}</strong><br><br>
      <img src="${cert.image}" alt="Certificate Image" style="max-width:100%; border-radius: 8px; box-shadow: 0 0 10px rgba(255,255,255,0.2);" />
    `;
  } else {
    result.style.color = "#ef4444";
    result.innerText = `❌ Certificate number ${input} is not registered. Please check the serial number.`;
  }
}
