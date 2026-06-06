/* ============================================
   Pay Fixation Calculator BD — App Logic
   ============================================ */

// ---- Pay Scale Data (2015) ----
const SCALE_2015 = {
    1:  { min: 78000, max: 78000, fixed: true },
    2:  { min: 66000, max: 76490 },
    3:  { min: 56500, max: 74400 },
    4:  { min: 50000, max: 71200 },
    5:  { min: 43000, max: 69850 },
    6:  { min: 35500, max: 67010 },
    7:  { min: 29000, max: 63410 },
    8:  { min: 23000, max: 55470 },
    9:  { min: 22000, max: 53060 },
    10: { min: 16000, max: 38640 },
    11: { min: 12500, max: 30230 },
    12: { min: 11300, max: 27300 },
    13: { min: 11000, max: 26590 },
    14: { min: 10200, max: 24680 },
    15: { min: 9700,  max: 23490 },
    16: { min: 9300,  max: 22490 },
    17: { min: 9000,  max: 21800 },
    18: { min: 8800,  max: 21310 },
    19: { min: 8500,  max: 20570 },
    20: { min: 8250,  max: 20010 }
};

// ---- Pay Scale Data (Proposed 2026) ----
const SCALE_2026 = {
    1:  { min: 160000, max: 160000, fixed: true },
    2:  { min: 132000, max: 153000 },
    3:  { min: 113000, max: 148800 },
    4:  { min: 100000, max: 142400 },
    5:  { min: 86000,  max: 139700 },
    6:  { min: 71000,  max: 134000 },
    7:  { min: 58000,  max: 126800 },
    8:  { min: 47200,  max: 113700 },
    9:  { min: 45100,  max: 108800 },
    10: { min: 32000,  max: 77300 },
    11: { min: 25000,  max: 60500 },
    12: { min: 24300,  max: 58700 },
    13: { min: 24000,  max: 58000 },
    14: { min: 23500,  max: 56800 },
    15: { min: 22800,  max: 55200 },
    16: { min: 21900,  max: 52900 },
    17: { min: 21400,  max: 51900 },
    18: { min: 21000,  max: 50900 },
    19: { min: 20500,  max: 49600 },
    20: { min: 20000,  max: 48400 }
};

// ---- House Rent Allowance Rates (% of basic) ----
const HRA_RATES = {
    dhaka: 0.65,
    dhaka_north: 0.60,
    divisional: 0.50,
    district: 0.45,
    upazila: 0.40,
    other: 0.35
};

// ---- Medical Allowance ----
const MEDICAL_ALLOWANCE = 1500;

// ---- Tiffin Allowance ----
const TIFFIN_ALLOWANCE = 1000;

// ---- Annual Increment Rates by grade (BD National Pay Scale 2015) ----
// Higher grades progress slower than the standard 5%. These rates, combined
// with rounding each new basic UP to the next 10 taka, reproduce the official
// gazette increment chart exactly for every grade.
const INCREMENT_RATES = {
    2: 0.0375,
    3: 0.04,
    4: 0.04,
    5: 0.045
    // grades 6–20 use the default 5%
};
const DEFAULT_INCREMENT_RATE = 0.05;
function incrementRate(grade) {
    return INCREMENT_RATES[grade] ?? DEFAULT_INCREMENT_RATE;
}

