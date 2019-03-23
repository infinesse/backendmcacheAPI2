// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

/*  This is a sample API route. */

router.get('/:resource', (req, res) => {
	res.json({
		confirmation: 'success',
		resource: req.params.resource,
		query: req.query // from the url query string
	});
});


//THIS IS WHERE THE SERVER REPLIES/LOGS BUT IT DOESN'T
router.post('/signup', (req, res) => {
	console.log(req.body);
	turbo
	.createUser(req.body)
	.then(data => {
		
		res.json({
			confrimation: 'success',
			data: data
		});
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		});
	});
	
});
 
router.get('/:resource/:id', (req, res) => {
	res.json({
		confirmation: 'success',
		resource: req.params.resource,
		id: req.params.id,
		query: req.query // from the url query string
	});
});



module.exports = router
