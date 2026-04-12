.PHONY: dev build lint format check

dev:
	npm run dev

build:
	npm run build

lint:
	npm run lint

format:
	npm run prettier

check: lint
	npx tsc --noEmit
