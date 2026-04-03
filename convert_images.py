import os
from PIL import Image

output_dir = "/Users/brijesh/Desktop/Portfolio-Website-main/public/images/"
input_dir = "/Users/brijesh/.gemini/antigravity/brain/403d2687-f398-4eb0-aa07-ae159c8b0c01/"

files = {
    "media__1774769461756.png": "iot-healthcare.webp"
}

for in_file, out_file in files.items():
    try:
        in_path = os.path.join(input_dir, in_file)
        out_path = os.path.join(output_dir, out_file)
        img = Image.open(in_path)
        img.save(out_path, format="webp")
        print(f"Successfully saved {out_file}")
    except Exception as e:
        print(f"Error converting {in_file}: {e}")
