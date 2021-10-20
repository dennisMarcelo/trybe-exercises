module.exports = {
  apps: [
    {
      name: 'dia_01',
      script: './index.js',
      exec_mode: 'cluster',
      instances: 2,
      max_memory_restart: '20M',
      restart_delay: 100,
      env_production: {
        TEST: 'Essa variável de ambiente esta funcionando',
        PM2_PUBLIC_KEY: '76zzqe73cevhdo1',
        PM2_SECRET_KEY:'zscbmpp117hxzv1',
        PM2_MACHINE_NAME: 'dia_01'
      },
      env_development: {
        TEST: 'estamos em ambitente de teste'
      }
    }
  ]
}