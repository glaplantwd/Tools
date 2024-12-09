# Define the target directory for converted files
target_dir="../webp"

# Ensure the target directory exists
mkdir -p "$target_dir"

# Loop through all PNG files and convert them to WebP format, saving them in the target directory
for file in *.jpg; do
  # Extract the base name without the extension
  base_name=$(basename "$file" .jpg)
  # Convert to WebP and save in the target directory with the base name only
  cwebp -q 70 "$file" -o "$target_dir/$base_name.webp"
done