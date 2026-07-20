# 🛡️ Nikhil Kumar - Interactive Cybersecurity & Developer Portfolio

A premium, responsive, and highly interactive single-page portfolio website designed for **Nikhil Kumar**. This portfolio is built to reflect a dual specialization in **Java Software Engineering** and **Cybersecurity / Ethical Hacking**, featuring a sleek dark-mode command center theme with neon cyan and electric violet glow highlights, glassmorphic cards, scroll animation triggers, and interactive elements.

---

## 🚀 Key Features

* **Terminal-style Typewriter Headline**: Interactive cycling headings showcasing skills (e.g. Java Developer, Ethical Hacker, Web Security Analyst) with a blinking console cursor.
* **Scrollspy Navigation**: Smooth fixed navbar with links that highlight in real-time as you scroll through sections.
* **Interactive Skill Filter Grid**: Dynamic category filters (All, Languages, Web Tech, Cybersecurity, Core Concepts, Tools) to highlight specific skillsets instantly.
* **Featured Project Showcase**: High-fidelity detail cards outlining the secure Java Swing/JDBC Banking System.
* **Dynamic Certifications Modal**: Grid of credentials (Palo Alto, Google Cloud, IIIT Bhubaneswar, Deloitte, Tata). Clicking a card launches a popup with detailed descriptions and curriculum information.
* **Verification Document Linker**: Dynamic modal buttons that appear only when a certificate file or verification link is added in the database.
* **Interactive Contact Routing**: Contact forms with interactive JavaScript validation and custom visual "Transmission Received" checkmark animations.
* **Scroll Reveal System**: Intersection Observer animations triggering clean slide-up and fade-in transitions.
* **Responsive Architecture**: Flex and grid designs that scale perfectly from large desktop monitors down to mobile viewports.

---

## 🛠️ Tech Stack & Resources

* **Core Structure**: HTML5 (Semantic elements)
* **Styling**: Vanilla CSS3 (Custom variables, glassmorphic card effects, CSS animations, grid layouts)
* **Logic & Interactions**: Vanilla JavaScript (ES6+, Intersection Observer, scrollspy spy-link triggers)
* **Fonts**: Google Fonts (*Outfit*, *Space Grotesk*, *JetBrains Mono* for technical codes)
* **Icons**: FontAwesome v6.4.0 (CSS CDN)

---

## 📂 Project Structure

```text
├── assets/
│   ├── avatar.jpg              # Profile / developer illustration
│   └── certificates/           # Folder to hold your certificate PDFs/images
│       └── README.txt          # Quick instructions for certificate uploading
├── index.html                  # Main website structural layout
├── style.css                   # Stylesheet, typography setup, responsive queries
├── script.js                   # JavaScript logic, typing animations, modal handlers
└── README.md                   # Repository documentation
```

---

## 💻 How to Run Locally

You can launch and view this project on your local computer by running a simple server inside the project root directory:

### Option 1: Python HTTP Server (Recommended)
1. Open your terminal inside the project directory.
2. Start the server by running:
   ```bash
   python3 -m http.server 8000
   ```
3. Open your browser and navigate to `http://localhost:8000`.

### Option 2: Live Server Extension (VS Code)
1. Open the project folder in VS Code.
2. Install the **Live Server** extension by Ritwick Dey.
3. Click the **Go Live** button at the bottom-right of the VS Code window.

---

## 🎓 Guide: Adding & Linking Your Certificates

To link your certificate files (like PDFs or images) so visitors can view them in the popup modal:

1. **Save files**: Place your certificate files inside the `assets/certificates/` directory (e.g. save your file as `google_cloud.pdf`).
2. **Open `script.js`**: Locate the `certDetails` database object at the top of the file.
3. **Change the link**: Update the `link` property of the corresponding certificate by changing the `'#'` placeholder to point to your saved file path or online verification link.

**Example:**
```javascript
gcapf: {
  title: 'Google Cloud Arcade Facilitator Program',
  issuer: 'Google Cloud',
  date: '2024',
  badge: 'Ultimate Milestone (50+ badges)',
  desc: 'Completed multiple Google Cloud hands-on labs...',
  link: 'assets/certificates/google_cloud.pdf' // <-- Point this line to your file!
},
```

4. **Verify**: Refresh the site and click on the certificate card. A **View Official Certificate** button will automatically appear at the bottom of the popup loading your file.

---

## 📝 License

This project is open-source. Feel free to clone, customize, and adapt the styles to suit your personal brand.
