pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests with Coverage') {
            steps {
                sh 'npm test -- --coverage --watchAll=false'
            }
        }

        stage('SonarQube Cloud Analysis') {
            environment {
                SONAR_TOKEN = credentials('SONAR_JENKINS_NEW_UCAAS')
            }
            steps {
                withSonarQubeEnv('SonarCloud') {
                    sh '''
                      sonar-scanner \
                        -Dsonar.projectKey=Harendra-12_codecov-php-test \
                        -Dsonar.organization=harendra-12 \
                        -Dsonar.sources=src \
                        -Dsonar.exclusions=**/node_modules/**,**/coverage/** \
                        -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info \
                        -Dsonar.host.url=https://sonarcloud.io \
                        -Dsonar.login=$SONAR_JENKINS_NEW_UCAAS
                    '''
                }
            }
        }
    }
}
