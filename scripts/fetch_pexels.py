import urllib.request
import re
import os
import ssl

ssl_context = ssl._create_unverified_context()

PEXELS_IDS = {
    "h01_hero_truck.jpg": "20922619",
    "h02_cargo_forklift.jpg": "18699603",
    "h03_road_trucks.jpg": "29057946",
    "h04_rail_freight.jpg": "29310005",
    "h05_air_freight.jpg": "32642359",
    "h06_logistics_center.jpg": "2804929",
    "s01_road_transport.jpg": "20862827",
    "s02_rail_transport.jpg": "30720850",
    "s03_air_cargo.jpg": "35424560",
    "s04_cargo_handling.jpg": "11666903",
    "s05_pickup_collection.jpg": "18699603",
    "s06_delivery_dock.jpg": "29786116",
    "a01_about_center.jpg": "2804929",
    "a02_about_operations.jpg": "1267327",
    "a03_about_parking.jpg": "35501717",
    "e01_enquiry_truck.jpg": "11924297",
    "e02_loading_dock_sun.jpg": "37907538"
}

target_dir = os.path.join(os.getcwd(), "public", "images", "logistics")
os.makedirs(target_dir, exist_ok=True)

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

for filename, photo_id in PEXELS_IDS.items():
    file_path = os.path.join(target_dir, filename)
    direct_url = f"https://images.pexels.com/photos/{photo_id}/pexels-photo-{photo_id}.jpeg?auto=compress&cs=tinysrgb&w=1600"
    print(f"Downloading {filename} (Photo ID {photo_id})...")
    try:
        req = urllib.request.Request(direct_url, headers=headers)
        with urllib.request.urlopen(req, context=ssl_context, timeout=20) as resp:
            data = resp.read()
            with open(file_path, 'wb') as f:
                f.write(data)
            print(f"  Success: Saved {filename} ({len(data)} bytes)")
    except Exception as err:
        print(f"  Error downloading {filename}: {err}")

