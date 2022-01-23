echo "Downloading $1..."
mkdir -p "$1"
cd "$1" || exit
curl -sm 5 --retry 999 \
  -O https://raw.githubusercontent.com/type-challenges/type-challenges/master/questions/"$1"/README.md
curl -sm 5 --retry 999 \
  -O https://raw.githubusercontent.com/type-challenges/type-challenges/master/questions/"$1"/template.ts
curl -sm 5 --retry 999 \
  -O https://raw.githubusercontent.com/type-challenges/type-challenges/master/questions/"$1"/test-cases.ts
echo "$1 downloaded successfully."
