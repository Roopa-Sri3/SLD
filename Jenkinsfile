@Library('my-library') _
pipeline{
    agent any
    stages{
        stage('Build-main'){
            when{
                branch "main"
            }
            steps {
                buildProject()
            }
        }
        stage('Deploy-main'){
            when{
                branch "main"
            }
            steps {
               deployProject('/var/www/')  
            }
        }
        stage('Build-dev'){
            when{
                branch "dev"
            }
            steps {
                buildProject()
            }
        }
        stage('Deploy-dev'){
            when{
                branch "dev"
            }
            steps {
                deployProject('/var/www/')
            }
        }
        
    }
}