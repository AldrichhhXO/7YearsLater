module.exports = {
  apps : [{
    name: 'App',
    script: './Server/app.js',
    instances: 'max',
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
}]  
};
