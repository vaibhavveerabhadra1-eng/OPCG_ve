
// ============================================================
// DATA
// ============================================================
const PLANTS = [
  {
    id:1, name:"Tulsi (Holy Basil)", sci:"Ocimum tenuiflorum", emoji:"🌿",
    type:"Herb", sun:"Full Sun", sunDetail:"6–8 hours daily",
    water:"Every 2–3 days", waterDetail:"Keep soil moist, not waterlogged",
    soil:"Well-drained", difficulty:"Easy",
    desc:"Sacred herb in Indian households, tulsi is revered for its medicinal properties and spiritual significance. Thrives in warm, sunny spots.",
    benefits:["Air purifier","Stress relief","Insect repellent","Sacred plant"],
    remedies:[
      {icon:"🤧", use:"Cold & Cough", how:"Brew 5–10 leaves in hot water with honey. Drink as tea."},
      {icon:"😤", use:"Respiratory", how:"Steam inhalation with tulsi leaves relieves congestion."},
      {icon:"🧘", use:"Stress & Anxiety", how:"Chew 2–3 leaves daily on empty stomach."},
      {icon:"🦟", use:"Insect Bites", how:"Apply fresh tulsi juice to bites to reduce swelling."}
    ]
  },
  {
    id:2, name:"Aloe Vera", sci:"Aloe barbadensis miller", emoji:"🌵",
    type:"Succulent", sun:"Indirect Bright Light", sunDetail:"4–6 hours indirect",
    water:"Every 2–3 weeks", waterDetail:"Let soil dry completely between watering",
    soil:"Sandy/Cactus mix", difficulty:"Easy",
    desc:"A must-have succulent that stores water in its thick leaves. Incredibly low-maintenance and incredibly useful for skin and digestion.",
    benefits:["Skin healing","Digestive aid","Sunburn relief","Low maintenance"],
    remedies:[
      {icon:"🔥", use:"Burns & Sunburn", how:"Apply fresh gel directly to affected area 3x daily."},
      {icon:"✨", use:"Skin Moisturiser", how:"Apply gel to face and leave for 15–20 minutes, then rinse."},
      {icon:"🤢", use:"Digestive Health", how:"Drink 30ml of aloe vera juice before meals."},
      {icon:"🦱", use:"Hair & Scalp", how:"Apply gel to scalp, massage, leave for 30 min, rinse."}
    ]
  },
  {
    id:3, name:"Money Plant", sci:"Epipremnum aureum", emoji:"💚",
    type:"Vine", sun:"Low to Medium Light", sunDetail:"2–4 hours indirect",
    water:"Every 7–10 days", waterDetail:"Allow top inch of soil to dry",
    soil:"Any well-draining mix", difficulty:"Very Easy",
    desc:"Beloved for bringing good luck and prosperity, money plant is one of the easiest houseplants to grow. Perfect for beginners.",
    benefits:["Air purifier","Low-light tolerant","Removes toxins","Feng shui plant"],
    remedies:[
      {icon:"🫁", use:"Air Purification", how:"Place 1 plant per 100 sq ft to improve indoor air quality."},
      {icon:"😴", use:"Better Sleep", how:"Keep in bedroom to reduce CO2 at night."}
    ]
  },
  {
    id:4, name:"Neem", sci:"Azadirachta indica", emoji:"🌳",
    type:"Tree", sun:"Full Sun", sunDetail:"6–8 hours full sun",
    water:"Every 4–7 days", waterDetail:"Deep water; drought tolerant once established",
    soil:"Sandy loam", difficulty:"Moderate",
    desc:"The village pharmacy in a tree! Neem has been central to Ayurvedic medicine for over 4,000 years. Every part has medicinal value.",
    benefits:["Antibacterial","Antifungal","Pesticide","Dental health"],
    remedies:[
      {icon:"🦷", use:"Dental Care", how:"Use neem twig as a toothbrush — natural antibacterial."},
      {icon:"🩹", use:"Wound Healing", how:"Apply neem paste to minor cuts and infections."},
      {icon:"🐛", use:"Natural Pesticide", how:"Neem oil spray repels most garden pests safely."},
      {icon:"🩺", use:"Blood Purifier", how:"Neem leaf juice (small quantity) helps purify blood."}
    ]
  },
  {
    id:5, name:"Lavender", sci:"Lavandula angustifolia", emoji:"💜",
    type:"Herb/Shrub", sun:"Full Sun", sunDetail:"6–8 hours daily",
    water:"Every 7–14 days", waterDetail:"Drought-tolerant; don't overwater",
    soil:"Well-drained, sandy", difficulty:"Moderate",
    desc:"Fragrant Mediterranean herb beloved for its calming properties. Its purple blooms attract pollinators and soothe the mind.",
    benefits:["Stress relief","Aromatherapy","Insomnia aid","Wound healing"],
    remedies:[
      {icon:"😴", use:"Insomnia & Sleep", how:"Place sachets near pillow or use lavender essential oil diffuser."},
      {icon:"😰", use:"Anxiety Relief", how:"Inhale fresh or dried lavender when anxious."},
      {icon:"🤕", use:"Headaches", how:"Dilute lavender oil with coconut oil, apply to temples."},
      {icon:"🐜", use:"Insect Repellent", how:"Crush dried flowers and place near entry points."}
    ]
  },
  {
    id:6, name:"Snake Plant", sci:"Sansevieria trifasciata", emoji:"🗡️",
    type:"Succulent", sun:"Low to Bright Indirect", sunDetail:"1–6 hours (very adaptable)",
    water:"Every 2–6 weeks", waterDetail:"Very drought tolerant; less is more",
    soil:"Well-drained, sandy", difficulty:"Very Easy",
    desc:"The ultimate beginner plant — thrives on neglect! NASA studies show it's one of the best air purifiers, producing oxygen at night.",
    benefits:["Night oxygen","Air purifier","Drought tolerant","Bedroom plant"],
    remedies:[
      {icon:"🫁", use:"Air Quality", how:"One plant can purify air in a 70 sq ft room."},
      {icon:"😴", use:"Better Breathing", how:"Place in bedroom — one of few plants releasing O₂ at night."}
    ]
  },
  {
    id:7, name:"Mint", sci:"Mentha × piperita", emoji:"🌱",
    type:"Herb", sun:"Partial to Full Sun", sunDetail:"4–6 hours",
    water:"Every 2–3 days", waterDetail:"Keep moist; do not let dry out",
    soil:"Rich, moist soil", difficulty:"Easy",
    desc:"Fast-growing, aromatic herb that's incredibly versatile in the kitchen and medicine cabinet. Grow in a pot to contain its spread!",
    benefits:["Digestive aid","Fresh breath","Stress relief","Culinary herb"],
    remedies:[
      {icon:"🤢", use:"Nausea & Digestion", how:"Brew mint tea or chew leaves after meals."},
      {icon:"🥵", use:"Headache", how:"Apply diluted peppermint oil to forehead for cooling relief."},
      {icon:"👄", use:"Bad Breath", how:"Chew fresh leaves or make mint mouthwash."},
      {icon:"🤸", use:"IBS Relief", how:"Peppermint oil capsules help reduce IBS symptoms."}
    ]
  },
  {
    id:8, name:"Rose", sci:"Rosa × hybrida", emoji:"🌹",
    type:"Flowering Shrub", sun:"Full Sun", sunDetail:"6–8 hours",
    water:"Every 2–3 days", waterDetail:"Water deeply at base; avoid leaves",
    soil:"Rich, well-drained", difficulty:"Moderate",
    desc:"The queen of flowers, cultivated for over 5,000 years for beauty and healing. Roses symbolise love, but they're also medicinal powerhouses.",
    benefits:["Vitamin C rich","Mood lifter","Skin care","Anti-inflammatory"],
    remedies:[
      {icon:"😊", use:"Mood & Anxiety", how:"Rose water spray on face or inhale rose petals for calm."},
      {icon:"✨", use:"Skin Toner", how:"Apply chilled rose water to face as a natural toner."},
      {icon:"🌡️", use:"Sore Throat", how:"Gargle with warm rose water 3x daily."},
      {icon:"💊", use:"Vitamin C", how:"Rose hip tea — one of the highest natural Vitamin C sources."}
    ]
  },
  {
    id:9, name:"Jasmine", sci:"Jasminum sambac", emoji:"🤍",
    type:"Flowering Vine", sun:"Full Sun to Partial", sunDetail:"4–6 hours",
    water:"Every 3–5 days", waterDetail:"Keep moist; reduce in winter",
    soil:"Well-drained, fertile", difficulty:"Moderate",
    desc:"Intoxicating fragrance makes jasmine beloved across Asia. Its flowers bloom at night, filling the air with sweet perfume.",
    benefits:["Aromatherapy","Stress relief","Antidepressant","Romantic scent"],
    remedies:[
      {icon:"😔", use:"Depression & Mood", how:"Jasmine aromatherapy shown to elevate mood and alertness."},
      {icon:"😴", use:"Sleep Aid", how:"Jasmine scent in bedroom reduces anxiety and improves sleep."},
      {icon:"🤱", use:"Skin Care", how:"Jasmine oil diluted in carrier oil hydrates dry skin."},
      {icon:"🤰", use:"Menstrual Relief", how:"Jasmine tea helps with cramps and hormonal balance."}
    ]
  },
  {
    id:10, name:"Lemon Grass", sci:"Cymbopogon citratus", emoji:"🌾",
    type:"Grass/Herb", sun:"Full Sun", sunDetail:"6–8 hours",
    water:"Every 3–4 days", waterDetail:"Regular watering; drought tolerant once grown",
    soil:"Well-drained, rich", difficulty:"Easy",
    desc:"Tropical grass with a fresh citrusy scent used widely in cooking and traditional medicine. Excellent mosquito repellent too!",
    benefits:["Mosquito repellent","Digestive aid","Anti-anxiety","Culinary herb"],
    remedies:[
      {icon:"🦟", use:"Mosquito Repellent", how:"Plant near windows or apply lemongrass oil to skin."},
      {icon:"🤢", use:"Digestive Issues", how:"Lemongrass tea eases bloating and stomach cramps."},
      {icon:"🌡️", use:"Fever Reduction", how:"Lemongrass tea with ginger helps reduce mild fever."},
      {icon:"🧖", use:"Detox", how:"Lemongrass tea supports liver and kidney detoxification."}
    ]
  },
  {
    id:11, name:"Spider Plant", sci:"Chlorophytum comosum", emoji:"🕷️",
    type:"Perennial", sun:"Indirect Light", sunDetail:"3–5 hours indirect",
    water:"Every 7–10 days", waterDetail:"Allow soil to partially dry between watering",
    soil:"Any well-draining mix", difficulty:"Very Easy",
    desc:"Fun, fast-growing plant that produces 'babies' on long runners. One of NASA's top-rated air-purifying plants.",
    benefits:["Air purifier","Pet-friendly","Easy propagation","Low maintenance"],
    remedies:[
      {icon:"🫁", use:"Air Purification", how:"Absorbs formaldehyde and xylene — ideal near new furniture."},
      {icon:"🐾", use:"Pet Safe", how:"One of the few common houseplants safe for cats and dogs."}
    ]
  },
  {
    id:12, name:"Curry Leaf", sci:"Murraya koenigii", emoji:"🍃",
    type:"Tree/Shrub", sun:"Full Sun", sunDetail:"6–8 hours",
    water:"Every 3–5 days", waterDetail:"Water when top inch of soil is dry",
    soil:"Well-drained, loamy", difficulty:"Moderate",
    desc:"Indispensable in South Indian cuisine, curry leaf is also a remarkable medicinal plant used in Ayurveda for centuries.",
    benefits:["Diabetic aid","Hair growth","Digestive","Rich in nutrients"],
    remedies:[
      {icon:"🩸", use:"Blood Sugar", how:"Eat 8–10 raw leaves on empty stomach for glucose control."},
      {icon:"🦱", use:"Hair Loss", how:"Boil curry leaves in coconut oil, apply to scalp weekly."},
      {icon:"🤢", use:"Morning Sickness", how:"Juice of curry leaves with lemon relieves nausea."},
      {icon:"👁️", use:"Eye Health", how:"Rich in Vitamin A — regular consumption prevents vision loss."}
    ]
  },
  {
    id:13, name:"Peace Lily", sci:"Spathiphyllum wallisii", emoji:"🕊️",
    type:"Tropical", sun:"Low to Medium Indirect", sunDetail:"2–4 hours indirect",
    water:"Every 5–7 days", waterDetail:"Water when leaves start to droop slightly",
    soil:"Rich, moisture-retaining", difficulty:"Easy",
    desc:"Elegant white blooms with exceptional air-purifying abilities. Peace lily is the perfect choice for dim spaces and clean air.",
    benefits:["Air purifier","Elegant blooms","Low light","Mould remover"],
    remedies:[
      {icon:"🫁", use:"Air Purification", how:"Absorbs acetone, ammonia, benzene — great for bathrooms."},
      {icon:"😴", use:"Sleep", how:"Improves air humidity, reducing airborne allergens for better sleep."}
    ]
  },
  {
    id:14, name:"Banana Plant", sci:"Musa spp.", emoji:"🍌",
    type:"Tropical Tree", sun:"Full Sun", sunDetail:"8+ hours daily",
    water:"Every 2–3 days", waterDetail:"Water deeply; needs lots of moisture",
    soil:"Rich, moist, well-drained", difficulty:"Easy",
    desc:"Fast-growing tropical giant that's surprisingly easy to grow in warm climates. The flowers, leaves, and fruit are all useful.",
    benefits:["Fruit-bearing","Leaf wrapping","Shade plant","High potassium"],
    remedies:[
      {icon:"😔", use:"Depression", how:"Bananas are rich in tryptophan — a precursor to serotonin."},
      {icon:"💪", use:"Muscle Cramps", how:"Eat a banana post-workout for potassium and magnesium."},
      {icon:"🔥", use:"Burns", how:"Apply inside of banana peel to minor burns for relief."},
      {icon:"🫀", use:"Heart Health", how:"Regular banana consumption helps regulate blood pressure."}
    ]
  },
  {
    id:15, name:"Hibiscus", sci:"Hibiscus rosa-sinensis", emoji:"🌺",
    type:"Flowering Shrub", sun:"Full Sun", sunDetail:"6–8 hours",
    water:"Every 2–3 days", waterDetail:"Keep moist; reduce in winter",
    soil:"Rich, slightly acidic", difficulty:"Easy",
    desc:"Vibrant tropical blooms in red, pink, yellow and orange. Used in tea, hair care and traditional medicine worldwide.",
    benefits:["Hair growth","Vitamin C","Anti-aging","Culinary use"],
    remedies:[
      {icon:"🦱", use:"Hair Care", how:"Hibiscus paste applied to hair prevents greying and hair fall."},
      {icon:"🫀", use:"Blood Pressure", how:"Hibiscus tea (2 cups/day) shown to lower blood pressure."},
      {icon:"🩸", use:"Cholesterol", how:"Regular hibiscus tea consumption helps lower LDL cholesterol."},
      {icon:"⚖️", use:"Weight Management", how:"Hibiscus extract inhibits amylase, reducing sugar absorption."}
    ]
  },
  {
    id:16, name:"Ashwagandha", sci:"Withania somnifera", emoji:"🌿",
    type:"Herb/Shrub", sun:"Full Sun", sunDetail:"6–8 hours",
    water:"Every 5–7 days", waterDetail:"Drought-tolerant; don't overwater",
    soil:"Sandy, well-drained", difficulty:"Moderate",
    desc:"The crown jewel of Ayurvedic medicine. Ashwagandha is an adaptogen used for thousands of years to combat stress and boost vitality.",
    benefits:["Adaptogen","Energy booster","Stress buster","Immune support"],
    remedies:[
      {icon:"😰", use:"Stress & Anxiety", how:"500mg ashwagandha extract daily for 8 weeks reduces cortisol."},
      {icon:"💪", use:"Strength & Stamina", how:"Root powder in warm milk before bed boosts strength."},
      {icon:"🧠", use:"Brain Health", how:"Improves memory and cognitive function with regular use."},
      {icon:"😴", use:"Sleep Disorders", how:"Ashwagandha tea before bed promotes deeper, restful sleep."}
    ]
  },
  {
    id:17, name:"Marigold", sci:"Tagetes erecta", emoji:"🌼",
    type:"Annual Flower", sun:"Full Sun", sunDetail:"6–8 hours",
    water:"Every 2–3 days", waterDetail:"Water at base; allow surface to dry slightly",
    soil:"Average, well-drained", difficulty:"Very Easy",
    desc:"Cheerful yellow-orange blooms that repel pests, attract pollinators, and have surprising healing properties. A garden essential.",
    benefits:["Pest repellent","Anti-fungal","Wound healing","Bright colour"],
    remedies:[
      {icon:"🩹", use:"Wound Healing", how:"Marigold (Calendula) ointment is a natural antiseptic."},
      {icon:"🔥", use:"Skin Inflammation", how:"Calendula cream soothes eczema, rashes, and dry skin."},
      {icon:"👁️", use:"Eye Strain", how:"Marigold eye wash (cooled tea) soothes tired eyes."},
      {icon:"🐛", use:"Garden Pest Control", how:"Plant around vegetable garden to repel aphids and nematodes."}
    ]
  },
  {
    id:18, name:"Ginger", sci:"Zingiber officinale", emoji:"🫚",
    type:"Rhizome/Herb", sun:"Partial Shade", sunDetail:"3–5 hours dappled shade",
    water:"Every 2–3 days", waterDetail:"Keep moist; never waterlogged",
    soil:"Rich, moist, well-drained", difficulty:"Easy",
    desc:"One of the world's most widely used culinary and medicinal plants. Grow in a deep pot and harvest your own fresh ginger at home.",
    benefits:["Anti-nausea","Anti-inflammatory","Digestive","Immunity booster"],
    remedies:[
      {icon:"🤢", use:"Nausea", how:"Ginger tea or raw ginger relieves pregnancy and chemo nausea."},
      {icon:"🤕", use:"Pain Relief", how:"Ginger has anti-inflammatory properties comparable to ibuprofen."},
      {icon:"🫀", use:"Heart Health", how:"Daily ginger reduces LDL cholesterol and blood sugar."},
      {icon:"🤧", use:"Cold & Flu", how:"Ginger-honey-lemon tea is the ultimate home remedy."}
    ]
  },
  {
    id:19, name:"Bamboo", sci:"Bambusoideae spp.", emoji:"🎋",
    type:"Grass/Tree", sun:"Full Sun to Partial", sunDetail:"4–8 hours",
    water:"Every 3–4 days", waterDetail:"Keep moist; mulch to retain moisture",
    soil:"Rich, well-drained, moist", difficulty:"Easy",
    desc:"Fastest growing plant on Earth. Lucky bamboo is perfect indoors; running bamboo needs containment. Symbol of strength and flexibility.",
    benefits:["Lucky plant","Privacy screen","Oxygen producer","Sustainable material"],
    remedies:[
      {icon:"🫁", use:"Air Quality", how:"Bamboo plants improve humidity and oxygen levels indoors."},
      {icon:"🧘", use:"Mental Wellness", how:"Feng shui tradition says bamboo brings peace and positive energy."}
    ]
  },
  {
    id:20, name:"Fern", sci:"Nephrolepis exaltata", emoji:"🌿",
    type:"Fern", sun:"Low to Medium Indirect", sunDetail:"2–4 hours bright indirect",
    water:"Every 3–5 days", waterDetail:"Keep consistently moist; loves humidity",
    soil:"Peat-rich, moist", difficulty:"Moderate",
    desc:"Lush, tropical appearance that creates a jungle-like feel. Boston ferns are among the most effective humidifiers of the plant world.",
    benefits:["Natural humidifier","Air purifier","Reduces formaldehyde","Aesthetic beauty"],
    remedies:[
      {icon:"🫁", use:"Dry Air", how:"Ferns are natural humidifiers — perfect near radiators in winter."},
      {icon:"🧪", use:"Formaldehyde Removal", how:"Ferns are among the best plants for removing indoor air toxins."}
    ]
  }
];