// ---- Translations ----
const TRANSLATIONS = {
    en: {
        title: "Pay Fixation Calculator",
        subtitle: "Bangladesh 2026 — 9th National Pay Scale",
        hero_badge: "Proposed 9th Pay Scale — Not Yet Official",
        hero_title: "Calculate Your New Salary",
        hero_desc: "Estimate your salary under the proposed 9th National Pay Scale 2026. Select your current grade, pay step, and workplace to see your projected new basic pay and gross salary.",
        input_title: "Your Details",
        label_grade: "Current Grade (2015 Scale)",
        select_grade: "— Select Grade —",
        label_step: "Current Pay Step (2015 Scale)",
        select_step: "— Select Grade First —",
        label_workplace: "Workplace",
        workplace_dhaka: "Dhaka City (South)",
        workplace_dhaka_north: "Dhaka City (North)",
        workplace_divisional: "Divisional City",
        workplace_district: "District Town",
        workplace_upazila: "Upazila / Thana",
        workplace_other: "Other Areas",
        btn_calculate: "Calculate",
        result_title: "Your Pay Fixation Report",
        result_badge: "Government of Bangladesh",
        col_step: "Step",
        col_description: "Description",
        col_amount: "Amount (৳)",
        row1: "Current Basic Pay (2015)",
        row2: "Earned Increment",
        row3: "New Scale Initial Basic",
        row4: "Coordinated Basic",
        row5: "Higher Step in New Scale",
        row6: "Difference",
        row7: "50% Cash Benefit",
        row8: "Final New Basic Pay",
        row9: "House Rent Allowance",
        row10: "Medical Allowance",
        row11: "Tiffin Allowance",
        total_gross: "Total Monthly Gross Salary",
        result_disclaimer: "This calculation is based on the proposed pay scale and may differ from the official gazette. Verify with your accounts department.",
        btn_print: "Print Report",
        info_title: "How It Works",
        info_step1: "Select your current grade from the 2015 National Pay Scale",
        info_step2: "Choose your current pay step (basic salary level)",
        info_step3: "Select your workplace for house rent calculation",
        info_step4: "View your projected new salary with detailed breakdown",
        ref_title: "Pay Scale Comparison",
        btn_show_table: "Show Table",
        btn_hide_table: "Hide Table",
        th_grade: "Grade",
        th_2015_scale: "2015 Scale (৳)",
        th_2026_scale: "2026 Proposed (৳)",
        th_increase: "Increase",
        footer_disclaimer: "This calculator is for estimation purposes only. The proposed 9th National Pay Scale is not yet officially gazetted. Always verify with official government sources.",
        no_increment: "No increment (fixed grade)",
        generated: "Report generated:",
        grade_word: "Grade",
        footer_copy: "© 2026 Pay Fixation Calculator BD"
    },
    bn: {
        title: "পে ফিক্সেশন ক্যালকুলেটর",
        subtitle: "বাংলাদেশ ২০২৬ — নবম জাতীয় পে স্কেল",
        hero_badge: "প্রস্তাবিত নবম পে স্কেল — এখনও চূড়ান্ত হয়নি",
        hero_title: "আপনার নতুন বেতন হিসাব করুন",
        hero_desc: "প্রস্তাবিত নবম জাতীয় পে স্কেল ২০২৬ অনুযায়ী আপনার বেতনের আনুমানিক হিসাব দেখুন। আপনার বর্তমান গ্রেড, বেতনের ধাপ এবং কর্মস্থল নির্বাচন করুন।",
        input_title: "আপনার তথ্য",
        label_grade: "বর্তমান গ্রেড (২০১৫ স্কেল)",
        select_grade: "— গ্রেড নির্বাচন করুন —",
        label_step: "বর্তমান বেতনের ধাপ (২০১৫ স্কেল)",
        select_step: "— প্রথমে গ্রেড নির্বাচন করুন —",
        label_workplace: "কর্মস্থল",
        workplace_dhaka: "ঢাকা সিটি (দক্ষিণ)",
        workplace_dhaka_north: "ঢাকা সিটি (উত্তর)",
        workplace_divisional: "বিভাগীয় শহর",
        workplace_district: "জেলা শহর",
        workplace_upazila: "উপজেলা / থানা",
        workplace_other: "অন্যান্য এলাকা",
        btn_calculate: "হিসাব করুন",
        result_title: "আপনার পে ফিক্সেশন রিপোর্ট",
        result_badge: "গণপ্রজাতন্ত্রী বাংলাদেশ সরকার",
        col_step: "ধাপ",
        col_description: "বিবরণ",
        col_amount: "পরিমাণ (৳)",
        row1: "বর্তমান মূল বেতন (২০১৫)",
        row2: "অর্জিত ইনক্রিমেন্ট",
        row3: "নতুন স্কেলের প্রাথমিক বেসিক",
        row4: "সমন্বিত বেসিক",
        row5: "নতুন স্কেলের উচ্চতর ধাপ",
        row6: "পার্থক্য",
        row7: "৫০% নগদ সুবিধা",
        row8: "চূড়ান্ত নতুন মূল বেতন",
        row9: "বাড়ি ভাড়া ভাতা",
        row10: "চিকিৎসা ভাতা",
        row11: "টিফিন ভাতা",
        total_gross: "মোট মাসিক গ্রস বেতন",
        result_disclaimer: "এই হিসাব প্রস্তাবিত পে স্কেলের ওপর ভিত্তি করে তৈরি এবং চূড়ান্ত সরকারি গেজেট থেকে ভিন্ন হতে পারে। আপনার হিসাব বিভাগের সাথে যাচাই করুন।",
        btn_print: "রিপোর্ট প্রিন্ট করুন",
        info_title: "কীভাবে কাজ করে",
        info_step1: "২০১৫ সালের জাতীয় পে স্কেল থেকে আপনার বর্তমান গ্রেড নির্বাচন করুন",
        info_step2: "আপনার বর্তমান বেতনের ধাপ (মূল বেতনের পর্যায়) নির্বাচন করুন",
        info_step3: "বাড়ি ভাড়ার হিসাবের জন্য কর্মস্থল নির্বাচন করুন",
        info_step4: "বিস্তারিত বিবরণসহ আপনার প্রকল্পিত নতুন বেতন দেখুন",
        ref_title: "পে স্কেল তুলনা",
        btn_show_table: "টেবিল দেখুন",
        btn_hide_table: "টেবিল লুকান",
        th_grade: "গ্রেড",
        th_2015_scale: "২০১৫ স্কেল (৳)",
        th_2026_scale: "২০২৬ প্রস্তাবিত (৳)",
        th_increase: "বৃদ্ধি",
        footer_disclaimer: "এই ক্যালকুলেটর শুধুমাত্র আনুমানিক হিসাবের জন্য। প্রস্তাবিত নবম জাতীয় পে স্কেল এখনও চূড়ান্তভাবে গেজেটে প্রকাশিত হয়নি। সর্বদা সরকারি উৎস থেকে যাচাই করুন।",
        no_increment: "কোনো ইনক্রিমেন্ট নেই (নির্ধারিত গ্রেড)",
        generated: "রিপোর্ট তৈরির তারিখ:",
        grade_word: "গ্রেড",
        footer_copy: "© ২০২৬ পে ফিক্সেশন ক্যালকুলেটর বিডি"
    }
};

