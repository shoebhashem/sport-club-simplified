#!/usr/bin/env python3
import os

ROOT = os.path.dirname(os.path.abspath(__file__))

# File extensions to include (add more as needed)
INCLUDE_EXTS = {'.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.html', '.md', '.txt', '.yml', '.yaml'}

for dirpath, _, filenames in os.walk(ROOT):
    for filename in filenames:
        filepath = os.path.join(dirpath, filename)
        _, ext = os.path.splitext(filename)
        if ext.lower() not in INCLUDE_EXTS:
            continue
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
        except Exception:
            continue  # skip binary or unreadable files
        new_content = content.replace('Sponizr', 'Clubnizer').replace('sponizr', 'clubnizer')
        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated: {filepath}")