const MOTIVATIONS = [
  "🌱 Every plant you nurture is a piece of life you've chosen to protect. You're amazing!",
  "☀️ Just like your plants turn toward the sun, you're growing toward something beautiful.",
  "💧 Small acts of care — watering, pruning, watching — are acts of love. Keep going!",
  "🌸 The garden of your heart grows when you tend to living things. Beautiful soul!",
  "🌿 Patience is a plant parent's greatest virtue. Your dedication is truly inspiring.",
  "✨ Every leaf that unfurls is your success. You made that happen!",
  "🌻 Your plants don't judge, they just grow. Let yourself grow too.",
  "🪴 A home with plants is a home with life. You've created something magical.",
  "💚 You haven't just grown plants — you've grown as a person. Keep blooming!",
  "🌱 Even the mightiest tree started as a tiny seed under someone's care — just like yours.",
  "🦋 Nature rewards patience and consistency. You're doing wonderfully.",
  "🌺 The love you pour into your plants comes back to you as oxygen and beauty.",
];

const WEATHER_DATA = {
  icon: "⛅", temp: 26, city: "Bengaluru, IN",
  desc: "Partly cloudy · Humidity 72%",
  warning: "High humidity today! Check for fungal issues and ensure good air circulation."
};

const NOTIF_TEMPLATES = [
  { icon:"💧", title:"Watering Time!", plant:"{{plant}}", msg:"{{plant}} hasn't been watered in {{days}} days. Time to give {{pet}} some love!", unread:true },
  { icon:"☀️", title:"Sunlight Check", plant:"", msg:"Weather today is cloudy — move sun-loving plants closer to windows!", unread:true },
  { icon:"🌡️", title:"Weather Alert", plant:"", msg:"Temperature dropping tonight. Protect tropical plants from cold drafts!", unread:true },
];