let currentLang = 'en';

// ---- Bangla numeral helper ----
const BN_DIGITS = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
function localizeDigits(str) {
    if (currentLang !== 'bn') return String(str);
    return String(str).replace(/[0-9]/g, d => BN_DIGITS[d]);
}
// Format a number with thousands separators, localized to the current language
function fmtNum(n) {
    return localizeDigits(n.toLocaleString('en-IN'));
}

// ---- Generate increment steps for a grade ----
// Official BD National Pay Scale 2015 rule: each annual increment adds the
// grade's increment rate to the running basic, then the new basic is rounded
// UP to the next 10 taka, compounded each year. Basics stay multiples of 10
// (e.g. Grade 9: 22000 → 23100 → 24260 → 25480 ...). The final stage is the
// grade ceiling (max). This reproduces the gazette chart exactly.
function generateSteps(scale, grade) {
    const g = scale[grade];
    if (!g) return [];
    if (g.fixed) return [{ step: 1, value: g.min }];

    const rate = incrementRate(grade);
    const steps = [];
    let current = g.min; // gazette basics are multiples of 10
    let stepNum = 1;

    while (current < g.max && stepNum <= 60) {
        steps.push({ step: stepNum, value: current });
        // Round each new basic UP to the next 10 taka
        const next = Math.ceil((current * (1 + rate)) / 10) * 10;
        if (next <= current) break;
        current = next;
        stepNum++;
    }

    // Final stage is the official grade maximum (ceiling)
    steps.push({ step: stepNum, value: g.max });

    return steps;
}

