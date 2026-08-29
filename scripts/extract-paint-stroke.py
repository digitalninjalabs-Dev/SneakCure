from PIL import Image
import os

def extract_stroke(src, dst, mode="blue"):
    im = Image.open(src).convert("RGBA")
    px = im.load()
    w, h = im.size
    out = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    op = out.load()
    minx, miny, maxx, maxy = w, h, 0, 0
    for y in range(h):
        for x in range(w):
            r, g, b, _a = px[x, y]
            is_gray = abs(r - g) < 18 and abs(g - b) < 18 and abs(r - b) < 18 and r > 140
            if mode == "blue":
                keep = b > 120 and b > r + 40 and b > g + 20 and not is_gray
            else:
                lum = (r + g + b) / 3
                chroma = max(abs(r - g), abs(g - b), abs(r - b))
                keep = lum > 235 and chroma < 30
            if keep:
                if mode == "blue":
                    strength = min(255, int((b - 60) * 1.15))
                    op[x, y] = (0, 85, 255, strength)
                else:
                    op[x, y] = (255, 255, 255, min(255, int((r + g + b) / 3)))
                minx = min(minx, x)
                miny = min(miny, y)
                maxx = max(maxx, x)
                maxy = max(maxy, y)
    if maxx > minx:
        out = out.crop((minx, miny, maxx + 1, maxy + 1))
    out.save(dst)
    nonempty = sum(1 for p in out.getdata() if p[3] > 0)
    print(dst, out.size, "nonempty", nonempty)


base = r"C:\Users\USER\Desktop\SneakCure\public\franchise"
# Use originals from assets if present
assets = r"C:\Users\USER\.cursor\projects\c-Users-USER-Desktop-SneakCure\assets"
blue_src = os.path.join(assets, "paint-stroke-blue.png")
white_src = os.path.join(assets, "paint-stroke-white.png")
if not os.path.exists(blue_src):
    blue_src = os.path.join(base, "paint-stroke-blue.png")
if not os.path.exists(white_src):
    white_src = os.path.join(base, "paint-stroke-white.png")

extract_stroke(blue_src, os.path.join(base, "paint-stroke-blue.png"), "blue")
extract_stroke(white_src, os.path.join(base, "paint-stroke-white.png"), "white")
print("done")
