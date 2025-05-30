SERVICE=nextjs

# 起動
up:
	docker compose up -d

# 停止
down:
	docker compose down

# ビルド（初回や依存更新後）
build:
	docker compose build

# リビルド（キャッシュ無視）
rebuild:
	docker compose build --no-cache

# ログ
logs:
	docker compose logs -f

# コンテナ/ネットワーク/ボリューム全削除（完全初期化用）
clean:
	docker compose down --volumes --remove-orphans
	docker system prune -f

# コンテナに入る (開発用)
shell:
	docker compose exec $(SERVICE) sh

# npm install
install:
	docker compose run --rm $(SERVICE) npm install
