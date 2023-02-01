/** @type {import('next').NextConfig} */

const {PHASE_DEVELOPMENT_SERVER}  = require('next/constants')

const nextConfig =  (phase) => {
  if(phase === PHASE_DEVELOPMENT_SERVER){
    return  {
      reactStrictMode: true,
      env: {
        mongodb_username: 'mikhailmaliar21',
        mongodb_password: 'ihMC21azx',
        mongodb_cluster_name: 'cluster0',
        mongodb_database_name: 'my-site-dev'
      }
    }
  }
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: 'mikhailmaliar21',
        mongodb_password: 'ihMC21azx',
        mongodb_cluster_name: 'cluster0'
      }
    }
}

module.exports = nextConfig
