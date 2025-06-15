const User = require('../models/User');
const config = require('../config/config');

const seedAdmin = async () => {
  try {
    // Check if admin already exists
    const existingAdmin = await User.findOne({ 
      role: config.ROLES.ADMIN,
      mobile: config.DEFAULT_ADMIN.mobile 
    });

    if (existingAdmin) {
      console.log('✅ Default admin already exists');
      return;
    }

    // Create default admin
    const admin = await User.create({
      name: config.DEFAULT_ADMIN.name,
      mobile: config.DEFAULT_ADMIN.mobile,
      email: config.DEFAULT_ADMIN.email,
      password: config.DEFAULT_ADMIN.password,
      role: config.ROLES.ADMIN,
      isActive: true
    });

    console.log('✅ Default admin created successfully');
    console.log(`📱 Mobile: ${config.DEFAULT_ADMIN.mobile}`);
    console.log(`🔑 Password: ${config.DEFAULT_ADMIN.password}`);
    console.log('⚠️  Please change the default password after first login!');

  } catch (error) {
    console.error('❌ Error creating default admin:', error.message);
  }
};

module.exports = seedAdmin;