// ============================================================
// STATE
// ============================================================
let myPlants = JSON.parse(localStorage.getItem('bloomly_plants') || '[]');
let growthLogs = JSON.parse(localStorage.getItem('bloomly_logs') || '[]');
let profile = JSON.parse(localStorage.getItem('bloomly_profile') || '{"name":"Plant Parent","email":"your@email.com","bio":"Every plant deserves love and water ☀️","avatar":"🧑‍🌾"}');
let notifications = JSON.parse(localStorage.getItem('bloomly_notifs') || 'null') || generateNotifs();

function save() {
  localStorage.setItem('bloomly_plants', JSON.stringify(myPlants));
  localStorage.setItem('bloomly_logs', JSON.stringify(growthLogs));
  localStorage.setItem('bloomly_profile', JSON.stringify(profile));
  localStorage.setItem('bloomly_notifs', JSON.stringify(notifications));
}

function generateNotifs() {
  let notifs = [
    { icon:"☀️", title:"Good morning!", msg:"It's a new day to show your plants some love! Check on them today. 🌿", unread:true, time:"Just now" },
    { icon:"🌡️", title:"Weather Alert — Bengaluru", msg:WEATHER_DATA.warning, unread:true, time:"5 min ago" },
    { icon:"🌱", title:"Welcome to Bloomly!", msg:"Start by adding your first plant and naming it something special!", unread:true, time:"Today" },
  ];
  myPlants.forEach(p => {
    notifs.unshift({ icon:"💧", title:`Time to water ${p.petName}!`, msg:`${p.petName} (${p.plantName}) needs watering today. 💧`, unread:true, time:"1 hr ago" });
  });
  return notifs;
}

