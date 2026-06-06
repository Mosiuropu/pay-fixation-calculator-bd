# Pay Fixation Calculator BD 🇧🇩

A clean, dark-themed web calculator for Bangladeshi government service holders to estimate their salary under the proposed **9th National Pay Scale 2026**.

![License](https://img.shields.io/badge/license-MIT-blue)
![Language](https://img.shields.io/badge/languages-EN%20|%20বাংলা-purple)
![Status](https://img.shields.io/badge/status-Proposed%20(not%20yet%20official)-orange)

## 🔗 Live Website — Use It Online (No Install Needed)

**👉 [https://mosiuropu.github.io/pay-fixation-calculator-bd/](https://mosiuropu.github.io/pay-fixation-calculator-bd/)**

[![Open Live Site](https://img.shields.io/badge/Open-Live%20Calculator-success?style=for-the-badge)](https://mosiuropu.github.io/pay-fixation-calculator-bd/)

Just open the link in any browser — desktop or mobile. Nothing to download or install. Works in English and বাংলা.

## ✨ Features

- **Pay Fixation Calculation** — Estimates your new basic pay based on the proposed 9th Pay Scale
- **Bilingual Support** — Switch between English and Bangla (বাংলা) with one click
- **Dark Minimalist UI** — Clean, modern dark theme with smooth animations
- **Allowance Breakdown** — House Rent, Medical, and Tiffin allowances included
- **Pay Scale Comparison** — Side-by-side 2015 vs 2026 proposed scale reference table
- **Responsive Design** — Works beautifully on desktop, tablet, and mobile
- **Print Reports** — Print your salary breakdown directly from the calculator
- **Ad-free & Free** — No ads, no tracking, completely free to use

## 🧮 How It Works

1. Select your **current grade** (1–20) from the 2015 National Pay Scale
2. Choose your **current pay step** (basic salary level within the grade)
3. Select your **workplace** for house rent allowance calculation
4. Click **Calculate** to see your projected new salary

### Calculation Formula

```
Earned Increment = Current Basic (2015) − Initial Basic of 2015 Scale
Coordinated Basic = New Scale Initial Basic + Earned Increment
Higher Step = First step in new scale ≥ Coordinated Basic
Difference = Higher Step − Current Basic (2015)
50% Cash Benefit = 50% × Difference
Final New Basic = Current Basic (2015) + 50% Cash Benefit
```

### Allowances

| Allowance | Rate |
|-----------|------|
| House Rent | 35%–65% of new basic (varies by location) |
| Medical | ৳1,500 (fixed) |
| Tiffin | ৳1,000 (Grades 11–20 only) |

## 📁 Project Structure

```
pay-fixation-calculator-bd/
├── index.html      # Main HTML with calculator UI
├── styles.css      # Dark minimalist CSS theme
├── app.js          # Calculation logic & bilingual support
├── README.md       # This file
└── LICENSE         # MIT License
```

## 🚀 Getting Started

This is a static website — no build step required!

1. Clone the repository:
   ```bash
   git clone https://github.com/Mosiuropu/pay-fixation-calculator-bd.git
   ```

2. Open `index.html` in any modern web browser

That's it! The calculator runs entirely in the browser.

### GitHub Pages

This site is already live at **[https://mosiuropu.github.io/pay-fixation-calculator-bd/](https://mosiuropu.github.io/pay-fixation-calculator-bd/)**.

To host your own copy for free on GitHub:

1. Go to your repo → **Settings** → **Pages**
2. Set **Source** to the `master` branch
3. Your calculator will be live at `https://YOUR_USERNAME.github.io/pay-fixation-calculator-bd/`

## 📊 Pay Scale Reference

### 2015 National Pay Scale (8th)

| Grade | Basic Pay Range (৳) |
|-------|---------------------|
| 1 | 78,000 (Fixed) |
| 2 | 66,000 – 76,490 |
| 3 | 56,500 – 74,400 |
| 4 | 50,000 – 71,200 |
| 5 | 43,000 – 69,850 |
| 6 | 35,500 – 67,010 |
| 7 | 29,000 – 63,410 |
| 8 | 23,000 – 55,460 |
| 9 | 22,000 – 53,060 |
| 10 | 16,000 – 38,640 |
| 11 | 12,500 – 30,230 |
| 12 | 11,300 – 27,300 |
| 13 | 11,000 – 26,590 |
| 14 | 10,200 – 24,680 |
| 15 | 9,700 – 23,490 |
| 16 | 9,300 – 22,490 |
| 17 | 9,000 – 21,800 |
| 18 | 8,800 – 21,310 |
| 19 | 8,500 – 20,570 |
| 20 | 8,250 – 20,010 |

### Proposed 2026 Pay Scale (9th) — *Not Yet Official*

| Grade | Proposed Basic Pay Range (৳) |
|-------|------------------------------|
| 1 | 1,60,000 (Fixed) |
| 2 | 1,32,000 – 1,53,000 |
| 3 | 1,13,000 – 1,48,800 |
| 4 | 1,00,000 – 1,42,400 |
| 5 | 86,000 – 1,39,700 |
| 6 | 71,000 – 1,34,000 |
| 7 | 58,000 – 1,26,800 |
| 8 | 47,200 – 1,13,700 |
| 9 | 45,100 – 1,08,800 |
| 10 | 32,000 – 77,300 |
| 11 | 25,000 – 60,500 |
| 12 | 24,300 – 58,700 |
| 13 | 24,000 – 58,000 |
| 14 | 23,500 – 56,800 |
| 15 | 22,800 – 55,200 |
| 16 | 21,900 – 52,900 |
| 17 | 21,400 – 51,900 |
| 18 | 21,000 – 50,900 |
| 19 | 20,500 – 49,600 |
| 20 | 20,000 – 48,400 |

## ⚠️ Disclaimer

This calculator is for **estimation purposes only**. The proposed 9th National Pay Scale is based on media reports and pay commission recommendations and has **not yet been officially gazetted** by the Government of Bangladesh.

- Always verify your actual pay fixation with your **accounts/HR department**
- Official pay fixation should be done through the **iBAS++** portal
- The final gazette may differ from the proposed scales used here

## 🛠️ Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, grid, flexbox, animations
- **Vanilla JavaScript** — No frameworks, no dependencies
- **Google Fonts** — Inter (EN) + Noto Sans Bengali (বাং)

## 📄 License

MIT License — free to use, modify, and distribute.

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

**Built with ❤️ for Bangladeshi government employees**
