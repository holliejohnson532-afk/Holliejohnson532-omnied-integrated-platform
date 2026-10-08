# Holliejohnson532-omnied-integrated-platform
OmniEd Integrated Platform 
# 1. Verify clean Git state and capture current commit
git status -s
git rev-parse HEAD

# 2. Run the Tenancy & Isolation Test Suite
npx vitest run tests/integration/tenant-isolation.test.ts

# 3. Generate Prisma Client & apply the migrations to PostgreSQL
npx prisma generate
npx prisma migrate status
npx prisma migrate deploy

# 4. Run local build to verify Next.js edge middleware & layouts
npm run build

# 5. Commit changes and push to your production branch
git add .
git commit -m "fix(security): resolve rls recursion, implement composite tenant keys and durable sis sync"
git push origin main

# 6. Trigger production deployment on Vercel
npx vercel --prod
