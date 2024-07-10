pipeline {
    agent any
    
    environment {
        NODEJS_HOME = tool name: 'nodejs'
        PATH = "${NODEJS_HOME}/bin:${env.PATH}"
    }
    
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Neethi712/jst-hire-project.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }
        stage('Lint') {
            steps {
                script {
                    sh 'npm run lint'
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    sh 'npm run build'
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    // Copy built files to httpd server
                    sh '''
                    sudo rm -rf /var/www/html/*
                    sudo cp -r dist/* /var/www/html/
                    '''
                }
            }
        }
    }
    

