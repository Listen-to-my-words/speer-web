#!/bin/bash

# 해당 디렉토리에 있는 모든 png 파일을 가져옵니다.
find ./ -type f -name "*.png" -print0 | while IFS= read -r -d '' file; do
    # 파일 이름에서 숫자만 남기고 나머지를 제거합니다.
    new_name=$(echo "$file" | sed 's/[^0-9]//g')
    # 파일 이름을 변경합니다. 파일 이름에 공백이 있는 경우를 고려하여 따옴표를 사용합니다.
    mv "$file" "$(dirname "$file")/$new_name.png"
done
