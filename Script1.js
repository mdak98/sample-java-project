// JavaScript source code
pipeline {
	agent any
	stages {
		stage('checkout') {
			steps {
				echo 'do the checkout stage'
			}	
		}
		stage('build') {
			steps {
                 echo 'build the pipeline'
			}
		}
		stage('deploy') {
		    steps {
			    echo 'deploy the pipeline'
			}
		}
		stage {
			steps('testing') {
				echo 'test the pipeline'
			}
		}
	}
}