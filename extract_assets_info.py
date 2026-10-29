import os
import fitz  # PyMuPDF
import glob
import json

base_dir = "/Users/abhisheksrivastav/Documents/BAHC"
a_dir = os.path.join(base_dir, "a")
my_docs_dir = os.path.join(base_dir, "my documents ")

print("=== INSPECTING PDFS ===")
pdf_files = glob.glob(os.path.join(a_dir, "*.pdf")) + glob.glob(os.path.join(my_docs_dir, "*.pdf"))
pdf_data = {}

for pdf_path in sorted(pdf_files):
    pdf_name = os.path.basename(pdf_path)
    print(f"\n--- PDF: {pdf_name} ---")
    try:
        doc = fitz.open(pdf_path)
        pdf_data[pdf_name] = {
            "path": pdf_path,
            "page_count": len(doc),
            "pages": []
        }
        print(f"Pages: {len(doc)}")
        for page_num in range(len(doc)):
            page = doc[page_num]
            text = page.get_text()
            pdf_data[pdf_name]["pages"].append({
                "page": page_num + 1,
                "text": text.strip()
            })
            if len(text.strip()) > 0:
                print(f"[Page {page_num + 1}] Text snippet ({len(text)} chars):\n{text[:300]}...")
            else:
                print(f"[Page {page_num + 1}] (No extractable text - likely scanned / image)")
    except Exception as e:
        print(f"Error reading {pdf_name}: {e}")

with open(os.path.join(base_dir, "extracted_pdf_data.json"), "w") as f:
    json.dump(pdf_data, f, indent=2)

print("\n=== INSPECTING VIDEOS ===")
video_files = glob.glob(os.path.join(a_dir, "*.mp4")) + glob.glob(os.path.join(my_docs_dir, "*.mp4"))
for vf in sorted(video_files):
    size = os.path.getsize(vf) / (1024 * 1024)
    print(f"Video: {os.path.basename(vf)} ({size:.2f} MB)")

print("\n=== INSPECTING IMAGES ===")
img_files = glob.glob(os.path.join(a_dir, "*.jpeg")) + glob.glob(os.path.join(a_dir, "*.jpg")) + glob.glob(os.path.join(a_dir, "*.png"))
img_files += glob.glob(os.path.join(my_docs_dir, "*.jpeg")) + glob.glob(os.path.join(my_docs_dir, "*.jpg")) + glob.glob(os.path.join(my_docs_dir, "*.png"))
print(f"Total image files found: {len(img_files)}")
