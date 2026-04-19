pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
    }

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/JalalBe66/testDevOps.git'
            }
        }

        stage('Install Backend') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Install Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm run build'
                }
            }
        }

        stage('Test') {
            steps {
                dir('backend') {
                    sh 'npm test || true'
                }
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                # kill ancien process
                pm2 delete app || true
                
                # lancer backend
                cd backend
                pm2 start index.js --name app
                '''
            }
        }
    }
}