// ============================================================
// INIT
// ============================================================
window.onload = () => {
  setGreeting();
  renderDateDisplay();
  renderTicker();
  renderWeather();
  renderPlantGrid();
  renderMyPlants();
  renderGrowthLog();
  renderNotifications();
  renderProfile();
  renderStats();
  renderTasks();
  renderMotivation();
};

function setGreeting() {
  const h = new Date().getHours();
  const greet = h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening";
  document.getElementById('greeting-text').textContent = `${greet}, ${profile.name || 'Plant Parent'} 🌱`;
}

function renderDateDisplay() {
  const d = new Date();
  document.getElementById('date-display').textContent = d.toLocaleDateString('en-IN',{weekday:'long',year:'numeric',month:'long',day:'numeric'});
}

function renderWeather() {
  document.getElementById('w-icon').textContent = WEATHER_DATA.icon;
  document.getElementById('w-temp').textContent = WEATHER_DATA.temp + '°C';
  document.getElementById('w-city').textContent = WEATHER_DATA.city;
  document.getElementById('w-desc').textContent = WEATHER_DATA.desc;
  document.getElementById('warn-text').textContent = WEATHER_DATA.warning;
}

function renderTicker() {
  const ticker = document.getElementById('ticker');
  const items = [
    "🌿 Every plant you grow is a step toward a greener world",
    "💧 Consistent watering = happy plants",
    "☀️ Rotate your plants weekly for even growth",
    "🌱 Talking to your plants actually helps them grow!",
    "🪴 Over-watering is the #1 plant killer — less is more!",
    "🌺 Repot your plants every 1–2 years for healthy roots",
    "💚 You're doing amazing — keep growing!"
  ];
  ticker.innerHTML = items.concat(items).map(i => `<span>${i}</span>`).join('');
}

