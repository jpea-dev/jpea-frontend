# 🚀 Complete Deployment Guide for JP Education Academy

This guide will help you deploy your full-stack application using the best free platforms.

## 📋 Prerequisites

Before starting, make sure you have:
- GitHub account
- MongoDB Atlas account (free tier)
- Vercel account (for frontend)
- Render account (for backend)

## 🗄️ Step 1: Setup MongoDB Atlas (Database)

### 1.1 Create MongoDB Atlas Account
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up for a free account
3. Create a new project called "JP Education Academy"

### 1.2 Create Database Cluster
1. Click "Build a Database"
2. Choose "M0 Sandbox" (Free tier)
3. Select your preferred cloud provider and region
4. Name your cluster (e.g., "jpea-cluster")
5. Click "Create Cluster"

### 1.3 Setup Database Access
1. Go to "Database Access" in the left sidebar
2. Click "Add New Database User"
3. Choose "Password" authentication
4. Create username and password (save these!)
5. Set privileges to "Read and write to any database"
6. Click "Add User"

### 1.4 Setup Network Access
1. Go to "Network Access" in the left sidebar
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (0.0.0.0/0)
4. Click "Confirm"

### 1.5 Get Connection String
1. Go to "Database" in the left sidebar
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. Copy the connection string
5. Replace `<password>` with your database user password

## 🔧 Step 2: Deploy Backend to Render

### 2.1 Prepare Backend for Deployment
1. Make sure your backend code is in a GitHub repository
2. Create a `render.yaml` file in your backend folder:

```yaml
services:
  - type: web
    name: jpea-backend
    env: node
    plan: free
    buildCommand: npm install
    startCommand: npm start
    envVars:
      - key: NODE_ENV
        value: production
      - key: PORT
        value: 10000
```

### 2.2 Deploy to Render
1. Go to [Render](https://render.com)
2. Sign up/login with GitHub
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Configure the service:
   - **Name**: jpea-backend
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free

### 2.3 Set Environment Variables
In Render dashboard, go to Environment and add:

```
NODE_ENV=production
PORT=10000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_super_secret_jwt_key_here_make_it_long_and_complex
FRONTEND_URL=https://your-frontend-domain.vercel.app
ADMIN_WHATSAPP=+919450378136
ADMIN_PHONE=9450378136
```

### 2.4 Deploy
1. Click "Create Web Service"
2. Wait for deployment to complete
3. Note your backend URL (e.g., `https://jpea-backend.onrender.com`)

## 🌐 Step 3: Deploy Frontend to Vercel

### 3.1 Prepare Frontend for Deployment
1. Create `.env.local` file in your frontend root:

```env
VITE_API_BASE_URL=https://your-backend-url.onrender.com
```

2. Update your `package.json` to include build script:

```json
{
  "scripts": {
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### 3.2 Deploy to Vercel
1. Go to [Vercel](https://vercel.com)
2. Sign up/login with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Configure project:
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (if frontend is in root)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

### 3.3 Set Environment Variables
In Vercel dashboard, go to Settings → Environment Variables:

```
VITE_API_BASE_URL=https://your-backend-url.onrender.com
```

### 3.4 Deploy
1. Click "Deploy"
2. Wait for deployment to complete
3. Note your frontend URL (e.g., `https://jpea.vercel.app`)

## 🔄 Step 4: Update CORS Settings

### 4.1 Update Backend CORS
In your backend `server.js`, update CORS configuration:

```javascript
app.use(cors({
  origin: [
    'https://your-frontend-domain.vercel.app',
    'http://localhost:3000',
    'http://localhost:5173'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
```

### 4.2 Update Frontend Environment
Update your frontend `.env.local`:

```env
VITE_API_BASE_URL=https://your-backend-url.onrender.com
```

## 🧪 Step 5: Test Your Application

### 5.1 Test Backend
1. Visit `https://your-backend-url.onrender.com/health`
2. Should return: `{"success": true, "message": "JP Education Academy API is running"}`

### 5.2 Test Frontend
1. Visit your Vercel URL
2. Navigate to login page
3. Try logging in with default admin credentials:
   - **Mobile**: 9450378136
   - **Password**: admin123

### 5.3 Test Full Integration
1. Login as admin
2. Check if dashboard loads
3. Try creating a test user
4. Test all major features

## 🔧 Step 6: Custom Domain (Optional)

### 6.1 Frontend Custom Domain
1. In Vercel dashboard, go to Settings → Domains
2. Add your custom domain (e.g., `jpeducationacademy.in`)
3. Follow DNS configuration instructions

### 6.2 Backend Custom Domain
1. In Render dashboard, go to Settings → Custom Domains
2. Add your backend subdomain (e.g., `api.jpeducationacademy.in`)
3. Update frontend environment variable

## 📊 Step 7: Monitoring and Maintenance

### 7.1 Monitor Application
- **Render**: Check logs and metrics in dashboard
- **Vercel**: Monitor deployments and analytics
- **MongoDB Atlas**: Monitor database performance

### 7.2 Regular Maintenance
- Keep dependencies updated
- Monitor error logs
- Backup database regularly
- Update security configurations

## 🚨 Troubleshooting

### Common Issues:

1. **CORS Errors**
   - Check CORS configuration in backend
   - Ensure frontend URL is whitelisted

2. **Database Connection Issues**
   - Verify MongoDB connection string
   - Check network access settings in Atlas

3. **Environment Variables**
   - Ensure all required env vars are set
   - Check for typos in variable names

4. **Build Failures**
   - Check build logs in deployment platform
   - Verify all dependencies are listed in package.json

## 📞 Support

If you encounter issues:
1. Check deployment logs
2. Verify environment variables
3. Test API endpoints individually
4. Contact platform support if needed

## 🎉 Congratulations!

Your JP Education Academy application is now live! 

- **Frontend**: `https://your-domain.vercel.app`
- **Backend**: `https://your-backend.onrender.com`
- **Database**: MongoDB Atlas

## 📈 Next Steps

1. Set up monitoring and alerts
2. Configure backup strategies
3. Implement CI/CD pipelines
4. Add SSL certificates
5. Optimize performance
6. Set up error tracking (Sentry)

---

**Note**: Free tier limitations:
- **Render**: Apps sleep after 15 minutes of inactivity
- **Vercel**: 100GB bandwidth per month
- **MongoDB Atlas**: 512MB storage

For production use, consider upgrading to paid plans for better performance and reliability.