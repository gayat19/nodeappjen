node{
   def app
   stage('Rep pull'){
		checkout scm
	}
   stage('Build Image'){
		app = docker.build("gayathri1910/gnodeappjenpipe")
	}
   stage('Test'){
		echo "Test done!!"
	}
   stage('Push Image'){
		docker.withRegistry('https://index.docker.io/v1/','docker-hub'){
		 app.push("${env.BUILD_NUMBER}")
                 app.push("latest")
		}
	echo "Pushing the image to docker hub"
	}
}