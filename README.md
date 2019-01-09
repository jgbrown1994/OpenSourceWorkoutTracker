Workout Tracker App

Tracks any workout, but has workouts preloaded so that its easy to start something. Sends encouragements and reminders, congrats for milestones and more. 

Using this app as a way to learn basic project management, how to architect an application across services and a web application, and how to develop front end React Native applications.

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
