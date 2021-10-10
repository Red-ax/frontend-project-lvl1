install:
	npm ci

brain-games:
	node --experimental-vm-modules bin/brain-games.js


publish:
	npm publish --dry-run