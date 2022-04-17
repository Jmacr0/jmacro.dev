
const bulletsHtml = (project) => {
	let html = '';
	project.bulletPoints.forEach(bullet => {
		html += `<li>${bullet}</li>`;
	});
	html += `</ul>
				<hr>
				<img src="${project.image.png}" alt="${project.alt}">
					<p class="font-weight-bold text-center">${project.technologies}</p>
					</div>
						<div class="modal-footer mx-auto">
							<button class="btn btn-danger"><a href="${project.github}"
									target="_blank" class="text-light">Github Repo</a></button>
							<button class="btn btn-primary"><a href="${project.deployed}"
									target="_blank" class="text-light">Live Version</a></button>
						</div>
					</div>
				</div>
			</div>
			</div>`;
	return html;
};

const html = (projects) => {
	let html = '';
	let createRow = 0;
	for (let [name, project] of Object.entries(projects)) {
		html += `<div class="col-sm-6">
			<h3 class="app-name pointer" data-aos="fade-left" data-aos-duration="1500" data-toggle="modal"
				data-target="#${project.name}-modal">${project.name}</h3>
			<div class="modal fade" id="${project.name}-modal" tabindex="-1" role="dialog"
				aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title">${project.name} ${ project.badge ? `&nbsp;<span class="badge badge-${project.badge.type}">${project.badge.description}</span>`: ``}</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
							<p>
								${project.description}
							</p>
							<ul>`
			+ bulletsHtml(project);
		if (createRow > 2) {
			const newRow = $('<div>', { class: 'row' }).html(html);
			$('#projectList').append(newRow);
			html = '';
			createRow++;
		} else {
			createRow++;
		}
	};
}

const projects = {
	eigo: {
		name: 'Eigo',
		badge: {
			type: 'success',
			description: 'LIVE',
		},
		description: 'Eigo is a Japanese Learning Tool App that encourages users to practice Japanese throughout pockets of time in their day.',
		bulletPoints: [
			'Flashcards allow users to practice memorizing characters and words in a pinch.',
			'The user can search for a verbs and adjectives in the library.',
			'Search function allows users to quickly find specific words.',
			'Implements CRUD functionality through RESTful API',
			'Database created with MySQL along with sequelize ORM library handling queries.',
			'Uses Passport.js for authentication, and runs node.js / express.',
		],
		image: {
			png: 'assets/images/eigo.PNG',
			alt: 'eigo-image',
		},
		technologies: 'React &nbsp MySQL &nbsp Passport &nbsp Node &nbsp Heroku',
		github: 'https://github.com/Jmacr0/eigo',
		deployed: 'http://eigo-japanese-app.herokuapp.com/',
	},
	readMe: {
		name: 'ReadMe',
		badge: {
			type: 'success',
			description: 'LIVE',
		},
		description: 'ReadMe is a book search application that takes in multiple user set criteria and filters book results accordingly.',
		bulletPoints: [
			'The random function allow users to search for random books.',
			'Allows users to save books into their favourites and displays them in the favourites page. Once done, they are	able to	remove them from favourites.',
			'Results are paginated using jQuery and Bootstrap',
		],
		image: {
			png: 'assets/images/read-me.png',
			alt: 'read-me-image',
		},
		technologies: 'AJAX &nbsp jQuery &nbsp Javascript &nbsp HTML &nbsp CSS',
		github: 'https://github.com/Jmacr0/project_one',
		deployed: 'https://jmacr0.github.io/project_one',
	},
	inTheGreen: {
		name: 'InTheGreen',
		badge: {
			type: 'success',
			description: 'LIVE',
		},
		description: 'In The Green is a front-end stock market search and calulate application.',
		bulletPoints: [
			'User can input stock purchase price, brokerage, and target sell price to quickly evaluate profit / loss margins.',
			'User can use top search bar to search stock prices (Australia) using Alpha Vantage API'
		],
		image: {
			png: 'assets/images/in-the-green.png',
			alt: 'in-the-green-image',
		},
		technologies: 'TypeScript &nbsp Webpack &nbsp aJax',
		github: 'https://github.com/Jmacr0/in-the-green',
		deployed: 'http://inthegreen.herokuapp.com/',
	},
	reviewMe: {
		name: 'ReviewMe',
		badge: {
			type: 'danger',
			description: 'DEPRECATED',
		},
		description: `<i>Deprecated: Heroku mongoDB plugin was discontinued.</i>
					  <hr/>
					  <p>ReviewMe allows users to create and search for reviews on different items.</p>`,
		bulletPoints: [
			'The user can search for a review by keyword, filter reviews by category, or show all reviews from newest to oldest.',
			'Implements CRUD functionality through RESTful API',
			'Database created with MongoDB along with mongoose ODM library handling queries.',
			'Alongside Passport.js for user authentication and route protection, the application is served on express.js / node.js and deployed to Heroku.',
		],
		image: {
			png: 'assets/images/review-me.PNG',
			alt: 'review-me-image',
		},
		technologies: 'React &nbsp MongoDB &nbsp Passport &nbsp Node &nbsp Heroku',
		github: 'https://github.com/Jmacr0/react-social',
		deployed: 'https://me-review.herokuapp.com/',
	},
	blogger: {
		name: 'Blogger',
		badge: {
			type: 'danger',
			description: 'DEPRECATED',
		},
		description: `<i>Deprecated: Heroku mongoDB plugin was discontinued.</i>
					  <hr/>
					  <p>Blogger is a full stack blog application where users can create posts and	comments.</p>`,
		bulletPoints: ['Incorporates CRUD functionality, with a database generated by mySQL and queries through sequelize ORM.',
			'User can view and edit their profile page'
		],
		image: {
			png: 'assets/images/blogger.PNG',
			alt: 'blogger-image',
		},
		technologies: 'Handlebars &nbsp mySQL &nbsp Sequelize &nbsp Passport &nbsp Node',
		github: 'https://github.com/Jmacr0/blogger',
		deployed: 'http://blogger-blogger.herokuapp.com/',
	},
};

html(projects);