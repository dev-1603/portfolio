# Work on main branch (source code)
git checkout main
git pull origin main
# Make changes...
git push origin main

# When you want to deploy new changes:
git checkout main
# Make your changes...
npm run build
git checkout deploy-pages
cp -r build/* .
git add .
git commit -m "Deploy: Update with latest changes"
git push github-pages deploy-pages:main