function renderMotivation() {
  const q = MOTIVATIONS[Math.floor(Math.random()*MOTIVATIONS.length)];
  document.getElementById('mot-quote').textContent = q;
}

function renderStats() {
  document.getElementById('stat-plants').textContent = myPlants.length;
  document.getElementById('stat-water').textContent = myPlants.filter(p=>p.wateredToday).length;
  document.getElementById('stat-logs').textContent = growthLogs.length;
}

function renderTasks() {
  const list = document.getElementById('tasks-list');
  if(myPlants.length === 0) {
    list.innerHTML = `<p style="color:var(--text3);font-size:13px;">Add plants to see your daily care tasks here.</p>`;
    return;
  }
  list.innerHTML = myPlants.map(p => {
    const pData = PLANTS.find(pl=>pl.name===p.plantName) || {};
    return `<div style="display:flex;align-items:center;gap:12px;padding:12px 16px;background:var(--surface);border-radius:14px;border:1px solid var(--border);margin-bottom:8px;">
      <span style="font-size:24px;">${pData.emoji||'🌿'}</span>
      <div style="flex:1;">
        <strong style="font-size:13px;">${p.petName}</strong>
        <span style="font-size:11px;color:var(--text3);margin-left:6px;">${p.plantName}</span>
        <p style="font-size:12px;color:var(--text2);margin-top:2px;">💧 ${pData.water||'Check plant guide'}</p>
      </div>
      <button class="btn ${p.wateredToday?'btn-secondary':'btn-primary'}" onclick="markWatered(${p.id})">${p.wateredToday?'✅ Watered':'💧 Water'}</button>
    </div>`;
  }).join('');
}

// ============================================================
// PLANT GUIDE
// ============================================================
function renderPlantGrid(filter='') {
  const grid = document.getElementById('plant-grid');
   if (!grid) return;
  const filtered = PLANTS.filter(p =>
    p.name.toLowerCase().includes(filter.toLowerCase()) ||
    p.type.toLowerCase().includes(filter.toLowerCase()) ||
    p.benefits.some(b => b.toLowerCase().includes(filter.toLowerCase())) ||
    p.sci.toLowerCase().includes(filter.toLowerCase())
  );
  grid.innerHTML = filtered.map(p => `
    <div class="plant-card" onclick="openPlantModal(${p.id})">
      <div class="plant-card-emoji">${p.emoji}</div>
      <div class="plant-card-body">
        <h3>${p.name}</h3>
        <p class="sci">${p.sci}</p>
        <div class="plant-tags">
          <span class="tag">${p.type}</span>
          <span class="tag sun">☀️ ${p.sun}</span>
          <span class="tag water">💧 ${p.water}</span>
        </div>
        <p style="font-size:12px;color:var(--text2);line-height:1.5;">${p.desc.substring(0,80)}...</p>
      </div>
      <div class="plant-card-footer">
        <span>${p.difficulty}</span>
        <span style="color:var(--accent);font-weight:700;">View details →</span>
      </div>
    </div>
  `).join('');
}

function filterPlants() {
  renderPlantGrid(document.getElementById('plant-search').value);
}

