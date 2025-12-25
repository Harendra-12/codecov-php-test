pipeline {
    agent any
    
    stages {
        stage('Print Hello') {
            steps {
                echo 'Hello'
            }
        }
        
        stage('Your Build Stage') {
            steps {
                // Your actual build commands here
                echo 'Building application...'
                // Example: sh 'mvn clean install'
            }
        }
        
        stage('Your Test Stage') {
            steps {
                // Your test commands here
                echo 'Running tests...'
                // Example: sh 'mvn test'
            }
        }
    }
    
    post {
        success {
            script {
                echo 'Build succeeded! Sending success notification...'
                snsPublish(
                    topicArn: 'arn:aws:sns:us-east-1:940321698187:Auto-Scaling',
                    subject: "✅ Jenkins Build SUCCESS: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                    message: """
Build Status: SUCCESS ✅

Project: ${env.JOB_NAME}
Build Number: ${env.BUILD_NUMBER}
Build URL: ${env.BUILD_URL}
Duration: ${currentBuild.durationString}

Hello! Your build completed successfully.
                    """
                )
            }
        }
        
        failure {
            script {
                echo 'Build failed! Sending failure notification...'
                snsPublish(
                    topicArn: 'arn:aws:sns:us-east-1:940321698187:Auto-Scaling',
                    subject: "❌ Jenkins Build FAILED: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                    message: """
Build Status: FAILED ❌

Project: ${env.JOB_NAME}
Build Number: ${env.BUILD_NUMBER}
Build URL: ${env.BUILD_URL}
Duration: ${currentBuild.durationString}

Hello! Your build has failed. Please check the console output for details.

Console Output: ${env.BUILD_URL}console
                    """
                )
            }
        }
    }
}
