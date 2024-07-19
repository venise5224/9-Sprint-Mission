*리모트 브랜치를 원격과 트랙킹 시키는 방법
git branch -r | grep -v '\->' | while read remote; do git branch --track "${remote#origin/}" "$remote"; done
 리모트 브랜치 목록을 가져 온다 | 오리진 브랜치를 지운다 (중복되기 때문에) | 로컬과 리모트 브랜치를 트랙킹한다
