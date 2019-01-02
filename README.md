Workout Tracker App

Tracks any workout, but has workouts preloaded so that its easy to start something. Sends encouragements and reminders, congrats for milestones and more. 

Gonna start with making it work for greyskull lp phraks variant because thats what im gonna do.

Architecture:

	Front end:
		- React Native UI with multiple pages
		- Pages: Todays Lifts, History, How to Lift (resources/routines), Progression, Profile
		- Nice to haves: Access to music control, Animations
	Back end (microservice based):
		- API to add and retrieve workouts
		- API to set goals and notify user when milestones have been reached
		- API to add/update/delete user profile
	Infrastructure:
		- PostgreSQL for profile, workouts and goals
		- MongoDB for progress pics and progression graphs
		- Host on AWS: API gateway, lambda, cloudwatch
		- Use github for version control, jenkins for CI pipelines