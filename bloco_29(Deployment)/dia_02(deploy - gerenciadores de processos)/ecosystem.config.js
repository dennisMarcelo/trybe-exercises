module.exports = {
  apps: [
    {
      name: 'app',
      script: './index.js',
      exec_mode: 'cluster',
      instances: 2,
      max_memory_restart: '20M',
      restart_delay: 100,
      watch: './',
      exp_backoff_restart_delay: 100,
      env_production:{
        ENVIRONMENT: PRODUCTION
      }, 
      env_development: {
        ENVIRONMENT: HOMOLOG
      }
    },
    //...
  ]
};

// Apps recebe um arrya justamente para passar para 'n' aplicações sua configuração requerida.

// da para definir clusters.
// e variáveis de ambiente.
