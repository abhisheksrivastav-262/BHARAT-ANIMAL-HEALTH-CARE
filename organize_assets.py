import os
import shutil
import subprocess
from PIL import Image

base = "/Users/abhisheksrivastav/Documents/BAHC"
a_dir = os.path.join(base, "a")
pub_dir = os.path.join(base, "public", "assets")

docs_dir = os.path.join(pub_dir, "docs")
vids_dir = os.path.join(pub_dir, "videos")
prods_dir = os.path.join(pub_dir, "products")
brand_dir = os.path.join(pub_dir, "brand")
gallery_dir = os.path.join(pub_dir, "gallery")

for d in [docs_dir, vids_dir, prods_dir, brand_dir, gallery_dir]:
    os.makedirs(d, exist_ok=True)

# 1. DOCUMENTS
docs_map = {
    "305025100165q - bharat animal health care - iso 9001-2015.pdf": "bahc-iso-9001-2015-certificate.pdf",
    "IEC - BAHC.pdf": "bahc-dgft-iec-certificate.pdf",
    "Cattle feed PPT.pdf": "bahc-cattle-feed-presentation.pdf",
    "Company Profile PPT.pdf": "bahc-company-profile.pdf",
    "red bah.pdf": "bahc-product-brochure.pdf",
    "BAHC ALL PRODUCT.pdf": "bahc-all-products-catalog.pdf",
    "12 x 18 STICKER_300GM copy.pdf": "stress-nil-technical-specifications.pdf"
}

for src, dst in docs_map.items():
    src_path = os.path.join(a_dir, src)
    if os.path.exists(src_path):
        shutil.copy2(src_path, os.path.join(docs_dir, dst))
        print(f"Copied document: {dst}")

# 2. VIDEOS & POSTERS
vids_list = [
    ("WhatsApp Video 2026-10-27 at 12.30.57.mp4", "bahc-overview-intro.mp4", "bahc-overview-intro.jpg", "00:00:02"),
    ("WhatsApp Video 2026-10-27 at 12.31.09.mp4", "dudhganga-calcium-5l.mp4", "dudhganga-calcium-5l.jpg", "00:00:03"),
    ("WhatsApp Video 2026-10-27 at 12.31.15 (1).mp4", "livestock-dairy-health.mp4", "livestock-dairy-health.jpg", "00:00:04"),
    ("WhatsApp Video 2026-10-27 at 12.31.15.mp4", "cattle-feed-application.mp4", "cattle-feed-application.jpg", "00:00:05"),
    ("WhatsApp Video 2026-10-27 at 12.31.16 (1).mp4", "production-plant-facility.mp4", "production-plant-facility.jpg", "00:00:03"),
    ("WhatsApp Video 2026-10-27 at 12.31.16.mp4", "farmer-demonstration.mp4", "farmer-demonstration.jpg", "00:00:04"),
    ("WhatsApp Video 2026-10-27 at 12.31.19.mp4", "animal-nutrition-fieldwork.mp4", "animal-nutrition-fieldwork.jpg", "00:00:08"),
    ("WhatsApp Video 2026-10-27 at 12.31.28.mp4", "manufacturing-quality-assurance.mp4", "manufacturing-quality-assurance.jpg", "00:00:10"),
]

