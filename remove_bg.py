from rembg import remove
from PIL import Image
import io
import os

ASSETS = r"C:\Users\Talha\StudioProjects\ht-business-advisory\assets"

targets = [
    ("founding-partner.jpg", "founding-partner.png"),
    ("managing-partner.jpg", "managing-partner.png"),
    ("business-development.jpg", "business-development.png"),
]

for src_name, out_name in targets:
    src = os.path.join(ASSETS, src_name)
    out = os.path.join(ASSETS, out_name)
    print(f"Processing {src_name} -> {out_name}")
    with open(src, "rb") as f:
        data = f.read()
    cut = remove(data)
    foreground = Image.open(io.BytesIO(cut)).convert("RGBA")
    white_bg = Image.new("RGBA", foreground.size, (255, 255, 255, 255))
    composed = Image.alpha_composite(white_bg, foreground).convert("RGB")
    composed.save(out, "PNG")
    print(f"  saved -> {out}")

print("Done")