function openPlantModal(id) {
  const p = PLANTS.find(pl=>pl.id===id);
  if(!p) return;
  document.getElementById('modal-content').innerHTML = `
    <div class="modal-emoji">${p.emoji}</div>
    <div class="modal-title">${p.name}</div>
    <div class="modal-sci">${p.sci}</div>
    <div class="info-row">
      <div class="info-box"><div class="icon">☀️</div><div class="label">Sunlight</div><div class="val">${p.sun}</div></div>
      <div class="info-box"><div class="icon">💧</div><div class="label">Watering</div><div class="val">${p.water}</div></div>
      <div class="info-box"><div class="icon">📊</div><div class="label">Difficulty</div><div class="val">${p.difficulty}</div></div>
    </div>
    <div class="modal-section">
      <h4>About</h4>
      <p>${p.desc}</p>
    </div>
    <div class="modal-section">
      <h4>Care Details</h4>
      <p>☀️ <strong>Sunlight:</strong> ${p.sunDetail}<br>💧 <strong>Water:</strong> ${p.waterDetail}<br>🌍 <strong>Soil:</strong> ${p.soil}</p>
    </div>
    <div class="modal-section">
      <h4>Benefits</h4>
      <div>${p.benefits.map(b=>`<span class="benefit-chip">✨ ${b}</span>`).join('')}</div>
    </div>
    <div class="modal-section">
      <h4>🏥 Home Remedies & Health Uses</h4>
      ${p.remedies.map(r=>`
        <div class="remedy-item">
          <span class="r-icon">${r.icon}</span>
          <div><strong style="font-size:13px;color:var(--text);">${r.use}</strong><br><span style="font-size:12px;">${r.how}</span></div>
        </div>
      `).join('')}
    </div>
    <div style="margin-top:20px;display:flex;gap:10px;">
      <button class="btn btn-primary" onclick="addFromGuide('${p.name}');closeModal()">🪴 Add to My Plants</button>
      <button class="btn btn-secondary" onclick="closeModal()">Close</button>
    </div>
  `;
  openModal();
}