for src, dst_vid, dst_thumb, ss in vids_list:
    src_path = os.path.join(a_dir, src)
    dst_vid_path = os.path.join(vids_dir, dst_vid)
    dst_thumb_path = os.path.join(vids_dir, dst_thumb)
    if os.path.exists(src_path):
        shutil.copy2(src_path, dst_vid_path)
        subprocess.run(['ffmpeg', '-y', '-ss', ss, '-i', src_path, '-vframes', '1', '-q:v', '2', dst_thumb_path],
                       stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        print(f"Copied video & thumbnail: {dst_vid}")

# 3. BRAND & LOGO
# Image WhatsApp Image 2026-10-27 at 12.31.10 (3).jpeg is the official BAHC round emblem
logo_src = os.path.join(a_dir, "WhatsApp Image 2026-10-27 at 12.31.10 (3).jpeg")
if os.path.exists(logo_src):
    shutil.copy2(logo_src, os.path.join(brand_dir, "bahc-logo-emblem.jpg"))
    # Also save as bahc-logo.jpg
    shutil.copy2(logo_src, os.path.join(brand_dir, "bahc-logo.jpg"))
    print("Copied official logo emblem")

# WhatsApp Image 2026-10-27 at 12.31.20.jpeg is the official letterhead / banner
banner_src = os.path.join(a_dir, "WhatsApp Image 2026-10-27 at 12.31.20.jpeg")
if os.path.exists(banner_src):
    shutil.copy2(banner_src, os.path.join(brand_dir, "bahc-brand-banner.jpg"))

# WhatsApp Image 2026-10-27 at 12.31.29 (1).jpeg is Make In India & ISO badge
badge_src = os.path.join(a_dir, "WhatsApp Image 2026-10-27 at 12.31.29 (1).jpeg")
if os.path.exists(badge_src):
    shutil.copy2(badge_src, os.path.join(brand_dir, "make-in-india-iso-badge.jpg"))

# 4. PRODUCT IMAGES - Targeted canonical mappings
products_map = {
    # Dudhdhara Suspension
    "WhatsApp Image 2026-10-27 at 12.31.20 (1).jpeg": "dudhdhara-gold-20l.jpg",
    "WhatsApp Image 2026-10-27 at 12.31.20 (2).jpeg": "dudhdhara-gold-suspension.jpg",
    "WhatsApp Image 2026-10-27 at 12.31.30.jpeg": "dudhdhara-calcium-regular-5l.jpg",
    "WhatsApp Image 2026-10-27 at 12.31.29 (3).jpeg": "dudhdhara-calcium-regular.jpg",
    "WhatsApp Image 2026-10-27 at 12.30.58 (2).jpeg": "dudhdhara-glycin-chelated.jpg",
    "WhatsApp Image 2026-10-27 at 12.30.58.jpeg": "dudhdhara-composition-label.jpg",
    "WhatsApp Image 2026-10-27 at 12.30.58 (1).jpeg": "dudhdhara-promo-offer.jpg",

    # Dudhdhara Mineral Mixture & Forte
    "WhatsApp Image 2026-10-27 at 12.31.03.jpeg": "dudhdhara-forte-1kg.jpg",
    "WhatsApp Image 2026-10-27 at 12.31.01 (3).jpeg": "dudhdhara-glycine-chelate-pack.jpg",
    "WhatsApp Image 2026-10-27 at 12.31.22 (3).jpeg": "dudhdhara-mineral-mixture-vitamins.jpg",

    # Bharat Gold & Bharat Mix Forte (40 Kg)
    "WhatsApp Image 2026-10-27 at 12.31.04 (1).jpeg": "bharat-mix-forte-40kg.jpg",
    "WhatsApp Image 2026-10-27 at 12.31.04 (2).jpeg": "bharat-mix-forte-front.jpg",
    "WhatsApp Image 2026-10-27 at 12.31.05.jpeg": "bharat-gold-feed-combo.jpg",
    "WhatsApp Image 2026-10-27 at 12.31.05 (2).jpeg": "bharat-mix-forte-detail.jpg",

    # Stress Nil 4-in-1 & Multivitamins
    "WhatsApp Image 2026-10-27 at 12.31.00 (3).jpeg": "stress-nil-multivitamin-ad3e.jpg",
    "WhatsApp Image 2026-10-27 at 12.31.28.jpeg": "livocare-plus-poultry-powder.jpg",

    # Goat & Sheep Nutrition
    "WhatsApp Image 2026-10-27 at 12.31.00 (2).jpeg": "bakriyo-golee-banner.jpg",
    "WhatsApp Image 2026-10-27 at 12.31.26.jpeg": "bakriyo-golee-pack.jpg",
    "WhatsApp Image 2026-10-27 at 12.31.26 (1).jpeg": "bakriyo-golee-nutrition.jpg",

    # Aquaculture & Fish Health
    "WhatsApp Image 2026-10-27 at 12.31.20 (3).jpeg": "oxyfish-fish-feed-supplement.jpg",
    "WhatsApp Image 2026-10-27 at 12.31.21.jpeg": "fish-fresh-pond-freshener.jpg",
    "WhatsApp Image 2026-10-27 at 12.31.22 (2).jpeg": "f-safetox-toxin-binder.jpg",
    "WhatsApp Image 2026-10-27 at 12.31.23 (2).jpeg": "b-heal-aqua.jpg",
    "WhatsApp Image 2026-10-27 at 12.31.29 (2).jpeg": "bahc-aquaculture-division.jpg",

    # Breeding & Specialty Formulations
    "WhatsApp Image 2026-10-27 at 12.31.23 (1).jpeg": "b-fertivet-bull-power.jpg",
    "WhatsApp Image 2026-10-27 at 12.31.23.jpeg": "b-fertivet-double-power.jpg",
    "WhatsApp Image 2026-10-27 at 12.30.58 (3).jpeg": "pashu-heat.jpg",
    "WhatsApp Image 2026-10-27 at 12.31.27 (1).jpeg": "plantomin-herbal-vitality.jpg",
    "WhatsApp Image 2026-10-27 at 12.31.26 (3).jpeg": "b-dogy-pet-nutrition.jpg",
    "WhatsApp Image 2026-10-27 at 12.31.25 (3).jpeg": "36-herbal-extracts-formula.jpg",

    # Manufacturing, Quality & Plant
    "WhatsApp Image 2026-10-27 at 12.31.24.jpeg": "bahc-plant-address-label.jpg",
    "WhatsApp Image 2026-10-27 at 12.31.24 (1).jpeg": "bahc-plant-navsari-label.jpg",
    "WhatsApp Image 2026-10-27 at 12.31.17 (1).jpeg": "cattle-breeds-reference.jpg",
    "WhatsApp Image 2026-10-27 at 12.31.11.jpeg": "bahc-hero-livestock.jpg",
    "WhatsApp Image 2026-10-27 at 12.31.30 (1).jpeg": "dudhdhara-mega-offer.jpg"
}

for src, dst in products_map.items():
    src_path = os.path.join(a_dir, src)
    if os.path.exists(src_path):
        shutil.copy2(src_path, os.path.join(prods_dir, dst))
        print(f"Mapped product image: {dst}")

# Also copy all 80 images into public/assets/gallery/ with systematic names
all_images = sorted([f for f in os.listdir(a_dir) if f.endswith(('.jpeg', '.jpg', '.png'))])
for idx, img_name in enumerate(all_images):
    src_path = os.path.join(a_dir, img_name)
    dst_name = f"gallery-{idx+1:02d}.jpg"
    shutil.copy2(src_path, os.path.join(gallery_dir, dst_name))

print(f"\nAll assets successfully organized in {pub_dir}!")