// ---- Find the appropriate step in new scale ----
function findHigherStep(scale2026Steps, targetValue) {
    if (!scale2026Steps || scale2026Steps.length === 0) return null;

    // Find the first step >= targetValue
    for (let i = 0; i < scale2026Steps.length; i++) {
        if (scale2026Steps[i].value >= targetValue) {
            return scale2026Steps[i];
        }
    }

    // If target exceeds all steps, return the last one
    return scale2026Steps[scale2026Steps.length - 1];
}

// ---- Main Calculation ----
function calculate() {
    const grade = parseInt(document.getElementById('gradeSelect').value);
    const step = parseInt(document.getElementById('stepSelect').value);
    const workplace = document.getElementById('workplaceSelect').value;

    if (!grade || !step) {
        alert(currentLang === 'en'
            ? 'Please select a grade and pay step.'
            : 'অনুগ্রহ করে গ্রেড এবং বেতনের ধাপ নির্বাচন করুন।');
        return;
    }

    // 1. Get current basic pay from 2015 scale
    const steps2015 = generateSteps(SCALE_2015, grade);
    const currentStep = steps2015.find(s => s.step === step);
    if (!currentStep) return;

    const currentBasic = currentStep.value;
    const initialBasic2015 = SCALE_2015[grade].min;

    // Handle fixed grades (Grade 1) — new basic is simply the new fixed amount
    const isFixedGrade = SCALE_2015[grade].fixed && SCALE_2026[grade].fixed;
    let earnedIncrement, initialBasic2026, coordinatedBasic, higherStep, difference, cashBenefit, finalNewBasic;

    if (isFixedGrade) {
        earnedIncrement = 0;
        initialBasic2026 = SCALE_2026[grade].min;
        coordinatedBasic = initialBasic2026;
        higherStep = { step: 1, value: initialBasic2026 };
        difference = initialBasic2026 - currentBasic;
        cashBenefit = difference; // 100% for fixed grades
        finalNewBasic = initialBasic2026;
    } else {
        // 2. Calculate earned increment
        earnedIncrement = currentBasic - initialBasic2015;

        // 3. Get new scale initial basic
        initialBasic2026 = SCALE_2026[grade].min;

        // 4. Coordinated basic = new initial + earned increment
        coordinatedBasic = initialBasic2026 + earnedIncrement;

        // 5. Find higher step in new scale
        const steps2026 = generateSteps(SCALE_2026, grade);
        higherStep = findHigherStep(steps2026, coordinatedBasic);

        if (!higherStep) return;

        // 6. Difference = higher step - current basic
        difference = higherStep.value - currentBasic;

        // 7. 50% cash benefit
        cashBenefit = Math.round(difference * 0.5);

        // 8. Final new basic
        finalNewBasic = currentBasic + cashBenefit;
    }

    // 9. Allowances
    const hraRate = HRA_RATES[workplace] || 0.35;
    const houseRent = Math.round(finalNewBasic * hraRate);
    const medical = MEDICAL_ALLOWANCE;
    const tiffin = (grade >= 11 && grade <= 20) ? TIFFIN_ALLOWANCE : 0;

    // 10. Total gross
    const totalGross = finalNewBasic + houseRent + medical + tiffin;

    // Format numbers with commas (localized digits for Bangla)
    const fmt = fmtNum;

    // Render results
    const t = TRANSLATIONS[currentLang];

    document.getElementById('resultGradeInfo').innerHTML =
        `${currentLang === 'en' ? 'Grade' : 'গ্রেড'}: <strong>${localizeDigits(grade)}</strong> | ` +
        `${currentLang === 'en' ? 'Current Basic' : 'বর্তমান বেসিক'}: <strong>৳${fmt(currentBasic)}</strong>`;

    const rows = [
        { label: t.row1, value: `৳${fmt(currentBasic)}`, highlight: false },
        { label: t.row2, value: earnedIncrement > 0 ? `+৳${fmt(earnedIncrement)}` : `— (${t.no_increment})`, highlight: false },
        { label: t.row3, value: `৳${fmt(initialBasic2026)}`, highlight: false },
        { label: t.row4, value: `৳${fmt(coordinatedBasic)}`, highlight: false },
        { label: t.row5, value: `৳${fmt(higherStep.value)} (${t.col_step} ${localizeDigits(higherStep.step)})`, highlight: false },
        { label: t.row6, value: difference > 0 ? `৳${fmt(difference)}` : '৳0', highlight: false },
        { label: t.row7, value: `+৳${fmt(cashBenefit)}`, highlight: true },
        { label: t.row8, value: `৳${fmt(finalNewBasic)}`, highlight: true },
        { label: t.row9, value: `৳${fmt(houseRent)} (${localizeDigits(Math.round(hraRate * 100))}%)`, highlight: false },
        { label: t.row10, value: `৳${fmt(medical)}`, highlight: false },
        ...(tiffin > 0 ? [{ label: t.row11, value: `৳${fmt(tiffin)}`, highlight: false }] : [])
    ];

    const rowsHtml = rows.map((r, i) => `
        <div class="result-row ${r.highlight ? 'row-highlight' : ''}">
            <span class="row-num">${localizeDigits(String(i + 1).padStart(2, '0'))}</span>
            <span class="row-label">${r.label}</span>
            <span class="row-value">${r.value}</span>
        </div>
    `).join('');

    document.getElementById('resultRows').innerHTML = rowsHtml;
    document.getElementById('totalGross').textContent = `৳ ${fmt(totalGross)}`;

    const now = new Date();
    document.getElementById('resultDate').textContent =
        `${t.generated} ${now.toLocaleDateString(currentLang === 'bn' ? 'bn-BD' : 'en-BD', { year: 'numeric', month: 'long', day: 'numeric' })}`;

    // Show result, hide info
    document.getElementById('resultPanel').style.display = 'block';
    document.getElementById('infoPanel').style.display = 'none';

    // Scroll to result
    document.getElementById('resultPanel').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ---- Populate Step Dropdown ----
function populateSteps(grade) {
    const stepSelect = document.getElementById('stepSelect');
    const t = TRANSLATIONS[currentLang];
    const prevValue = stepSelect.value;

    if (!grade) {
        stepSelect.innerHTML = `<option value="">${t.select_step}</option>`;
        stepSelect.disabled = true;
        return;
    }

    const steps = generateSteps(SCALE_2015, grade);
    const stepLabel = currentLang === 'bn' ? 'ধাপ' : 'Step';
    stepSelect.innerHTML = `<option value="">${t.select_step}</option>`;

    steps.forEach(s => {
        const opt = document.createElement('option');
        opt.value = s.step;
        opt.textContent = `${stepLabel} ${localizeDigits(s.step)} — ৳${fmtNum(s.value)}`;
        stepSelect.appendChild(opt);
    });

    // Restore previous selection if still valid
    if (prevValue && steps.some(s => String(s.step) === prevValue)) {
        stepSelect.value = prevValue;
    }

    stepSelect.disabled = false;
}

// ---- Toggle Reference Table ----
function toggleTable() {
    const container = document.getElementById('tableContainer');
    const btn = document.getElementById('toggleTableBtn');
    const t = TRANSLATIONS[currentLang];

    if (container.style.display === 'none') {
        container.style.display = 'block';
        btn.querySelector('span').textContent = t.btn_hide_table;
    } else {
        container.style.display = 'none';
        btn.querySelector('span').textContent = t.btn_show_table;
    }
}

// ---- Populate Reference Table ----
function populateTable() {
    const tbody = document.getElementById('payTableBody');
    let html = '';

    for (let g = 1; g <= 20; g++) {
        const s15 = SCALE_2015[g];
        const s26 = SCALE_2026[g];

        const range15 = s15.fixed
            ? `৳${fmtNum(s15.min)}`
            : `৳${fmtNum(s15.min)} – ৳${fmtNum(s15.max)}`;

        const range26 = s26.fixed
            ? `৳${fmtNum(s26.min)}`
            : `৳${fmtNum(s26.min)} – ৳${fmtNum(s26.max)}`;

        const pctIncrease = s15.min > 0
            ? `+${localizeDigits(Math.round(((s26.min - s15.min) / s15.min) * 100))}%`
            : '—';

        html += `<tr>
            <td>${localizeDigits(g)}</td>
            <td>${range15}</td>
            <td>${range26}</td>
            <td>${pctIncrease}</td>
        </tr>`;
    }

    tbody.innerHTML = html;
}

// ---- Translate Grade dropdown option labels ----
function populateGradeLabels() {
    const gradeSelect = document.getElementById('gradeSelect');
    const t = TRANSLATIONS[currentLang];
    gradeSelect.querySelectorAll('option').forEach(opt => {
        if (!opt.value) return; // skip placeholder (handled separately)
        opt.textContent = `${t.grade_word} ${localizeDigits(opt.value)}`;
    });
}

// ---- Language Switching ----
function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang === 'bn' ? 'bn' : 'en');

    const t = TRANSLATIONS[lang];

    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.textContent = t[key];
        }
    });

    // Update select options
    const gradeSelect = document.getElementById('gradeSelect');
    gradeSelect.querySelector('option[value=""]').textContent = t.select_grade;

    const stepSelect = document.getElementById('stepSelect');
    if (stepSelect.disabled) {
        stepSelect.querySelector('option[value=""]').textContent = t.select_step;
    }

    // Update toggle table button text
    const container = document.getElementById('tableContainer');
    const btn = document.getElementById('toggleTableBtn');
    if (container.style.display === 'none') {
        btn.querySelector('span').textContent = t.btn_show_table;
    } else {
        btn.querySelector('span').textContent = t.btn_hide_table;
    }

    // Update lang toggle buttons
    document.querySelectorAll('.lang-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-lang') === lang);
    });

    // Translate grade dropdown labels
    populateGradeLabels();

    // Re-populate steps if grade is selected
    const currentGrade = gradeSelect.value;
    if (currentGrade) {
        populateSteps(parseInt(currentGrade));
    }

    // Re-populate table
    populateTable();

    // If a result report is already displayed, re-render it in the new language
    const resultPanel = document.getElementById('resultPanel');
    if (resultPanel.style.display === 'block') {
        calculate();
    }
}

// ---- Event Listeners ----
document.addEventListener('DOMContentLoaded', () => {
    // Grade change
    document.getElementById('gradeSelect').addEventListener('change', function () {
        populateSteps(parseInt(this.value));
        // Hide result when grade changes
        document.getElementById('resultPanel').style.display = 'none';
        document.getElementById('infoPanel').style.display = 'flex';
    });

    // Step change — hide result
    document.getElementById('stepSelect').addEventListener('change', function () {
        document.getElementById('resultPanel').style.display = 'none';
        document.getElementById('infoPanel').style.display = 'flex';
    });

    // Language toggle
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            setLanguage(this.getAttribute('data-lang'));
        });
    });

    // Initialize
    populateGradeLabels();
    populateTable();
});
