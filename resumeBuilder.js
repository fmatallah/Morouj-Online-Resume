/*
This is empty on purpose! Your code to build the resume will go here.
 */

 //---------------------------------Objects---------------------------------------//
	var bio = {
		 name : "Morouj",
	     role : "Front-End Web Developer",
	     contacts : {
		     mobile: "+966546112166",
		     email: "morouj.atallah@gmail.com",
		     github: "@mfatallah",
		     location: "Jeddah"
		     },//end of contacts
		 welcomeMessage: "Welcome to  my online resume",
		 skills: [["Programming"], ["Project Management"], ["Analysis"]],
		 biopic: "https://livinlavidarick.files.wordpress.com/2013/05/"+
		 "lisa_study_1172665637_1191264133_4525552.jpg",
		 //below is a display function for bio div
	    display: function () {
	    	HTMLheaderName = HTMLheaderName.replace('%data%', this.name);
        	HTMLheaderRole = HTMLheaderRole.replace('%data%', this.role);
			
	        HTMLmobile = HTMLmobile.replace("%data%", this.contacts.mobile);
	        HTMLemail = HTMLemail.replace("%data%", this.contacts.email);
	        HTMLgithub = HTMLgithub.replace("%data%", this.contacts.github);	
	        
	        HTMLlocation = HTMLlocation.replace("%data%", this.contacts.location);
	        HTMLbioPic = HTMLbioPic.replace("%data%", this.biopic);
	        HTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);

	        $("#header").prepend(HTMLheaderName);
	        $("#header").append(HTMLheaderRole);
	      	      		
	        //below is a var that holds all my contact info
	        var myContact = [HTMLmobile, HTMLemail, HTMLgithub, HTMLlocation];
	        //this function that loops foreach info to display it for booth header & footer
        	myContact.forEach(function(info) {
           		 $('#topContacts, #footerContacts').append(info);
        });
        	$("#header").append(HTMLbioPic);
	      	$("#header").append(HTMLwelcomeMsg);
			$("#header").append(HTMLskillsStart);

	      	//below is a fuction to display the array of skills
	      	bio.skills.forEach(function(skill) {
	      		var mySkills = HTMLskills.replace("%data%", skill);
	      		$("#skills").append(mySkills);	      		
	      	});
	    }//end of bio display function
	};//end of bio obj

	var education = {
		schools: [{
			name: "Dar AlHekma University",
            location: "Jeddah, Saudi Arabia",
            degree: "BS",
            majors: ["Business Administration", "Management Information Systems"],
            dates: "2011 - 2015",
            url: "http://www.dah.edu.sa/"
		}],
        onlineCourses: [{
        	title: "Basics of Mobile Application Development",
            school: "Dar AlHekma University",
            dates: "June - 2013",
            url: "http://www.dah.edu.sa/"
        },
		{
			title: "Web Design",
            school: "Dar AlHekma University",
            dates: "May - 2014",
            url: "http://www.dah.edu.sa/"
		},
		{
			title: "Database Management",
            school: "Dar AlHekma University",
            dates: "February - 2015",
            url: "http://www.dah.edu.sa/"
		}],
		//the below is display function for education div
		display: function() { 
			$("#education").append(HTMLschoolStart);
			//below function to replace school info froeach index in the array & display it
			education.schools.forEach(function(school) {
				var schoolName = HTMLschoolName.replace("%data%", school.name);
				var schoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
				var schoolDates = HTMLschoolDates.replace("%data%", school.dates);
				var schoolLocation = HTMLschoolLocation.replace("%data%", school.location);
			$(".education-entry:last").append(schoolName);
            $(".education-entry:last").append(schoolDegree);
            $(".education-entry:last").append(schoolDates);
            $(".education-entry:last").append(schoolLocation);

			school.majors.forEach(function(major) {
				var schoolMajor = HTMLschoolMajor.replace("%data%", major);
				$(".education-entry:last").append(schoolMajor);				
			});

			});

 			$("#education").append(HTMLonlineClasses);
 			//below function to replace courses info froeach index in the array & display it
			education.onlineCourses.forEach(function(course) {
				var courseName = HTMLonlineTitle.replace("%data%", course.title);
	            var courseSchool = HTMLonlineSchool.replace("%data%", course.school);
	            var courseDates = HTMLonlineDates.replace("%data%", course.dates);
	            var courseURL = HTMLonlineURL.replace("%data%", course.url);
	         
           //$("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(courseName);
            $(".education-entry:last").append(courseSchool);
            $(".education-entry:last").append(courseDates);
            $(".education-entry:last").append(courseURL);
			});		
		}//end of edu display function
		};//end of edu obj
	var work = {
    jobs: [{
        employer: "Midwam Edutainment",
        title: "AR/VR Developer Trainee",
        location: "Jeddah, Saudi Arabia",
        dates: "Jan 2015 - 2016",
        description: "Developing AR/VR applications for multiple platforms"
    },
    {
        employer: "REZA Hygiene",
        title: "Export Supervisor",
        location: "Jeddah, Saudi Arabia",
        dates: "Jan 2016 - present",
        description: "Dealing with customers overseas to deliver orders"
    }],
    display: function() {
    	$("#workExperience").append(HTMLworkStart);
    	//below function to replace job's info froeach index in the array & display it
    	work.jobs.forEach(function(job) {
    		var workEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    		var workTitle = HTMLworkTitle.replace("%data%", job.title);
    		var workLocation = HTMLworkLocation.replace("%data%", job.location);
    		var workDates = HTMLworkDates.replace("%data%", job.dates);
    		var workDescription = HTMLworkDescription.replace("%data%", job.description);
 			
 			$(".work-entry").append(workEmployer);
 			$(".work-entry").append(workTitle);
 			$(".work-entry").append(workLocation);
 			$(".work-entry").append(workDates);
 			$(".work-entry").append(workDescription);

 			    	});
    }//end of work display function
    };//end of work obj
var projects = {
	projects: [{
		title: "Animal Trading Card Project",
   		dates: "Nov.10 - 17",
    	description: "Creating a simple card using HTML & CSS that has my spirit animal with a short description",
    	images: ["images/animalCard1.PNG"]
},
{
		title: "Portifolio Site Project",
		dates:"Dec.8 - 19",
		description: "Creating a web based portifolio featuring some of my work",
		images: ["images/portifolio1.PNG"]
}],
	display: function(){
		$("#projects").append(HTMLprojectStart);
		projects.projects.forEach(function(project) {
			var projectTitle = HTMLprojectTitle.replace("%data%", project.title );
			var projectDates = HTMLprojectDates.replace("%data%", project.dates );
			var projectDescription = HTMLprojectDescription.replace("%data%", project.description);
			$(".project-entry").append(projectTitle);
			$(".project-entry").append(projectDates);
			$(".project-entry").append(projectDescription);	
		project.images.forEach(function(img) {
			var projectImage = HTMLprojectImage.replace("%data%", project.images); 
			$(".project-entry").append(projectImage);
		});
		});		
	}//end of display projects function
};//end of projects obj

bio.display();
education.display();
work.display();
projects.display();
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
//-----------------------------------------END of objects------------------------------------------------------------//