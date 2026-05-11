"""
Plant guide data and utility models.
"""

PLANTS = [
    {
        "id": 1,
        "name": "Tulsi (Holy Basil)",
        "sci": "Ocimum tenuiflorum",
        "emoji": "🌿",
        "type": "Herb",
        "sun": "Full Sun",
        "sunDetail": "6–8 hours daily",
        "water": "Every 2–3 days",
        "waterDetail": "Keep soil moist, not waterlogged",
        "soil": "Well-drained",
        "difficulty": "Easy",
        "desc": "Sacred herb in Indian households, tulsi is revered for its medicinal properties and spiritual significance.",
        "benefits": ["Air purifier", "Stress relief", "Insect repellent", "Sacred plant"],
        "remedies": [
            {"icon": "🤧", "use": "Cold & Cough", "how": "Brew 5–10 leaves in hot water with honey."},
            {"icon": "😤", "use": "Respiratory", "how": "Steam inhalation with tulsi leaves."},
            {"icon": "🧘", "use": "Stress & Anxiety", "how": "Chew 2–3 leaves daily on empty stomach."},
            {"icon": "🦟", "use": "Insect Bites", "how": "Apply fresh tulsi juice to bites."},
        ],
    },
    {
        "id": 2,
        "name": "Aloe Vera",
        "sci": "Aloe barbadensis miller",
        "emoji": "🌵",
        "type": "Succulent",
        "sun": "Indirect Bright Light",
        "sunDetail": "4–6 hours indirect",
        "water": "Every 2–3 weeks",
        "waterDetail": "Let soil dry completely between watering",
        "soil": "Sandy/Cactus mix",
        "difficulty": "Easy",
        "desc": "A must-have succulent that stores water in its thick leaves. Incredibly useful for skin and digestion.",
        "benefits": ["Skin healing", "Digestive aid", "Sunburn relief", "Low maintenance"],
        "remedies": [
            {"icon": "🔥", "use": "Burns & Sunburn", "how": "Apply fresh gel directly to affected area."},
            {"icon": "✨", "use": "Skin Moisturiser", "how": "Apply gel to face, leave for 15–20 minutes."},
            {"icon": "🤢", "use": "Digestive Health", "how": "Drink 30ml of aloe vera juice before meals."},
            {"icon": "🦱", "use": "Hair & Scalp", "how": "Apply gel to scalp, massage, leave for 30 min."},
        ],
    },
    {
        "id": 3,
        "name": "Money Plant",
        "sci": "Epipremnum aureum",
        "emoji": "💚",
        "type": "Vine",
        "sun": "Low to Medium Light",
        "sunDetail": "2–4 hours indirect",
        "water": "Every 7–10 days",
        "waterDetail": "Allow top inch of soil to dry",
        "soil": "Any well-draining mix",
        "difficulty": "Very Easy",
        "desc": "Beloved for bringing good luck and prosperity, money plant is one of the easiest houseplants to grow.",
        "benefits": ["Air purifier", "Low-light tolerant", "Removes toxins", "Feng shui plant"],
        "remedies": [
            {"icon": "🫁", "use": "Air Purification", "how": "Place 1 plant per 100 sq ft."},
            {"icon": "😴", "use": "Better Sleep", "how": "Keep in bedroom to reduce CO2 at night."},
        ],
    },
    # Add remaining plants following the same structure...
    # (Truncated for brevity — include all 20 plants from the frontend)
]

MOTIVATIONS = [
    "🌱 Every plant you nurture is a piece of life you've chosen to protect!",
    "☀️ Just like your plants turn toward the sun, you're growing toward something beautiful.",
    "💧 Small acts of care — watering, pruning, watching — are acts of love. Keep going!",
    "🌸 The garden of your heart grows when you tend to living things.",
    "🌿 Patience is a plant parent's greatest virtue. Your dedication is inspiring.",
    "✨ Every leaf that unfurls is your success. You made that happen!",
    "🌻 Your plants don't judge, they just grow. Let yourself grow too.",
    "🪴 A home with plants is a home with life. You've created something magical.",
    "💚 You haven't just grown plants — you've grown as a person. Keep blooming!",
    "🌱 Even the mightiest tree started as a tiny seed under someone's care.",
    "🦋 Nature rewards patience and consistency. You're doing wonderfully.",
    "🌺 The love you pour into your plants comes back as oxygen and beauty.",
]


def get_plant_by_name(name: str) -> dict | None:
    """Find a plant in the guide by name."""
    for plant in PLANTS:
        if plant["name"].lower() == name.lower():
            return plant
    return None


def get_plant_by_id(plant_id: int) -> dict | None:
    """Find a plant in the guide by ID."""
    for plant in PLANTS:
        if plant["id"] == plant_id:
            return plant
    return None