// ============================================================
// MY PLANTS
// ============================================================
function renderMyPlants() {
  const grid = document.getElementById('my-plants-grid');
  if (!grid) return;
  const empty = document.getElementById('empty-plants');
  if(myPlants.length === 0) {
    grid.innerHTML = '';
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';
  grid.innerHTML = myPlants.map(p => {
    const pData = PLANTS.find(pl=>pl.name===p.plantName) || {emoji:'🌿', water:'Check guide', sun:'Check guide'};
    const logs = growthLogs.filter(l=>l.plantId===p.id);
    const progress = Math.min(100, logs.length * 10);
    return `
      <div class="my-plant-card">
        <div class="my-plant-header">
          <div class="my-plant-avatar">
            ${pData.emoji}
            <div class="status-dot" style="background:${p.wateredToday?'#6adb6a':'#f0c040'}"></div>
          </div>
          <div>
            <div class="my-plant-name">${p.petName} 💚</div>
            <div class="my-plant-species">${p.plantName}</div>
            <div style="font-size:11px;color:var(--text3);margin-top:2px;">Added ${new Date(p.addedDate).toLocaleDateString('en-IN',{month:'short',day:'numeric'})}</div>
          </div>
        </div>
        <div>
          <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text3);font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">
            <span>Growth Progress</span><span>${progress}%</span>
          </div>
          <div class="progress-bar"><div class="progress-fill" style="width:${progress}%"></div></div>
          <div style="font-size:11px;color:var(--text3);margin-top:2px;">${logs.length} log entries · ${p.wateredToday?'💧 Watered today':'💧 Needs water'}</div>
        </div>
        <div style="margin-top:10px;display:flex;gap:8px;font-size:12px;">
          <span class="tag sun" style="cursor:default;">☀️ ${pData.sun}</span>
          <span class="tag water" style="cursor:default;">💧 ${pData.water}</span>
        </div>
        <div class="plant-actions">
          <button class="btn btn-primary" onclick="markWatered(${p.id})">💧 ${p.wateredToday?'Watered ✅':'Water Now'}</button>
          <button class="btn btn-secondary" onclick="showSection('growth');setTimeout(()=>selectPlant(${p.id}),100)">📸 Log Growth</button>
          <button class="btn btn-secondary" onclick="editPlant(${p.id})">✏️ Edit</button>
          <button class="btn btn-danger" onclick="deletePlant(${p.id})">🗑️</button>
        </div>
      </div>
    `;
  }).join('');
}

function openAddPlant(preselect='') {
  document.getElementById('modal-content').innerHTML = `
    <div style="font-size:48px;text-align:center;margin-bottom:8px;">🌱</div>
    <div class="modal-title">Add a New Plant</div>
    <p style="color:var(--text2);font-size:13px;margin-top:4px;margin-bottom:20px;">Name your plant like a pet and choose its species!</p>
    <div class="form-group">
      <label>🏷️ Give your plant a pet name</label>
      <input type="text" id="pet-name-input" placeholder="e.g. Bella, Sunny, Leafy..." value=""/>
    </div>
    <div class="form-group">
      <label>🌿 Plant Species</label>
      <select id="plant-species-select">
        <option value="">— Choose a plant —</option>
        ${PLANTS.map(p=>`<option value="${p.name}" ${p.name===preselect?'selected':''}>${p.emoji} ${p.name}</option>`).join('')}
      </select>
    </div>
    <div class="form-group">
      <label>📅 Date planted / acquired</label>
      <input type="date" id="plant-date" value="${new Date().toISOString().split('T')[0]}"/>
    </div>
    <div class="form-group">
      <label>📝 Notes (optional)</label>
      <textarea id="plant-notes" rows="2" placeholder="Any special notes about this plant..."></textarea>
    </div>
    <div style="display:flex;gap:10px;margin-top:8px;">
      <button class="btn btn-primary" onclick="savePlant()" style="flex:1;">💚 Add to My Garden</button>
      <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
    </div>
  `;
  openModal();
}

function addFromGuide(name) { openAddPlant(name); }

function savePlant() {
  const petName = document.getElementById('pet-name-input').value.trim();
  const plantName = document.getElementById('plant-species-select').value;
  const plantDate = document.getElementById('plant-date').value;
  const notes = document.getElementById('plant-notes').value.trim();
  if(!petName || !plantName) { showToast('⚠️ Please enter a pet name and select a species!'); return; }
  const id = Date.now();
  myPlants.push({ id, petName, plantName, addedDate: plantDate, notes, wateredToday: false, logs: [] });
  save();
  closeModal();
  renderMyPlants();
  renderStats();
  renderTasks();
  addNotif(`💚 ${petName} has joined your garden!`, `Welcome ${petName} (${plantName}) to your green family! 🌱`);
  showToast(`🌱 ${petName} added to your garden!`);
}

function editPlant(id) {
  const p = myPlants.find(pl=>pl.id===id);
  if(!p) return;
  document.getElementById('modal-content').innerHTML = `
    <div style="font-size:48px;text-align:center;margin-bottom:8px;">✏️</div>
    <div class="modal-title">Edit Plant</div>
    <div class="form-group" style="margin-top:16px;">
      <label>🏷️ Pet Name</label>
      <input type="text" id="edit-pet-name" value="${p.petName}"/>
    </div>
    <div class="form-group">
      <label>📝 Notes</label>
      <textarea id="edit-notes" rows="3">${p.notes||''}</textarea>
    </div>
    <div style="display:flex;gap:10px;">
      <button class="btn btn-primary" onclick="updatePlant(${id})" style="flex:1;">💾 Save Changes</button>
      <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
    </div>
  `;
  openModal();
}

function updatePlant(id) {
  const p = myPlants.find(pl=>pl.id===id);
  if(!p) return;
  p.petName = document.getElementById('edit-pet-name').value.trim() || p.petName;
  p.notes = document.getElementById('edit-notes').value.trim();
  save();
  closeModal();
  renderMyPlants();
  showToast(`✅ ${p.petName} updated!`);
}

function deletePlant(id) {
  const p = myPlants.find(pl=>pl.id===id);
  if(!p) return;
  if(!confirm(`Are you sure you want to remove ${p.petName} from your garden? 😢`)) return;
  myPlants = myPlants.filter(pl=>pl.id!==id);
  growthLogs = growthLogs.filter(l=>l.plantId!==id);
  save();
  renderMyPlants();
  renderStats();
  renderTasks();
  showToast(`🌿 ${p.petName} removed from your garden.`);
}

function markWatered(id) {
  const p = myPlants.find(pl=>pl.id===id);
  if(!p) return;
  p.wateredToday = !p.wateredToday;
  save();
  renderMyPlants();
  renderTasks();
  renderStats();
  if(p.wateredToday) showToast(`💧 ${p.petName} has been watered! Great job!`);
}

// ============================================================
// GROWTH LOG
// ============================================================
let selectedPlantId = null;



function renderGrowthLog() {

  const sel = document.getElementById('growth-plant-selector');

  if (!sel) return;

  const timeline = document.getElementById('growth-timeline');

  if (!timeline) return;

  const empty = document.getElementById('empty-growth');

  if (!empty) return;

  if(myPlants.length === 0) {

    sel.innerHTML = '';

    timeline.innerHTML = '';

    empty.style.display = 'block';

    return;
  }

  empty.style.display = 'none';

  sel.innerHTML = `
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:16px;">

      <span style="font-size:13px;font-weight:700;color:var(--text2);align-self:center;">
        Filter by plant:
      </span>

      <button
        class="btn ${!selectedPlantId ? 'btn-primary' : 'btn-secondary'}"
        onclick="selectPlant(null)"
      >
        All Plants
      </button>

      ${myPlants.map(p => `
        <button
          class="btn ${selectedPlantId === p.id ? 'btn-primary' : 'btn-secondary'}"
          onclick="selectPlant(${p.id})"
        >
          ${p.petName}
        </button>
      `).join('')}

    </div>
  `;

  const logs = selectedPlantId
    ? growthLogs.filter(l => l.plantId === selectedPlantId)
    : growthLogs;

  if(logs.length === 0) {

    timeline.innerHTML = `
      <div style="text-align:center;padding:40px;color:var(--text3);">

        <div style="font-size:48px;margin-bottom:12px;">
          🌱
        </div>

        <p style="font-size:14px;font-weight:700;">
          No logs yet for this plant.
        </p>

        <p style="font-size:12px;margin-top:6px;">
          Click "Log Today" to document its growth!
        </p>

      </div>
    `;

    return;
  }

  const sorted = [...logs].sort(
    (a,b) => new Date(b.date) - new Date(a.date)
  );

  timeline.innerHTML = sorted.map(l => {

    const p = myPlants.find(
      pl => pl.id === l.plantId
    );

    const pData = PLANTS.find(
      pl => pl.name === p?.plantName
    ) || { emoji:'🌿' };

    return `
      <div class="log-item">

        <div class="log-dot">
          ${pData.emoji}
        </div>

        <div class="log-content">

          <div class="log-date">
            ${new Date(l.date).toLocaleDateString(
              'en-IN',
              {
                weekday:'short',
                year:'numeric',
                month:'short',
                day:'numeric'
              }
            )}
          </div>

          <strong style="font-size:14px;">
            ${p?.petName || 'Plant'}
          </strong>

          ${l.note
            ? `
              <p class="log-note">
                ${l.note}
              </p>
            `
            : ''
          }

          ${l.height
            ? `
              <p style="font-size:12px;color:var(--accent);margin-top:4px;">
                📏 Height: ${l.height} cm
              </p>
            `
            : ''
          }

          ${l.photo
            ? `
              <div class="log-img" style="font-size:14px;color:var(--text3);padding:10px;">
                📸 Photo uploaded: ${l.photo}
              </div>
            `
            : ''
          }

        </div>

      </div>
    `;

  }).join('');
}

function selectPlant(id) {
  selectedPlantId = id;
  renderGrowthLog();
}

function openLogEntry() {
  if(myPlants.length === 0) { showToast('⚠️ Add a plant first before logging growth!'); return; }
  document.getElementById('modal-content').innerHTML = `
    <div style="font-size:48px;text-align:center;margin-bottom:8px;">📸</div>
    <div class="modal-title">Log Today's Growth</div>
    <p style="color:var(--text2);font-size:13px;margin:4px 0 20px;">Document ${new Date().toLocaleDateString('en-IN',{month:'long',day:'numeric'})}'s progress</p>
    <div class="form-group">
      <label>🪴 Which plant?</label>
      <select id="log-plant-sel">
        ${myPlants.map(p=>`<option value="${p.id}">${p.petName} (${p.plantName})</option>`).join('')}
      </select>
    </div>
    <div class="upload-zone" onclick="simulateUpload()" id="upload-area">
      <div class="uz-icon">📷</div>
      <p>Click to upload today's photo</p>
      <span>JPG, PNG or HEIC up to 10MB</span>
    </div>
    <div id="upload-preview" style="margin-top:10px;display:none;">
      <div style="background:var(--accent3);border-radius:12px;padding:12px;text-align:center;color:var(--accent);font-weight:700;font-size:13px;">✅ Photo uploaded!</div>
    </div>
    <div class="form-group" style="margin-top:14px;">
      <label>📏 Current height (cm, optional)</label>
      <input type="number" id="log-height" placeholder="e.g. 12"/>
    </div>
    <div class="form-group">
      <label>📝 Growth notes</label>
      <textarea id="log-note" rows="3" placeholder="Any new leaves? Flowers? Changes in colour? How is it looking today?"></textarea>
    </div>
    <div style="display:flex;gap:10px;">
      <button class="btn btn-primary" onclick="saveLogEntry()" style="flex:1;">💾 Save Log Entry</button>
      <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
    </div>
  `;
  openModal();
}

let photoUploaded = false;
function simulateUpload() {
  photoUploaded = true;
  document.getElementById('upload-area').style.borderColor = 'var(--accent)';
  document.getElementById('upload-preview').style.display = 'block';
}

function saveLogEntry() {
  const plantId = parseInt(document.getElementById('log-plant-sel').value);
  const note = document.getElementById('log-note').value.trim();
  const height = document.getElementById('log-height').value;
  const p = myPlants.find(pl=>pl.id===plantId);
  growthLogs.push({
    id: Date.now(),
    plantId,
    date: new Date().toISOString(),
    note,
    height: height ? parseInt(height) : null,
    photo: photoUploaded ? `growth_${Date.now()}.jpg` : null
  });
  photoUploaded = false;
  save();
  closeModal();
  renderGrowthLog();
  renderStats();
  addNotif(`📸 Growth log added for ${p?.petName}!`, `You logged a new growth entry. Keep it up! 🌱`);
  showToast(`📸 Growth logged for ${p?.petName||'your plant'}!`);
}

// ============================================================
// NOTIFICATIONS
// ============================================================
function renderNotifications() {
  const list = document.getElementById('notif-list');
  list.innerHTML = notifications.map((n,i)=>`
    <div class="notif-item ${n.unread?'unread':''}" onclick="markNotifRead(${i})">
      <div class="notif-icon">${n.icon}</div>
      <div class="notif-body">
        <strong>${n.title}</strong>
        <p>${n.msg}</p>
      </div>
      <span class="notif-time">${n.time||'Now'}</span>
    </div>
  `).join('');
  const unread = notifications.filter(n=>n.unread).length;
  const badge = document.getElementById('notif-badge');
  badge.textContent = unread;
  badge.style.display = unread > 0 ? '' : 'none';
}

function markNotifRead(i) { notifications[i].unread = false; save(); renderNotifications(); }

function clearNotifs() {
  notifications.forEach(n=>n.unread=false);
  save();
  renderNotifications();
  showToast('✅ All notifications marked as read!');
}

function addNotif(title, msg, icon='🌿') {
  notifications.unshift({ icon, title, msg, unread: true, time: 'Just now' });
  save();
  renderNotifications();
}

// ============================================================
// PROFILE
// ============================================================
function renderProfile() {
  document.getElementById('display-name').textContent = profile.name;
  document.getElementById('display-email').textContent = profile.email;
  document.getElementById('display-bio').textContent = `"${profile.bio}"`;
  document.getElementById('profile-avatar').textContent = profile.avatar;
  document.getElementById('prof-name').value = profile.name;
  document.getElementById('prof-email').value = profile.email;
  document.getElementById('prof-bio').value = profile.bio;
  setGreeting();
}

function saveProfile() {
  profile.name = document.getElementById('prof-name').value.trim() || profile.name;
  profile.email = document.getElementById('prof-email').value.trim() || profile.email;
  profile.bio = document.getElementById('prof-bio').value.trim() || profile.bio;
  save();
  renderProfile();
  showToast('✅ Profile saved!');
}

function setAvatar(el, emoji) {
  profile.avatar = emoji;
  document.getElementById('profile-avatar').textContent = emoji;
  save();
  showToast(`${emoji} Avatar updated!`);
}

function changeAvatar() { showSection('profile'); }

// ============================================================
// THEME
// ============================================================
function setTheme(theme, el) {
  document.body.setAttribute('data-theme', theme);
  document.querySelectorAll('.theme-swatch').forEach(s => s.classList.remove('active'));
  if(el) el.classList.add('active');
  localStorage.setItem('bloomly_theme', theme);
  showToast('🎨 Theme updated!');
}

const savedTheme = localStorage.getItem('bloomly_theme');
if(savedTheme) setTheme(savedTheme, document.querySelector(`[data-theme="${savedTheme}"]`));

// ============================================================
// NAVIGATION
// ============================================================
function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('section-' + id).classList.add('active');
  const nav = document.querySelector(`.nav-item[onclick*="${id}"]`);
  if(nav) nav.classList.add('active');
  if(id === 'notifications') renderNotifications();
  if(id === 'myplants') renderMyPlants();
  if(id === 'growth') renderGrowthLog();
  if(id === 'profile') renderProfile();
  if(id === 'dashboard') { renderStats(); renderTasks(); renderMotivation(); }
}

// ============================================================
// MODAL
// ============================================================
function openModal() { document.getElementById('modal-overlay').classList.add('show'); }
function closeModal() { document.getElementById('modal-overlay').classList.remove('show'); }

// ============================================================
// TOAST
// ============================================================
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.style.display = 'block';
  setTimeout(() => { t.style.display = 'none'; }, 3000);
}

async function loadPlants() {

    try {

        const response = await fetch(
            "http://127.0.0.1:5000/api/plants"
        );

        const plants = await response.json();

        console.log(plants);

    } catch (error) {

        console.error(
            "Error loading plants:",
            error
        );
    }
}

loadPlants();